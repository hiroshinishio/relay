"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[7026],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>c,MDXProvider:()=>p,mdx:()=>f,useMDXComponents:()=>d,withMDXComponents:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),u=function(e){return function(t){var n=d(t.components);return a.createElement(e,r({},t,{components:n}))}},d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),p=i,h=u["".concat(o,".").concat(p)]||u[p]||m[p]||r;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},68629:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(39960),i=n(86341),r=n(67294);function o(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function s(e){var t=e.children;return r.createElement("div",{className:"docsRating",id:"docsRating"},r.createElement("hr",null),t)}var l=function(){var e=r.useState(!1),t=e[0],n=e[1],a=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":r.createElement(r.Fragment,null,"Is this page useful?",r.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(1)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),r.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(0)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},c=function(){return r.createElement("p",null,"Let us know how these docs can be improved by",r.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:o},"Filing a task"))},u=function(){return r.createElement("p",null,"Help us make the site even better by"," ",r.createElement(a.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},d=function(){return r.createElement(s,null,r.createElement(c,null),r.createElement(l,null),r.createElement(u,null))},p=function(){return r.createElement(s,null,r.createElement(l,null),r.createElement(u,null))};const m=function(){return(0,i.fbContent)({internal:r.createElement(d,null),external:r.createElement(p,null)})}},30355:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=n(83117),i=n(80102),r=(n(67294),n(3905)),o=n(68629),s=["components"],l={id:"suspense-compatibility",title:"Suspense Compatibility",slug:"/migration-and-compatibility/suspense-compatibility/",description:"Relay guide to suspense compatibility",keywords:["suspense","container"]},c=void 0,u={unversionedId:"migration-and-compatibility/suspense-compatibility",id:"version-v15.0.0/migration-and-compatibility/suspense-compatibility",title:"Suspense Compatibility",description:"Relay guide to suspense compatibility",source:"@site/versioned_docs/version-v15.0.0/migration-and-compatibility/suspense-compatibility.md",sourceDirName:"migration-and-compatibility",slug:"/migration-and-compatibility/suspense-compatibility/",permalink:"/docs/v15.0.0/migration-and-compatibility/suspense-compatibility/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v15.0.0/migration-and-compatibility/suspense-compatibility.md",tags:[],version:"v15.0.0",lastUpdatedBy:"Sam Zhou",lastUpdatedAt:1701566883,formattedLastUpdatedAt:"Dec 3, 2023",frontMatter:{id:"suspense-compatibility",title:"Suspense Compatibility",slug:"/migration-and-compatibility/suspense-compatibility/",description:"Relay guide to suspense compatibility",keywords:["suspense","container"]},sidebar:"docs",previous:{title:"Upgrading to Relay Hooks",permalink:"/docs/v15.0.0/migration-and-compatibility/"},next:{title:"Relay Hooks and Legacy Container APIs",permalink:"/docs/v15.0.0/migration-and-compatibility/relay-hooks-and-legacy-container-apis/"}},d={},p=[{value:"What about Suspense?",id:"what-about-suspense",level:2},{value:"Is Suspense for Data Fetching ready yet?",id:"is-suspense-for-data-fetching-ready-yet",level:2},{value:"What does it mean for me if I start using Relay Hooks in React 17?",id:"what-does-it-mean-for-me-if-i-start-using-relay-hooks-in-react-17",level:2}],m={toc:p};function h(e){var t=e.components,n=(0,i.Z)(e,s);return(0,r.mdx)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h2",{id:"what-about-suspense"},"What about Suspense?"),(0,r.mdx)("p",null,"Relay Hooks uses React Suspense for ",(0,r.mdx)("a",{parentName:"p",href:"../../guided-tour/rendering/loading-states/"},"specifying loading states"),", so you might be wondering: Why is that the case if Suspense for Data Fetching is still not supported? Does this mean that Suspense for Data Fetching is officially supported now in React 17?"),(0,r.mdx)("h2",{id:"is-suspense-for-data-fetching-ready-yet"},"Is Suspense for Data Fetching ready yet?"),(0,r.mdx)("p",null,"The short answer is: ",(0,r.mdx)("strong",{parentName:"p"},"NO"),"."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Support, general guidance, and requirements for usage of Suspense for Data Fetching are still not ready"),", and the React team is still defining what this guidance will be for upcoming React releases."),(0,r.mdx)("p",null,"With that said, even though there are still things to figure out before Suspense for Data Fetching can be broadly implemented and adopted, we released Relay Hooks on React 17 for a few reasons:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Relay was a very early adopter of Suspense, and collaborated with React on the research of Suspense for Data Fetching. It was one of the first testing grounds for using Suspense in production, and helped inform some of its design decisions. As such, there are still parts of our Suspense ",(0,r.mdx)("em",{parentName:"li"},"implementation")," that reflect those early learnings (which aren't yet fully documented) and which aren't quite where we want them to be. Although we know there are still likely changes to be made in the implementation, and that there will be some limitations when Suspense is used in React 17, we know Relay Hooks are on the right trajectory for upcoming releases of React, and those changes can be streamlined and allow us to release Relay Hooks a bit earlier."),(0,r.mdx)("li",{parentName:"ul"},"The Relay Hooks APIs represent the APIs we want to deliver long-term for Relay and which we believe are an improvement over our previous APIs. Even though their underlying implementation is still changing and will likely change more as the Suspense for Data Fetching guidance is documented and finalized by the React team, the Relay Hooks APIs themselves are stable. They have been widely adopted internally at Facebook, and have been in use in production for over a year, so we are confident that they work. We want to allow the community to start adopting them, and be able to get external feedback from the community as well.")),(0,r.mdx)("h2",{id:"what-does-it-mean-for-me-if-i-start-using-relay-hooks-in-react-17"},"What does it mean for me if I start using Relay Hooks in React 17?"),(0,r.mdx)("p",null,"What this means for users adopting Relay Hooks is:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"There will be some limitations when using Suspense in React 17, which we've documented in ",(0,r.mdx)("a",{parentName:"li",href:"../../guided-tour/refetching/refetching-queries-with-different-data/#if-you-need-to-avoid-suspense"},"our docs"),". Specifically, the current release includes a subset of features that work with both synchronous rendering and concurrent rendering. In order to fully support Suspense for Data Fetching, we also need features such as concurrently rendering suspended trees, and transitioning to new trees when data is refetched. The APIs we've currently released will allow us to support concurrent rendering with the same APIs in future versions of React."),(0,r.mdx)("li",{parentName:"ul"},"When a future version of React is released that fully supports concurrent rendering and Suspense for Data Fetching, Relay will also make a new major release alongside the React release. That release will likely include breaking changes that we will document for the upgrade.")),(0,r.mdx)(o.Z,{mdxType:"DocsRating"}))}h.isMDXComponent=!0}}]);