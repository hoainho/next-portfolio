(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[701],{1534:function(e,t,a){Promise.resolve().then(a.bind(a,6939))},6939:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return f}});var l=a(7437),s=a(2265),n=a(1572),r=a(3149),o=a(5432),i=a(6949);function c(e){let{currentAnimation:t,...a}=e,n=(0,s.useRef)(null),{nodes:r,materials:c,animations:m}=(0,o.L)("/3d/fox.glb"),{actions:d}=(0,i.v)(m,n);return(0,s.useEffect)(()=>{if(Object.values(d).forEach(e=>null==e?void 0:e.stop()),"all"===t&&Object.values(d).forEach(e=>null==e?void 0:e.play()),d[t]){var e;null===(e=d[t])||void 0===e||e.play()}},[d,t]),(0,l.jsx)("group",{ref:n,...a,dispose:null,children:(0,l.jsxs)("group",{name:"Sketchfab_Scene",children:[(0,l.jsx)("primitive",{object:r.GLTF_created_0_rootJoint}),(0,l.jsx)("skinnedMesh",{name:"Object_7",geometry:r.Object_7.geometry,material:c.PaletteMaterial001,skeleton:r.Object_7.skeleton}),(0,l.jsx)("skinnedMesh",{name:"Object_8",geometry:r.Object_8.geometry,material:c.PaletteMaterial001,skeleton:r.Object_8.skeleton}),(0,l.jsx)("skinnedMesh",{name:"Object_9",geometry:r.Object_9.geometry,material:c.PaletteMaterial001,skeleton:r.Object_9.skeleton}),(0,l.jsx)("skinnedMesh",{name:"Object_10",geometry:r.Object_10.geometry,material:c.PaletteMaterial001,skeleton:r.Object_10.skeleton}),(0,l.jsx)("skinnedMesh",{name:"Object_11",geometry:r.Object_11.geometry,material:c.PaletteMaterial001,skeleton:r.Object_11.skeleton})]})})}a(2811).OH.assign({frameLoop:"demand"}),o.L.preload("/3d/fox.glb");var m=()=>{let[e,t]=(0,s.useState)({show:!1,text:"",type:"danger"});return{alert:e,showAlert:e=>{let{text:a,type:l="danger"}=e;return t({show:!0,text:a,type:l})},hideAlert:()=>t({show:!1,text:"",type:"danger"})}},d=e=>{let{type:t,text:a}=e;return(0,l.jsx)("div",{className:"z-10 absolute top-10 left-0 right-0 flex justify-center items-center",children:(0,l.jsxs)("div",{className:"p-2 ".concat("danger"===t?"bg-red-800":"bg-blue-800"," items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"),role:"alert",children:[(0,l.jsx)("p",{className:"flex rounded-full ".concat("danger"===t?"bg-red-500":"bg-blue-500"," uppercase px-2 py-1 text-xs font-semibold mr-3"),children:"danger"===t?"Failed":"Success"}),(0,l.jsx)("p",{className:"mr-2 text-left",children:a})]})})},u=a(9881),x=a(2289),f=()=>{let e=(0,s.useRef)(),[t,a]=(0,s.useState)({name:"",email:"",message:""}),{alert:o,showAlert:i,hideAlert:f}=m(),[h,g]=(0,s.useState)(!1),[p,b]=(0,s.useState)("idle"),j=e=>{let{target:{name:l,value:s}}=e;a({...t,[l]:s})},v=e=>{var t;(null==e?void 0:null===(t=e.target)||void 0===t?void 0:t.name)==="email"?b("walk.left"):b("walk")},y=()=>b("idle");return(0,l.jsxs)("section",{className:"relative flex lg:flex-row flex-col max-container",children:[o.show&&(0,l.jsx)(d,{...o}),(0,l.jsxs)("div",{className:"flex-1 min-w-[50%] flex flex-col",children:[(0,l.jsx)("h1",{className:"head-text",children:"Get in Touch"}),(0,l.jsxs)("form",{ref:e,onSubmit:e=>(e.preventDefault(),g(!0),b("hit"),(0,u.sendGAEvent)({event:"Send message by email"}),n.ZP.send("service_qzoauqn","template_brtlo2c",{from_name:t.name,to_name:"Ho\xe0i Nhớ",from_email:t.email,to_email:"hoainho.work@gmail.com",message:t.message},"5iCt0h7Wr2UD3S5Kr").then(()=>{g(!1),i({show:!0,text:"Thank you for your message. I appreciate your communication. Allow me a moment to review its contents.",type:"success"}),setTimeout(()=>{f(),b("idle"),a({name:"",email:"",message:""})},3e3)},e=>{g(!1),b("idle"),console.log("Error mailer:",e),i({show:!0,text:"Regrettably, I have not yet received your message. Please try again \uD83D\uDE22",type:"danger"})}),!0),className:"w-full flex flex-col gap-7 mt-14",children:[(0,l.jsxs)("label",{className:"text-black-500 font-semibold",children:["Name",(0,l.jsx)("input",{type:"text",name:"name",className:"input",placeholder:"Fox",required:!0,value:t.name,onChange:j,onFocus:v,onBlur:y})]}),(0,l.jsxs)("label",{className:"text-black-500 font-semibold",children:["Email",(0,l.jsx)("input",{type:"email",name:"email",className:"input",placeholder:"Fox@gmail.com",required:!0,value:t.email,onChange:j,onFocus:v,onBlur:y})]}),(0,l.jsxs)("label",{className:"text-black-500 font-semibold",children:["Your Message",(0,l.jsx)("textarea",{name:"message",rows:4,className:"textarea",placeholder:"Write your thoughts here...",value:t.message,onChange:j,onFocus:v,onBlur:y})]}),(0,l.jsx)("button",{type:"submit",disabled:h,className:"btn",onFocus:v,onBlur:y,"aria-label":"Send Message",children:h?"Sending...":"Send Message"})]})]}),(0,l.jsx)("div",{className:"lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]",children:(0,l.jsxs)(r.Xz,{camera:{position:[0,0,5],fov:75,near:.1,far:1e3},children:[(0,l.jsx)("directionalLight",{position:[0,0,1],intensity:2.5}),(0,l.jsx)("ambientLight",{intensity:1}),(0,l.jsx)("pointLight",{position:[5,10,0],intensity:2}),(0,l.jsx)("spotLight",{position:[10,10,10],angle:.15,penumbra:1,intensity:2}),(0,l.jsx)(s.Suspense,{fallback:(0,l.jsx)(x.Z,{}),children:(0,l.jsx)(c,{currentAnimation:p,position:[.5,.35,0],rotation:[12.629,-.6,0],scale:[.5,.5,.5]})})]})})]})}},2289:function(e,t,a){"use strict";a.d(t,{Z:function(){return u}});var l=a(7437),s=a(2615),n=a(2325),r=a(2265),o=a(4902),i=a(4839),c=a(6164);let m=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,c.m6)((0,i.W)(t))},d=r.forwardRef((e,t)=>{let{className:a,value:s,...n}=e;return(0,l.jsx)(o.fC,{ref:t,className:m("relative h-4 w-full overflow-hidden rounded-full bg-white drop-shadow-[0px_3px_15px_rgba(64,193,212,1)]",a),...n,children:(0,l.jsx)(o.z$,{className:"h-full w-full flex-1 bg-linear-wave transition-all ease-in-out",style:{transform:"translateX(-".concat(100-(s||0),"%)")}})})});d.displayName=o.fC.displayName;var u=()=>{let{loaded:e,total:t}=(0,s.S)();return(0,l.jsxs)(n.V,{as:"div",center:!0,className:"flex-center flex-col",children:[(0,l.jsxs)("p",{className:"animate-bounce text-[22px] text-[#40c9ff] font-extrabold mt-[40px]",children:[e," / ",t]}),(0,l.jsxs)("div",{className:"flex-center gap-[10px]",children:[(0,l.jsx)(d,{value:e/t*100,className:"w-[200px] sm:w-[280px]"}),(0,l.jsxs)("p",{className:"text-[18px] text-[#40c9ff] font-black",children:[(e/t*100).toFixed(2),"%"]})]})]})}}},function(e){e.O(0,[689,471,773,893,723,971,23,744],function(){return e(e.s=1534)}),_N_E=e.O()}]);
//# sourceMappingURL=page-0d95238b051c29cc.js.map