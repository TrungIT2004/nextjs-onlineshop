(()=>{var e={};e.id=130,e.ids=[130],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},3413:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>h,originalPathname:()=>x,pages:()=>d,routeModule:()=>p,tree:()=>c});var s=r(482),n=r(9108),a=r(2563),o=r.n(a),i=r(8300),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(t,l);let c=["",{children:["category",{children:["[category]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,5898)),"C:\\Users\\Admin\\Desktop\\nextjs-onlineshop\\app\\category\\[category]\\page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,6422)),"C:\\Users\\Admin\\Desktop\\nextjs-onlineshop\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\Admin\\Desktop\\nextjs-onlineshop\\app\\category\\[category]\\page.tsx"],x="/category/[category]/page",h={require:r,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/category/[category]/page",pathname:"/category/[category]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},2400:(e,t,r)=>{Promise.resolve().then(r.bind(r,7041)),Promise.resolve().then(r.bind(r,9009)),Promise.resolve().then(r.t.bind(r,1900,23)),Promise.resolve().then(r.t.bind(r,1476,23))},6163:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,6840,23)),Promise.resolve().then(r.t.bind(r,8771,23)),Promise.resolve().then(r.t.bind(r,3225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,3982,23))},9599:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,1900,23)),Promise.resolve().then(r.t.bind(r,1476,23))},7041:(e,t,r)=>{"use strict";r.r(t),r.d(t,{CurrentProductContext:()=>a,default:()=>o});var s=r(5344),n=r(3729);let a=(0,n.createContext)({}),o=({children:e})=>{let[t,r]=(0,n.useState)(()=>[]);return s.jsx(a.Provider,{value:{currentProduct:t,setCurrentProduct:r},children:e})}},9009:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(5344),n=r(8428);let a=()=>{let e=(0,n.useRouter)();return(0,s.jsxs)("li",{className:"w-[80%] flex items-center ml-auto md:w-[55%]",children:[s.jsx("label",{htmlFor:"search",className:"opacity-0",children:"Search: "}),s.jsx("input",{type:"text",id:"search",onKeyDown:t=>{"Enter"===t.key&&e.push(`/search/${t.target.value}`)},className:"w-[100%] p-[6px] text-black outline-none rounded-full"})]})}},5898:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o,generateStaticParams:()=>a});var s=r(5036),n=r(1622);function a(){return[{category:"B\xeca hổ sơ"},{category:"Thước"},{category:"Giấy"},{category:"B\xfat ch\xec gỗ"},{category:"Băng keo"},{category:"Giấy ghi nhớ"},{category:"K\xe9o"},{category:"M\xe1y t\xednh"},{category:"Tập vỡ"},{category:"B\xfat bi"}]}let o=async({params:e})=>{let t=decodeURIComponent(e.category);console.log(decodeURIComponent(e.category));let r=await fetch(`https://officex-server.onrender.com/products/category/${t}`),a=await r.json();return(0,s.jsxs)("div",{className:"ml-4 mt-2",children:[(0,s.jsxs)("p",{className:"font-light",children:["Trang chủ / Cửa h\xe0ng / ",t," "]}),s.jsx("h2",{className:"text-2xl font-bold text-blue-600 mt-4 mb-2",children:t}),(0,s.jsxs)("p",{className:"font-light",children:["Hiển thị ",a?.length," kết quả"]}),s.jsx("ul",{className:"w-[100%] h-auto flex flex-wrap justify-center sm:justify-normal sm: gap-5",children:a?.map(e=>s.jsx("li",{className:"flex flex-col w-[200px]",children:s.jsx(n.Z,{productImg:e?.productImg,name:e?.name,priceInVND:e?.priceInVND})},e._id))})]})}},6422:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>j,metadata:()=>y});var s=r(5036);r(7633);var n=r(6274),a=r(2813),o=r(7984),i=r(6951),l=r(6843);let c=(0,l.createProxy)(String.raw`C:\Users\Admin\Desktop\nextjs-onlineshop\components\SearchBar.tsx`),{__esModule:d,$$typeof:x}=c,h=c.default,p=()=>s.jsx(s.Fragment,{children:s.jsx("nav",{className:"w-[100%] h-[56px] bg-[#7EC3F6] text-[#050505] font-semibold",children:(0,s.jsxs)("ul",{className:"w-[100%] h-[56px] flex",children:[s.jsx("li",{className:"w-[12%] h-[56px] flex items-center justify-center md:w-[115px] hover:bg-white hover:text-black",children:(0,s.jsxs)(n.default,{href:"/",className:"w-[100%] h-[100%] flex flex-row items-center justify-center",children:[s.jsx("div",{className:"w-[50px] h-[40px] flex items-center",children:s.jsx(a.default,{src:"/logo.webp",alt:"OfficeX Logo",width:50,height:40})}),s.jsx("span",{children:"officeX"})]})}),s.jsx(h,{}),s.jsx("li",{className:"w-[10%] items-center justify-center ml-auto hidden md:flex hover:bg-white hover:text-black",children:s.jsx(n.default,{href:"/",children:s.jsx(o.G,{icon:i.yYj,size:"2xl",style:{color:"#d8d4d4"}})})}),s.jsx("li",{className:"w-[10%] hidden items-center justify-center md:flex hover:bg-white hover:text-black",children:s.jsx(n.default,{href:"/login",children:"Đăng nhập"})})]})})}),m=(0,l.createProxy)(String.raw`C:\Users\Admin\Desktop\nextjs-onlineshop\components\Provider.tsx`),{__esModule:u,$$typeof:g}=m,f=m.default;(0,l.createProxy)(String.raw`C:\Users\Admin\Desktop\nextjs-onlineshop\components\Provider.tsx#CurrentProductContext`);let y={title:"OfficeX",description:"An online shop selling office products",manifest:"/manifest.json"};function j({children:e}){return s.jsx("html",{lang:"en",children:s.jsx("body",{children:(0,s.jsxs)(f,{children:[s.jsx(p,{}),e]})})})}},1622:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var s=r(5036),n=r(2813),a=r(6274);let o=e=>(0,s.jsxs)(a.default,{href:`/products/${e?.name}`,children:[s.jsx(n.default,{src:e?.productImg,width:200,height:200,alt:e?.name}),s.jsx("p",{className:"text-blue-600 w-[200px]",children:e?.name}),(0,s.jsxs)("p",{className:"text-red-700 w-[200px]",children:[e?.priceInVND," VNĐ"]})]})},7481:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(337);let n=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},7633:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,6,337],()=>r(3413));module.exports=s})();