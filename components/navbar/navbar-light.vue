<template>
  <nav class="navbar" id="navbar" @scroll="handleScroll">
    <div class="container flex flex-wrap items-center justify-end">
      <NuxtLink class="navbar-brand" :to="localePath('/')">
        <span class="inline-block dark:hidden">
          <img src="assets/images/logo-dark.png" class="l-dark" alt="" />
          <img src="assets/images/logo-light.png" class="l-light" alt="" />
        </span>
        <img
          src="assets/images/logo-light.png"
          class="hidden dark:inline-block"
          alt=""
        />
      </NuxtLink>

      <div class="nav-icons flex items-center lg_992:order-2 ms-auto">
        <!-- Navbar Button -->
        <ul class="list-none menu-social mb-0 space-x-1">
          <li class="inline">
            <a
              href="https://web.facebook.com/elshamsforfinishingandconstruction?mibextid=ZbWKwL&_rdc=1&_rdr"
            >
              <span class="login-btn-primary"
                ><span
                  class="btn btn-sm btn-icon rounded-full bg-primary hover:bg-primary dark:border-gray-700 border-primary dark:hover:bg-gray-700 hover:border-gray-100 text-secondary"
                  ><i class="uil uil-facebook-f"></i></span
              ></span>
              <span class="login-btn-light"
                ><span
                  class="btn btn-sm btn-icon rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700"
                  ><i class="uil uil-facebook-f"></i></span
              ></span>
            </a>
          </li>
          <li class="inline">
            <a
              href="https://www.tiktok.com/@el.shams.construc?_t=8q7k6CB79E1&_r=1"
            >
              <span class="login-btn-primary"
                ><span
                  class="btn btn-sm btn-icon rounded-full bg-primary hover:bg-primary dark:border-gray-700 border-primary dark:hover:bg-gray-700 hover:border-gray-100 text-secondary"
                  ><Icon name="ic:baseline-tiktok" title="tiktok" /></span
              ></span>
              <span class="login-btn-light"
                ><span
                  class="btn btn-sm btn-icon rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700"
                  ><Icon name="ic:baseline-tiktok" title="tiktok" /></span
              ></span>
            </a>
          </li>
          <li class="inline">
            <a
              href="https://www.instagram.com/elshams.finishing?igsh=YmUxZTk2dXJtbzFw"
            >
              <span class="login-btn-primary"
                ><span
                  class="btn btn-sm btn-icon rounded-full bg-primary hover:bg-primary dark:border-gray-700 border-primary dark:hover:bg-gray-700 hover:border-gray-100 text-secondary"
                  ><i class="uil uil-instagram"></i></span
              ></span>
              <span class="login-btn-light"
                ><span
                  class="btn btn-sm btn-icon rounded-full bg-gray-50 hover:bg-gray-200 dark:bg-slate-900 dark:hover:bg-gray-700 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700"
                  ><i class="uil uil-instagram"></i></span
              ></span>
            </a>
          </li>
        </ul>
        <!-- Navbar Collapse Manu Button -->
        <button
          data-collapse="menu-collapse"
          type="button"
          class="collapse-btn inline-flex items-center ms-3 text-dark dark:text-white lg_992:hidden"
          aria-controls="menu-collapse"
          aria-expanded="false"
          @click="handler"
        >
          <span class="sr-only">Navigation Menu</span>
          <i class="mdi mdi-menu mdi-24px"></i>
        </button>
      </div>

      <!-- Navbar Manu -->
      <div
        class="navigation lg_992:order-1 lg_992:flex"
        id="menu-collapse"
        :class="{ hidden: !toggle }"
      >
        <ul class="navbar-nav nav-light" id="navbar-navlist">
          <li class="nav-item active home">
            <a class="nav-link active" href="#home" @click="toggle = false">{{
              $t("Home")
            }}</a>
          </li>
          <li class="nav-item about">
            <a class="nav-link" href="#about" @click="toggle = false">{{
              $t("About")
            }}</a>
          </li>
          <li class="nav-item services">
            <a class="nav-link" href="#services" @click="toggle = false">{{
              $t("Services")
            }}</a>
          </li>
          <li class="nav-item portfolio">
            <a class="nav-link" href="#portfolio" @click="toggle = false">{{
              $t("Portfolio")
            }}</a>
          </li>
          <li class="nav-item reviews">
            <a class="nav-link" href="#reviews" @click="toggle = false">{{
              $t("reviews")
            }}</a>
          </li>
          <li class="nav-item visionMission">
            <a class="nav-link" href="#visionMission" @click="toggle = false">{{
              $t("visionMission")
            }}</a>
          </li>
          <li class="nav-item projects">
            <a class="nav-link" href="#projects" @click="toggle = false">{{
              $t("Blog")
            }}</a>
          </li>
          <li class="nav-item contact">
            <a class="nav-link" href="#contact" @click="toggle = false">{{
              $t("Contact us")
            }}</a>
          </li>
        </ul>
      </div>
      <Switcher />
    </div>
  </nav>
  <!-- Navbar End -->
</template>

<script>
import { useLocalePath } from "#imports";

import Switcher from "@/components/switcher.vue";
export default {
  components: {
    Switcher,
  },
  data() {
    return {
      localePath: useLocalePath(),
      toggle: false,
      scroll: true,
      sections: document.querySelectorAll("section"),
      navLi: document.querySelectorAll("nav .container .navigation ul li"),
      current: "",
      sectionTop: null,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("scroll", this.onscroll);
  },

  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("scroll", this.onscroll);
  },

  methods: {
    handler: function () {
      this.toggle = !this?.toggle;
    },
    handleScroll(event) {
      const navbar = document.getElementById("navbar");
      if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
      ) {
        navbar.classList.add("is-sticky");
      } else {
        navbar.classList.remove("is-sticky");
      }
    },

    onscroll() {
      document.querySelectorAll("section").forEach((section) => {
        this.sectionTop = section.offsetTop;
        if (pageYOffset >= this.sectionTop - 60) {
          this.current = section.getAttribute("id");
        } else {
        }
      });
      document
        .querySelectorAll("nav .container .navigation ul li")
        .forEach((li) => {
          if (li.classList.contains(this.current)) {
            li.classList.add("active");
          } else {
            li.classList.remove("active");
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
