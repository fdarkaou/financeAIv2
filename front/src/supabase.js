import { createClient } from '@supabase/supabase-js'
import { ref } from 'vue'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
 

// Get website name
export const websitename = ref(null)
async function getWebsitename() {

    let { data: site, error } = await supabase
    .from('site')
    .select('websitename')
    .eq('id', 1)
  
    if (error) {
      console.log('error', error)
    } else {
      websitename.value = site[0].websitename
    }
  }
getWebsitename()

// Log out function
export const logOut = (event, item) => {
  async function signout() {
    const { error } = await supabase.auth.signOut()
    window.location.href = '/#/login';
  }
  signout()
}

// User profile and info
export const currentUser = ref(null)
export async function getUserInfo() {
  try {
    const { data } = await supabase.auth.getSession()
    //console.log("Session: ", data)

    currentUser.value = data['session']['user']
    //console.log("This user: ", currentUser)

  } catch (error) {
    console.log("Error: ", error)
  }
}
getUserInfo()

export const profile = ref(null)
export async function getUserProfile() {
  try {
    let { data: profiles, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', this.user.id)
    
    //console.log('profiles: ', profiles)
    profile.value = profiles[0]
    //console.log("Profile: ", profile)
  } catch (error) {
      console.log("Error: ", error)
  }
}
getUserProfile()