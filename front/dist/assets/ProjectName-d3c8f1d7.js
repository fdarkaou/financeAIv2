import{a as o,_ as l}from"./CardBox-7b751d6f.js";import{_ as n}from"./PillTag-588be2e0.js";import{u,o as d,a as m,w as s,g as a,b as e,t as c,z as p}from"./index-9dad1ecb.js";const _=["src"],f={class:"px-4 space-y-1 md:text-left md:mr-6"},g={class:"text-xl"},y={class:"text-gray-500 dark:text-slate-400"},x={class:"text-center md:text-right space-y-2"},h={class:"text-sm text-gray-500"},v={__name:"ProjectName",props:{project:{type:Number,required:!0},tagline:{type:String,required:!0},sector:{type:String,required:!0},ticker:{type:String,required:!0},logo:{type:String,required:!0}},setup(t){const r=t,i=u(()=>r.sector==="Smart Contract Platforms"?{type:"info"}:r.sector==="Decentralized Exchange"?{type:"success"}:r.sector==="Currencies"?{type:"warning"}:{type:"danger"});return(b,S)=>(d(),m(l,{class:"mb-6 last:mb-0","is-hoverable":""},{default:s(()=>[a(o,null,{default:s(()=>[a(o,{type:"justify-start"},{default:s(()=>[e("img",{src:t.logo,class:"w-10 h-10 rounded-full"},null,8,_),e("div",f,[e("h4",g,c(t.project),1),e("p",y,c(t.tagline),1)])]),_:1}),e("div",x,[e("p",h,c(t.ticker),1),e("div",null,[a(n,{color:p(i).type,label:t.sector,small:""},null,8,["color","label"])])])]),_:1})]),_:1}))}};export{v as _};
//# sourceMappingURL=ProjectName-d3c8f1d7.js.map