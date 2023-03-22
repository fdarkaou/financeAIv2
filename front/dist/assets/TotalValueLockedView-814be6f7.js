import{L as g}from"./LoadingComponent-0d9f5b13.js";import{b as u,c as b,_ as k,G as x}from"./CardBox-7b751d6f.js";import{B as y}from"./BreadCrumb-759eb96d.js";import{_ as B}from"./SectionTitleLineWithButton-65f55b8f.js";import{_ as F}from"./ProjectHead-8ad5ab6b.js";import{T}from"./TableTVLFeeChange-70a4dd3e.js";import{s as L,a as i,w as o,r as e,o as c,g as t}from"./index-9dad1ecb.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";import"./PillTag-588be2e0.js";import"./CardBoxModal-94c700e6.js";import"./BaseButton-ff604aaf.js";import"./BaseButtons-1de4e2b6.js";import"./CardBoxComponentTitle-d7ea4c8e.js";import"./TableCheckboxCell-f607beec.js";import"./supastore-c6013ad2.js";const M={components:{LayoutAuthenticated:u,SectionMain:b,BreadCrumb:y,SectionTitleLineWithButton:B,ProjectHead:F,CardBox:k,TableTVLFeeChange:T,LoadingComponent:g},name:"TVL View",data(){return{mdiLock:x,asset:{},loading:!0,dashboard:{name:"Market overview"}}},async created(){this.fetchMarketData()},methods:{async fetchMarketData(){let{data:a,error:n}=await L.from("marketdata").select().order("id",{ascending:!1});if(console.log("marketData; ",a),this.asset=a[0],this.loading=!1,console.log("asset: ",this.asset),n)return console.error("result"+n);this.cardBoxWidgets=[{prefix:"$",trend:this.asset.total_market_cap_yesterday_percentage_change?parseFloat(this.asset.total_market_cap_yesterday_percentage_change).toFixed(2)+"%":"N/A",trendType:this.asset.total_market_cap_yesterday_percentage_change?this.asset.total_market_cap_yesterday_percentage_change>=0?"up":"down":"info",color:"text-emerald-500",label:"Total Marketcap",suffix:this.asset.total_market_cap>=1e9?"B":"M",number:this.asset.total_market_cap>=1e9?(this.asset.total_market_cap/1e9).toFixed(0):(this.asset.total_market_cap/1e6).toFixed(0),icon:"https://cdn0.iconfinder.com/data/icons/cryptocurrency-63/64/Market-capitalization-global-bitcoin-cryptocurrency-512.png"},{prefix:"$",trend:this.asset.stablecoin_24h_percentage_change?parseFloat(this.asset.stablecoin_24h_percentage_change).toFixed(2)+"%":"N/A",trendType:this.asset.stablecoin_24h_percentage_change?this.asset.stablecoin_24h_percentage_change>=0?"up":"down":"info",color:"text-emerald-500",label:"Stables Marketcap",suffix:this.asset.stablecoin_market_cap>=1e9?"B":"M",number:this.asset.stablecoin_market_cap>=1e9?(this.asset.stablecoin_market_cap/1e9).toFixed(0):(this.asset.stablecoin_market_cap/1e6).toFixed(0),icon:"https://cdn3.iconfinder.com/data/icons/start-up-4/44/money-512.png"},{prefix:"$",trend:this.asset.defi_24h_percentage_change?parseFloat(this.asset.defi_24h_percentage_change).toFixed(2)+"%":"N/A",trendType:this.asset.defi_24h_percentage_change?this.asset.defi_24h_percentage_change>=0?"up":"down":"info",color:"text-emerald-500",label:"DeFi Marketcap",suffix:this.asset.defi_market_cap>=1e9?"B":"M",number:this.asset.defi_market_cap>=1e9?(this.asset.defi_market_cap/1e9).toFixed(0):(this.asset.defi_market_cap/1e6).toFixed(0),icon:"https://cdn4.iconfinder.com/data/icons/gamefi-3/512/Gamefi-game-nftgame-defi-nft-blockchaingame-playtoearn-p2e-512.png"},{prefix:"",trend:this.asset.btc_dominance_24h_percentage_change?parseFloat(this.asset.btc_dominance_24h_percentage_change).toFixed(2)+"%":"N/A",trendType:this.asset.btc_dominance_24h_percentage_change?this.asset.btc_dominance_24h_percentage_change>=0?"up":"down":"info",color:"text-emerald-500",label:"BTC Dominance",suffix:"%",number:parseFloat(this.asset.btc_dominance).toFixed(2),icon:"https://cdn2.iconfinder.com/data/icons/bitcoin-and-mining/44/coins-512.png"}]}}};function w(a,n,V,$,s,A){const _=e("LoadingComponent"),r=e("SectionMain"),d=e("BreadCrumb"),p=e("ProjectHead"),m=e("SectionTitleLineWithButton"),l=e("TableTVLFeeChange"),h=e("CardBox"),f=e("LayoutAuthenticated");return c(),i(f,null,{default:o(()=>[s.loading?(c(),i(r,{key:0},{default:o(()=>[t(_)]),_:1})):(c(),i(r,{key:1},{default:o(()=>[t(d,{projectName:s.dashboard.name,class:"py-4"},null,8,["projectName"]),t(p,{cardBoxWidgets:a.cardBoxWidgets},null,8,["cardBoxWidgets"]),t(m,{icon:s.mdiLock,title:"Total Value Locked"},null,8,["icon"]),t(h,{"has-table":""},{default:o(()=>[t(l,{type:"tvl",pagesize:20})]),_:1})]),_:1}))]),_:1})}const O=C(M,[["render",w]]);export{O as default};
//# sourceMappingURL=TotalValueLockedView-814be6f7.js.map
