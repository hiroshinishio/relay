"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[77181],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>s,MDXProvider:()=>p,mdx:()=>f,useMDXComponents:()=>d,withMDXComponents:()=>u});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){return function(t){var r=d(t.components);return n.createElement(e,o({},t,{components:r}))}},d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(r),p=i,h=u["".concat(a,".").concat(p)]||u[p]||m[p]||o;return r?n.createElement(h,c(c({ref:t},s),{},{components:r})):n.createElement(h,c({ref:t},s))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},36916:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var n=r(83117),i=r(80102),o=(r(67294),r(3905)),a=["components"],c={id:"architecture-overview",title:"Architecture Overview",original_id:"architecture-overview"},l=void 0,s={unversionedId:"architecture-overview",id:"version-v8.0.0/architecture-overview",title:"Architecture Overview",description:'This document, together with Runtime Architecture and Compiler Architecture, describes the high-level architecture of Relay "Modern". The intended audience includes developers interested in contributing to Relay, developers hoping to utilize the building blocks of Relay to create higher-level APIs, and anyone interested in understanding more about Relay internals. For developers wanting to learn more about using Relay to build products, the other sections might be more helpful.',source:"@site/versioned_docs/version-v8.0.0/PrinciplesAndArchitecture-Overview.md",sourceDirName:".",slug:"/architecture-overview",permalink:"/docs/v8.0.0/architecture-overview",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v8.0.0/PrinciplesAndArchitecture-Overview.md",tags:[],version:"v8.0.0",lastUpdatedBy:"Stiopa Koltsov",lastUpdatedAt:1704869352,formattedLastUpdatedAt:"Jan 10, 2024",frontMatter:{id:"architecture-overview",title:"Architecture Overview",original_id:"architecture-overview"},sidebar:"version-v8.0.0/docs",previous:{title:"Thinking In Relay",permalink:"/docs/v8.0.0/thinking-in-relay"},next:{title:"Compiler Architecture",permalink:"/docs/v8.0.0/compiler-architecture"}},u={},d=[{value:"Core Modules",id:"core-modules",level:2}],p={toc:d};function m(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.mdx)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"This document, together with ",(0,o.mdx)("a",{parentName:"p",href:"/docs/v8.0.0/runtime-architecture"},"Runtime Architecture")," and ",(0,o.mdx)("a",{parentName:"p",href:"/docs/v8.0.0/compiler-architecture"},"Compiler Architecture"),', describes the high-level architecture of Relay "Modern". The intended audience includes developers interested in contributing to Relay, developers hoping to utilize the building blocks of Relay to create higher-level APIs, and anyone interested in understanding more about Relay internals. For developers wanting to learn more about ',(0,o.mdx)("em",{parentName:"p"},"using")," Relay to build products, the other sections might be more helpful."),(0,o.mdx)("h2",{id:"core-modules"},"Core Modules"),(0,o.mdx)("p",null,"Relay Modern is composed of three core modules:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"Relay Compiler:")," A GraphQL to GraphQL optimizing ",(0,o.mdx)("em",{parentName:"li"},"compiler"),", providing general utilities for transforming and optimizing queries as well as generating build artifacts. A novel feature of the compiler is that it facilitates experimentation with new GraphQL features - in the form of custom directives - by making it easy to translate code using these directives into standard, spec-compliant GraphQL."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"Relay Runtime:")," A full-featured, high-performance GraphQL ",(0,o.mdx)("em",{parentName:"li"},"runtime"),' that can be used to build higher-level client APIs. The runtime features a normalized object cache, optimized "write" and "read" operations, a generic abstraction for incrementally fetching field data (such as for pagination), garbage collection for removing unreferenced cache entries, optimistic mutations with arbitrary logic,  support for building subscriptions and live queries, and more.'),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"React/Relay:")," A high-level ",(0,o.mdx)("em",{parentName:"li"},"product API")," that integrates the Relay Runtime with React. This is the primary public interface to Relay for most product developers, featuring APIs to fetch the data for a query or define data dependencies for reusable components (aka containers).")),(0,o.mdx)("p",null,"Note that these modules are ",(0,o.mdx)("em",{parentName:"p"},"loosely coupled"),'. For example, the compiler emits representations of queries in a well-defined format that the runtime consumes (the "Concrete" node interfaces in ',(0,o.mdx)("inlineCode",{parentName:"p"},"RelayConcreteNode"),"), such that the compiler implementation can be swapped out if desired. React/Relay relies only on the well-documented public interface of the runtime, such that the actual implementation can be swapped out (in fact, we've upgraded the classic Relay core to also implement this same API). We hope that this loose coupling will allow the community to explore new use-cases such as the development of specialized product APIs using the Relay runtime or integrations of the runtime with view libraries other than React."))}m.isMDXComponent=!0}}]);