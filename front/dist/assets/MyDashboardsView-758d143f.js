import{_ as C,a as M,d as T,e as L,f as j,b as N,c as A,g as $}from"./CardBox-7b751d6f.js";import{B as S}from"./BreadCrumb-759eb96d.js";import{M as V}from"./MyDashboardsForm-4121f7ee.js";import{s as B,o,c as n,d as v,t as c,F as b,f as p,b as e,r as d,a as P,w as h,e as F,g as l,m as U,k as q}from"./index-9dad1ecb.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";import I from"./MyDashboardsForReal-93dbacf7.js";import{_ as W}from"./CardBoxModal-94c700e6.js";import{_ as E}from"./BaseButtons-1de4e2b6.js";import{_ as G}from"./BaseButton-ff604aaf.js";import{_ as H}from"./ProjectName-d3c8f1d7.js";import{_ as O}from"./SectionTitleLineWithButton-65f55b8f.js";import"./SuccessError-77b01219.js";import"./supastore-c6013ad2.js";import"./ChartComponent-685c79d5.js";import"./LoadingComponent-0d9f5b13.js";import"./CardBoxComponentTitle-d7ea4c8e.js";import"./PillTag-588be2e0.js";const J={data(){return{dataset:{}}},async created(){await this.getDataset(),this.dataset=this.dataset.filter(t=>t.symbol==="GMX"),this.dataset=this.dataset[0]},methods:{async getDataset(){try{let{data:t,error:s}=await B.from("jsoncoin").select("payload").order("id",{ascending:!1});if(console.log("jsoncoin",t),this.dataset=t[0].payload,s)throw s}catch(t){console.log("error",t)}}}};function R(t,s,f,x,a,i){return o(),n("div",null,[v(" ja of nee "+c(a.dataset.percent_change_usd_last_24_hours)+" ",1),(o(!0),n(b,null,p(a.dataset,(u,_)=>(o(),n("div",{key:_},[e("b",null,c(_)+":",1),v(" "+c(u),1)]))),128))])}const X=D(J,[["render",R]]);const Y={components:{CardBoxModal:W,CardBox:C,BaseLevel:M,BaseButtons:E,BaseButton:G,UserAvatar:T,mdiEye:L,mdiTrashCan:j},data(){return{dashboardsPaginated:[],currentPage:0,perPage:5,modalTwoActive:!1,dashboardToDelete:null}},props:{myDashboards:{type:Array,default:()=>[],required:!0}},async created(){await this.updateDashboardsPaginated()},watch:{currentPage(){this.dashboardsPaginated=this.myDashboards.slice(this.perPage*this.currentPage,this.perPage*(this.currentPage+1))}},computed:{numPages(){return this.myDashboards.length===0?0:Math.ceil(this.myDashboards.length/this.perPage)},currentPageHuman(){return this.currentPage+1},pagesList(){const t=[];for(let s=0;s<this.numPages;s++)t.push(s);return t}},methods:{showDeleteModal(t){this.dashboardToDelete=t,this.modalTwoActive=!0},async deleteDashboard(){const{error:t}=await B.from("dashboard").delete().eq("id",this.dashboardToDelete.id);console.log("delete dashboard",this.dashboardToDelete.id),t?console.error(t):location.reload()},formatDate(t){if(t)return new Date(t).toLocaleString()},updateDashboardsPaginated(){const t=this.perPage*this.currentPage,s=t+this.perPage;this.dashboardsPaginated=this.myDashboards.slice(t,s)}}},z=e("p",null,[e("b",null,"Following dashboard will be deleted:")],-1),K=e("thead",{class:"text-xs text-gray-700 uppercase dark:text-gray-400"},[e("tr",null,[e("th"),e("th",null,"Dashboard name"),e("th",null,"Coins"),e("th",null,"Metrics"),e("th",null,"Created"),e("th")])],-1),Q=e("th",{"data-label":"logo",class:"h-6 w-6"},[e("div",{class:"h-6 w-6"},[e("img",{src:"https://cdn4.iconfinder.com/data/icons/business-intelligence-flat/60/Business_Dashboard-intelligence-solutions-512.png",alt:"data",width:"20",height:"20"})])],-1),Z={"data-label":"Name"},ee={"data-label":"Coins",class:"lg:w-1 whitespace-nowrap"},te={class:"list-disc text-left px-2"},ae={class:"text-gray-500 dark:text-slate-400"},se={"data-label":"Metrics",class:"lg:w-1 whitespace-nowrap"},re={class:"list-disc text-left px-2"},oe={class:"text-gray-500 dark:text-slate-400"},ne={"data-label":"Created",class:"lg:w-1 whitespace-nowrap"},le={class:"text-gray-500 dark:text-slate-400"},de={"data-label":"delete",class:"h-6 w-6"},ie={class:"h-6 w-6"},ce=["onClick"],he=e("tfoot",{class:"text-xs text-gray-700 uppercase dark:text-gray-400"},[e("tr",null,[e("th"),e("th",null,"Dashboard name"),e("th",null,"Coins"),e("th",null,"Metrics"),e("th",null,"Created"),e("th")])],-1),ue={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"};function me(t,s,f,x,a,i){const u=d("CardBoxModal"),_=d("router-link"),g=d("BaseButton"),k=d("BaseButtons"),w=d("BaseLevel");return o(),n(b,null,[a.dashboardToDelete?(o(),P(u,{key:0,modelValue:a.modalTwoActive,"onUpdate:modelValue":s[0]||(s[0]=r=>a.modalTwoActive=r),title:"Confirm deletion",button:"danger","has-cancel":"","on-confirm":i.deleteDashboard},{default:h(()=>[e("p",null,"Are you sure you want to delete the dashboard with id "+c(a.dashboardToDelete.id)+"? ",1),z,e("p",null,c(a.dashboardToDelete.json.dashboardName),1)]),_:1},8,["modelValue","on-confirm"])):F("",!0),e("div",null,[e("table",null,[K,e("tbody",null,[(o(!0),n(b,null,p(a.dashboardsPaginated,r=>(o(),n("tr",{key:r.id},[Q,e("td",Z,[l(_,{to:`/dashboards/${r.id}`},{default:h(()=>[v(c(r.json.dashboardName),1)]),_:2},1032,["to"])]),e("td",ee,[e("ul",te,[(o(!0),n(b,null,p(r.json.selectedCoins,m=>(o(),n("li",{key:m},[e("small",ae,c(m.name),1)]))),128))])]),e("td",se,[e("ul",re,[(o(!0),n(b,null,p(r.json.selectedMetrics,m=>(o(),n("li",{key:m},[e("small",oe,c(m.label),1)]))),128))])]),e("td",ne,[e("small",le,c(i.formatDate(r.created_at)),1)]),e("th",de,[e("div",ie,[e("img",{src:"https://cdn2.iconfinder.com/data/icons/funtime-objects-part-2/60/005_055_delete_cross_close_cancel_exit_vote-512.png",alt:"delete ",class:"clickable rounded-full","is-hoverable":"",onClick:m=>i.showDeleteModal(r)},null,8,ce)])])]))),128))]),he]),e("div",ue,[l(w,null,{default:h(()=>[l(k,null,{default:h(()=>[l(g,{class:"text-xs text-gray-700 uppercase dark:text-gray-400",label:"Previous",onClick:s[1]||(s[1]=r=>a.currentPage=Math.max(a.currentPage-1,0)),color:t.page===a.currentPage?"lightDark":"whiteDark"},null,8,["color"]),(o(!0),n(b,null,p(i.pagesList.slice(Math.max(a.currentPage-1,0),Math.min(a.currentPage+1,i.numPages)),r=>(o(),P(g,{class:"text-xs text-gray-700 uppercase dark:text-gray-400",key:r,active:r===a.currentPage,label:r+1,color:r===a.currentPage?"lightDark":"whiteDark",small:"",onClick:m=>a.currentPage=r},null,8,["active","label","color","onClick"]))),128)),l(g,{class:"text-xs text-gray-700 uppercase dark:text-gray-400",label:"Next",onClick:s[2]||(s[2]=r=>a.currentPage=Math.min(a.currentPage+1,i.numPages-1)),color:t.page===a.currentPage?"lightDark":"whiteDark"},null,8,["color"])]),_:1}),e("small",null,"Page "+c(i.currentPageHuman)+" of "+c(i.numPages),1)]),_:1})])])],64)}const _e=D(Y,[["render",me]]),be={components:{MyDashboardsForReal:I,MyDashboardsListTable:_e},data(){return{user:{},myDashboards:{}}},async created(){await this.getUserInfo(),await this.fetchData()},methods:{async getUserInfo(){this.user=U._rawValue},async fetchData(){try{let{data:t,error:s}=await B.from("dashboard").select().eq("userid",this.user.id).order("created_at",{ascending:!1});this.myDashboards=t,console.log("myDashboards ",this.myDashboards)}catch(t){console.error("Following errors were found: ",t),this.errors=t.message}}}},ge={key:0},pe={key:1},fe=e("p",null,"No dashboards found",-1),ye=[fe];function De(t,s,f,x,a,i){const u=d("MyDashboardsListTable");return a.myDashboards.length>0?(o(),n("div",ge,[l(u,{myDashboards:a.myDashboards},null,8,["myDashboards"])])):(o(),n("div",pe,ye))}const y=D(be,[["render",De]]),xe={class:"py-2 grid grid-cols-1 lg:grid-cols-1 gap-6"},ke={name:"ProjectInfo",props:["asset"],data(){return{user:{},selectedTab:"form",selectedTabComponent:y,tabs:[{id:"form",name:"Create a new dashboard",link:"#",class:"inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"},{id:"customdashboard",name:"General Dashboard",link:"#",class:"inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"},{id:"dashboardlist",name:"All My Dashboards",link:"#",class:"inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"}]}},async created(){},methods:{selectTab(t){switch(this.selectedTab=t,t){case"form":this.selectedTabComponent=V;break;case"customdashboard":this.selectedTabComponent=X;break;case"dashboardlist":this.selectedTabComponent=y;break}},selectedTabAriaCurrent(t){return this.selectedTab===t}}},we=Object.assign(ke,{setup(t){return(s,f)=>(o(),n("div",null,[e("div",xe,[l(C,null,{default:h(()=>[l(y)]),_:1})])]))}}),ve={components:{LayoutAuthenticated:N,SectionMain:A,BreadCrumb:S,MyDashboards:we,ProjectName:H,MyDashboardsList:y,CardBox:C,SectionTitleLineWithButton:O},name:"Dashboardview",data(){return{mdiChartPie:$,dashboard:{name:"My Dashboards",tagline:"Find an overview of your dashboards below.",logo:"https://cdn1.iconfinder.com/data/icons/webina-seo-development-and-marketing/128/seo_web-62-512.png",project:1,sector:q}}}};function Pe(t,s,f,x,a,i){const u=d("BreadCrumb"),_=d("SectionTitleLineWithButton"),g=d("MyDashboardsList"),k=d("CardBox"),w=d("SectionMain"),r=d("LayoutAuthenticated");return o(),P(r,null,{default:h(()=>[l(w,null,{default:h(()=>[l(u,{projectName:a.dashboard.name,class:"py-4"},null,8,["projectName"]),l(_,{icon:a.mdiChartPie,title:"Your dashboards"},null,8,["icon"]),l(k,{"has-table":""},{default:h(()=>[l(g)]),_:1})]),_:1})]),_:1})}const Ge=D(ve,[["render",Pe]]);export{Ge as default};
//# sourceMappingURL=MyDashboardsView-758d143f.js.map
