(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[262],{6675:function(e,t,n){Promise.resolve().then(n.bind(n,519)),Promise.resolve().then(n.bind(n,1349))},519:function(e,t,n){"use strict";var r=n(7437),a=n(6334),i=n(1822),o=n(7138),s=n(6463),l=n(6847);t.default=()=>{let e;let t=(0,s.usePathname)(),n=e=>{(0,a.Z)(e)};return"/"===t?(0,r.jsx)(r.Fragment,{children:" "}):(0,r.jsxs)("footer",{className:"footer",children:[(0,r.jsx)("hr",{className:"border-slate-200"}),(0,r.jsxs)("div",{className:"footer-container",children:[(0,r.jsxs)("p",{children:["\xa9 ",new Date().getFullYear()," ",(0,r.jsx)("strong",{children:"Hoai Nho"}),". All rights reserved."]}),(0,r.jsx)("div",{className:"flex gap-3 justify-center items-center",children:i.KT.map(e=>(0,r.jsx)(o.default,{href:e.link,target:"_blank",onClick:()=>n(e.name),className:"cursor-pointer",children:(0,r.jsx)(l.default,{src:e.icon_url,alt:e.name,width:20,height:20,className:"w-6 h-6 object-contain"})},e.name))})]})]})}},6847:function(e,t,n){"use strict";var r=n(7437);n(2265);var a=n(6648),i=n(3664);t.default=e=>{let{alt:t="image-loader",width:n=20,height:o=20,src:s="",className:l="",id:c="",priority:u=!1,quality:d=100,onClick:p}=e;return(0,r.jsx)(a.default,{alt:t,width:n,height:o,src:(0,i.default)({src:s,width:n,quality:d}),className:l,id:c,priority:u,onClick:p,unoptimized:!0})}},1349:function(e,t,n){"use strict";n.d(t,{default:function(){return u}});var r=n(7437),a=n(2265),i=n(6463),o=n(7138),s=n(4839);let l=e=>{window.gtag&&window.gtag("config","G-R2SSW6FQ6V",{page_path:e})};var c=n(6847),u=()=>{let e=(0,i.usePathname)(),t=!["/"].includes(e),n=t?"text-primary":"text-white",[u,d]=(0,a.useState)(!0),[p,m]=(0,a.useState)(0),g=()=>{window.scrollY<=0?d(!1):d(!0),m(window.scrollY)};return(0,a.useEffect)(()=>(window.addEventListener("scroll",g),()=>{window.removeEventListener("scroll",g)}),[p]),(0,a.useEffect)(()=>{l(e)},[e]),(0,r.jsx)("header",{className:(0,s.Z)(t?"header-secondary":"header-primary",u&&t?"bg-[rgba(250,250,252,0.4)] backdrop-saturate-[180%] backdrop-blur-[30px]":"bg-basics-background-default"),children:(0,r.jsxs)("div",{className:"header",children:[(0,r.jsx)(o.default,{href:"/",className:"cursor-pointer",children:(0,r.jsx)(c.default,{width:40,height:40,src:"/icons/logo.jpeg",alt:"Hoai-Nho-Logo",className:"h-20 w-20 object-cover rounded-full "})}),(0,r.jsx)("nav",{className:"flex items-center text-sm gap-4 font-medium uppercase",children:[{name:"About",link:"/about"},{name:"Projects",link:"/projects"}].map(t=>(0,r.jsx)(o.default,{href:t.link,className:"min-w-[110px] text-center cursor-pointer !focus:outline-none hover:btn  hover:text-white ".concat(e===t.link?"btn text-white":n),children:t.name},t.name))})]})})}},6334:function(e,t,n){"use strict";var r=n(9881);t.Z=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"label";(0,r.sendGAEvent)({event:e})}},3664:function(e,t,n){"use strict";n.r(t),t.default=e=>{let{src:t,width:n,quality:r}=e,a=new URL(t,"https://d25ajqv6ijzi49.cloudfront.net").href;{let e=new URL(a);return e.searchParams.set("w",n.toString()),r&&e.searchParams.set("q",r.toString()),e.href}}},1822:function(e,t,n){"use strict";n.d(t,{KT:function(){return a},kw:function(){return r}});let r=[{title:"Full Stack Developer",company_name:"NUS Technology • HCMC",company_link:"https://nustechnology.com/",icon:"/images/companies/NUS.png",icon_bg:"#accbe1",date:"December 2021 - Present",points:["Diverse Project Experience: Contributed to over 10 projects across various industries, including E-commerce, Travel, Construction, Education, Stock, CMS, Security, and Logistics","CI/CD System Construction: Established a CI/CD system on GitHub, streamlining code quality analysis and saving significant development time by assisting teammates in code quality evaluation and improvement strategies","Payment System Integration: Implemented the Stripe payment mechanism within applications, facilitating easier user payments and managing complex payment cycles through direct client consultations.","Interface and Performance Strategy: Developed a strategy that enhanced the user interface and doubled the access speed by delivering rapid and high-quality images.","Multi-Stage Delivery Pipeline: Configured a multi-stage Delivery Pipeline in GKE that\n              automated the workflow from code commit to deployment, incorporating custom build steps,\n              integrating unit and integration tests, and ensuring artifact storage in Container Registry.","Multilingual Application Development: Built applications in Golang and NodeJS on an open platform, enabling simultaneous site construction in two languages. Also developed custom Oauth2 authentication using Golang and Authlete."]},{title:"Full Stack Developer",company_name:"GPT Group",company_link:"https://www.gptgroup.net/",icon:"/images/companies/GPT.png",icon_bg:"#fbc3bc",date:"Jan 2021 - November 2021",points:["Project Contribution: Played a pivotal role in over 2 major projects, focusing on enhancing code quality and providing crucial code reviews for team members.","Sprint Planning and Management: Determined sprint goals and task lists for each sprint, collaborating with team members to accurately estimate the time and resources needed for each task","Project Ownership and Quality Assurance: Took full ownership of projects, ensuring the codebase was of the highest quality and managing technical debts effectively","Architectural Leadership: Provided critical architectural and design direction, assessed risks, and evaluated the impact of new features and implementations on the system’s integrity.","Code Refactoring and Efficiency: Led efforts in refactoring and creating reusable components, resulting in a significant  reduction of over 200 development hours monthly"]},{title:"Frontend Developer",company_name:"Freelancer",company_link:"#",icon:"/images/companies/freelancer.png",icon_bg:"#b7e4c7",date:"2019 - December 2020",points:["Adaptive Responsive Design: Implemented advanced responsive design techniques, enabling optimal application use across diverse devices.","JWT Authentication and Authorization: Integrated JWT for robust authentication and authorization processes.","Continuous Learning and Tech Upgrades: Embracing a growth mindset, frontend developers continually seek out new technologies, tools, and methodologies to stay updated with the rapidly evolving landscape of web development. This proactive approach involves engaging in online courses, attending workshops, reading industry blogs, and participating in developer communities to expand knowledge and skill sets.","Championing Single-Page Application Development: Architected a sophisticated single-page application leveraging React, Redux, and TypeScript, fostering efficient navigation and resource utilization within the organizational ecosystem.","Problem-Solving and Research: Frontend developers excel in problem-solving by meticulously researching and analyzing various solutions to address complex technical challenges. They leverage resources such as documentation, forums, and peer collaboration to explore alternative approaches, troubleshoot issues, and implement robust solutions that meet project requirements effectively. This dedication to thorough problem-solving ensures the delivery of high-quality and innovative frontend solutions."]}],a=[{name:"Contact",icon_url:"/icons/contact.svg",link:"/contact"},{name:"GitHub",icon_url:"/icons/github.svg",link:"https://github.com/hoainho"},{name:"LinkedIn",icon_url:"/icons/linkedin.svg",link:"https://www.linkedin.com/in/hoai-nho/"}]},9077:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let a=n(7437),i=n(1772),o=r(n(239));t.default=function(e){let{apiKey:t,...n}=e,r={...n,key:t},{html:s}=(0,i.GoogleMapsEmbed)(r);return(0,a.jsx)(o.default,{height:r.height||null,width:r.width||null,html:s,dataNtpc:"GoogleMapsEmbed"})}},9881:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.sendGAEvent=t.GoogleAnalytics=t.sendGTMEvent=t.GoogleTagManager=t.YouTubeEmbed=t.GoogleMapsEmbed=void 0;var a=n(9077);Object.defineProperty(t,"GoogleMapsEmbed",{enumerable:!0,get:function(){return r(a).default}});var i=n(5031);Object.defineProperty(t,"YouTubeEmbed",{enumerable:!0,get:function(){return r(i).default}});var o=n(7640);Object.defineProperty(t,"GoogleTagManager",{enumerable:!0,get:function(){return o.GoogleTagManager}}),Object.defineProperty(t,"sendGTMEvent",{enumerable:!0,get:function(){return o.sendGTMEvent}});var s=n(4404);Object.defineProperty(t,"GoogleAnalytics",{enumerable:!0,get:function(){return s.GoogleAnalytics}}),Object.defineProperty(t,"sendGAEvent",{enumerable:!0,get:function(){return s.sendGAEvent}})},5031:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});let a=n(7437),i=r(n(1877)),o=n(1772),s=r(n(239)),l={server:"beforeInteractive",client:"afterInteractive",idle:"lazyOnload",worker:"worker"};t.default=function(e){let{html:t,scripts:n,stylesheets:r}=(0,o.YouTubeEmbed)(e);return(0,a.jsx)(s.default,{height:e.height||null,width:e.width||null,html:t,dataNtpc:"YouTubeEmbed",children:null==n?void 0:n.map(e=>(0,a.jsx)(i.default,{src:e.url,strategy:l[e.strategy],stylesheets:r},e.url))})}},6463:function(e,t,n){"use strict";var r=n(1169);n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}})},1772:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.YouTubeEmbed=t.GoogleMapsEmbed=t.GoogleAnalytics=void 0;var r=n(5081);Object.defineProperty(t,"GoogleAnalytics",{enumerable:!0,get:function(){return r.GoogleAnalytics}});var a=n(4062);Object.defineProperty(t,"GoogleMapsEmbed",{enumerable:!0,get:function(){return a.GoogleMapsEmbed}});var i=n(1432);Object.defineProperty(t,"YouTubeEmbed",{enumerable:!0,get:function(){return i.YouTubeEmbed}})},5081:function(e,t,n){"use strict";var r=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.GoogleAnalytics=void 0;let i=a(n(6893)),o=n(5783);t.GoogleAnalytics=e=>{var t=r(e,[]);return(0,o.formatData)(i.default,t)}},4062:function(e,t,n){"use strict";var r=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.GoogleMapsEmbed=void 0;let i=a(n(6362)),o=n(5783);t.GoogleMapsEmbed=e=>{var t=r(e,[]);return(0,o.formatData)(i.default,t)}},1432:function(e,t,n){"use strict";var r=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.YouTubeEmbed=void 0;let i=a(n(5825)),o=n(5783);t.YouTubeEmbed=e=>{var t=r(e,[]);return(0,o.formatData)(i.default,t)}},5783:function(e,t){"use strict";function n(e,t,n=!1){return t?Object.keys(e).filter(e=>n?!t.includes(e):t.includes(e)).reduce((t,n)=>(t[n]=e[n],t),{}):{}}function r(e,t,n,r){let a=r&&Object.keys(r).length>0?new URL(Object.values(r)[0],e):new URL(e);return t&&n&&t.forEach(e=>{n[e]&&a.searchParams.set(e,n[e])}),a.toString()}function a(e,t,n,a,i){var o;if(!t)return`<${e}></${e}>`;let s=(null===(o=t.src)||void 0===o?void 0:o.url)?Object.assign(Object.assign({},t),{src:r(t.src.url,t.src.params,a,i)}):t,l=Object.keys(Object.assign(Object.assign({},s),n)).reduce((e,t)=>{let r=null==n?void 0:n[t],a=s[t],i=null!=r?r:a,o=!0===i?t:`${t}="${i}"`;return i?e+` ${o}`:e},"");return`<${e}${l}></${e}>`}Object.defineProperty(t,"__esModule",{value:!0}),t.formatData=t.createHtml=t.formatUrl=void 0,t.formatUrl=r,t.createHtml=a,t.formatData=function(e,t){var i,o,s,l,c;let u=n(t,null===(i=e.scripts)||void 0===i?void 0:i.reduce((e,t)=>[...e,...Array.isArray(t.params)?t.params:[]],[])),d=n(t,null===(s=null===(o=e.html)||void 0===o?void 0:o.attributes.src)||void 0===s?void 0:s.params),p=n(t,[null===(c=null===(l=e.html)||void 0===l?void 0:l.attributes.src)||void 0===c?void 0:c.slugParam]),m=n(t,[...Object.keys(u),...Object.keys(d),...Object.keys(p)],!0);return Object.assign(Object.assign({},e),{html:e.html?a(e.html.element,e.html.attributes,m,d,p):null,scripts:e.scripts?e.scripts.map(e=>Object.assign(Object.assign({},e),{url:r(e.url,e.params,u)})):null})}},4839:function(e,t,n){"use strict";function r(){for(var e,t,n=0,r="",a=arguments.length;n<a;n++)(e=arguments[n])&&(t=function e(t){var n,r,a="";if("string"==typeof t||"number"==typeof t)a+=t;else if("object"==typeof t){if(Array.isArray(t)){var i=t.length;for(n=0;n<i;n++)t[n]&&(r=e(t[n]))&&(a&&(a+=" "),a+=r)}else for(r in t)t[r]&&(a&&(a+=" "),a+=r)}return a}(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{W:function(){return r}}),t.Z=r},6893:function(e){"use strict";e.exports=JSON.parse('{"id":"google-analytics","description":"Install a Google Analytics tag on your website","website":"https://analytics.google.com/analytics/web/","scripts":[{"url":"https://www.googletagmanager.com/gtag/js","params":["id"],"strategy":"worker","location":"head","action":"append"},{"code":"window.dataLayer=window.dataLayer||[];window.gtag=function gtag(){window.dataLayer.push(arguments);};gtag(\'js\',new Date());gtag(\'config\',\'${args.id}\')","strategy":"worker","location":"head","action":"append"}]}')},6362:function(e){"use strict";e.exports=JSON.parse('{"id":"google-maps-embed","description":"Embed a Google Maps embed on your webpage","website":"https://developers.google.com/maps/documentation/embed/get-started","html":{"element":"iframe","attributes":{"loading":"lazy","src":{"url":"https://www.google.com/maps/embed/v1/place","slugParam":"mode","params":["key","q","center","zoom","maptype","language","region"]},"referrerpolicy":"no-referrer-when-downgrade","frameborder":"0","style":"border:0","allowfullscreen":true,"width":null,"height":null}}}')},5825:function(e){"use strict";e.exports=JSON.parse('{"id":"youtube-embed","description":"Embed a YouTube embed on your webpage.","website":"https://github.com/paulirish/lite-youtube-embed","html":{"element":"lite-youtube","attributes":{"videoid":null,"playlabel":null}},"stylesheets":["https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.css"],"scripts":[{"url":"https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.js","strategy":"idle","location":"head","action":"append"}]}')}},function(e){e.O(0,[974,471,971,23,744],function(){return e(e.s=6675)}),_N_E=e.O()}]);
//# sourceMappingURL=layout-70fc3e2350125dba.js.map