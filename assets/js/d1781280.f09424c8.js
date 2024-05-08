"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[69250],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>l,MDXProvider:()=>c,mdx:()=>g,useMDXComponents:()=>p,withMDXComponents:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),d=function(e){return function(n){var t=p(n.components);return r.createElement(e,o({},n,{components:t}))}},p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),d=p(t),c=a,h=d["".concat(i,".").concat(c)]||d[c]||u[c]||o;return t?r.createElement(h,s(s({ref:n},l),{},{components:t})):r.createElement(h,s({ref:n},l))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=h;var s={};for(var m in n)hasOwnProperty.call(n,m)&&(s[m]=n[m]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},68629:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(39960),a=t(86341),o=t(67294);function i(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function s(e){var n=e.children;return o.createElement("div",{className:"docsRating",id:"docsRating"},o.createElement("hr",null),n)}var m=function(){var e=o.useState(!1),n=e[0],t=e[1],r=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?"Thank you for letting us know!":o.createElement(o.Fragment,null,"Is this page useful?",o.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(1)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),o.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(0)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},l=function(){return o.createElement("p",null,"Let us know how these docs can be improved by",o.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:i},"Filing a task"))},d=function(){return o.createElement("p",null,"Help us make the site even better by"," ",o.createElement(r.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},p=function(){return o.createElement(s,null,o.createElement(l,null),o.createElement(m,null),o.createElement(d,null))},c=function(){return o.createElement(s,null,o.createElement(m,null),o.createElement(d,null))};const u=function(){return(0,a.fbContent)({internal:o.createElement(p,null),external:o.createElement(c,null)})}},48988:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>m,metadata:()=>d,toc:()=>c});var r=t(83117),a=t(80102),o=(t(67294),t(3905)),i=t(68629),s=(t(86341),["components"]),m={id:"fragments",title:"Fragments",slug:"/guided-tour/rendering/fragments/",description:"Relay guide to rendering fragments",keywords:["useFragment","rendering","fragment"]},l=void 0,d={unversionedId:"guided-tour/rendering/fragments",id:"version-v14.0.0/guided-tour/rendering/fragments",title:"Fragments",description:"Relay guide to rendering fragments",source:"@site/versioned_docs/version-v14.0.0/guided-tour/rendering/fragments.md",sourceDirName:"guided-tour/rendering",slug:"/guided-tour/rendering/fragments/",permalink:"/docs/v14.0.0/guided-tour/rendering/fragments/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v14.0.0/guided-tour/rendering/fragments.md",tags:[],version:"v14.0.0",lastUpdatedBy:"Tianyu Yao",lastUpdatedAt:1715199802,formattedLastUpdatedAt:"May 8, 2024",frontMatter:{id:"fragments",title:"Fragments",slug:"/guided-tour/rendering/fragments/",description:"Relay guide to rendering fragments",keywords:["useFragment","rendering","fragment"]}},p={},c=[{value:"Rendering Fragments",id:"rendering-fragments",level:2},{value:"Composing Fragments",id:"composing-fragments",level:2},{value:"Composing Fragments into Queries",id:"composing-fragments-into-queries",level:2}],u={toc:c};function h(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.mdx)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"The main building block for declaring data dependencies for React Components in Relay are ",(0,o.mdx)("a",{parentName:"p",href:"https://graphql.org/learn/queries/#fragments"},"GraphQL Fragments"),". Fragments are reusable units in GraphQL that represent a set of data to query from a GraphQL type exposed in the ",(0,o.mdx)("a",{parentName:"p",href:"https://graphql.org/learn/schema/"},"schema"),"."),(0,o.mdx)("p",null,"In practice, they are a selection of fields on a GraphQL Type:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},"fragment UserFragment on User {\n  name\n  age\n  profile_picture(scale: 2) {\n    uri\n  }\n}\n")),(0,o.mdx)("p",null,"In order to declare a fragment inside your JavaScript code, you must use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"graphql")," tag:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"const {graphql} = require('react-relay');\n\nconst userFragment = graphql`\n  fragment UserFragment_user on User {\n    name\n    age\n    profile_picture(scale: 2) {\n      uri\n    }\n  }\n`;\n")),(0,o.mdx)("h2",{id:"rendering-fragments"},"Rendering Fragments"),(0,o.mdx)("p",null,"In order to ",(0,o.mdx)("em",{parentName:"p"},"render")," the data for a fragment, you can use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"useFragment")," Hook:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"import type {UserComponent_user$key} from 'UserComponent_user.graphql';\n\nconst React = require('React');\n\nconst {graphql, useFragment} = require('react-relay');\n\ntype Props = {\n  user: UserComponent_user$key,\n};\n\nfunction UserComponent(props: Props) {\n  const data = useFragment(\n    graphql`\n      fragment UserComponent_user on User {\n        name\n        profile_picture(scale: 2) {\n          uri\n        }\n      }\n    `,\n    props.user,\n  );\n\n  return (\n    <>\n      <h1>{data.name}</h1>\n      <div>\n        <img src={data.profile_picture?.uri} />\n      </div>\n    </>\n  );\n}\n\nmodule.exports = UserComponent;\n")),(0,o.mdx)("p",null,"Let's distill what's going on here:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"useFragment")," takes a fragment definition and a ",(0,o.mdx)("em",{parentName:"li"},"fragment reference"),", and returns the corresponding ",(0,o.mdx)("inlineCode",{parentName:"li"},"data")," for that fragment and reference.",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"This is similar to ",(0,o.mdx)("inlineCode",{parentName:"li"},"usePreloadedQuery"),", which takes a query definition and a query reference."))),(0,o.mdx)("li",{parentName:"ul"},"A ",(0,o.mdx)("em",{parentName:"li"},"fragment reference")," is an object that Relay uses to ",(0,o.mdx)("em",{parentName:"li"},"read")," the data declared in the fragment definition; as you can see, the ",(0,o.mdx)("inlineCode",{parentName:"li"},"UserComponent_user")," fragment itself just declares fields on the ",(0,o.mdx)("inlineCode",{parentName:"li"},"User")," type, but we need to know ",(0,o.mdx)("em",{parentName:"li"},"which")," specific user to read those fields from; this is what the fragment reference corresponds to. In other words, a fragment reference is like ",(0,o.mdx)("em",{parentName:"li"},"a pointer to a specific instance of a type")," that we want to read data from."),(0,o.mdx)("li",{parentName:"ul"},"Note that ",(0,o.mdx)("em",{parentName:"li"},"the component is automatically subscribed to updates to the fragment data"),": if the data for this particular ",(0,o.mdx)("inlineCode",{parentName:"li"},"User")," is updated anywhere in the app (e.g. via fetching new data, or mutating existing data), the component will automatically re-render with the latest updated data."),(0,o.mdx)("li",{parentName:"ul"},"Relay will automatically generate Flow types for any declared fragments when the compiler is run, so you can use these types to declare the type for your Component's ",(0,o.mdx)("inlineCode",{parentName:"li"},"props"),".",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},"The generated Flow types include a type for the fragment reference, which is the type with the ",(0,o.mdx)("inlineCode",{parentName:"li"},"$key")," suffix: ",(0,o.mdx)("inlineCode",{parentName:"li"},"<fragment_name>$key"),", and a type for the shape of the data, which is the type with the ",(0,o.mdx)("inlineCode",{parentName:"li"},"$data")," suffix:  ",(0,o.mdx)("inlineCode",{parentName:"li"},"<fragment_name>$data"),"; these types are available to import from files that are generated with the following name: ",(0,o.mdx)("inlineCode",{parentName:"li"},"<fragment_name>.graphql.js"),"."),(0,o.mdx)("li",{parentName:"ul"},"We use our ",(0,o.mdx)("a",{parentName:"li",href:"https://github.com/relayjs/eslint-plugin-relay"},"lint rule")," to enforce that the type of the fragment reference prop is correctly declared when using ",(0,o.mdx)("inlineCode",{parentName:"li"},"useFragment"),". By using a properly typed fragment reference as input, the type of the returned ",(0,o.mdx)("inlineCode",{parentName:"li"},"data")," will automatically be Flow-typed without requiring an explicit annotation."),(0,o.mdx)("li",{parentName:"ul"},"In our example, we're typing the ",(0,o.mdx)("inlineCode",{parentName:"li"},"user")," prop as the fragment reference we need for ",(0,o.mdx)("inlineCode",{parentName:"li"},"useFragment"),", which corresponds to the ",(0,o.mdx)("inlineCode",{parentName:"li"},"UserComponent_user$key")," imported from  ",(0,o.mdx)("inlineCode",{parentName:"li"},"UserComponent_user.graphql"),", which means that the type of ",(0,o.mdx)("inlineCode",{parentName:"li"},"data")," above would be: ",(0,o.mdx)("inlineCode",{parentName:"li"},"{ name: ?string, profile_picture: ?{ uri: ?string } }"),"."))),(0,o.mdx)("li",{parentName:"ul"},"Fragment names need to be globally unique. In order to easily achieve this, we name fragments using the following convention based on the module name followed by an identifier: ",(0,o.mdx)("inlineCode",{parentName:"li"},"<module_name>_<property_name>"),". This makes it easy to identify which fragments are defined in which modules and avoids name collisions when multiple fragments are defined in the same module.")),(0,o.mdx)("p",null,"If you need to render data from multiple fragments inside the same component, you can use  ",(0,o.mdx)("inlineCode",{parentName:"p"},"useFragment")," multiple times:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"import type {UserComponent_user$key} from 'UserComponent_user.graphql';\nimport type {UserComponent_viewer$key} from 'UserComponent_viewer.graphql';\n\nconst React = require('React');\nconst {graphql, useFragment} = require('react-relay');\n\ntype Props = {\n  user: UserComponent_user$key,\n  viewer: UserComponent_viewer$key,\n};\n\nfunction UserComponent(props: Props) {\n  const userData = useFragment(\n    graphql`\n      fragment UserComponent_user on User {\n        name\n        profile_picture(scale: 2) {\n          uri\n        }\n      }\n    `,\n    props.user,\n  );\n\n  const viewerData = useFragment(\n    graphql`\n      fragment UserComponent_viewer on Viewer {\n        actor {\n          name\n        }\n      }\n    `,\n    props.viewer,\n  );\n\n  return (\n    <>\n      <h1>{userData.name}</h1>\n      <div>\n        <img src={userData.profile_picture?.uri} />\n        Acting as: {viewerData.actor?.name ?? 'Unknown'}\n      </div>\n    </>\n  );\n}\n\nmodule.exports = UserComponent;\n")),(0,o.mdx)("h2",{id:"composing-fragments"},"Composing Fragments"),(0,o.mdx)("p",null,"In GraphQL, fragments are reusable units, which means they can include ",(0,o.mdx)("em",{parentName:"p"},"other")," fragments, and consequently a fragment can be included within other fragments or ",(0,o.mdx)("a",{parentName:"p",href:"../queries/"},"queries"),":"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},"fragment UserFragment on User {\n  name\n  age\n  profile_picture(scale: 2) {\n    uri\n  }\n  ...AnotherUserFragment\n}\n\nfragment AnotherUserFragment on User {\n  username\n  ...FooUserFragment\n}\n")),(0,o.mdx)("p",null,"With Relay, you can compose fragment components in a similar way, using both component composition and fragment composition. Each React component is responsible for fetching the data dependencies of its direct children - just as it has to know about its children's props in order to render them correctly. This pattern means that developers are able to reason locally about components - what data they need, what components they render - but Relay is able to derive a global view of the data dependencies of an entire UI tree."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"/**\n * UsernameSection.react.js\n *\n * Child Fragment Component\n */\n\nimport type {UsernameSection_user$key} from 'UsernameSection_user.graphql';\n\nconst React = require('React');\nconst {graphql, useFragment} = require('react-relay');\n\ntype Props = {\n  user: UsernameSection_user$key,\n};\n\nfunction UsernameSection(props: Props) {\n  const data = useFragment(\n    graphql`\n      fragment UsernameSection_user on User {\n        username\n      }\n    `,\n    props.user,\n  );\n\n  return <div>{data.username ?? 'Unknown'}</div>;\n}\n\nmodule.exports = UsernameSection;\n")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"/**\n * UserComponent.react.js\n *\n * Parent Fragment Component\n */\n\nimport type {UserComponent_user$key} from 'UserComponent_user.graphql';\n\nconst React = require('React');\nconst {graphql, useFragment} = require('react-relay');\n\nconst UsernameSection = require('./UsernameSection.react');\n\ntype Props = {\n  user: UserComponent_user$key,\n};\n\nfunction UserComponent(props: Props) {\n  const user = useFragment(\n    graphql`\n      fragment UserComponent_user on User {\n        name\n        age\n        profile_picture(scale: 2) {\n          uri\n        }\n\n        # Include child fragment:\n        ...UsernameSection_user\n      }\n    `,\n    props.user,\n  );\n\n  return (\n    <>\n      <h1>{user.name}</h1>\n      <div>\n        <img src={user.profile_picture?.uri} />\n        {user.age}\n\n        {/* Render child component, passing the _fragment reference_: */}\n        <UsernameSection user={user} />\n      </div>\n    </>\n  );\n}\n\nmodule.exports = UserComponent;\n")),(0,o.mdx)("p",null,"There are a few things to note here:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"UserComponent")," both renders ",(0,o.mdx)("inlineCode",{parentName:"li"},"UsernameSection"),", ",(0,o.mdx)("em",{parentName:"li"},"and")," includes the fragment declared by ",(0,o.mdx)("inlineCode",{parentName:"li"},"UsernameSection")," inside its own ",(0,o.mdx)("inlineCode",{parentName:"li"},"graphql")," fragment declaration."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"UsernameSection")," expects a ",(0,o.mdx)("em",{parentName:"li"},"fragment reference")," as the ",(0,o.mdx)("inlineCode",{parentName:"li"},"user")," prop. As we've mentioned before, a fragment reference is an object that Relay uses to ",(0,o.mdx)("em",{parentName:"li"},"read")," the data declared in the fragment definition; as you can see, the child ",(0,o.mdx)("inlineCode",{parentName:"li"},"UsernameSection_user")," fragment itself just declares fields on the ",(0,o.mdx)("inlineCode",{parentName:"li"},"User")," type, but we need to know ",(0,o.mdx)("em",{parentName:"li"},"which")," specific user to read those fields from; this is what the fragment reference corresponds to. In other words, a fragment reference is like ",(0,o.mdx)("em",{parentName:"li"},"a pointer to a specific instance of a type")," that we want to read data from."),(0,o.mdx)("li",{parentName:"ul"},"Note that in this case the ",(0,o.mdx)("inlineCode",{parentName:"li"},"user")," passed to ",(0,o.mdx)("inlineCode",{parentName:"li"},"UsernameSection"),", i.e. the fragment reference, ",(0,o.mdx)("em",{parentName:"li"},"doesn't actually contain any of the data declared by the child ",(0,o.mdx)("inlineCode",{parentName:"em"},"UsernameSection")," component"),"; instead, ",(0,o.mdx)("inlineCode",{parentName:"li"},"UsernameSection")," will use the fragment reference to read the data ",(0,o.mdx)("em",{parentName:"li"},"it")," declared internally, using ",(0,o.mdx)("inlineCode",{parentName:"li"},"useFragment"),"."),(0,o.mdx)("li",{parentName:"ul"},"This means that the parent component will not receive the data selected by a child component (unless that parent explicitly selected the same fields). Likewise, child components will not receive the data selected by their parents (again, unless the child selected those same fields)."),(0,o.mdx)("li",{parentName:"ul"},"This prevents separate components from ",(0,o.mdx)("em",{parentName:"li"},"even accidentally")," having implicit dependencies on each other. If this wasn't the case, modifying a component could break other components!"),(0,o.mdx)("li",{parentName:"ul"},"This allows us to reason locally about our components and modify them without worrying about affecting other components."),(0,o.mdx)("li",{parentName:"ul"},"This is known as ",(0,o.mdx)("a",{parentName:"li",href:"../../../principles-and-architecture/thinking-in-relay/"},(0,o.mdx)("em",{parentName:"a"},"data masking")),"."),(0,o.mdx)("li",{parentName:"ul"},"The ",(0,o.mdx)("em",{parentName:"li"},"fragment reference")," that the child (i.e.  ",(0,o.mdx)("inlineCode",{parentName:"li"},"UsernameSection"),") expects is the result of reading a parent fragment that ",(0,o.mdx)("em",{parentName:"li"},"includes")," the child fragment. In our particular example, that means the result of reading a fragment that includes ",(0,o.mdx)("inlineCode",{parentName:"li"},"...UsernameSection_user")," will be the fragment reference that ",(0,o.mdx)("inlineCode",{parentName:"li"},"UsernameSection")," expects. In other words, the data obtained as a result of reading a fragment via ",(0,o.mdx)("inlineCode",{parentName:"li"},"useFragment")," also serves as the fragment reference for any child fragments included in that fragment.")),(0,o.mdx)("h2",{id:"composing-fragments-into-queries"},"Composing Fragments into Queries"),(0,o.mdx)("p",null,"Fragments in Relay allow declaring data dependencies for a component, but they ",(0,o.mdx)("strong",{parentName:"p"},(0,o.mdx)("em",{parentName:"strong"},"can't be fetched by themselves")),". Instead, they need to be included in a query, either directly or transitively. This means that ",(0,o.mdx)("em",{parentName:"p"},"all fragments must belong to a query when they are rendered"),', or in other words, they must be "rooted" under some query. Note that a single fragment can still be included by multiple queries, but when rendering a specific ',(0,o.mdx)("em",{parentName:"p"},"instance")," of a fragment component, it must have been included as part of a specific query request."),(0,o.mdx)("p",null,"To fetch and render a query that includes a fragment, you can compose them in the same way fragments are composed, as shown in the ",(0,o.mdx)("a",{parentName:"p",href:"#composing-fragments"},"Composing Fragments")," section:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"/**\n * UserComponent.react.js\n *\n * Fragment Component\n */\n\nimport type {UserComponent_user$key} from 'UserComponent_user.graphql';\n\nconst React = require('React');\nconst {graphql, useFragment} = require('react-relay');\n\ntype Props = {\n  user: UserComponent_user$key,\n};\n\nfunction UserComponent(props: Props) {\n  const data = useFragment(\n    graphql`...`,\n    props.user,\n  );\n\n  return (...);\n}\n\nmodule.exports = UserComponent;\n")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"/**\n * App.react.js\n *\n * Query Component\n */\n\nimport type {AppQuery} from 'AppQuery.graphql';\nimport type {PreloadedQuery} from 'react-relay';\n\nconst React = require('React');\nconst {graphql, usePreloadedQuery} = require('react-relay');\n\nconst UserComponent = require('./UserComponent.react');\n\ntype Props = {\n  appQueryRef: PreloadedQuery<AppQuery>,\n}\n\nfunction App({appQueryRef}) {\n  const data = usePreloadedQuery<AppQuery>(\n    graphql`\n      query AppQuery($id: ID!) {\n        user(id: $id) {\n          name\n\n          # Include child fragment:\n          ...UserComponent_user\n        }\n      }\n    `,\n    appQueryRef,\n  );\n\n  return (\n    <>\n      <h1>{data.user?.name}</h1>\n      {/* Render child component, passing the fragment reference: */}\n      <UserComponent user={data.user} />\n    </>\n  );\n}\n")),(0,o.mdx)("p",null,"Note that:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"The ",(0,o.mdx)("em",{parentName:"li"},"fragment reference")," that  ",(0,o.mdx)("inlineCode",{parentName:"li"},"UserComponent")," expects is the result of reading a parent query that includes its fragment, which in our case means a query that includes ",(0,o.mdx)("inlineCode",{parentName:"li"},"...UsernameSection_user"),". In other words, the ",(0,o.mdx)("inlineCode",{parentName:"li"},"data")," obtained as a result of ",(0,o.mdx)("inlineCode",{parentName:"li"},"usePreloadedQuery")," also serves as the fragment reference for any child fragments included in that query."),(0,o.mdx)("li",{parentName:"ul"},"As mentioned previously, ",(0,o.mdx)("em",{parentName:"li"},"all fragments must belong to a query when they are rendered,")," which means that all fragment components ",(0,o.mdx)("em",{parentName:"li"},"must")," be descendants of a query. This guarantees that you will always be able to provide a fragment reference for ",(0,o.mdx)("inlineCode",{parentName:"li"},"useFragment"),", by starting from the result of reading a root query with ",(0,o.mdx)("inlineCode",{parentName:"li"},"usePreloadedQuery"),".")),(0,o.mdx)(i.Z,{mdxType:"DocsRating"}))}h.isMDXComponent=!0}}]);