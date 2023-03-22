import { createRouter, createWebHashHistory } from "vue-router";
import { supabase } from "../supabase";


function loadPage(view) {
  return () =>
    import(
      /* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`
    );
}
const routes = [
  {
    meta: {
      title: "AI Simulation",
      requiresAuth: true,
    },
    path: "/",
    name: "simulationview",
    component: loadPage("SimulationView"),
  },
  {
    meta: {
      title: "Login",
    },
    path: "/login",
    name: "login",
    component: loadPage("LoginView"),
  },  
  {
    meta: {
      title: "Signup",
    },
    path: "/signup",
    name: "signup",
    component: loadPage("SignupView"),
  },

  {
    path: '/confirm/:token',
    name: 'confirm',
    component: loadPage("ConfirmationView"),
  },
  {
    path: '/:token',
    name: 'confirm',
    component: loadPage("ConfirmationView"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
//first we get session data from supabase a broer 
  const activeSession = await supabase.auth.getSession();

 // console.log("activesession: " + activeSession);
 // console.dir(activeSession);
  // we check the object property to see if it is null - if so, no user is logged in and we redirect to login
  if (!activeSession.data.session && to.meta.requiresAuth) {
    next({ name: "login" });
  } else {
    next();
  }
});


export default router;
