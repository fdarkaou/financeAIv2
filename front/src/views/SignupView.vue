<template> 
  <!-- component -->
  <div class="font-sans">
    <NavBar />
      <div class="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100">

          <div class="relative sm:max-w-sm w-full">
            
              <div class="card bg-cyan-900 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
              <div class="card bg-teal-500 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
              
              <div class="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                <SuccessError v-if="success" type="success" message="Your account has been created - check your mailbox for a confirmation mail!"/>
                <SuccessError v-else-if="errors" type="error" :message="errors" />

                  <label for="" class="block mt-3 text-sm text-gray-700 text-center font-semibold">
                      Sign up
                  </label>                                    
                  <form @submit.prevent="handleSignup">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        for="grid-password"
                        >Full Name</label
                      ><input
                        type="text" 
                        name="username" id="username"
                        class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Tupac Shakur"
                        style="transition: all 0.15s ease 0s;"
                        required
                        v-model="username"
                      />
                    </div>
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        for="grid-password"
                        >Email</label
                      ><input
                        type="email" 
                        name="email" id="email"
                        class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="tupac.shakur@biggie.com"
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
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        for="password-repeat"
                        >Confirm Password</label
                      ><input
                        type="password" 
                         name="password-repeat" id="password-repeat" 
                         class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Confirm password"
                        style="transition: all 0.15s ease 0s;"
                        required
                        v-model="passwordRepeat"
                      />
                    </div>
                    <div class="flex items-start mb-6">
                    <div class="flex items-center h-5">
                      <input id="terms" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required>
                    </div>
                    <label for="terms" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                  </div>
                    <div class="text-center mt-6">
                      <button
                      class="bg-cyan-900 w-full py-3 rounded-xl text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                        type="submit"
                        style="transition: all 0.15s ease 0s;"
                      >
                      {{ loading ? 'Loading' : 'Sign Up' }}
                      </button>
                    </div>
                  </form>
          
                      <div class="flex mt-7 items-center text-center">
                          <hr class="border-gray-300 border-1 w-full rounded-md">
                          <label class="block font-medium text-sm text-gray-600 w-full">
                              Or sign up with
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
  import FooterComponent from "../components/Footer.vue";
  import NavBar from "../components/Navbar2.vue";
  import SuccessError from "@/components/SuccessError.vue";

  export default {
    name: "Signup page",
    components: {
      FooterComponent,
      NavBar,
      SuccessError,
    },
    data() {
      return {
        email: "",
        password: "",
        passwordRepeat: "",
        username: "",
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
      async handleSignup() {
      if (this.checkPasswordsMatch()) {  // check if passwords match
        try {
          this.loading = true
          // Use the Supabase provided method to handle the signup
          const { error } = await supabase.auth.signUp({
            email: email.value,
            password: password.value,
            full_name: username.value,
          });
          this.success = true;
  
          if (error) throw error;
        } catch (error) {
          this.success = false;
          this.errors = error.message;
        } finally {
          this.loading = false
        }
      }
    },
    checkPasswordsMatch() {
      if (this.password !== this.passwordRepeat) {
        // passwords do not match, do something here like show an error message
        this.errors = "Passwords do not match";
        return false;  // return false to indicate that the passwords do not match
      } else {
        // passwords match, do something here like submit the form
        return true;  // return true to indicate that the passwords match
      }
    }
    }
  }
  </script>