import{_ as p}from"./image.vue.316cf01f.js";import{d as g,h as r,o as m,j as d,l as s,b as e,k as b,f,t as u,q as h,s as v}from"./entry.e63a48cf.js";import{g as w,f as y,a as k}from"./content-helpers.dcdddb83.js";import{f as B}from"./helpers.44798cb7.js";const C={class:"border p-5 flex flex-col justify-between"},N={key:0,class:"mb-4"},A=["href"],E={class:"font-title uppercase"},F={class:"font-title font-bold"},$=["href"],j={class:"mt-4"},x={key:0,class:"mt-4"},D=["href"],R=g({__name:"news-list-item",props:{item:{}},setup(l){const a=l,{$imageUrl:c}=h(),i=r(()=>w(a.item.content,180)),o=r(()=>{if(a.item.slug)return`/news/${a.item.slug}`});return(t,n)=>{const _=p;return m(),d("div",C,[s("div",null,[t.item.thumbnail?(m(),d("div",N,[s("a",{href:e(o)},[b(_,{alt:t.item.title,src:e(c)(t.item.thumbnail,{width:"400"}),"image-class":"max-h-80 md:max-h-60 md:h-60 object-cover",icon:"fa-solid fa-file-lines"},null,8,["alt","src"])],8,A)])):f("",!0),s("div",E,u(e(y)(t.item.date_published)),1),s("h4",F,[s("a",{href:e(o),class:"inline-block hover:text-armenian-orange transition"},u(e(k)(t.item.title)),9,$)]),s("div",j,u(e(i)),1)]),e(o)?(m(),d("div",x,[s("a",{href:e(o),class:"button-small-orange"}," LIRE LA SUITE ",8,D)])):f("",!0)])}}}),U=async(l,a)=>{const{$directus:c}=h(),{data:i}=await v("news",()=>c.items("news").readByQuery({fields:B(3),sort:["-date_published"],page:l.value,limit:a,meta:"filter_count"})),o=r(()=>{var n;return Math.ceil(((n=i.value)==null?void 0:n.meta.filter_count)/a)}),t=r(()=>{var n;return(n=i.value)==null?void 0:n.data});return{totalPages:o,news:t}};export{R as _,U as u};
