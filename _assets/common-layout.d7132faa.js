import{d as l,V as c,u as p,a as m,o as u,j as f,k as a,B as S,l as s,L as y,W as h}from"./entry.e63a48cf.js";const _=n=>Object.fromEntries(Object.entries(n).filter(([,i])=>i!==void 0)),w=(n,i)=>(e,t)=>(c(()=>n({..._(e),...t.attrs},t)),()=>{var r,o;return i?(o=(r=t.slots).default)==null?void 0:o.call(r):null}),v={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:[String,Object,Array],contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},j=l({name:"Link",inheritAttrs:!1,props:{...v,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:w(n=>({link:[n]}))}),B=l({name:"Head",inheritAttrs:!1,setup:(n,i)=>()=>{var e,t;return(t=(e=i.slots).default)==null?void 0:t.call(e)}}),L={class:"min-h-screen flex flex-col text-c-default"},b=`
<!-- Google Tag Manager (noscript) -->
<noscript>
<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-57C6ZK6"
height="0" width="0" style="display:none;visibility:hidden">
</iframe>
</noscript>
<!-- End Google Tag Manager (noscript) -->
`,k='<script type="module" src="/js/cookieconsent-config.js"><\/script>',T={__name:"common-layout",setup(n){const i=p(),{titleBase:e}=m(),t=h();return c({titleTemplate:r=>r?`${r} - ${e}`:e,meta:[{property:"og:locale",content:"fr_FR"},{property:"og:url",content:new URL(i.fullPath,t.public.BASE_URL).toString()},{property:"og:site_name",content:e},{property:"og:image",content:new URL("/intro0.jpg",t.public.BASE_URL).toString()},{property:"og:image:width",content:"1920"},{property:"og:image:height",content:"1275"},{property:"og:image:type",content:"image/jpeg"},{name:"twitter:site",content:"@fondsArmenienF"}],script:[{type:"text/javascript",innerHTML:`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

gtag('consent', 'default', {
'ad_storage': 'denied',
'analytics_storage': 'denied',
'personalization_storage': 'denied',
'functionality_storage': 'denied',
'security_storage': 'denied',
});
`},{type:"text/javascript",innerHTML:`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-57C6ZK6');
`}],__dangerouslyDisableSanitizers:["script"]}),(r,o)=>{const g=j,d=B;return u(),f("div",null,[a(d,null,{default:S(()=>[a(g,{rel:"icon",href:"/favicon.png",sizes:"32x32"}),a(g,{rel:"stylesheet",href:"https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v3.0.0-rc.17/dist/cookieconsent.css"})]),_:1}),s("div",{innerHTML:b}),s("div",{innerHTML:k}),s("div",L,[y(r.$slots,"default")])])}}},H=T;export{H as _};
