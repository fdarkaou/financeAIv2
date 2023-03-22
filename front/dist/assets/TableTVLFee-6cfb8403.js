import{a as P,d as w,e as C,f as B}from"./CardBox-7b751d6f.js";import{_ as L}from"./CardBoxModal-94c700e6.js";import{_ as M}from"./TableCheckboxCell-f607beec.js";import{_ as V}from"./BaseButtons-1de4e2b6.js";import{_ as A}from"./BaseButton-ff604aaf.js";import{h as T,f as D}from"./supastore-c6013ad2.js";import{r as c,o as r,c as l,g as i,w as g,b as e,e as m,F as _,f as p,d as f,t as d,a as N}from"./index-9dad1ecb.js";import{_ as F}from"./_plugin-vue_export-helper-c27b6911.js";const z={components:{CardBoxModal:L,TableCheckboxCell:M,BaseLevel:P,BaseButtons:V,BaseButton:A,UserAvatar:w,mdiEye:C,mdiTrashCan:B},props:{type:{type:String,default:"tvl"},pagesize:{type:Number,default:5}},data(){return{loading:!0,assets:{},items:[],isModalActive:!1,isModalDangerActive:!1,perPage:this.pagesize,currentPage:0,assetsPaginated:[]}},async created(){this.assets=await T(this.assets,this.type),this.assets=this.assets.assets,this.updateAssetsPaginated()},watch:{currentPage(){this.assetsPaginated=Array.from(this.assets).slice(this.perPage*this.currentPage,this.perPage*(this.currentPage+1))}},computed:{numPages(){return this.assets.length===0?0:Math.ceil(this.assets.length/this.perPage)},currentPageHuman(){return this.currentPage+1},pagesList(){const o=[];for(let a=0;a<this.numPages;a++)o.push(a);return o}},methods:{formatValue(o,a){return D(o,a)},updateAssetsPaginated(){this.assetsPaginated=Array.from(this.assets).slice(this.perPage*this.currentPage,this.perPage*(this.currentPage+1),this.loading=!1)}}},H={key:0,class:"text-center py-8"},E=e("div",{role:"status",class:"space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center"},[e("div",{class:"flex justify-center items-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700"},[e("svg",{class:"w-12 h-12 text-gray-200",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 640 512"},[e("path",{d:"M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"})])]),e("div",{class:"w-full"},[e("div",{class:"h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"}),e("div",{class:"h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"}),e("div",{class:"h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"}),e("div",{class:"h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"}),e("div",{class:"h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"}),e("div",{class:"h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"})]),e("span",{class:"sr-only"},"Loading...")],-1),S=[E],j={key:1},U=e("p",null,[f("Lorem ipsum dolor sit amet "),e("b",null,"adipiscing elit")],-1),I=e("p",null,"This is sample modal",-1),q={class:"text-xs text-gray-700 uppercase dark:text-gray-400"},G=e("th",null,null,-1),J=e("th",null,"Name",-1),K={key:0},O={key:1},Q=e("th",null,null,-1),R={"data-label":"logo",class:"h-6 w-6"},W={class:"h-6 w-6"},X=["src"],Y={"data-label":"Name",class:"w-1/3"},Z={key:0,"data-label":"Fees"},$={class:"text-gray-500 dark:text-slate-400"},ee={key:1,"data-label":"TVL",class:"text-right"},te={class:"text-gray-500 dark:text-slate-400"},se={class:"before:hidden lg:w-1 whitespace-nowrap"},ae={class:"h-6 w-6"},re=e("img",{src:"https://cdn1.iconfinder.com/data/icons/shopping-and-ecommerce-2/64/E-commerce_and_Shopping-81-256.png",alt:"Logo",class:"rounded-full"},null,-1),le=[re],oe={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"};function ne(o,a,u,ie,s,n){const y=c("CardBoxModal"),x=c("router-link"),h=c("BaseButton"),b=c("BaseButtons"),v=c("BaseLevel");return r(),l("div",null,[s.loading?(r(),l("div",H,S)):(r(),l("table",j,[i(y,{modelValue:s.isModalActive,"onUpdate:modelValue":a[0]||(a[0]=t=>s.isModalActive=t),title:"Information"},{default:g(()=>[U,I]),_:1},8,["modelValue"]),e("thead",q,[e("tr",null,[G,J,u.type==="fee_total24h"?(r(),l("th",K,"24H Fees")):m("",!0),u.type==="tvl"?(r(),l("th",O,"TVL")):m("",!0),Q])]),e("tbody",null,[(r(!0),l(_,null,p(s.assetsPaginated,t=>(r(),l("tr",{key:t.name},[e("th",R,[e("div",W,[e("img",{src:t.logo?t.logo:"https://cdn4.iconfinder.com/data/icons/leto-weather/64/na_not_available_weather_sun-512.png",alt:"Logo",class:"rounded-full"},null,8,X)])]),e("td",Y,[i(x,{to:`/projects/${t.symbol}`},{default:g(()=>[f(d(t.name),1)]),_:2},1032,["to"])]),u.type==="fee_total24h"?(r(),l("td",Z,[e("small",$,d(n.formatValue(t.fee_total24h,"fee_total24h")),1)])):m("",!0),u.type==="tvl"?(r(),l("td",ee,[e("small",te,d(n.formatValue(t.tvl,"tvl")),1)])):m("",!0),e("td",se,[e("div",ae,[e("a",{onClick:a[1]||(a[1]=k=>s.isModalActive=!0),class:"clickable"},le)])])]))),128))])])),e("div",oe,[i(v,null,{default:g(()=>[i(b,null,{default:g(()=>[i(h,{class:"text-xs text-gray-700 uppercase dark:text-gray-400",label:"Previous",onClick:a[2]||(a[2]=t=>s.currentPage=Math.max(s.currentPage-1,0)),color:o.page===s.currentPage?"lightDark":"whiteDark"},null,8,["color"]),(r(!0),l(_,null,p(n.pagesList.slice(Math.max(s.currentPage-1,0),Math.min(s.currentPage+1,n.numPages)),t=>(r(),N(h,{class:"text-xs text-gray-700 uppercase dark:text-gray-400",key:t,active:t===s.currentPage,label:t+1,color:t===s.currentPage?"lightDark":"whiteDark",small:"",onClick:k=>s.currentPage=t},null,8,["active","label","color","onClick"]))),128)),i(h,{class:"text-xs text-gray-700 uppercase dark:text-gray-400",label:"Next",onClick:a[3]||(a[3]=t=>s.currentPage=Math.min(s.currentPage+1,n.numPages-1)),color:o.page===s.currentPage?"lightDark":"whiteDark"},null,8,["color"])]),_:1}),e("small",null,"Page "+d(n.currentPageHuman)+" of "+d(n.numPages),1)]),_:1})])])}const fe=F(z,[["render",ne]]);export{fe as T};
//# sourceMappingURL=TableTVLFee-6cfb8403.js.map