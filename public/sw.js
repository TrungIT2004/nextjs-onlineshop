if(!self.define){let e,s={};const c=(c,i)=>(c=new URL(c+".js",i).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(i,a)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let r={};const t=e=>c(e,n),o={module:{uri:n},exports:r,require:t};s[n]=Promise.all(i.map((e=>o[e]||t(e)))).then((e=>(a(...e),r)))}}define(["./workbox-5608bffc"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/JGAeBz6W5XjB2Ew7Dp3ub/_buildManifest.js",revision:"e0a21c7d7f93d89dce16df0231dc76f2"},{url:"/_next/static/JGAeBz6W5XjB2Ew7Dp3ub/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/468-a82b79ee5f020b8f.js",revision:"JGAeBz6W5XjB2Ew7Dp3ub"},{url:"/_next/static/chunks/647-539eb2f8b1a353cf.js",revision:"JGAeBz6W5XjB2Ew7Dp3ub"},{url:"/_next/static/chunks/app/_not-found-162c9bc58009841d.js",revision:"JGAeBz6W5XjB2Ew7Dp3ub"},{url:"/_next/static/chunks/app/category/%5Bcategory%5D/page-9b396b16d37557cf.js",revision:"JGAeBz6W5XjB2Ew7Dp3ub"},{url:"/_next/static/chunks/app/layout-fcaa14913bce36a4.js",revision:"JGAeBz6W5XjB2Ew7Dp3ub"},{url:"/_next/static/chunks/app/page-606a5e9d334aa8e5.js",revision:"JGAeBz6W5XjB2Ew7Dp3ub"},{url:"/_next/static/chunks/app/products/%5BproductName%5D/page-9bebb75298fa7d38.js",revision:"JGAeBz6W5XjB2Ew7Dp3ub"},{url:"/_next/static/chunks/app/search/%5BsearchValue%5D/page-15ae2daf6b85489c.js",revision:"JGAeBz6W5XjB2Ew7Dp3ub"},{url:"/_next/static/chunks/fd9d1056-9ce8af473043be9d.js",revision:"JGAeBz6W5XjB2Ew7Dp3ub"},{url:"/_next/static/chunks/framework-aec844d2ccbe7592.js",revision:"JGAeBz6W5XjB2Ew7Dp3ub"},{url:"/_next/static/chunks/main-app-ea4b7e2603dbeb23.js",revision:"JGAeBz6W5XjB2Ew7Dp3ub"},{url:"/_next/static/chunks/main-c9f4b2803fce1317.js",revision:"JGAeBz6W5XjB2Ew7Dp3ub"},{url:"/_next/static/chunks/pages/_app-75f6107b0260711c.js",revision:"JGAeBz6W5XjB2Ew7Dp3ub"},{url:"/_next/static/chunks/pages/_error-9a890acb1e81c3fc.js",revision:"JGAeBz6W5XjB2Ew7Dp3ub"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-21c141dec714a2b4.js",revision:"JGAeBz6W5XjB2Ew7Dp3ub"},{url:"/_next/static/css/4fc9ecec1d6558a3.css",revision:"4fc9ecec1d6558a3"},{url:"/assets/icons/calculations.webp",revision:"50bbf20b249d0ed1650dd3108a70d171"},{url:"/assets/icons/color-pencil.webp",revision:"9c24fcf7954f118ebceba96d9e181673"},{url:"/assets/icons/cutter.webp",revision:"ea775e2d4a4cd8aa1009797ae733095f"},{url:"/assets/icons/folders.webp",revision:"824deb59999fdad71a292095f8e74ede"},{url:"/assets/icons/notebook.webp",revision:"cf5f147bbf8d363597fa038314e8e980"},{url:"/assets/icons/papers.webp",revision:"53188ed8089058a5387aeffd7412cba5"},{url:"/assets/icons/pen.webp",revision:"80e0674329d646d761054cf554bc7827"},{url:"/assets/icons/post-it.webp",revision:"85e88a3e9d3e8ad79d68889bcec1a96a"},{url:"/assets/icons/ruler.webp",revision:"7021ba1da288ded2a6aa3e082f6fc962"},{url:"/assets/icons/tape.webp",revision:"0c2d8fba90a5da776ff886bf31abf149"},{url:"/icons/android-chrome-192x192.png",revision:"06ab6957bed5bc5c2d43666c42ad0040"},{url:"/icons/android-chrome-512x512.png",revision:"c70b14811e91257df04c6493f078665f"},{url:"/icons/apple-touch-icon.png",revision:"d128aa969e2c405be2ba3e3cbdde63db"},{url:"/icons/favicon-16x16.png",revision:"9b153e2546ee856ebd1230008d488a42"},{url:"/icons/favicon-32x32.png",revision:"feaf945f09aaf71d449c6cf5a385bd3e"},{url:"/icons/favicon.ico",revision:"4aa6887f2cd71c45d70ce00480082380"},{url:"/icons/pwa-512x512.png",revision:"360dcbae094891b6c7d4db52f412686a"},{url:"/icons/site.webmanifest",revision:"053100cb84a50d2ae7f5492f7dd7f25e"},{url:"/logo.webp",revision:"e5b12b38a324319c2a79803f6a8e28a2"},{url:"/manifest.json",revision:"87cf970b33a7030a89a9bdaf8eb8fd80"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute((({url:e})=>e.pathname.startsWith("/category")),new e.CacheFirst({cacheName:"products",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
