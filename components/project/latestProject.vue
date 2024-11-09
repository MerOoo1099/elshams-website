<template>
  <!-- Start -->
  <section class="relative md:py-24 py-16" id="projects">
    <div class="container">
      <div class="grid grid-cols-1 pb-8 text-center">
        <h6 class="text-primary dark:text-secondary text-2xl font-medium uppercase mb-2">
          {{$t('Blog')}}
        </h6>
        <h3 class="mb-4 md:text-2xl text-xl font-medium dark:text-secondary opacity-50">
          {{$t('latestNews')}}
        </h3>

        <!-- <p class="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">
          Launch your campaign and benefit from our expertise on designing and
          managing conversion centered Tailwind CSS html page.
        </p> -->
      </div>
      <!--end grid-->

      <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mt-8">
        <div
          v-for="item in projects"
          :key="item"
          class="blog relative rounded-md shadow shadow-slate-200 dark:shadow-slate-800 overflow-hidden"
        >
          <img :src="item.image" alt="" />

          <div class="content p-6">
            <NuxtLink
              :to="localePath('/latest-project-detail')"
              class="text-lg hover:text-primary dark:text-third dark:hover:text-secondary transition-all duration-500 ease-in-out font-medium"
              >{{ item.title }}</NuxtLink
            >
            <p class="text-slate-400 mt-3">{{ item.desc }}</p>

            <div class="mt-5">
              <NuxtLink
                :to="localePath('/latest-project-detail')"
                class="btn btn-link hover:text-primary dark:hover:text-secondary after:bg-primary dark:after:bg-secondary dark:text-third transition duration-500"
                >{{$t('readMore')}} <i class="uil uil-arrow-right"></i
              ></NuxtLink>
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
</template>

<script>
import { useLocalePath } from "#imports";

import image from "assets/images/blog/1.jpg";
import image2 from "assets/images/blog/2.jpg";
import image3 from "assets/images/blog/3.jpg";

export default {
  data() {
    return {
      localePath: useLocalePath(),

      projects: [
        {
          image: image,
          title: "Building Your Corporate Identity from Upwind",
          desc: "The phrasal sequence of the is now so that many campaign and benefit",
        },
        {
          image: image2,
          title: "The Right Hand of Business IT World",
          desc: "The phrasal sequence of the is now so that many campaign and benefit",
        },
        {
          image: image3,
          title: "Building Your Corporate Identity from Upwind",
          desc: "The phrasal sequence of the is now so that many campaign and benefit",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
