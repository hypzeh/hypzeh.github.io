if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return a[e]||(c=new Promise(async c=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=c}else importScripts(e),c()})),c.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},c=(c,a)=>{Promise.all(c.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(c)};self.define=(c,f,r)=>{a[c]||(a[c]=Promise.resolve().then(()=>{let a={};const n={uri:location.origin+c.slice(1)};return Promise.all(f.map(c=>{switch(c){case"exports":return a;case"module":return n;default:return e(c)}})).then(e=>{const c=r(...e);return a.default||(a.default=c),a})}))}}define("./sw.js",["./workbox-69b5a3b7"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"/19.css",revision:"8258768399ddcc9b4cf5bdb6c012201e"},{url:"/1cac021c57317117b34a6bfdf8340c12.woff",revision:"1e926e228a9e2e1e77034f624211e2b4"},{url:"/3525fd90c061dc5315d1a849248dc024.woff2",revision:"5b23eeb3a32b30e91682d601535d2a89"},{url:"/commons.2e65475442017bbc62ca.chunk.js",revision:"533e8792298c73d39af2f85f4b1ea8ca"},{url:"/commons.2e65475442017bbc62ca.chunk.js.LICENSE.txt",revision:"db96afc280249e446b568b0496860f1c"},{url:"/da39a3ee.72376a5944c017fe6761.chunk.js",revision:"fe4385db428ccb1345b3e6a5937367f8"},{url:"/da39a3ee.72376a5944c017fe6761.chunk.js.LICENSE.txt",revision:"29c0dc5695466ff613ba65f5bf835499"},{url:"/favicon.png",revision:"e58640e625a1666779bbbb88cc5197ca"},{url:"/framework.a1057558eb8171e7baec.chunk.js",revision:"a40a621c217009e8483a76a9c0a2f433"},{url:"/framework.a1057558eb8171e7baec.chunk.js.LICENSE.txt",revision:"34ad9c8bf4d74905b6b042d9f6310c3b"},{url:"/icon_144x144.c9ac5cc8a699c2cf04dad578dfee5cb6.png",revision:"c9ac5cc8a699c2cf04dad578dfee5cb6"},{url:"/icon_192x192.e7924e1f1ced9953c32519bdb40cbe0a.png",revision:"e7924e1f1ced9953c32519bdb40cbe0a"},{url:"/icon_36x36.f09116819ec5ce0c46bcf08ff883ae29.png",revision:"f09116819ec5ce0c46bcf08ff883ae29"},{url:"/icon_48x48.cb0a57219c1e89f5eb460088fbf575d2.png",revision:"cb0a57219c1e89f5eb460088fbf575d2"},{url:"/icon_512x512.d685c93d30f57c75ef7bfdbf3b0fed8a.png",revision:"d685c93d30f57c75ef7bfdbf3b0fed8a"},{url:"/icon_72x72.a029d984f7a4fda03419e2f7870493aa.png",revision:"a029d984f7a4fda03419e2f7870493aa"},{url:"/icon_96x96.e41305da9729318c5eefe4a0e0bba777.png",revision:"e41305da9729318c5eefe4a0e0bba777"},{url:"/index.html",revision:"44c9e79ff225543509eebf518c885f5d"},{url:"/main.a65492e4dcf05b24208f.js",revision:"e0f264d98b8beefbc22f92742c290aa4"},{url:"/manifest.733121a86f3b894bf53670fa1dc4b2e8.json",revision:"733121a86f3b894bf53670fa1dc4b2e8"},{url:"/mediator~approuter.ee6917188a190b60c8da.chunk.js",revision:"4072aa4d42e7e6c935aa50ce074f8696"},{url:"/mediator~icons.cb8316486b2ceaea4702.chunk.js",revision:"8553f35a10e1c8f156fb293ea60b3051"},{url:"/mediator~navbar.122a8ba08e37bffc5c7b.chunk.js",revision:"51888a151ef4ad63c9e9ee884df46776"},{url:"/ns~app.87bb430d3eaa3e281ca6.chunk.js",revision:"0ff261687e1c78833449d2cdf4d7f1e0"},{url:"/ns~area~global.3cdb2b1d00f65547d5cf.chunk.js",revision:"a370a2e400ae16f52873c83ac2ed5120"},{url:"/ns~area~home.c811728de61a2876f266.chunk.js",revision:"3bbdcb2cc4861c231bef824e05d0d474"},{url:"/ns~area~smallify.5055a846eff3aebdb195.chunk.js",revision:"084fc135711c838ef43f7d9499ba9da9"},{url:"/ns~global~not-found.ac67fcffa66a5ca86283.chunk.js",revision:"d823498f979bd74251fcfeca865c3943"},{url:"/ns~home~about-me.f867c46c6b1f807605eb.chunk.js",revision:"54e5c78157bb8915860077da02bde837"},{url:"/ns~home~home.066403e2842f99c4353b.chunk.js",revision:"0d59f6114900301956bcf1e13880a0ce"},{url:"/ns~providers.a0732a8732867a4ff35e.chunk.js",revision:"d636548e0d70ff59eba8869b01853e30"},{url:"/ns~smallify~overview.2fd4a1ab373c83a26585.chunk.js",revision:"93508dc705702c656fb2a6184d96058e"},{url:"/ns~splashscreen.148e49ee0d7c4ead0e84.chunk.js",revision:"0a6fc6ebe628d92a453410e60a100d00"},{url:"/public/62a419d37ccd9aba2f38071c0ae4299e.png",revision:"359e5dd345241683339772158c994ff4"},{url:"/public/c45743d1707214f744976ea52bcf4b1b.png",revision:"99b376b5af276ccd665065b6c8d04b78"},{url:"/vendors~main.17aa26870b514385179a.chunk.js",revision:"554e688f716a51ea6425118698fa8cfb"},{url:"/vendors~main.17aa26870b514385179a.chunk.js.LICENSE.txt",revision:"639caf3d0fbc4f3775ba257f99144a85"},{url:"/vendors~ns~app.8e97884dbda317abaa82.chunk.js",revision:"1e255e210ff40fd557240888d7b07233"},{url:"/vendors~ns~providers.0d03cdeb9209a1cf97d2.chunk.js",revision:"15cf90d50d7546c8abf999977ae78cb7"}],{})}));
