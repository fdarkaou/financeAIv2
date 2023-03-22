import{_ as P,a as L,b as S,c as O,m as F}from"./CardBox-7b751d6f.js";import{B as j}from"./BreadCrumb-759eb96d.js";import{s as w,r as c,o as i,c as d,a as y,w as m,b as e,d as f,t as l,e as N,F as h,f as b,g as u,h as k,v as C,i as q,j as U}from"./index-9dad1ecb.js";import{g as M,f as E,c as H,a as T}from"./supastore-c6013ad2.js";import{_ as R}from"./CardBoxModal-94c700e6.js";import{_ as W}from"./BaseButtons-1de4e2b6.js";import{_ as I}from"./BaseButton-ff604aaf.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";import{S as Y}from"./SuccessError-77b01219.js";import{_ as z}from"./SectionTitleLineWithButton-65f55b8f.js";import"./CardBoxComponentTitle-d7ea4c8e.js";const G={components:{CardBoxModal:R,CardBox:P,BaseLevel:L,BaseButtons:W,BaseButton:I},data(){return{myAlerts:[],modalTwoActive:!1,alertToDelete:null,errors:null,user:{},alertsPaginated:[],currentPage:0,perPage:6,metadata:[],loaded:!1}},async created(){this.user=await M(),await this.fetchAlerts()},watch:{currentPage(){this.alertsPaginated=this.myAlerts.slice(this.perPage*this.currentPage,this.perPage*(this.currentPage+1))}},computed:{numPages(){return this.myAlerts.length===0?0:Math.ceil(this.myAlerts.length/this.perPage)},currentPageHuman(){return this.currentPage+1},pagesList(){const r=[];for(let s=0;s<this.numPages;s++)r.push(s);return r}},methods:{showDeleteModal(r){this.alertToDelete=r,this.modalTwoActive=!0},formatValue(r,s){return E(r,s)},async deleteAlert(){const{error:r}=await w.from("alerts").delete().eq("id",this.alertToDelete.id);console.log("delete alert",this.alertToDelete.id),r?console.error(r):location.reload()},async getAssetMetadata(){let{data:r,error:s}=await w.from("ultimateframe").select("logo, symbol, messari_name, cmc_name, llama_name");return r},async fetchAlerts(){try{let{data:r,error:s}=await w.from("alerts").select().eq("user_id",this.user.id).order("created_at",{ascending:!1});const x=await this.getAssetMetadata();this.myAlerts=r.map(g=>{const t=x.find(n=>n.symbol===g.condition[0].first_asset_symbol);return t?{...g,logo:t.logo,symbol:t.symbol,messari_name:t.messari_name,cmc_name:t.cmc_name,llama_name:t.llama_name}:g}),this.updateAlertsPaginated()}catch(r){console.error("Following errors were found: ",r),this.errors=r.message}},updateAlertsPaginated(){const r=this.perPage*this.currentPage,s=r+this.perPage;this.alertsPaginated=this.myAlerts.slice(r,s)},formatDate(r){if(r)return new Date(r).toLocaleString()}}},J=e("p",null,[e("b",null,"Following rule will be deleted:")],-1),K={class:"text-gray-500 dark:text-slate-400"},Q=e("thead",{class:"text-xs text-gray-700 uppercase dark:text-gray-400"},[e("tr",null,[e("th"),e("th",null,"Project"),e("th",null,"Rule"),e("th",null,"Status"),e("th",null,"Date set up"),e("th",null,"Date triggered"),e("th")])],-1),X={"data-label":"Logo",class:"w-6 h-6"},Z={class:"h-6 w-6"},$=["src"],ee={"data-label":"Name",class:"w-3/12"},te={class:"text-gray-500 dark:text-slate-400 text-right"},re={"data-label":"Rule",class:"lg:w-1 whitespace-nowrap"},se={class:"text-gray-500 dark:text-slate-400"},ae=["innerHTML"],oe={"data-label":"Active",class:"lg:w-1 whitespace-nowrap"},le={class:"text-gray-500 dark:text-slate-400"},ne={"data-label":"Date set up",class:"lg:w-1 whitespace-nowrap"},ie={class:"text-gray-500 dark:text-slate-400"},ce={"data-label":"Date triggered",class:"lg:w-1 whitespace-nowrap"},ue={class:"text-gray-500 dark:text-slate-400"},de={"data-label":"delete",class:"h-6 w-6"},me={class:"h-6 w-6"},ge=["onClick"],_e=e("tfoot",{class:"text-xs text-gray-700 uppercase dark:text-gray-400"},[e("tr",null,[e("th"),e("th",null,"Coin"),e("th",null,"Rule"),e("th",null,"Active"),e("th",null,"Date set up"),e("th",null,"Date triggered"),e("th")])],-1),he={class:"p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"};function pe(r,s,x,g,t,n){const p=c("CardBoxModal"),_=c("router-link"),o=c("BaseButton"),v=c("BaseButtons"),A=c("BaseLevel");return i(),d(h,null,[t.alertToDelete?(i(),y(p,{key:0,modelValue:t.modalTwoActive,"onUpdate:modelValue":s[0]||(s[0]=a=>t.modalTwoActive=a),title:"Confirm deletion",button:"danger","has-cancel":"","on-confirm":n.deleteAlert},{default:m(()=>[e("p",null,[f("Are you sure you want to delete the alert for "),e("b",null,l(t.alertToDelete.messari_name||t.alertToDelete.llama_name||t.alertToDelete.cmc_name),1),f(" (ID "+l(t.alertToDelete.id)+")?",1)]),J,e("p",null,[e("small",K,[e("i",null,l(t.alertToDelete.condition[0].first_asset_symbol)+" "+l(t.alertToDelete.condition[0].metric)+" is "+l(t.alertToDelete.condition[0].operator)+" than "+l(t.alertToDelete.condition[0].metric_value),1)])])]),_:1},8,["modelValue","on-confirm"])):N("",!0),e("div",null,[e("table",null,[Q,e("tbody",null,[(i(!0),d(h,null,b(t.alertsPaginated,a=>(i(),d("tr",{key:a.id},[e("th",X,[e("div",Z,[e("img",{src:a.logo?a.logo:"https://cdn4.iconfinder.com/data/icons/leto-weather/64/na_not_available_weather_sun-512.png",alt:"Logo",class:"rounded-full flex justify-center align-center content-center"},null,8,$)])]),e("td",ee,[e("small",te,[u(_,{to:`/projects/${a.symbol}`},{default:m(()=>[f(l(a.messari_name||a.llama_name||a.cmc_name),1)]),_:2},1032,["to"])])]),e("td",re,[e("small",se,[f(l(a.condition[0].first_asset_symbol)+" "+l(a.condition[0].metric)+" is "+l(a.condition[0].operator)+" than ",1),e("p",{innerHTML:n.formatValue(a.condition[0].metric_value,a.condition[0].metric)},null,8,ae)])]),e("td",oe,[e("small",le,l(a.triggered===0?"Active":"Triggered"),1)]),e("td",ne,[e("small",ie,l(n.formatDate(a.created_at)),1)]),e("td",ce,[e("small",ue,l(a.triggered_at===null?"Not triggered yet":n.formatDate(a.triggered_at)),1)]),e("th",de,[e("div",me,[e("img",{src:"https://cdn2.iconfinder.com/data/icons/funtime-objects-part-2/60/005_055_delete_cross_close_cancel_exit_vote-512.png",alt:"delete ",class:"clickable rounded-full","is-hoverable":"",onClick:B=>n.showDeleteModal(a)},null,8,ge)])])]))),128))]),_e]),e("div",he,[u(A,null,{default:m(()=>[u(v,null,{default:m(()=>[u(o,{class:"text-xs text-gray-700 uppercase dark:text-gray-400",label:"Previous",onClick:s[1]||(s[1]=a=>t.currentPage=Math.max(t.currentPage-1,0)),color:r.page===t.currentPage?"lightDark":"whiteDark"},null,8,["color"]),(i(!0),d(h,null,b(n.pagesList.slice(Math.max(t.currentPage-1,0),Math.min(t.currentPage+1,n.numPages)),a=>(i(),y(o,{class:"text-xs text-gray-700 uppercase dark:text-gray-400",key:a,active:a===t.currentPage,label:a+1,color:a===t.currentPage?"lightDark":"whiteDark",small:"",onClick:B=>t.currentPage=a},null,8,["active","label","color","onClick"]))),128)),u(o,{class:"text-xs text-gray-700 uppercase dark:text-gray-400",label:"Next",onClick:s[2]||(s[2]=a=>t.currentPage=Math.min(t.currentPage+1,n.numPages-1)),color:r.page===t.currentPage?"lightDark":"whiteDark"},null,8,["color"])]),_:1}),e("small",null,"Page "+l(n.currentPageHuman)+" of "+l(n.numPages),1)]),_:1})])])],64)}const V=D(G,[["render",pe]]),fe={components:{CardBox:P,AlertsTable:V,SuccessError:Y},data(){return{success:!1,error:null,selectedCoin:"BTC",coinOptions:[],selectedMetric:"price",metricOptions:[],selectedComparator:">",comparatorOptions:["=","<",">"],numericalValue:0,user:{}}},async created(){this.user=await M(),this.coinOptions=await H(),this.metricOptions=await T(this.selectedCoin)},watch:{selectedCoin:async function(){this.metricOptions=await T(this.selectedCoin)}},methods:{async submitForm(){try{const r={type:"single",condition:[{metric:this.selectedMetric,operator:this.selectedComparator,metric_value:this.numericalValue,first_asset_symbol:this.selectedCoin}],triggered:0,email:this.user.email,user_id:this.user.id},{error:s}=await w.from("alerts").insert(r);this.success=!0,location.reload()}catch(r){console.error(r)}}}},be={class:"w-full py-4 flex justify-center text-center inline-flex items-center"},ye=["value"],xe=["value"],ke=["value"],we=e("div",{class:"flex justify-center"},[e("button",{type:"submit",class:"text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2"},[e("img",{class:"w-4 h-4 mr-2",src:"https://cdn3.iconfinder.com/data/icons/simple-web-navigation/165/tick-512.png",alt:"plus"}),f(" Create alert ")])],-1);function ve(r,s,x,g,t,n){const p=c("SuccessError"),_=c("CardBox");return t.success?(i(),y(p,{key:0,type:"success",message:"Alert created succesfully!"})):(i(),y(_,{key:1},{default:m(()=>[e("form",{onSubmit:s[4]||(s[4]=U((...o)=>n.submitForm&&n.submitForm(...o),["prevent"]))},[e("div",be,[k(e("select",{"onUpdate:modelValue":s[0]||(s[0]=o=>t.selectedCoin=o),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},[(i(!0),d(h,null,b(t.coinOptions,o=>(i(),d("option",{value:o.symbol,required:""},l(o.name),9,ye))),256))],512),[[C,t.selectedCoin]]),k(e("select",{"onUpdate:modelValue":s[1]||(s[1]=o=>t.selectedMetric=o),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},[(i(!0),d(h,null,b(t.metricOptions,o=>(i(),d("option",{value:o.id,required:""},l(o.label),9,xe))),256))],512),[[C,t.selectedMetric]]),k(e("select",{"onUpdate:modelValue":s[2]||(s[2]=o=>t.selectedComparator=o),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},[(i(!0),d(h,null,b(t.comparatorOptions,o=>(i(),d("option",{value:o,required:""},l(o),9,ke))),256))],512),[[C,t.selectedComparator]]),k(e("input",{type:"number","onUpdate:modelValue":s[3]||(s[3]=o=>t.numericalValue=o),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""},null,512),[[q,t.numericalValue]])]),we],32)]),_:1}))}const Ae=D(fe,[["render",ve]]),Be={components:{LayoutAuthenticated:S,SectionMain:O,BreadCrumb:j,AlertsForm:Ae,AlertsTable:V,CardBox:P,SectionTitleLineWithButton:z},name:"Alerts View",data(){return{mdiBellAlertOutline:F,dashboard:{name:"Alerts"}}}},Ce={class:"py-4"};function Pe(r,s,x,g,t,n){const p=c("BreadCrumb"),_=c("SectionTitleLineWithButton"),o=c("AlertsForm"),v=c("AlertsTable"),A=c("CardBox"),a=c("SectionMain"),B=c("LayoutAuthenticated");return i(),y(B,null,{default:m(()=>[u(a,null,{default:m(()=>[u(p,{projectName:t.dashboard.name,class:"py-4"},null,8,["projectName"]),u(_,{icon:t.mdiBellAlertOutline,title:"Create a new alert"},null,8,["icon"]),u(o),e("div",Ce,[u(_,{icon:t.mdiBellAlertOutline,title:"Your alerts"},null,8,["icon"]),u(A,{"has-table":""},{default:m(()=>[u(v)]),_:1})])]),_:1})]),_:1})}const Ue=D(Be,[["render",Pe]]);export{Ue as default};
//# sourceMappingURL=AlertsView-c9d38e52.js.map