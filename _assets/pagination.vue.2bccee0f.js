import{D as y,r as x,d as q,E,h as f,G as v,o as a,j as o,b as s,f as i,p as m,F as N,m as B,l as n,t as P}from"./entry.e63a48cf.js";const C=()=>{let h=y();return{currentPage:x(Number(h.query.page)||1)}},M={key:0,class:"flex flex-wrap justify-center gap-4"},j=["href"],D=n("div",{class:"min-w-[14px]"},[n("i",{class:"fa-solid fa-chevron-left"})],-1),F=[D],R=["href"],V=n("div",{class:"min-w-[14px]"},"1",-1),z=[V],G={key:2,class:"px-2"},L=["href"],S={class:"min-w-[14px]"},U={key:3,class:"px-2"},A=["href"],H={class:"min-w-[14px]"},I=["href"],J=n("div",{class:"min-w-[14px]"},[n("i",{class:"fa-solid fa-chevron-right"})],-1),K=[J],_=1,Q=q({__name:"pagination",props:{totalPages:{}},setup(h){const p=h;let g=y(),b=E();const{currentPage:t}=C(),u=f(()=>{let e=[],c=Math.max(t.value-_,2),r=Math.min(c+2*_,p.totalPages-1);r-c<2*_&&(c=Math.max(r-2*_,2));for(let d=c;d<=r;d++)e.push(d);return e}),w=f(()=>u.value[0]>2),k=f(()=>u.value[u.value.length-1]<p.totalPages-1),l=e=>b.resolve({query:{...g.query,page:e}}).href;return v(()=>{t.value=Number(g.query.page)||1}),v(()=>{t.value=Number(g.query.page)||1}),(e,c)=>e.totalPages>0?(a(),o("div",M,[s(t)>1?(a(),o("a",{key:0,class:"button-pagination arrow",href:l(s(t)-1)},F,8,j)):i("",!0),e.totalPages>1?(a(),o("a",{key:1,class:m(["button-pagination",s(t)===1?"active":""]),href:l(1)},z,10,R)):i("",!0),s(w)?(a(),o("div",G,"...")):i("",!0),(a(!0),o(N,null,B(s(u),r=>(a(),o("a",{class:m(["button-pagination",r===s(t)?"active":""]),href:l(r)},[n("div",S,P(r),1)],10,L))),256)),s(k)?(a(),o("div",U,"...")):i("",!0),n("a",{class:m(["button-pagination",e.totalPages===s(t)?"active":""]),href:l(e.totalPages)},[n("div",H,P(e.totalPages),1)],10,A),s(t)<e.totalPages?(a(),o("a",{key:4,class:"button-pagination arrow",href:l(s(t)+1)},K,8,I)):i("",!0)])):i("",!0)}});export{Q as _,C as u};