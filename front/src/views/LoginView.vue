<template> 
<!-- component -->
<div class="font-sans">
    <NavBar />
    <div class="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
        <div class="relative sm:max-w-sm w-full">
            <div class="card bg-cyan-900 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
            <div class="card bg-teal-500 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
            <div class="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                <SuccessError v-if="success" type="success" message="Logging you in!"/>
                <SuccessError v-else-if="errors" type="error" :message="errors" />

                <label for="" class="block mt-3 text-sm text-gray-700 text-center font-semibold">
                    Sign in
                </label>                                    
                <form @submit.prevent="handleSignin">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        for="grid-password"
                        >Email</label
                      ><input
                        type="email" 
                        name="email" id="email"
                        class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Email"
                        style="transition: all 0.15s ease 0s;"
                        required
                        v-model="email"
                      />
                    </div>
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        for="grid-password"
                        >Password</label
                      ><input
                        type="password" 
                         name="password" id="password" 
                         class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Password"
                        style="transition: all 0.15s ease 0s;"
                        required
                        v-model="password"
                      />
                    </div>
                    <div class="text-center mt-6">
                      <button
                        class="bg-cyan-900 w-full py-3 rounded-xl text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                        type="submit"
                        style="transition: all 0.15s ease 0s;"
                      >
                      {{ loading ? 'Loading' : 'Sign In' }}
                      </button>
                    </div>
                    <div class="flex flex-wrap mt-6">
    

  </div>
                  </form>
                    
        
                    <div class="flex mt-7 items-center text-center">
                        <hr class="border-gray-300 border-1 w-full rounded-md">
                        <label class="block font-medium text-sm text-gray-600 w-full">
                            Or sign in with
                        </label>
                        <hr class="border-gray-300 border-1 w-full rounded-md">
                    </div>
        
                    <div class="py-2 btn-wrapper text-center">
                    <button
                      class="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                      type="button"
                      @click="signInWithGoogle"
                      style="transition: all 0.15s ease 0s;"
                    >
                      <img
                        alt="..."
                        class="w-5 mr-1"
                        src="../assets/img/google.svg"
                      />Google
                    </button>
                  </div>
            </div>
        </div>
    </div>
    <FooterComponent />
</div>
</template>

<script>
import { supabase, websitename } from "../supabase";
import FooterComponent from "@/components/Footer.vue";
import NavBar from "@/components//Navbar2.vue";
import SuccessError from '@/components/SuccessError.vue';


export default {
  name: "login-page",
  components: {
    FooterComponent,
    NavBar,
    SuccessError,
  },
data() {
  return {
    email: "",
    password: "",
    success: false,  
    errors: null,
    loading: false,  
    website: websitename,
  };
},
  methods: {
    async signInWithGoogle() {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
      })
    },
  async handleSignin() {
    try {
      this.loading = true
      // Use the Supabase provided method to handle the signup
      const { error } = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value,
      });
      this.success = true;
      setTimeout(() => {
        this.$router.push('/')
      }, 1000)

      if (error) throw error;
      } catch (error) {
        this.success = false;
        this.errors = error.message;
      } finally {
        this.loading = false
      }
  },
}
}
</script>