(()=>{var e={};e.id=409,e.ids=[409],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5867:(e,t,o)=>{"use strict";o.r(t),o.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>d,pages:()=>c,routeModule:()=>f,tree:()=>u}),o(7352),o(5866),o(1476);var n=o(3191),r=o(8716),s=o(7922),i=o.n(s),a=o(5231),l={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);o.d(t,l);let u=["",{children:["/_not-found",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(o.t.bind(o,5866,23)),"next/dist/client/components/not-found-error"]}]},{}]},{layout:[()=>Promise.resolve().then(o.bind(o,1476)),"/Users/hoainho/Documents/Personal/nextjs/portfolio/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(o.t.bind(o,5866,23)),"next/dist/client/components/not-found-error"]}],c=[],d="/_not-found/page",p={require:o,loadChunk:()=>Promise.resolve()},f=new n.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/_not-found/page",pathname:"/_not-found",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},843:(e,t,o)=>{Promise.resolve().then(o.bind(o,4927)),Promise.resolve().then(o.bind(o,8781)),Promise.resolve().then(o.bind(o,9694)),Promise.resolve().then(o.bind(o,9662)),Promise.resolve().then(o.t.bind(o,4064,23))},9224:(e,t,o)=>{Promise.resolve().then(o.t.bind(o,2994,23)),Promise.resolve().then(o.t.bind(o,6114,23)),Promise.resolve().then(o.t.bind(o,9727,23)),Promise.resolve().then(o.t.bind(o,9671,23)),Promise.resolve().then(o.t.bind(o,1868,23)),Promise.resolve().then(o.t.bind(o,4759,23))},4927:(e,t,o)=>{"use strict";o.d(t,{GlobalProvider:()=>a,b:()=>l});var n=o(326),r=o(7577);let s={currentStage:0,isRotating:!1},i=(0,r.createContext)({state:s,setCurrentStage:e=>{},setIsRotating:e=>{}}),a=({children:e})=>{let[t,o]=(0,r.useState)(s);return n.jsx(i.Provider,{value:{state:t,setCurrentStage:e=>{o({...t,currentStage:e})},setIsRotating:e=>{o({...t,isRotating:e})}},children:e})},l=()=>(0,r.useContext)(i)},1476:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>g,metadata:()=>h,viewport:()=>f});var n=o(9510),r=o(8013),s=o.n(r);o(3440);var i=o(2847),a=o(8570);let l=(0,a.createProxy)(String.raw`/Users/hoainho/Documents/Personal/nextjs/portfolio/context/GlobalContext.tsx`),{__esModule:u,$$typeof:c}=l;l.default,(0,a.createProxy)(String.raw`/Users/hoainho/Documents/Personal/nextjs/portfolio/context/GlobalContext.tsx#GlobalContext`);let d=(0,a.createProxy)(String.raw`/Users/hoainho/Documents/Personal/nextjs/portfolio/context/GlobalContext.tsx#GlobalProvider`);(0,a.createProxy)(String.raw`/Users/hoainho/Documents/Personal/nextjs/portfolio/context/GlobalContext.tsx#useGlobalContext`);var p=o(9720);let f={initialScale:1,width:"device-width"},h={title:"Hoai Nho - Portfolio | Deep Javascript & TypeScript | Software Engineer | Open Source Contributor",description:"I'm Software Engineer from Viet Nam with over 4 year of experience. I'm passionate about developing and maintaining high quality software. I love my work and I'm always looking for new challenges. I'm open for any collaboration. Let's work together!",keywords:"Hoai Nho, Ho\xe0i Nhớ, Nguyễn Ho\xe0i Nhớ, Nhớ Nguyễn, portfolio, deep learning engineer, software engineer, open source contributor, javascript, fullstack developer",openGraph:{title:"Hoai-Nho | Portfolio",description:"Deep Javascript & TypeScript | Software Engineer | Open Source Contributor",url:"https://hoainho.info",siteName:"Hoai-Nho | Portfolio",images:[{url:"https://hn-portfolio.s3.ap-southeast-1.amazonaws.com/favicon.png",alt:"Hoai-Nho | Portfolio",width:200,height:200}],locale:"en_US",type:"website"},icons:{icon:"https://hn-portfolio.s3.ap-southeast-1.amazonaws.com/logo.jpeg"}};function g({children:e}){return(0,n.jsxs)("html",{lang:"en",children:[n.jsx("body",{className:`${s().variable} font-public-sans bg-basics-background-default`,"cz-shortcut-listen":"false",children:n.jsx(d,{children:e})}),n.jsx(i.GoogleTagManager,{gtmId:"GTM-KSW24XS4"}),n.jsx(i.GoogleAnalytics,{gaId:"G-R2SSW6FQ6V"}),n.jsx(p.default,{type:"text/javascript",src:"https://unpkg.com/default-passive-events"})]})}},6399:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var o in t)Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}(t,{isNotFoundError:function(){return r},notFound:function(){return n}});let o="NEXT_NOT_FOUND";function n(){let e=Error(o);throw e.digest=o,e}function r(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===o}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7352:(e,t,o)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var o in t)Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}(t,{PARALLEL_ROUTE_DEFAULT_PATH:function(){return r},default:function(){return s}});let n=o(6399),r="next/dist/client/components/parallel-route-default.js";function s(){(0,n.notFound)()}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3440:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var o=e=>t(t.s=e),n=t.X(0,[948,882],()=>o(5867));module.exports=n})();