<template>
  <div class="w-full relative flex flex-col items-center space-y-4">
    <!-- Stepper Component -->
    <UStepper
      ref="stepper"
      class="w-full"
      :items="items"
      orientation="horizontal"
      size="xl"
      color="error"
    >
      <template #content="{ item, index }">
        <!-- Video Container -->
        <video
          :src="item.video"
          :key="index"
          controls
          class="md:h-[70vh] h-[42vh] w-full rounded-lg shadow-lg"
        ></video>
      </template>
    </UStepper>
  </div>
</template>

<script setup>
import { ref } from "vue";
import step1 from "assets/videos/step 1.mp4";
import step2 from "assets/videos/step 2.mp4";
import step3 from "assets/videos/step 3.mp4";
import step4 from "assets/videos/step 4.mp4";

const items = [
  {
    slot: "step1",
    video: step1,
    icon: "mdi:numeric-1", // Icon class
  },
  {
    slot: "step2",
    video: step2,
    icon: "mdi:numeric-2",
  },
  {
    slot: "step3",
    video: step3,
    icon: "mdi:numeric-3",
  },
  {
    slot: "step4",
    video: step4,
    icon: "mdi:numeric-4",
  },
];

// const items = [step1, step2, step3, step4];

const stepper = ref(null);
</script>
