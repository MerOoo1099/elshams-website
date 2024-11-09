<template>
  <section
    class="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800"
    id="contact"
  >
    <div class="container">
      <div class="grid grid-cols-1 pb-8 text-center">
        <h6 class="text-primary dark:text-secondary text-2xl font-medium uppercase mb-2">
          {{ $t("Contact us") }}
        </h6>
        <h3 class="mb-4 md:text-2xl text-xl font-medium dark:text-secondary opacity-50">
          {{ $t("getInTouch") }}
        </h3>

        <!-- <p class="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">
          Launch your campaign and benefit from our expertise on designing and
          managing conversion centered Tailwind CSS html page.
        </p> -->
      </div>
      <!--end grid-->

      <div
        class="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 mt-8 items-center gap-6"
      >
        <div class="lg:col-span-8">
          <div class="p-6 rounded-md shadow bg-white dark:bg-slate-900">
            <form>
              <div class="grid lg:grid-cols-12 lg:gap-6">
                <div class="lg:col-span-6 mb-5">
                  <input
                    v-model="client.name"
                    name="name"
                    id="name"
                    type="text"
                    class="form-input"
                    :placeholder="$t('Name')"
                  />
                </div>

                <div class="lg:col-span-6 mb-5">
                  <input
                    v-model="client.email"
                    name="email"
                    id="email"
                    type="email"
                    class="form-input"
                    :placeholder="$t('Email')"
                  />
                </div>
                <!--end col-->
              </div>

              <div class="grid grid-cols-1">
                <div class="mb-5">
                  <input
                    v-model="client.subject"
                    name="subject"
                    id="subject"
                    class="form-input"
                    :placeholder="$t('Subject')"
                  />
                </div>

                <div class="mb-5">
                  <textarea
                    v-model="client.message"
                    name="comments"
                    id="comments"
                    class="form-input textarea h-28"
                    :placeholder="$t('Message')"
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                id="submit"
                name="send"
                class="btn bg-third hover:bg-primary border-third hover:border-primary text-primary hover:text-secondary rounded-lg h-11 justify-center flex items-center hover:animate-bounce"
              >
                <a
                  :href="`mailto:elshamscompanyforcontractoring@gmail.com?subject=${client.subject};body=${client.message}`"
                  >{{ $t("Send Message") }}</a
                >
              </button>
            </form>
          </div>
        </div>

        <div class="lg:col-span-4">
          <div class="lg:ms-8">
            <div class="flex">
              <div class="icons text-center mx-auto">
                <i
                  class="uil uil-phone block rounded text-2xl dark:text-white mb-0"
                ></i>
              </div>

              <div class="flex-1 ms-6">
                <h5 class="text-lg dark:text-white mb-2 font-medium">
                  {{ $t("Phone") }}
                </h5>
                <a href="tel:+201014055568" class="text-slate-400"
                  >+201014055568</a
                >
              </div>
            </div>

            <div class="flex mt-4">
              <div class="icons text-center mx-auto">
                <i
                  class="uil uil-envelope block rounded text-2xl dark:text-white mb-0"
                ></i>
              </div>

              <div class="flex-1 ms-6">
                <h5 class="text-lg dark:text-white mb-2 font-medium">
                  {{ $t("mail") }}
                </h5>
                <a
                  href="mailto:elshamscompanyforcontractoring@gmail.com"
                  class="text-slate-400"
                  >elshamscompanyforcontractoring@gmail.com</a
                >
              </div>
            </div>

            <div class="flex mt-4">
              <div class="icons text-center mx-auto">
                <i
                  class="uil uil-map-marker block rounded text-2xl dark:text-white mb-0"
                ></i>
              </div>

              <div class="flex-1 ms-6">
                <h5 class="text-lg dark:text-white mb-2 font-medium">
                  {{ $t("Location") }}
                </h5>
                <p class="text-slate-400 mb-2">
                  {{ $t("companyLocation") }}
                </p>
              </div>
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

<script setup>
const client = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});
</script>

<style lang="scss" scoped></style>
