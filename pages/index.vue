<template>
  <navBar />
  <!-- Hero Start -->
  <section
    class="py-36 lg:py-64 w-full min-h-screen table relative bg-[url('../../assets/images/bg/5.jpg')] bg-no-repeat bg-center bg-cover"
    id="home"
  >
    <div class="container relative z-1">
      <div class="grid grid-cols-1 mt-12 w-1/2">
        <h4
          class="text-white lg:text-5xl text-3xl leading-normal font-medium mb-7 position-relative animate-slideInFromLeft"
        >
          {{ $t("startFinish") }}
        </h4>

        <p class="text-white opacity-80 mb-0 max-w-2xl text-lg animate-slideInFromLeft">
          {{ $t("elshamsServices") }}
        </p>
        <!-- <div class="relative mt-10">
                    <a href="#contact"
                        class="contact btn bg-primary hover:bg-primary border-primary hover:border-primary text-white rounded-md">{{$t('GetStarted')}}</a>
                </div> -->
      </div>
    </div>
    <!--end container-->
    <div
      class="absolute lg:w-1/2 md:w-4/6 w-full h-full bg-primary md:opacity-100 opacity-80 top-0"
    ></div>
  </section>
  <!--end section-->
  <!-- Hero End -->

  <about />
  <services />
  <portfolio />
  <client />
  <visionMission />
  <team />
  <latestProject />
  <getintouch />
  <fooTer />
</template>

<script>
import navBar from "@/components/navbar/navbar-light.vue";
import about from "@/components/about.vue";
import services from "@/components/services.vue";
import portfolio from "@/components/portfolio/portfolio.vue";
import client from "@/components/client.vue";
import visionMission from "@/components/visionMission.vue";
import team from "@/components/teams.vue";
import latestProject from "~/components/project/latestProject.vue";
import getintouch from "@/components/getInTouch.vue";
import fooTer from "@/components/footer.vue";
export default {
  data() {
    return {};
  },
  components: {
    navBar,
    about,
    services,
    portfolio,
    client,
    visionMission,
    team,
    latestProject,
    getintouch,
    fooTer,
  },
};
</script>

<style lang="scss" scoped></style>
