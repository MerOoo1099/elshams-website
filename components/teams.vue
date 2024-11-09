<template>
  <!-- Start -->
  <section
    class="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800"
    id="visionMission"
  >
    <div class="container">
      <div class="grid grid-cols-1 pb-8 text-center">
        <h6 class="text-primary dark:text-secondary text-2xl font-medium uppercase mb-2">
          {{ $t("team") }}
        </h6>

        <!-- <p class="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">Launch your campaign and benefit from our
                    expertise on designing and managing conversion centered Tailwind CSS html page.</p> -->
      </div>
      <!--end grid-->

      <div class="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-6 mt-8">
        <div
          v-for="item in clients"
          :key="item"
          class="relative rounded-md shadow-lg overflow-hidden group"
        >
          <img
            :src="item.image"
            class="group-hover:origin-center group-hover:scale-105 transition duration-500 h-[35vh] w-[21vw]"
            alt=""
          />
          <div
            class="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 z-0 transition duration-500"
          ></div>
          <ul
            class="list-none absolute z-10 opacity-0 group-hover:opacity-100 top-4 end-4 mb-0 transition-all duration-500"
          >
            <li class="mb-1">
              <a
                :href="item.facebook"
                class="btn bg-primary hover:bg-third border-primary text-secondary hover:text-primary btn-icon btn-sm rounded-full"
                ><i class="uil uil-facebook-f"></i
              ></a>
            </li>
            <li class="mb-1 ms-0">
              <a
                :href="item.instgram"
                class="btn bg-primary hover:bg-third border-primary hover:border-third text-secondary hover:text-primary btn-icon btn-sm rounded-full"
                ><i class="uil uil-instagram"></i
              ></a>
            </li>
            <li class="mb-1 ms-0">
              <a
                :href="item.tiktok"
                class="btn bg-primary hover:bg-third border-primary hover:border-third text-secondary hover:text-primary btn-icon btn-sm rounded-full"
                ><Icon name="ic:baseline-tiktok" title="tiktok"
              /></a>
            </li>
          </ul>
          <!--end icon-->

          <div
            class="content absolute start-4 end-4 bottom-4 bg-secondary dark:bg-slate-900 opacity-0 group-hover:opacity-100 p-4 rounded-md text-center transition-all duration-500"
          >
            <a href="" class="h5 text-md dark:text-secondary text-primary font-medium">{{
              $t(item.name)
            }}</a>
            <h6 class="text-slate-400 dark:text-slate-300 mb-0 font-light">
              {{ $t(item.position) }}
            </h6>
          </div>
        </div>
      </div>
      <!--end grid-->
    </div>
    <!--end container-->

    <div class="container mt-12">
      <div class="grid grid-cols-2 md:grid-cols-4">
        <div class="counter-box position-relative text-center">
          <h3 class="font-medium text-3xl mb-2 dark:text-white flex justify-center">
            <count-up :end-val="15"></count-up>+
          </h3>
          <span class="counter-head text-slate-400 dark:text-slate-300">Projects</span>
        </div>
        <!--end counter box-->

        <div class="counter-box position-relative text-center">
          <h3 class="font-medium text-3xl mb-2 dark:text-white flex justify-center">
            <count-up :end-val="200">1</count-up>+
          </h3>
          <span class="counter-head text-slate-400 dark:text-slate-300">Clients</span>
        </div>
        <!--end counter box-->

        <div class="counter-box position-relative text-center">
          <h3 class="font-medium text-3xl mb-2 dark:text-white flex justify-center">
            <count-up :end-val="457">200</count-up>K
          </h3>
          <span class="counter-head text-slate-400 dark:text-slate-300">Members</span>
        </div>
        <!--end counter box-->

        <div class="counter-box position-relative text-center">
          <h3 class="font-medium text-3xl mb-2 dark:text-white flex justify-center">
            <count-up :end-val="150">100</count-up>+
          </h3>
          <span class="counter-head text-slate-400 dark:text-slate-300">Employee</span>
        </div>
        <!--end counter box-->
      </div>
      <!--end grid-->
    </div>
    <!--end container-->

    <div class="container mt-12">
      <div class="grid md:grid-cols-6 grid-cols-2 justify-center gap-8">
        <div v-for="item in images" :key="item" class="mx-auto">
          <img :src="item.image" class="h-[25px]" alt="" />
        </div>
        <!--end col-->
      </div>
      <!--end grids-->
    </div>
    <!--end container-->
  </section>
  <!--end section-->
  <!-- End -->
