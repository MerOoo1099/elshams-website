<template>
  <!-- Start -->
  <section class="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="portfolio">
    <div class="container">
      <div class="grid grid-cols-1 pb-8 text-center">
        <h6 class="text-primary text-2xl dark:text-secondary font-medium uppercase mb-2">
          {{ $t("Portfolio") }}
        </h6>
        <h3 class="mb-4 md:text-2xl text-xl font-medium dark:text-secondary opacity-50">
          {{ $t("works") }}
        </h3>

        <!-- <p class="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">
          Launch your campaign and benefit from our expertise on designing and
          managing conversion centered Tailwind CSS html page.
        </p> -->
      </div>
      <!--end grid-->

      <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 mt-8">
        <div
          v-for="item in portfolios"
          :key="item"
          class="relative rounded-md shadow-sm overflow-hidden group"
        >
          <img
            :src="item.image"
            class="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 transition duration-500"
            alt=""
          />
          <div
            class="absolute inset-0 group-hover:bg-black opacity-50 transition duration-500 z-0"
          ></div>

          <div class="content">
            <div
              class="icon absolute z-10 opacity-0 group-hover:opacity-100 top-4 end-4 transition-all duration-500"
            >
              <a
                @click="showMultiple"
                class="btn bg-primary hover:bg-third dark:hover:text-primary border-primary hover:border-primary text-secondary btn-icon rounded-full lightbox"
                ><i :class="item.icon"></i
              ></a>
            </div>

            <div
              class="absolute z-10 opacity-0 group-hover:opacity-100 bottom-4 start-4 transition-all duration-500"
            >
              <h6
                class="text-md font-medium text-third hover:text-secondary transition duration-500"
                >{{ item.name }}</h6
              >
              <p class="text-slate-100 tag mb-0">{{ item.title }}</p>
            </div>
          </div>
        </div>
      </div>
      <!--end grid-->
    </div>
    <!--end container-->
  </section>
  <!--end section-->
  <!-- End -->
  <vue-easy-lightbox
    :visible="visibleRef"
    :imgs="imgsRef"
    :index="indexRef"
    @hide="onHide"
  ></vue-easy-lightbox>
  <!-- Start -->
  <section
    id="portfolio"
    class="py-24 w-full table relative bg-[url('../../assets/images/bg/cta.png')] bg-bottom bg-cover"
  >
    <div class="absolute inset-0 bg-primary opacity-60"></div>
    <div class="container relative">
      <div class="grid grid-cols-1 w-full text-center">
        <!-- <p class="text-white opacity-50 max-w-xl mx-auto">
          Launch your campaign and benefit from our expertise on designing and
          managing conversion centered Tailwind CSS html page.
        </p> -->

        <div class="relative">
          <h3 class="md:text-3xl text-2xl text-secondary font-medium">
            {{ $t("getInTouch") }}
          </h3>
          <a
            href="#contact"
            class="btn bg-primary mt-[100px] hover:bg-third hover:text-primary border-primary hover:border-primary mt-10 text-secondary rounded-md hover:animate-bounce"
            >{{ $t("GetStarted") }}</a
          >
        </div>
      </div>
      <!--end grid-->
    </div>
    <!--end container-->
  </section>
  <!--end section-->
  <!-- End -->
</template>

<script>
import { useLocalePath } from "#imports";
import image from "assets/images/portfolio/1.jpg";
import image2 from "assets/images/portfolio/2.jpg";
import image3 from "assets/images/portfolio/3.jpg";
import image4 from "assets/images/portfolio/4.jpg";
import image5 from "assets/images/portfolio/5.jpg";
import image6 from "assets/images/portfolio/6.jpg";
import image7 from "assets/images/portfolio/7.jpg";
import image8 from "assets/images/portfolio/8.jpg";
import VueEasyLightbox from "vue-easy-lightbox";
import { ref } from "vue";
export default {
  data() {
    return {
      localePath: useLocalePath(),
      portfolios: [
        {
          id: 1,
          image: image,
          icon: "uil uil-camera",
          name: "Mockup Collection",
          title: "Abstract",
        },
        {
          id: 2,
          image: image2,
          icon: "uil uil-camera",
          name: "Mockup Collection",
          title: "Abstract",
        },
        {
          id: 3,
          image: image3,
          icon: "uil uil-camera",
          name: "Mockup Collection",
          title: "Abstract",
        },
        {
          id: 4,
          image: image4,
          icon: "uil uil-camera",
          name: "Mockup Collection",
          title: "Abstract",
        },
        {
          id: 5,
          image: image5,
          icon: "uil uil-camera",
          name: "Mockup Collection",
          title: "Abstract",
        },
        {
          id: 6,
          image: image6,
          icon: "uil uil-camera",
          name: "Mockup Collection",
          title: "Abstract",
        },
        {
          id: 7,
          image: image7,
          icon: "uil uil-camera",
          name: "Mockup Collection",
          title: "Abstract",
        },
        {
          id: 8,
          image: image8,
          icon: "uil uil-camera",
          name: "Mockup Collection",
          title: "Abstract",
        },
      ],
    };
  },
  components: {
    VueEasyLightbox,
  },
  setup() {
    const visibleRef = ref(false);
    const indexRef = ref(0);
    const imgsRef = ref([]);

    const onShow = () => {
      visibleRef.value = true;
    };
    const showMultiple = () => {
      imgsRef.value = [image, image2, image3, image4, image5, image6, image7, image8];
      console.log(showMultiple.value, "rrr");

      indexRef.value = 0;
      onShow();
    };
    const onHide = () => (visibleRef.value = false);

    return {
      visibleRef,
      indexRef,
      imgsRef,
      showMultiple,
      onHide,
    };
  },
};
</script>

<style lang="scss" scoped></style>
