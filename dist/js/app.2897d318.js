(function(){"use strict";var e={8560:function(e,t,n){var o=n(9242),r=n(3396);function i(e,t){const n=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(n)}var a=n(89);const l={},s=(0,a.Z)(l,[["render",i]]);var c=s,u=n(2483);const d={class:"home"},m=(0,r._)("h1",null,"Top 250 Films!",-1);function f(e,t,n,o,i,a){const l=(0,r.up)("HomepageHeader"),s=(0,r.up)("MoviesList");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(l),(0,r._)("div",d,[m,(0,r.Wm)(s)])],64)}var h=n(7139);const v=e=>((0,r.dD)("data-v-2b5c0c7a"),e=e(),(0,r.Cn)(),e),p={key:0,id:"header"},g=v((()=>(0,r._)("br",null,null,-1))),b=v((()=>(0,r._)("i",null,"Coming soon...",-1))),y={id:"headerPost"},k=["src"],w=["src"],_={key:1,id:"noTrailer"},C=v((()=>(0,r._)("p",null,"No trailer available",-1))),j=[C];function E(e,t,n,o,i,a){return(0,r.wg)(),(0,r.iD)(r.HY,null,[1==this.banner?((0,r.wg)(),(0,r.iD)("div",p,[1==this.banner?((0,r.wg)(),(0,r.iD)("a",{key:0,onClick:t[0]||(t[0]=(...e)=>a.toggleBanner&&a.toggleBanner(...e)),id:"bannerToggle"},"▲")):(0,r.kq)("",!0),g,b,(0,r._)("div",y,[(0,r._)("img",{src:i.movie.image},null,8,k),(0,r._)("h4",null,(0,h.zw)(i.movie.title),1),(0,r._)("p",null,(0,h.zw)(i.movie.plot),1),i.movie.trailer?((0,r.wg)(),(0,r.iD)("iframe",{key:0,src:i.movie.trailer+"?autoplay=false&width=240",height:"180",width:"300"},null,8,w)):((0,r.wg)(),(0,r.iD)("div",_,j))])])):(0,r.kq)("",!0),0==this.banner?((0,r.wg)(),(0,r.iD)("a",{key:1,onClick:t[1]||(t[1]=(...e)=>a.toggleBanner&&a.toggleBanner(...e)),id:"bannerToggleCollapsed"},"▼")):(0,r.kq)("",!0)],64)}var H=n(65),M={name:"HomepageHeader",computed:{...(0,H.rn)({banner:e=>e.banner})},data(){return{movie:{}}},methods:{toggleBanner(){this.$store.commit("setBanner")}},mounted(){function e(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}fetch("https://imdb-api.com/en/API/ComingSoon/pk_tkset0jkjlt6y6xiz").then((e=>e.json())).then((t=>t.items[e(1,t.items.length)])).then((e=>{this.movie=e,fetch(`https://imdb-api.com/en/API/Trailer/pk_tkset0jkjlt6y6xiz/${e.id}`).then((e=>e.json())).then((e=>{this.movie.trailer=e.linkEmbed,this.movie.plot=e.videoDescription}))}))}};const T=(0,a.Z)(M,[["render",E],["__scopeId","data-v-2b5c0c7a"]]);var D=T;const O=e=>((0,r.dD)("data-v-54abd0d7"),e=e(),(0,r.Cn)(),e),S=O((()=>(0,r._)("span",{id:"slider"},null,-1))),A=[S],B={id:"movies"},x=["onClick"],P={class:"details"},L={class:"rank"},z={class:"title"},I={class:"rating"},N=["src"];function Y(e,t,n,o,i,a){return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("button",{id:"rank",onClick:t[0]||(t[0]=e=>a.sortRank())},"Sort by Rank"),(0,r._)("button",{id:"alphabet",onClick:t[1]||(t[1]=e=>a.sortAlphabetical())},"Sort A-Z"),(0,r._)("div",{id:"sliderBar",onClick:t[2]||(t[2]=e=>a.jumpScroll(e))},A),(0,r._)("div",B,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.movies,(e=>((0,r.wg)(),(0,r.iD)("div",{class:"movie",key:e.id,onClick:t=>a.routeMovie(e)},[(0,r._)("span",P,[(0,r._)("h2",L,(0,h.zw)(e.rank),1),(0,r._)("h2",z,(0,h.zw)(e.title),1),(0,r._)("p",I,(0,h.zw)(e.imDbRating)+"/10",1)]),(0,r._)("img",{class:"image",src:e.image},null,8,N)],8,x)))),128))])],64)}n(7658);var q={name:"MoviesList",computed:{...(0,H.rn)({movies:e=>e.movies})},methods:{routeMovie(e){this.$store.commit("setMovie",e),this.$router.push({name:"movie"})},sortRank(){this.movies.sort(((e,t)=>e.rank-t.rank))},sortAlphabetical(){this.movies.sort(((e,t)=>e.title<t.title?-1:e.title>t.title?1:0))},jumpScroll(e){const t=e.clientY-50;document.getElementById("slider").style.top=t+"px";const n=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),o=t/500*n;window.scrollTo(0,o)},handleScroll(){const e=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),t=window.scrollY,n=t/e*500;document.getElementById("slider").style.top=n+"px"}},data(){return{movies:[]}},mounted(){fetch("https://imdb-api.com/en/API/Top250Movies/pk_tkset0jkjlt6y6xiz").then((e=>e.json())).then((e=>{console.log(e),this.movies=e.items})).catch((e=>{console.log(e),alert("Error: "+e.message)})),window.addEventListener("scroll",this.handleScroll)}};const F=(0,a.Z)(q,[["render",Y],["__scopeId","data-v-54abd0d7"]]);var Z=F,R={name:"HomeView",components:{HomepageHeader:D,MoviesList:Z}};const $=(0,a.Z)(R,[["render",f]]);var K=$;const W=[{path:"/",name:"home",component:K},{path:"/movie",name:"movie",component:()=>n.e(929).then(n.bind(n,3797))}],U=(0,u.p7)({history:(0,u.PO)(),routes:W});var V=U,G=(0,H.MT)({state:{movie:{},banner:!0},getters:{movie:e=>e.movie,banner:e=>e.banner},mutations:{setMovie(e,t){e.movie=t},setBanner(e){e.banner=!e.banner}},actions:{setMovie({commit:e},t){e("setMovie",t)},setBanner({commit:e}){e("setBanner")}}});(0,o.ri)(c).use(G).use(V).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var a=1/0;for(u=0;u<e.length;u++){o=e[u][0],r=e[u][1],i=e[u][2];for(var l=!0,s=0;s<o.length;s++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(l=!1,i<a&&(a=i));if(l){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/movie.ef00a5b8.js"}}(),function(){n.miniCssF=function(e){return"css/movie.3b7222f6.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="electroneum:";n.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var l,s;if(void 0!==i)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+i){l=d;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+i),l.src=o),e[o]=[r];var m=function(t,n){l.onerror=l.onload=null,clearTimeout(f);var r=e[o];if(delete e[o],l.parentNode&&l.parentNode.removeChild(l),r&&r.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=m.bind(null,l.onerror),l.onload=m.bind(null,l.onload),s&&document.head.appendChild(l)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(i){if(r.onerror=r.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),l=i&&i.target&&i.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=a,s.request=l,r.parentNode.removeChild(r),o(s)}};return r.onerror=r.onload=i,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===t))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===e||i===t)return r}},o=function(o){return new Promise((function(r,i){var a=n.miniCssF(o),l=n.p+a;if(t(a,l))return r();e(o,l,r,i)}))},r={143:0};n.f.miniCss=function(e,t){var n={929:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(t),l=new Error,s=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",l.name="ChunkLoadError",l.type=i,l.request=a,r[1](l)}};n.l(a,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],l=o[1],s=o[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(s)var u=s(n)}for(t&&t(o);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},o=self["webpackChunkelectroneum"]=self["webpackChunkelectroneum"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(8560)}));o=n.O(o)})();
//# sourceMappingURL=app.2897d318.js.map