</template>

<script>
import CountUp from "vue-countup-v3";
import client from "assets/images/client/mostafa.jpeg";
import client2 from "assets/images/client/islam-soliman.jpeg";
import client3 from "assets/images/client/islam-bob.jpg";
import client4 from "assets/images/client/ahmed-medhat.jpg";
import amazon from "assets/images/client/amazon.svg";
import google from "assets/images/client/google.svg";
import lenovo from "assets/images/client/lenovo.svg";
import paypal from "assets/images/client/paypal.svg";
import shopify from "assets/images/client/shopify.svg";
import spotify from "assets/images/client/spotify.svg";

export default {
  data() {
    return {
      clients: [
        {
          image: client,
          name: "mostafa",
          position: "CEO",
          facebook: "https://www.facebook.com/mostafa.ismaeel.9?mibextid=ZbWKwL",
          instgram:
            "https://www.instagram.com/mostafa_ish/profilecard/?igsh=MTA5dzJmZ3YyYXM3NQ==",
          tiktok: "https://www.tiktok.com/@mostafa.kayan?_t=8qFfnK49ERO&_r=1",
          linkedIn:
            "https://www.linkedin.com/in/mostafaismaeelhvac?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          image: client2,
          name: "islamSoliman",
          position: "CTO",
          facebook: "https://www.facebook.com/islam.soliman.79?mibextid=kFxxJD",
          instgram:
            "https://www.instagram.com/islam_soliman?igsh=MWs4c25pbWkzNm03bw%3D%3D&utm_source=qr",
          tiktok: "https://www.tiktok.com/@mostafa.kayan?_t=8qFfnK49ERO&_r=1",
          linkedIn:
            "https://www.linkedin.com/in/islam-soliman-cipp-108791113?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
        {
          image: client3,
          name: "islamBob",
          position: "COO",
          facebook:
            "https://www.facebook.com/profile.php?id=100001081636690&mibextid=ZbWKwL",
          instgram:
            "https://www.instagram.com/eslampop26/profilecard/?igsh=MWtpMGs0b2JqM3J2ZA==",
          tiktok: "",
          linkedIn:
            "https://www.linkedin.com/in/mostafaismaeelhvac?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          image: client4,
          name: "ahmedMedhat",
          position: "AM",
          facebook: "https://www.facebook.com/profile.php?id=100069097247793",
          instgram:
            "https://www.instagram.com/medhat7195/profilecard/?igsh=djd1ZnR6c2xoYjdu",
          tiktok: "https://www.tiktok.com/@mostafa.kayan?_t=8qFfnK49ERO&_r=1",
          linkedIn:
            "https://www.linkedin.com/in/mostafaismaeelhvac?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
      ],
      images: [
        {
          image: amazon,
        },
        {
          image: google,
        },
        {
          image: lenovo,
        },
        {
          image: paypal,
        },
        {
          image: shopify,
        },
        {
          image: spotify,
        },
      ],
      datas: [
        {
          name: "Projects",
          target: "40",
          symbol: "+",
        },
        {
          name: "Clients",
          target: "200",
          symbol: "+",
        },
        {
          name: "Members",
          target: "457",
          symbol: "K",
        },
        {
          name: "Employee",
          target: "150",
          symbol: "+",
        },
      ],
    };
  },
  components: {
    CountUp,
  },
};
</script>

<style lang="scss" scoped></style>
