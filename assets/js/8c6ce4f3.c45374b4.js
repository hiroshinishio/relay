"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[33628],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>s,MDXProvider:()=>u,mdx:()=>y,useMDXComponents:()=>d,withMDXComponents:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){return function(t){var n=d(t.components);return a.createElement(e,o({},t,{components:n}))}},d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=d(n),u=r,h=c["".concat(i,".").concat(u)]||c[u]||m[u]||o;return n?a.createElement(h,l(l({ref:t},s),{},{components:n})):a.createElement(h,l({ref:t},s))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},68629:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(39960),r=n(86341),o=n(67294);function i(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function l(e){var t=e.children;return o.createElement("div",{className:"docsRating",id:"docsRating"},o.createElement("hr",null),t)}var p=function(){var e=o.useState(!1),t=e[0],n=e[1],a=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":o.createElement(o.Fragment,null,"Is this page useful?",o.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(1)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),o.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(0)}},o.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},s=function(){return o.createElement("p",null,"Let us know how these docs can be improved by",o.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:i},"Filing a task"))},c=function(){return o.createElement("p",null,"Help us make the site even better by"," ",o.createElement(a.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},d=function(){return o.createElement(l,null,o.createElement(s,null),o.createElement(p,null),o.createElement(c,null))},u=function(){return o.createElement(l,null,o.createElement(p,null),o.createElement(c,null))};const m=function(){return(0,r.fbContent)({internal:o.createElement(d,null),external:o.createElement(u,null)})}},62356:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>p,metadata:()=>c,toc:()=>u});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=n(68629),l=(n(86341),["components"]),p={id:"step-by-step-guide",title:"Server Setup Example",slug:"/getting-started/step-by-step-guide/",description:"Step-by-step guide for setting up Relay",keywords:["setup"]},s=void 0,c={unversionedId:"getting-started/step-by-step-guide",id:"version-v15.0.0/getting-started/step-by-step-guide",title:"Server Setup Example",description:"Step-by-step guide for setting up Relay",source:"@site/versioned_docs/version-v15.0.0/getting-started/step-by-step-guide.md",sourceDirName:"getting-started",slug:"/getting-started/step-by-step-guide/",permalink:"/docs/v15.0.0/getting-started/step-by-step-guide/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v15.0.0/getting-started/step-by-step-guide.md",tags:[],version:"v15.0.0",lastUpdatedBy:"Stiopa Koltsov",lastUpdatedAt:1704869352,formattedLastUpdatedAt:"Jan 10, 2024",frontMatter:{id:"step-by-step-guide",title:"Server Setup Example",slug:"/getting-started/step-by-step-guide/",description:"Step-by-step guide for setting up Relay",keywords:["setup"]}},d={},u=[{value:"Step 1: Create React App",id:"step-1-create-react-app",level:2},{value:"Step 2: Fetch GraphQL (without Relay)",id:"step-2-fetch-graphql-without-relay",level:2},{value:"2.1: GitHub GraphQL Authentication",id:"21-github-graphql-authentication",level:3},{value:"2.2: A fetchGraphQL Helper",id:"22-a-fetchgraphql-helper",level:3},{value:"2.3: Fetching GraphQL From React",id:"23-fetching-graphql-from-react",level:3},{value:"Step 3: When To Use Relay",id:"step-3-when-to-use-relay",level:2},{value:"Step 4: Adding Relay To Our Project",id:"step-4-adding-relay-to-our-project",level:2},{value:"4.1 Configure Relay Compiler",id:"41-configure-relay-compiler",level:3},{value:"4.2 Configure Relay Runtime",id:"42-configure-relay-runtime",level:3},{value:"Step 5: Fetching a Query With Relay",id:"step-5-fetching-a-query-with-relay",level:2},{value:"Step 6: Explore!",id:"step-6-explore",level:2}],m={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.mdx)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"Relay is a framework for managing and declaratively fetching GraphQL data. It allows developers to declare ",(0,o.mdx)("em",{parentName:"p"},"what")," data each component needs via GraphQL, and then aggregate these dependencies and efficiently fetch the data in fewer round trips. In this guide we'll introduce the key concepts for using Relay in a React app one at a time."),(0,o.mdx)("h2",{id:"step-1-create-react-app"},"Step 1: Create React App"),(0,o.mdx)("p",null,"For this example we'll start with a standard install of ",(0,o.mdx)("a",{parentName:"p",href:"https://create-react-app.dev"},"Create React App"),". Create React App makes it easy to get a fully configured React app up and running and also supports configuring Relay. To get started, create a new app with:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"# NPM\nnpx create-react-app your-app-name\n\n# Yarn\nyarn create react-app your-app-name\n")),(0,o.mdx)("p",null,"At this point we should be able to change to the app's directory and run it:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"# NPM\ncd your-app-name\nnpm start\n\n# Yarn\ncd your-app-name\nyarn start\n")),(0,o.mdx)("p",null,"For troubleshooting and more setup options, see the ",(0,o.mdx)("a",{parentName:"p",href:"https://create-react-app.dev/docs/getting-started"},"Create React App documentation"),"."),(0,o.mdx)("h2",{id:"step-2-fetch-graphql-without-relay"},"Step 2: Fetch GraphQL (without Relay)"),(0,o.mdx)("p",null,"If you're exploring using GraphQL with Relay, we highly recommend starting with a basic approach and using as few libraries as possible. GraphQL servers can generally be accessed using plain-old HTTP requests, so we can use the ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},(0,o.mdx)("inlineCode",{parentName:"a"},"fetch")," API")," to request some data from our server. For this guide we'll use GitHub's GraphQL API as the server, but if you already have a GraphQL server feel free to use that instead."),(0,o.mdx)("h3",{id:"21-github-graphql-authentication"},"2.1: GitHub GraphQL Authentication"),(0,o.mdx)("p",null,"To start we'll need an authentication token for the GitHub API (if you're using your own GraphQL endpoint, you can skip this step):"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Open ",(0,o.mdx)("a",{parentName:"li",href:"https://github.com/settings/tokens"},"github.com/settings/tokens"),"."),(0,o.mdx)("li",{parentName:"ul"},"Ensure that at least the ",(0,o.mdx)("inlineCode",{parentName:"li"},"repo")," scope is selected."),(0,o.mdx)("li",{parentName:"ul"},"Generate a token"),(0,o.mdx)("li",{parentName:"ul"},"Create a file ",(0,o.mdx)("inlineCode",{parentName:"li"},"./your-app-name/.env.local")," and add the following contents, replacing ",(0,o.mdx)("inlineCode",{parentName:"li"},"<TOKEN>")," with your authentication token:")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"# your-app-name/.env.local\nREACT_APP_GITHUB_AUTH_TOKEN=<TOKEN>\n")),(0,o.mdx)("h3",{id:"22-a-fetchgraphql-helper"},"2.2: A fetchGraphQL Helper"),(0,o.mdx)("p",null,"Next let's update the home screen of our app to show the name of the Relay repository. We'll start with a common approach to fetching data in React, calling our fetch function after the component mounts (note: later we'll see some limitations of this approach and a better alternative that works with React Concurrent Mode and Suspense). First we'll create a helper function to load data from the server. Again, this example will use the GitHub API, but feel free to replace it with the appropriate URL and authentication mechanism for your own GraphQL server:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"// your-app-name/src/fetchGraphQL.js\nasync function fetchGraphQL(text, variables) {\n  const REACT_APP_GITHUB_AUTH_TOKEN = process.env.REACT_APP_GITHUB_AUTH_TOKEN;\n\n  // Fetch data from GitHub's GraphQL API:\n  const response = await fetch('https://api.github.com/graphql', {\n    method: 'POST',\n    headers: {\n      Authorization: `bearer ${REACT_APP_GITHUB_AUTH_TOKEN}`,\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify({\n      query: text,\n      variables,\n    }),\n  });\n\n  // Get the response as JSON\n  return await response.json();\n}\n\nexport default fetchGraphQL;\n")),(0,o.mdx)("h3",{id:"23-fetching-graphql-from-react"},"2.3: Fetching GraphQL From React"),(0,o.mdx)("p",null,"Now we can use our ",(0,o.mdx)("inlineCode",{parentName:"p"},"fetchGraphQL")," function to fetch some data in our app. Open ",(0,o.mdx)("inlineCode",{parentName:"p"},"src/App.js")," and edit it as follows:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},'// your-app-name/src/App.js\nimport React from \'react\';\nimport \'./App.css\';\nimport fetchGraphQL from \'./fetchGraphQL\';\n\nconst { useState, useEffect } = React;\n\nfunction App() {\n  // We\'ll load the name of a repository, initially setting it to null\n  const [name, setName] = useState(null);\n\n  // When the component mounts we\'ll fetch a repository name\n  useEffect(() => {\n    let isMounted = true;\n    fetchGraphQL(`\n      query RepositoryNameQuery {\n        # feel free to change owner/name here\n        repository(owner: "facebook" name: "relay") {\n          name\n        }\n      }\n    `).then(response => {\n      // Avoid updating state if the component unmounted before the fetch completes\n      if (!isMounted) {\n        return;\n      }\n      const data = response.data;\n      setName(data.repository.name);\n    }).catch(error => {\n      console.error(error);\n    });\n\n    return () => {\n      isMounted = false;\n    };\n  }, []);\n\n  // Render "Loading" until the query completes\n  return (\n    <div className="App">\n      <header className="App-header">\n        <p>\n          {name != null ? `Repository: ${name}` : "Loading"}\n        </p>\n      </header>\n    </div>\n  );\n}\n\nexport default App;\n')),(0,o.mdx)("h2",{id:"step-3-when-to-use-relay"},"Step 3: When To Use Relay"),(0,o.mdx)("p",null,"At this point we can fetch data with GraphQL and render it with React. This is a reasonable solution that can be sufficient for many apps. However, this approach doesn't necessarily scale. As our app grows in size and complexity, or the number of people working on the app grows, a simple approach like this can become limiting. Relay provides a number of features designed to help keep applications fast and reliable even as they grow in size and complexity: collocating data dependencies in components with GraphQL fragments, data consistency, mutations, etc. Check out ",(0,o.mdx)("a",{parentName:"p",href:"../../principles-and-architecture/thinking-in-graphql/"},"Thinking in GraphQL")," and ",(0,o.mdx)("a",{parentName:"p",href:"../../principles-and-architecture/thinking-in-relay/"},"Thinking in Relay")," for an overview of how Relay makes it easier to work with GraphQL."),(0,o.mdx)("h2",{id:"step-4-adding-relay-to-our-project"},"Step 4: Adding Relay To Our Project"),(0,o.mdx)("p",null,"In this guide we'll demonstrate installing the ",(0,o.mdx)("em",{parentName:"p"},"experimental")," release of Relay Hooks, a new, hooks-based Relay API that supports React Concurrent Mode and Suspense."),(0,o.mdx)("p",null,"First we'll add the necessary packages. Note that Relay is comprised of three key pieces: a compiler (which is used at build time), a core runtime (that is React agnostic), and a React integration layer."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"# NPM Users\nnpm install --save relay-runtime react-relay\nnpm install --save-dev relay-compiler babel-plugin-relay\n\n# Yarn Users\nyarn add relay-runtime react-relay\nyarn add --dev relay-compiler babel-plugin-relay\n")),(0,o.mdx)("h3",{id:"41-configure-relay-compiler"},"4.1 Configure Relay Compiler"),(0,o.mdx)("p",null,"Next let's configure Relay compiler. We'll need a copy of the schema as a ",(0,o.mdx)("inlineCode",{parentName:"p"},".graphql")," file. If you're using the GitHub GraphQL API, you can download a copy directly from the Relay example app:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"cd your-app-name\ncurl https://raw.githubusercontent.com/relayjs/relay-examples/main/issue-tracker/schema/schema.graphql > schema.graphql\n")),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"Note:")," On Windows, the ",(0,o.mdx)("inlineCode",{parentName:"p"},".graphql")," file has to be explicitly saved with UTF-8 encoding, not the default UTF-16. See this ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/prisma-labs/get-graphql-schema/issues/30"},"issue")," for more details."),(0,o.mdx)("p",null,"If you're using your own API we suggest using the ",(0,o.mdx)("a",{parentName:"p",href:"https://www.npmjs.com/package/get-graphql-schema"},(0,o.mdx)("inlineCode",{parentName:"a"},"get-graphql-schema"))," utility to download your schema into a ",(0,o.mdx)("inlineCode",{parentName:"p"},".graphql")," file."),(0,o.mdx)("p",null,"Now that we have a schema we can modify ",(0,o.mdx)("inlineCode",{parentName:"p"},"package.json")," to run the compiler first whenever we build or start our app:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'// your-app-name/package.json\n{\n  ...\n  "scripts": {\n    ...\n    "start": "yarn run relay && react-scripts start",\n    "build": "yarn run relay && react-scripts build",\n    "relay": "yarn run relay-compiler"\n    ...\n  },\n  "relay": {\n    "src": "./src/",\n    "schema": "./schema.graphql",\n    "language": "javascript"\n  }\n  ...\n}\n')),(0,o.mdx)("p",null,"At this point, you should be able to run the following successfully:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"cd your-app-name\nyarn start\n")),(0,o.mdx)("p",null,"If it works, your app will open at ",(0,o.mdx)("a",{parentName:"p",href:"http://localhost:3000"},"localhost:3000"),". Now when we write GraphQL in our app, Relay will detect it and generate code to represent our queries in ",(0,o.mdx)("inlineCode",{parentName:"p"},"your-app-name/src/__generated__/"),". We recommend checking in these generated files to source control."),(0,o.mdx)("h3",{id:"42-configure-relay-runtime"},"4.2 Configure Relay Runtime"),(0,o.mdx)("p",null,"Now that the compiler is configured we can set up the runtime - we have to tell Relay how to connect to our GraphQL server. We'll reuse the ",(0,o.mdx)("inlineCode",{parentName:"p"},"fetchGraphQL")," utility we built above. Assuming you haven't modified it (or at least that it still takes ",(0,o.mdx)("inlineCode",{parentName:"p"},"text")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"variables")," as arguments), we can now define a Relay ",(0,o.mdx)("inlineCode",{parentName:"p"},"Environment"),". An ",(0,o.mdx)("inlineCode",{parentName:"p"},"Environment")," encapsulates how to talk to our server (a Relay ",(0,o.mdx)("inlineCode",{parentName:"p"},"Network"),") with a cache of data retrieved from that server. We'll create a new file, ",(0,o.mdx)("inlineCode",{parentName:"p"},"src/RelayEnvironment.js")," and add the following:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"// your-app-name/src/RelayEnvironment.js\nimport {Environment, Network, RecordSource, Store} from 'relay-runtime';\nimport fetchGraphQL from './fetchGraphQL';\n\n// Relay passes a \"params\" object with the query name and text. So we define a helper function\n// to call our fetchGraphQL utility with params.text.\nasync function fetchRelay(params, variables) {\n  console.log(`fetching query ${params.name} with ${JSON.stringify(variables)}`);\n  return fetchGraphQL(params.text, variables);\n}\n\n// Export a singleton instance of Relay Environment configured with our network function:\nexport default new Environment({\n  network: Network.create(fetchRelay),\n  store: new Store(new RecordSource()),\n});\n")),(0,o.mdx)("h2",{id:"step-5-fetching-a-query-with-relay"},"Step 5: Fetching a Query With Relay"),(0,o.mdx)("p",null,"Now that Relay is installed and configured we can change ",(0,o.mdx)("inlineCode",{parentName:"p"},"App.js")," to use it instead. We'll prepare our data as the app starts, and wait for it to be ready in ",(0,o.mdx)("inlineCode",{parentName:"p"},"<App>"),". Replace the contents of ",(0,o.mdx)("inlineCode",{parentName:"p"},"src/App.js")," with the following:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"import React from 'react';\nimport './App.css';\nimport graphql from 'babel-plugin-relay/macro';\nimport {\n  RelayEnvironmentProvider,\n  loadQuery,\n  usePreloadedQuery,\n} from 'react-relay/hooks';\nimport RelayEnvironment from './RelayEnvironment';\n\nconst { Suspense } = React;\n\n// Define a query\nconst RepositoryNameQuery = graphql`\n  query AppRepositoryNameQuery {\n    repository(owner: \"facebook\", name: \"relay\") {\n      name\n    }\n  }\n`;\n\n// Immediately load the query as our app starts. For a real app, we'd move this\n// into our routing configuration, preloading data as we transition to new routes.\nconst preloadedQuery = loadQuery(RelayEnvironment, RepositoryNameQuery, {\n  /* query variables */\n});\n\n// Inner component that reads the preloaded query results via `usePreloadedQuery()`.\n// This works as follows:\n// - If the query has completed, it returns the results of the query.\n// - If the query is still pending, it \"suspends\" (indicates to React that the\n//   component isn't ready to render yet). This will show the nearest <Suspense>\n//   fallback.\n// - If the query failed, it throws the failure error. For simplicity we aren't\n//   handling the failure case here.\nfunction App(props) {\n  const data = usePreloadedQuery(RepositoryNameQuery, props.preloadedQuery);\n\n  return (\n    <div className=\"App\">\n      <header className=\"App-header\">\n        <p>{data.repository.name}</p>\n      </header>\n    </div>\n  );\n}\n\n// The above component needs to know how to access the Relay environment, and we\n// need to specify a fallback in case it suspends:\n// - <RelayEnvironmentProvider> tells child components how to talk to the current\n//   Relay Environment instance\n// - <Suspense> specifies a fallback in case a child suspends.\nfunction AppRoot(props) {\n  return (\n    <RelayEnvironmentProvider environment={RelayEnvironment}>\n      <Suspense fallback={'Loading...'}>\n        <App preloadedQuery={preloadedQuery} />\n      </Suspense>\n    </RelayEnvironmentProvider>\n  );\n}\n\nexport default AppRoot;\n")),(0,o.mdx)("p",null,"Note that you'll have to restart the app - ",(0,o.mdx)("inlineCode",{parentName:"p"},"yarn start")," - so that Relay compiler can see the new query and generate code for it. See the ",(0,o.mdx)("a",{parentName:"p",href:"../installation-and-setup/#set-up-relay-compiler"},"Relay Compiler setup docs")," for how to run Relay Compiler in watch mode, to regenerate code as you modify queries."),(0,o.mdx)("h2",{id:"step-6-explore"},"Step 6: Explore!"),(0,o.mdx)("p",null,"At this point we have an app configured to use Relay. We recommend checking out the following for information and ideas about where to go next:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"The ",(0,o.mdx)("a",{parentName:"li",href:"../../guided-tour/"},"Guided Tour")," describes how to implement many common use-cases."),(0,o.mdx)("li",{parentName:"ul"},"The ",(0,o.mdx)("a",{parentName:"li",href:"../../api-reference/use-fragment/"},"API Reference")," has full details on the Relay Hooks APIs."),(0,o.mdx)("li",{parentName:"ul"},"The ",(0,o.mdx)("a",{parentName:"li",href:"https://github.com/relayjs/relay-examples/tree/main/issue-tracker"},"Example App")," is a more sophisticated version of what we've started building here. It includes routing integration and uses React Concurrent Mode and Suspense for smooth transitions between pages.")),(0,o.mdx)(i.Z,{mdxType:"DocsRating"}))}h.isMDXComponent=!0}}]);