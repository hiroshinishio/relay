"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[68847],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>l,MDXProvider:()=>m,mdx:()=>f,useMDXComponents:()=>u,withMDXComponents:()=>p});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){return function(n){var t=u(n.components);return r.createElement(e,i({},n,{components:t}))}},u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},b=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(t),m=o,b=p["".concat(a,".").concat(m)]||p[m]||d[m]||i;return t?r.createElement(b,s(s({ref:n},l),{},{components:t})):r.createElement(b,s({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=b;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},29880:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=t(83117),o=t(80102),i=(t(67294),t(3905)),a=["components"],s={id:"subscriptions",title:"Subscriptions",original_id:"subscriptions"},c=void 0,l={unversionedId:"subscriptions",id:"version-v10.0.1/subscriptions",title:"Subscriptions",description:"Relay exposes the following APIs to create subscriptions.",source:"@site/versioned_docs/version-v10.0.1/Modern-Subscriptions.md",sourceDirName:".",slug:"/subscriptions",permalink:"/docs/v10.0.1/subscriptions",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v10.0.1/Modern-Subscriptions.md",tags:[],version:"v10.0.1",lastUpdatedBy:"Monica Tang",lastUpdatedAt:1712686763,formattedLastUpdatedAt:"Apr 9, 2024",frontMatter:{id:"subscriptions",title:"Subscriptions",original_id:"subscriptions"},sidebar:"version-v10.0.1/docs",previous:{title:"Mutations",permalink:"/docs/v10.0.1/mutations"},next:{title:"Relay Store",permalink:"/docs/v10.0.1/relay-store"}},p={},u=[{value:"Example",id:"example",level:2}],m={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.mdx)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Relay exposes the following APIs to create subscriptions."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"import { requestSubscription } from 'react-relay';\n\ntype Variables = {[name: string]: any};\n\ntype Disposable = {\n  dispose(): void,\n};\n\nrequestSubscription(\n  environment: Environment,\n  config: {\n    subscription: GraphQLTaggedNode,\n    variables: Variables,\n    onCompleted?: ?() => void,\n    onError?: ?(error: Error) => void,\n    onNext?: ?(response: ?Object) => void,\n    updater?: ?(store: RecordSourceSelectorProxy, data: SelectorData) => void,\n    configs?: Array<DeclarativeMutationConfig>,\n    cacheConfig?: CacheConfig,\n  },\n) => Disposable;\n")),(0,i.mdx)("p",null,"The function returns a ",(0,i.mdx)("inlineCode",{parentName:"p"},"Disposable")," on which you could call ",(0,i.mdx)("inlineCode",{parentName:"p"},"dispose()")," to cancel the refetch."),(0,i.mdx)("p",null,"Now let's take a closer look at the ",(0,i.mdx)("inlineCode",{parentName:"p"},"config"),":"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"subscription"),": the ",(0,i.mdx)("inlineCode",{parentName:"li"},"graphql")," tagged subscription query."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"variables"),": an object that contains the variables needed for the subscription."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"onCompleted"),": a callback function executed when the subscription is closed by\nthe peer without error."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"onError"),": a callback function executed when Relay or the server encounters an\nerror processing the subscription."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"onNext"),": a callback function executed each time a response is received from\nthe server, with the raw GraphQL response payload."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"updater"),": an optional function that can supply custom logic for updating the\nin-memory Relay store based on the server response."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"configs"),": an array containing the updater configurations. It is the same as ",(0,i.mdx)("a",{parentName:"li",href:"/docs/v10.0.1/mutations#updater-configs"},(0,i.mdx)("inlineCode",{parentName:"a"},"configs"))," in ",(0,i.mdx)("inlineCode",{parentName:"li"},"commitMutation"),"."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"cacheConfig?"),": Optional object containing a set of cache configuration options")),(0,i.mdx)("h2",{id:"example"},"Example"),(0,i.mdx)("p",null,"In a simple subscription, you only need ",(0,i.mdx)("inlineCode",{parentName:"p"},"subscription")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"variables"),". This is\nappropriate when you are only changing the properties of existing records that\ncan be identified by their ",(0,i.mdx)("inlineCode",{parentName:"p"},"id"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"import {\n  requestSubscription,\n  graphql,\n} from 'react-relay';\n\nconst subscription = graphql`\n  subscription MarkReadNotificationSubscription(\n    $storyID: ID!\n  ) {\n    markReadNotification(storyID: $storyID) {\n      notification {\n        seenState\n      }\n    }\n  }\n`;\n\nconst variables = {\n  storyID,\n};\n\nrequestSubscription(\n  yourEnvironment, // see Environment docs\n  {\n    subscription,\n    variables,\n    // optional but recommended:\n    onCompleted: () => {\n      // server closed the subscription\n    },\n    onError: error => console.error(error),\n  }\n);\n")),(0,i.mdx)("h1",{id:"configure-network"},"Configure Network"),(0,i.mdx)("p",null,"You will need to Configure your Network layer to handle subscriptions."),(0,i.mdx)("p",null,"Usually GraphQL subscriptions are communicated over ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API"},"WebSockets"),", here's an example using ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/enisdenjo/graphql-ws"},"graphql-ws"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"import {\n    ...\n    Network,\n    Observable\n} from 'relay-runtime';\nimport { createClient } from 'graphql-ws';\n\nconst wsClient = createClient({\n  url:'ws://localhost:3000',\n});\n\nconst subscribe = (operation, variables) => {\n  return Observable.create((sink) => {\n    return wsClient.subscribe(\n      {\n        operationName: operation.name,\n        query: operation.text,\n        variables,\n      },\n      sink,\n    );\n  });\n}\n\nconst network = Network.create(fetchQuery, subscribe);\n")),(0,i.mdx)("p",null,"Alternatively, the legacy ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/apollographql/subscriptions-transport-ws"},"subscriptions-transport-ws")," library can be used too:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"import {\n    ...\n    Network,\n    Observable\n} from 'relay-runtime';\nimport { SubscriptionClient } from 'subscriptions-transport-ws';\n\n...\n\nconst subscriptionClient = new SubscriptionClient('ws://localhost:3000', {\n    reconnect: true,\n});\n\nconst subscribe = (request, variables) => {\n    const subscribeObservable = subscriptionClient.request({\n        query: request.text,\n        operationName: request.name,\n        variables,\n    });\n    // Important: Convert subscriptions-transport-ws observable type to Relay's\n    return Observable.from(subscribeObservable);\n};\n\nconst network = Network.create(fetchQuery, subscribe);\n\n...\n\n")),(0,i.mdx)("p",null,"or if your server uses ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/enisdenjo/graphql-ws"},"graphql-ws"),", this is how you would use the client in Relay:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"import {\n  Network,\n  Observable,\n  RequestParameters,\n  Variables,\n} from 'relay-runtime';\nimport { createClient } from 'graphql-ws';\n\nconst wsClient = createClient({\n  url: 'wss://relayis.awesome/graphql',\n});\n\n// you can also perform queries and mutations besides the subscriptions\n// through websocket, if you server allows them of course\nfunction fetchOrSubscribe(operation: RequestParameters, variables: Variables) {\n  return Observable.create((sink) => {\n    if (!operation.text) {\n      return sink.error(new Error('Operation text cannot be empty'));\n    }\n    return wsClient.subscribe(\n      {\n        operationName: operation.name,\n        query: operation.text,\n        variables,\n      },\n      sink\n    );\n  });\n}\n\nexport const network = Network.create(fetchOrSubscribe, fetchOrSubscribe);\n")),(0,i.mdx)("h1",{id:"updating-the-client-on-each-response"},"Updating the client on each response"),(0,i.mdx)("p",null,"For more complex use-cases, you may wish to perform custom logic to update\nRelay's in-memory cache when each subscription response is received. To do so,\npass an ",(0,i.mdx)("inlineCode",{parentName:"p"},"updater")," function:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"import { ConnectionHandler } from 'relay-runtime';\n\nrequestSubscription(\n  environment,\n  {\n    subscription,\n    variables,\n    updater: store => {\n      // Get the notification\n      const rootField = store.getRootField('markReadNotification');\n      const notification = rootField.getLinkedRecord('notification');\n      // Add it to a connection\n      const viewer = store.getRoot().getLinkedRecord('viewer');\n      const notifications =\n        ConnectionHandler.getConnection(viewer, 'notifications');\n      const edge = ConnectionHandler.createEdge(\n        store,\n        notifications,\n        notification,\n        '<TypeOfNotificationsEdge>',\n      );\n      ConnectionHandler.insertEdgeAfter(notifications, edge);\n    },\n  },\n);\n")))}d.isMDXComponent=!0}}]);