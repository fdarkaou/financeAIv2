<script setup>
import CardBoxWidget from "@/components/CardBoxWidget.vue";
import {
  mdiAccountMultiple,
  mdiCartOutline,
  mdiChartTimelineVariant,
  mdiMonitorCellphone,
  mdiReload,
  mdiTwitter,
  mdiChartPie,
} from "@mdi/js";
</script>

<template>
  <div>
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-4 mb-6">
          <CardBoxWidget
            v-for="widget in cardBoxWidgets"
            :key="widget.id"
            :trend="widget.trend"
            :trend-type="widget.trendType"
            :color="widget.color"
            :icon="widget.icon"
            :number="widget.number"
            :suffix="widget.suffix"
            :prefix="widget.prefix"
            :label="widget.label"
          />
      </div>
    </div>
</template>
<script>
export default {
  name: "ProjectHead",
  props: {
    cardBoxWidgets: {
      type: Array,
      required: true
    }
  },
}
</script>

