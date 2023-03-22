import{k as f,s as w,c as a,g as i,b as e,t as d,e as x,j as b,h as c,i as u,l as g,r as m,o as r}from"./index-9dad1ecb.js";import{F as _,N as v,_ as y,a as k}from"./google-a4d430c2.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";const B={name:"login-page",components:{FooterComponent:_,NavBar:v},data(){return{email:"",password:"",success:!1,errors:null,loading:!1,website:f}},methods:{async handleSignin(){try{this.loading=!0;const{error:o}=await w.auth.signInWithPassword({email:email.value,password:password.value});if(this.success=!0,setTimeout(()=>{this.$router.push("/")},1e3),o)throw o}catch(o){this.success=!1,this.errors=o.message}finally{this.loading=!1}}}},N={class:"absolute w-full h-full"},S=e("div",{class:"absolute top-0 w-full h-full bg-gray-900",style:{"background-size":"100%","background-repeat":"no-repeat","background-image":"url(src/assets/img/bg2.jpeg)"}},null,-1),j={class:"container mx-auto px-4 h-full"},L={class:"flex content-center items-center justify-center h-full"},V={class:"w-full lg:w-4/12 px-4"},E={class:"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0"},F={class:"rounded-t mb-0 px-6 py-6"},M={class:"text-center mb-3"},z={class:"flex flex-col items-center justify-center px-6"},G={key:0,id:"toast-success",class:"flex items-center p-4 mb-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800",role:"alert"},P=g('<div class="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200"><svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg><span class="sr-only">Check icon</span></div><div class="ml-3 text-sm font-normal">Good job! Redirecting you..</div>',2),q=[P],D={key:1,id:"toast-danger",class:"flex items-center p-4 mb-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800",role:"alert"},I=e("div",{class:"inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200"},[e("svg",{"aria-hidden":"true",class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})]),e("span",{class:"sr-only"},"Error icon")],-1),T={class:"ml-3 text-sm font-normal"},U=e("h6",{class:"text-gray-600 text-sm font-bold"}," Sign in with ",-1),O=g('<div class="btn-wrapper text-center"><button class="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs" type="button" style="transition:all 0.15s ease 0s;"><img alt="..." class="w-5 mr-1" src="'+y+'">Github</button><button class="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs" type="button" style="transition:all 0.15s ease 0s;"><img alt="..." class="w-5 mr-1" src="'+k+'">Google </button></div><hr class="mt-6 border-b-1 border-gray-400">',2),R={class:"flex-auto px-4 lg:px-10 py-10 pt-0"},W=e("div",{class:"text-gray-500 text-center mb-3 font-bold"},[e("small",null,"Or sign in with credentials")],-1),A={class:"relative w-full mb-3"},H=e("label",{class:"block uppercase text-gray-700 text-xs font-bold mb-2",for:"grid-password"},"Email",-1),J={class:"relative w-full mb-3"},K=e("label",{class:"block uppercase text-gray-700 text-xs font-bold mb-2",for:"grid-password"},"Password",-1),Q={class:"text-center mt-6"},X={class:"bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full",type:"submit",style:{transition:"all 0.15s ease 0s"}},Y=e("div",{class:"flex flex-wrap mt-6"},[e("div",{class:"w-1/2"},[e("a",{href:"#signup",class:""},[e("small",null,"Create new account")])])],-1);function Z(o,t,$,ee,s,n){const p=m("NavBar"),h=m("FooterComponent");return r(),a("div",null,[i(p),e("main",null,[e("section",N,[S,e("div",j,[e("div",L,[e("div",V,[e("div",E,[e("div",F,[e("div",M,[e("div",z,[s.success?(r(),a("div",G,q)):s.errors?(r(),a("div",D,[I,e("div",T,d(s.errors),1)])):x("",!0)]),U]),O]),e("div",R,[W,e("form",{onSubmit:t[2]||(t[2]=b((...l)=>n.handleSignin&&n.handleSignin(...l),["prevent"]))},[e("div",A,[H,c(e("input",{type:"email",name:"email",id:"email",class:"border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full",placeholder:"Email",style:{transition:"all 0.15s ease 0s"},required:"","onUpdate:modelValue":t[0]||(t[0]=l=>s.email=l)},null,512),[[u,s.email]])]),e("div",J,[K,c(e("input",{type:"password",name:"password",id:"password",class:"border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full",placeholder:"Password",style:{transition:"all 0.15s ease 0s"},required:"","onUpdate:modelValue":t[1]||(t[1]=l=>s.password=l)},null,512),[[u,s.password]])]),e("div",Q,[e("button",X,d(s.loading?"Loading":"Sign In"),1)]),Y],32)])])])])]),i(h)])])])}const le=C(B,[["render",Z]]);export{le as default};
//# sourceMappingURL=LoginView-f6607f0b.js.map
