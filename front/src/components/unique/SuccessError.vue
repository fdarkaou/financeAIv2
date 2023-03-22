<template>
<div class="w-full">
<CardBox>
        <div v-if="type === 'success'" class="flex justify-center w-full">
            <div class="flex flex-col justify-center items-center">
            <div class="flex justify-center items-center">
                <svg class="w-8 h-8 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <div class="text-green-500 text-sm font-medium mt-2">
                {{ message }}
            </div>
            </div>
      </div>

      <div v-else-if="type === 'error'" class="flex justify-center w-full">
        <div class="flex flex-col justify-center items-center">
          <div class="flex justify-center items-center">
            <svg class="w-8 h-8 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <div class="text-red-500 text-sm font-medium mt-2">
            {{ message }} 
          </div>
        </div>
      </div>
    </CardBox>
</div>
</template>
<script>
import CardBox from "@/components/CardBox.vue";

export default {
    components: { CardBox },
  props: {
    type: {
      type: String,
      required: true
    },
    message: {
        type: String,
      required: true
    }
  }
};
</script>