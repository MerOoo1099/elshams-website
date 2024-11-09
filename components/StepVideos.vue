<template>
  <div class="relative flex flex-col items-center space-y-4">
    <!-- Video container -->
    <video
      :src="videos[currentStep]"
      controls
      class="w-1/2 max-w-4xl h-[70vh] rounded-lg shadow-lg"
    ></video>

    <!-- Left Button (Previous) -->
    <div class="absolute top-1/2 left-4 transform -translate-y-1/2">
      <button
        @click="prevStep"
        :disabled="currentStep === 0"
        class="px-4 py-2 bg-primary dark:bg-secondary text-white dark:text-primary dark:disabled:text-primary dark:disabled:bg-neutral-700 rounded-lg disabled:bg-third disabled:cursor-not-allowed transition duration-300 hover:bg-blue-600 dark:hover:bg-blue-600"
      >
        {{ $t("Previous") }}
      </button>
    </div>

    <!-- Right Button (Next) -->
    <div class="absolute top-1/2 right-4 transform -translate-y-1/2">
      <button
        @click="nextStep"
        :disabled="currentStep === videos.length - 1"
        class="px-4 py-2 bg-primary dark:bg-secondary text-white dark:text-primary dark:disabled:text-primary dark:disabled:bg-neutral-700 rounded-lg disabled:bg-third disabled:cursor-not-allowed transition duration-300 hover:bg-blue-600 dark:hover:bg-blue-600"
      >
        {{ $t("Next") }}
      </button>
    </div>

    <!-- Step Indicator -->
    <p class="text-lg font-semibold text-gray-700 mt-4">
      {{ $t("Step") }} {{ currentStep + 1 }} {{ $t("of") }} {{ videos.length }}
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import step1 from "assets/videos/step 1.mp4";
import step2 from "assets/videos/step 2.mp4";
import step3 from "assets/videos/step 3.mp4";
import step4 from "assets/videos/step 4.mp4";

const videos = [step1, step2, step3, step4];
const currentStep = ref(0);

function nextStep() {
  if (currentStep.value < videos.length - 1) {
    currentStep.value++;
  }
}

function prevStep() {
  if (currentStep.value > 0) {
    currentStep.value--;
  }
}
</script>

<style scoped>
/* No additional styles needed, TailwindCSS handles it all */
</style>
