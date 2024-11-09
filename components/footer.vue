<template>
  <!-- Start Footer -->
  <footer class="py-8 bg-slate-800 dark:bg-gray-900">
    <div class="container">
      <div class="grid md:grid-cols-12 items-center">
        <div class="md:col-span-3">
          <a href="#" class="logo-footer">
            <img
              src="assets/images/logo-light.png"
              class="md:ms-0 mx-auto"
              alt=""
            />
          </a>
        </div>

        <div class="md:col-span-5 md:mt-0 mt-8">
          <div class="text-center">
            <p class="text-gray-400">
              © {{ date }} {{ $t("copyright")
              }}<i class="mdi mdi-heart text-red-500"></i> {{ $t("by") }}
              <a href="" target="_blank" class="text-reset">{{
                $t("Elshams")
              }}</a
              >.
            </p>
          </div>
        </div>

        <div class="md:col-span-4 md:mt-0 mt-8">
          <ul
            class="list-none foot-icon ltr:md:text-right rtl:md:text-left text-center"
          >
            <li class="inline">
              <a
                href="https://web.facebook.com/elshamsforfinishingandconstruction?mibextid=ZbWKwL&_rdc=1&_rdr"
                target="_blank"
                class="btn btn-icon btn-sm border rounded-md border-slate-700 dark:border-slate-800 hover:border-primary bg-slate-800 dark:bg-gray-900 hover:bg-secondary dark:hover:bg-secondary dark:hover:text-primary text-gray-400 hover:text-primary"
                ><i class="uil uil-facebook-f align-middle" title="facebook"></i
              ></a>
            </li>
            <li class="inline">
              <a
                href="https://www.instagram.com/elshams.finishing?igsh=YmUxZTk2dXJtbzFw"
                target="_blank"
                class="btn btn-icon btn-sm border rounded-md border-slate-700 dark:border-slate-800 hover:border-primary bg-slate-800 dark:bg-gray-900 hover:bg-secondary dark:hover:bg-secondary dark:hover:text-primary text-gray-400 hover:text-primary"
                ><i class="uil uil-instagram align-middle" title="instagram"></i
              ></a>
            </li>
            <li class="inline">
              <a
                href="https://www.tiktok.com/@el.shams.construc?_t=8q7k6CB79E1&_r=1"
                target="_blank"
                class="btn btn-icon btn-sm border rounded-md border-slate-700 dark:border-slate-800 hover:border-primary bg-slate-800 dark:bg-gray-900 hover:bg-secondary dark:hover:bg-secondary dark:hover:text-primary text-gray-400 hover:text-primary"
                ><Icon
                  class="align-middle"
                  name="ic:baseline-tiktok"
                  title="tiktok"
              /></a>
            </li>
            <li class="inline">
              <a
                href="mailto:elshamscompanyforcontractoring@gmail.com"
                class="btn btn-icon btn-sm border rounded-md border-slate-700 dark:border-slate-800 hover:border-primary bg-slate-800 dark:bg-gray-900 hover:bg-secondary dark:hover:bg-secondary dark:hover:text-primary text-gray-400 hover:text-primary"
                ><Icon class="align-middle" name="ri:google-fill"
              /></a>
            </li>
          </ul>
          <!--end icon-->
        </div>
        <!--end col-->
      </div>
      <!--end row-->
    </div>
    <!--end container-->
  </footer>
  <!--end footer-->
  <!-- End Footer -->
</template>

<script>
export default {
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
};
</script>

<style lang="scss" scoped></style>
