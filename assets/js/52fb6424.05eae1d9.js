(self.webpackChunk=self.webpackChunk||[]).push([[60322],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),g=o,f=u["".concat(l,".").concat(g)]||u[g]||d[g]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},21004:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>p,toc:()=>c,default:()=>u});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i=["components"],s={id:"relay-debugging",title:"Debugging",original_id:"relay-debugging"},l=void 0,p={unversionedId:"relay-debugging",id:"version-v1.4.1/relay-debugging",isDocsHomePage:!1,title:"Debugging",description:"When problems arise developers would need an insight into Relay's store. Relay provides a couple of tools to inspect the store and its records.",source:"@site/versioned_docs/version-v1.4.1/Modern-Debugging.md",sourceDirName:".",slug:"/relay-debugging",permalink:"/docs/v1.4.1/relay-debugging",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v1.4.1/Modern-Debugging.md",version:"v1.4.1",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1638979590,formattedLastUpdatedAt:"12/8/2021",frontMatter:{id:"relay-debugging",title:"Debugging",original_id:"relay-debugging"},sidebar:"version-v1.4.1/docs",previous:{title:"Routing",permalink:"/docs/v1.4.1/routing"},next:{title:"GraphQL Server Specification",permalink:"/docs/v1.4.1/graphql-server-specification"}},c=[],d={toc:c};function u(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When problems arise developers would need an insight into Relay's store. Relay provides a couple of tools to inspect the store and its records."),(0,a.kt)("p",null,"Relay DevTools is tool designed to help developers inspect their Relay state and understand how store changes overtime. Relay DevTools ships in two ways:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/relay-devtools/oppikflppfjfdpjimpdadhelffjpciba"},"Chrome Extension")," creates a Relay tab in the developer tools interface for debugging apps in Chrome"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/relay-devtools"},"Electron App")," that connects to React Native apps running Relay")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Store Explorer",src:r(41508).Z}),"\n",(0,a.kt)("img",{alt:"Mutations View",src:r(31728).Z})))}u.isMDXComponent=!0},31728:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=r.p+"assets/images/mutations-view-c5ab060209093a52fd4b2a236e09a08f.png"},41508:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=r.p+"assets/images/store-explorer-0a5595b3de2f554959305069dcf6082e.png"}}]);