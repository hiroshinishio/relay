(self.webpackChunk=self.webpackChunk||[]).push([[24783],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,y=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(y,i(i({ref:t},c),{},{components:n})):a.createElement(y,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81266:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>p,metadata:()=>s,toc:()=>c,default:()=>d});var a=n(22122),r=n(19756),l=(n(67294),n(3905)),i=["components"],o={id:"installation-and-setup",title:"Installation and Setup",original_id:"installation-and-setup"},p=void 0,s={unversionedId:"installation-and-setup",id:"version-v4.0.0/installation-and-setup",isDocsHomePage:!1,title:"Installation and Setup",description:"Installation",source:"@site/versioned_docs/version-v4.0.0/Introduction-InstallationAndSetup.md",sourceDirName:".",slug:"/installation-and-setup",permalink:"/docs/v4.0.0/installation-and-setup",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v4.0.0/Introduction-InstallationAndSetup.md",version:"v4.0.0",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1638979590,formattedLastUpdatedAt:"12/8/2021",frontMatter:{id:"installation-and-setup",title:"Installation and Setup",original_id:"installation-and-setup"},sidebar:"version-v4.0.0/docs",previous:{title:"Prerequisites",permalink:"/docs/v4.0.0/prerequisites"},next:{title:"Quick Start Guide",permalink:"/docs/v4.0.0/quick-start-guide"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Set up babel-plugin-relay",id:"set-up-babel-plugin-relay",children:[]},{value:"Set up relay-compiler",id:"set-up-relay-compiler",children:[]},{value:"JavaScript environment requirements",id:"javascript-environment-requirements",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("p",null,"Install React and Relay using ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"npm"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"\nyarn add react react-dom react-relay\n\n")),(0,l.kt)("h2",{id:"set-up-babel-plugin-relay"},"Set up babel-plugin-relay"),(0,l.kt)("p",null,"Relay Modern requires a Babel plugin to convert GraphQL to runtime artifacts:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"\nyarn add --dev babel-plugin-relay graphql\n\n")),(0,l.kt)("p",null,"Add ",(0,l.kt)("inlineCode",{parentName:"p"},'"relay"')," to the list of plugins your ",(0,l.kt)("inlineCode",{parentName:"p"},".babelrc")," file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "plugins": [\n    "relay"\n  ]\n}\n')),(0,l.kt)("p",null,"Please note that the ",(0,l.kt)("inlineCode",{parentName:"p"},'"relay"')," plugin should run before other plugins or\npresets to ensure the ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql")," template literals are correctly transformed. See\nBabel's ",(0,l.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/plugins/#pluginpreset-ordering"},"documentation on this topic"),"."),(0,l.kt)("p",null,"Alternatively, instead of using ",(0,l.kt)("inlineCode",{parentName:"p"},"babel-plugin-relay"),", you can use Relay with ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kentcdodds/babel-plugin-macros"},"babel-plugin-macros"),". After installing ",(0,l.kt)("inlineCode",{parentName:"p"},"babel-plugin-macros")," and adding it to your Babel config:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const graphql = require('babel-plugin-relay/macro');\n")),(0,l.kt)("p",null,"If you need to configure ",(0,l.kt)("inlineCode",{parentName:"p"},"babel-plugin-relay")," further (e.g. to enable ",(0,l.kt)("inlineCode",{parentName:"p"},"compat")," mode), you can do so by ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kentcdodds/babel-plugin-macros/blob/main/other/docs/user.md#config-experimental"},"specifying the options in a number of ways"),"."),(0,l.kt)("p",null,"For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\n// babel-plugin-macros.config.js\nmodule.exports = {\n  // ...\n  // Other macros config\n  relay: {\n    compat: true,\n  },\n}\n")),(0,l.kt)("h2",{id:"set-up-relay-compiler"},"Set up relay-compiler"),(0,l.kt)("p",null,"Relay's ahead-of-time compilation requires the ",(0,l.kt)("a",{parentName:"p",href:"/docs/v4.0.0/graphql-in-relay#relay-compiler"},"Relay Compiler"),", which you can install via ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"npm"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"\nyarn add --dev relay-compiler\n\n")),(0,l.kt)("p",null,"This installs the bin script ",(0,l.kt)("inlineCode",{parentName:"p"},"relay-compiler")," in your node_modules folder. It's recommended to run this from a ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn"),"/",(0,l.kt)("inlineCode",{parentName:"p"},"npm")," script by adding a script to your ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'"scripts": {\n  "relay": "relay-compiler --src ./src --schema ./schema.graphql"\n}\n')),(0,l.kt)("p",null,"or if you are using jsx:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'"scripts": {\n  "relay": "relay-compiler --src ./src --schema ./schema.graphql --extensions js jsx"\n}\n')),(0,l.kt)("p",null,"Then, after making edits to your application files, just run the ",(0,l.kt)("inlineCode",{parentName:"p"},"relay")," script to generate new compiled artifacts:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"\nyarn run relay\n\n")),(0,l.kt)("p",null,"Alternatively, you can pass the ",(0,l.kt)("inlineCode",{parentName:"p"},"--watch")," option to watch for file changes in your source code and automatically re-generate the compiled artifacts (",(0,l.kt)("strong",{parentName:"p"},"Note:")," Requires ",(0,l.kt)("a",{parentName:"p",href:"https://facebook.github.io/watchman"},"watchman")," to be installed):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"\nyarn run relay --watch\n\n")),(0,l.kt)("p",null,"For more details, check out our ",(0,l.kt)("a",{parentName:"p",href:"/docs/v4.0.0/graphql-in-relay#relay-compiler"},"Relay Compiler docs"),"."),(0,l.kt)("h2",{id:"javascript-environment-requirements"},"JavaScript environment requirements"),(0,l.kt)("p",null,"The Relay Modern packages distributed on NPM use the widely-supported ES5\nversion of JavaScript to support as many browser environments as possible."),(0,l.kt)("p",null,"However, Relay Modern expects modern JavaScript global types (",(0,l.kt)("inlineCode",{parentName:"p"},"Map"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Set"),",\n",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Object.assign"),") to be defined. If you support older browsers and\ndevices which may not yet provide these natively, consider including a global\npolyfill in your bundled application, such as ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/zloirock/core-js"},"core-js")," or\n",(0,l.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/usage/polyfill/"},"@babel/polyfill"),"."),(0,l.kt)("p",null,"A polyfilled environment for Relay using ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/zloirock/core-js"},"core-js")," to support older browsers\nmight look like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"require('core-js/es6/map');\nrequire('core-js/es6/set');\nrequire('core-js/es6/promise');\nrequire('core-js/es6/object');\n\nrequire('./myRelayApplication');\n")))}d.isMDXComponent=!0}}]);