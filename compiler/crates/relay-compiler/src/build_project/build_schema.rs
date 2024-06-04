/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

use std::sync::Arc;

use common::Diagnostic;
use common::DiagnosticsResult;
use common::Location;
use common::PerfLogEvent;
use fnv::FnvHashMap;
use relay_config::ProjectName;
use relay_docblock::validate_resolver_schema;
use schema::SDLSchema;
use schema_validate_lib::validate;
use schema_validate_lib::SchemaValidationOptions;

use super::build_resolvers_schema::extend_schema_with_resolvers;
use crate::compiler_state::CompilerState;
use crate::config::Config;
use crate::config::ProjectConfig;
use crate::GraphQLAsts;

pub fn build_schema(
    compiler_state: &CompilerState,
    config: &Config,
    project_config: &ProjectConfig,
    graphql_asts_map: &FnvHashMap<ProjectName, GraphQLAsts>,
    log_event: &impl PerfLogEvent,
) -> DiagnosticsResult<Arc<SDLSchema>> {
    if let Some(schema) = compiler_state.schema_cache.get(&project_config.name) {
        if !compiler_state.project_has_pending_schema_changes(project_config.name) {
            return Ok(schema.clone());
        }
    }
    build_schema_impl(
        compiler_state,
        project_config,
        log_event,
        config,
        graphql_asts_map,
    )
}

fn build_schema_impl(
    compiler_state: &CompilerState,
    project_config: &ProjectConfig,
    log_event: &impl PerfLogEvent,
    config: &Config,
    graphql_asts_map: &FnvHashMap<ProjectName, GraphQLAsts>,
) -> Result<Arc<SDLSchema>, Vec<Diagnostic>> {
    let schema_sources = get_schema_sources(compiler_state, project_config);
    let extensions = get_extension_sources(compiler_state, project_config);

    let mut schema = log_event.time("build_schema_with_extension_time", || {
        relay_schema::build_schema_with_extensions(&schema_sources, &extensions)
    })?;

    if project_config.feature_flags.enable_relay_resolver_transform {
        log_event.time("extend_schema_with_resolvers_time", || {
            extend_schema_with_resolvers(
                &mut schema,
                config,
                compiler_state,
                project_config,
                graphql_asts_map,
            )
        })?;
    }

    // Now that the schema has been fully extended to include all Resolver types
    // and fields we can apply resolver-specific validations.
    log_event.time("validate_resolver_schema_time", || {
        validate_resolver_schema(&schema, &project_config.feature_flags)
    })?;

    log_event.time("validate_composite_schema_time", || {
        maybe_validate_schema(project_config, &schema)
    })?;

    Ok(Arc::new(schema))
}

fn get_schema_sources<'a>(
    compiler_state: &'a CompilerState,
    project_config: &'a ProjectConfig,
) -> Vec<(&'a str, common::SourceLocationKey)> {
    compiler_state.schemas[&project_config.name]
        .get_sources_with_location()
        .into_iter()
        .map(|(schema, location_key)| (schema.as_str(), location_key))
        .collect()
}

fn get_extension_sources<'a>(
    compiler_state: &'a CompilerState,
    project_config: &'a ProjectConfig,
) -> Vec<(&'a String, common::SourceLocationKey)> {
    let mut extensions = vec![];
    if let Some(project_extensions) = compiler_state.extensions.get(&project_config.name) {
        extensions.extend(project_extensions.get_sources_with_location());
    }
    if let Some(base_project_name) = project_config.base {
        if let Some(base_project_extensions) = compiler_state.extensions.get(&base_project_name) {
            extensions.extend(base_project_extensions.get_sources_with_location());
        }
    }
    extensions
}

fn maybe_validate_schema(
    project_config: &ProjectConfig,
    schema: &SDLSchema,
) -> DiagnosticsResult<()> {
    if !project_config
        .feature_flags
        .enable_experimental_schema_validation
    {
        return Ok(());
    }
    let validation_context = validate(
        schema,
        SchemaValidationOptions {
            allow_introspection_names: true,
        },
    );
    if !validation_context.errors.is_empty() {
        // TODO: Before removing this feature flag, we should update schema validation
        // to be able to return a list of Diagnostics with locations.
        Err(vec![Diagnostic::error(
            validation_context.print_errors(),
            Location::generated(),
        )])
    } else {
        Ok(())
    }
}
