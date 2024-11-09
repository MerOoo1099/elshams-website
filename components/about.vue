<template>
  <!-- Start -->
  <section class="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="about">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-10 items-center">
        <div class="lg:col-span-5">
          <div class="relative">
            <img
              src="assets/images/about.jpg"
              class="rounded-lg shadow-lg relative"
              alt=""
            />
            <div class="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
              <a
                @click="toggle"
                data-type="youtube"
                data-id="S_CGed6E610"
                class="cursor-pointer lightbox cursor-pointer size-20 rounded-full shadow-lg shadow-slate-100 dark:shadow-slate-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-third"
              >
                <i
                  class="mdi mdi-play inline-flex items-center justify-center text-2xl"
                ></i>
              </a>
            </div>
          </div>
        </div>

        <div class="lg:col-span-7">
          <div class="lg:ms-7">
            <h6
              class="text-primary dark:text-secondary text-2xl font-medium uppercase mb-2 animate-slideInFromLeft"
            >
              {{ $t("Who") }}
            </h6>
            <h3 class="mb-4 opacity-50 md:text-2xl text-xl font-medium dark:text-third">
              {{ $t("Story") }}
            </h3>

            <p
              class="text-slate-500 dark:text-slate-300 max-w-xl text-start animate-fadeIn"
            >
              {{ $t("storyDetails") }}<br />
            </p>

            <div class="relative mt-10">
              <a
                href="#portfolio"
                class="btn bg-third hover:bg-primary border-third hover:border-primary text-primary rounded-md hover:text-secondary hover:animate-bounce"
                >{{ $t("viewPortfolio") }}</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Video Modal -->
  <div
    :class="isActive ? 'fixed' : 'hidden'"
    class="bg-black/[0.9] top-0 left-0 bottom-0 w-[100%] h-[100%] z-999"
  >
    <div class="h-[100%] flex items-center justify-center">
      <div class="relative inline-block">
        <video v-if="isActive" class="w-[70vw] h-[90vh]" controls>
          <source src="assets/videos/introduction.mp4" type="video/mp4" />
        </video>
        <!-- Close Button with increased z-index -->
        <a
          class="mdi mdi-close text-white absolute top-1 right-1 text-xl cursor-pointer"
          @click="toggle"
          style="z-index: 1000"
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive; // Simplified toggle logic
    },
  },
};
</script>

<style lang="scss" scoped></style>
