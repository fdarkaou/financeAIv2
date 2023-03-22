<template>
    <LayoutAuthenticated>
      <!-- LOADING END -->
    <SectionMain>
        <BreadCrumb :projectName="dashboard.name" class="py-4" />
        <SectionTitleLineWithButton :icon="mdiViewDashboardVariant" title="Simulate your profile"> </SectionTitleLineWithButton>
        <CardBox has-table>
            <SimulationAI />
        </CardBox>
    </SectionMain> 
    </LayoutAuthenticated>
  </template>
  
<script>
import LayoutAuthenticated from "@/layouts/LayoutAuthenticated.vue";
import SectionMain from "@/components/SectionMain.vue";
import BreadCrumb from "@/components/BreadCrumb.vue";
import SectionTitleLineWithButton from "@/components/SectionTitleLineWithButton.vue";
import CardBox from "@/components/CardBox.vue";
import { mdiViewDashboardVariant } from "@mdi/js";
import SimulationAI from "@/components/SimulationAI.vue";

export default {
  components: {
    LayoutAuthenticated,
    SectionMain,
    BreadCrumb,
    SectionTitleLineWithButton,
    CardBox,
    SimulationAI
},
  name: "GeneralView",
  data() {
    return {
      mdiViewDashboardVariant,
      asset: {},
      loading: true,

    dashboard:
      {
        name: "Market overview",
      }
  }
},
}
</script>