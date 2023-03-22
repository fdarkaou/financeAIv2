<template>
    
    <div>

        
      <!-- NAVIGATION -->
      <ul class="py-2 flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        <li v-for="(tab, index) in tabs" :key="index" v-bind:class="{ 'active': selectedTab === tab.id }">
          <a :href="tab.link" 
            :class="tab.class"
            v-on:click.prevent="selectTab(tab.id)">{{ tab.name }}</a>
        </li>
      </ul>
  
    <div class="py-2 grid grid-cols-1 lg:grid-cols-1 gap-6">
      <CardBox >
       <!-- <BreadCrumbProject :tabName="selectedTab"/>--> 
        <component v-bind:is="selectedTabComponent" :asset="asset"></component>
      </CardBox>
    </div>
  </div>
  
  </template>
  <script setup>
  import CardBox from "@/components/CardBox.vue";
  import BreadCrumbProject from "./BreadCrumbProject.vue";
  import MyDashboardsIntro from "./MyDashboardsIntro.vue";
  </script>
  <script> 
  import MyDashboardsForm from "@/components/MyDashboardsForm.vue";
  import SupaBaseJSON from "@/components/SupaBaseJSON.vue";
  import MyDashboardsList from "@/components/MyDashboardsList.vue";
  import { supabase } from "../supabase";
  
  export default {
  name: 'ProjectInfo',
  props: ['asset'],
  data() {
    return {
      user: {},
      selectedTab: 'form',
      selectedTabComponent: MyDashboardsList,
      tabs: [
        { id: 'form', name: 'Create a new dashboard', link: '#', class: 'inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300' },
        { id: 'customdashboard', name: 'General Dashboard', link: '#', class: 'inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300' },
        { id: 'dashboardlist', name: 'All My Dashboards', link: '#', class: 'inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300' }    ]
    };
  },
  async created() {
        // Fetch data when the component is first created
     // await this.getUserInfo();
     // await this.getUserProfile();
    },
  methods: {
    selectTab(tab) {
      this.selectedTab = tab
      switch(tab) {
        case 'form':
          this.selectedTabComponent = MyDashboardsForm
          break
        case 'customdashboard':
          this.selectedTabComponent = SupaBaseJSON
          break
        case 'dashboardlist':
          this.selectedTabComponent = MyDashboardsList
          break
      }
    },
    selectedTabAriaCurrent(tab) {
      return this.selectedTab === tab
    },
  }
};
</script>