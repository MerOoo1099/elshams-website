<template>
  <!-- Start -->
  <section class="relative md:py-24 py-16" id="services">
    <div class="container lg mx-auto">
      <div class="grid grid-cols-1 pb-8 items-center justify-items-center">
        <h6 class="text-primary dark:text-secondary text-2xl font-medium uppercase mb-5">
          {{ $t("Why") }}
        </h6>
        <h3
          class="mb-4 md:text-2xl opacity-50 text-xl font-semibold dark:text-secondary md:mb-0"
        >
          {{ $t("ourSupport") }}
        </h3>
        <div class="text-slate-500 dark:text-slate-300 max-w-2xl mt-6">
          <ul class="flex flex-col gap-6 list-disc pl-7 mb-5">
            <li>
              <span class="text-primary dark:text-secondary font-bold text-xl">{{
                $t("1st")
              }}</span
              >&nbsp;&nbsp;{{ $t("1stService") }}
            </li>
            <li>
              <span class="text-primary dark:text-secondary font-bold text-xl">{{
                $t("2nd")
              }}</span
              >&nbsp;&nbsp;{{ $t("2ndService") }}
            </li>
            <li>
              <span class="text-primary dark:text-secondary font-bold text-xl">{{
                $t("3rd")
              }}</span
              >&nbsp;&nbsp;{{ $t("3rdService") }}
            </li>
            <li>
              <span class="text-primary dark:text-secondary font-bold text-xl">{{
                $t("4th")
              }}</span
              >&nbsp;&nbsp;{{ $t("4thService") }}
            </li>
            <li>
              <span class="text-primary dark:text-secondary font-bold text-xl">{{
                $t("5th")
              }}</span
              >&nbsp;&nbsp;{{ $t("5thService") }}
            </li>
          </ul>
        </div>
      </div>
      <!--end grid-->
    </div>
    <!--end container-->

    <div class="container md:mt-24 mt-16">
      <div class="grid grid-cols-1 pb-8 text-center">
        <h6 class="text-primary dark:text-secondary text-2xl font-medium uppercase mb-5">
          {{ $t("workProcess") }}
        </h6>
        <h3
          class="mb-4 opacity-50 md:text-2xl text-xl font-medium text-primary dark:text-secondary"
        >
          {{ $t("process") }}
        </h3>

        <!-- Add points list here -->
<!-- 
        <ol
          class="list-decimal text-start mx-auto max-w-2xl mt-4 text-slate-500 dark:text-slate-300 pl-5"
        >
          <li class="mb-4">
            <ul class="flex flex-col gap-3 list-disc pl-1">
              <strong class="text-primary dark:text-secondary text-xl"
                >{{ $t("consultationVisionTitle") }}
              </strong>
              <li>&nbsp;&nbsp;{{ $t("consultationVisionText") }}</li>
              <li>&nbsp;&nbsp;{{ $t("consultationVisionText2") }}</li>
            </ul>
          </li>
          <li class="mb-4">
            <ul class="flex flex-col gap-3 list-disc pl-1">
              <strong class="text-primary dark:text-secondary text-xl"
                >{{ $t("designPlanningTitle") }}
              </strong>
              <li>&nbsp;&nbsp;{{ $t("designPlanningText") }}</li>
              <li>&nbsp;&nbsp;{{ $t("designPlanningText2") }}</li>
              <li>&nbsp;&nbsp;{{ $t("designPlanningText3") }}</li>
            </ul>
          </li>
          <li class="mb-4">
            <ul class="flex flex-col gap-3 list-disc pl-1">
              <strong class="text-primary dark:text-secondary text-xl"
                >{{ $t("budgetTimelineTitle") }}
              </strong>
              <li>&nbsp;&nbsp;{{ $t("budgetTimelineText") }}</li>
              <li>&nbsp;&nbsp;{{ $t("budgetTimelineText2") }}</li>
            </ul>
          </li>
          <li class="mb-4">
            <ul class="flex flex-col gap-3 list-disc pl-1">
              <strong class="text-primary dark:text-secondary text-xl"
                >{{ $t("materialSelectionTitle") }}
              </strong>
              <li>&nbsp;&nbsp;{{ $t("materialSelectionText") }}</li>
              <li>&nbsp;&nbsp;{{ $t("materialSelectionText2") }}</li>
            </ul>
          </li>
          <li class="mb-4">
            <ul class="flex flex-col gap-3 list-disc pl-1">
              <strong class="text-primary dark:text-secondary text-xl"
                >{{ $t("implementationTitle") }}
              </strong>
              <li>&nbsp;&nbsp;{{ $t("implementationText") }}</li>
              <li>&nbsp;&nbsp;{{ $t("implementationText2") }}</li>
            </ul>
          </li>
          <li class="mb-4">
            <ul class="flex flex-col gap-3 list-disc pl-1">
              <strong class="text-primary dark:text-secondary text-xl"
                >{{ $t("supervisionUpdatesTitle") }}
              </strong>
              <li>&nbsp;&nbsp;{{ $t("supervisionUpdatesText") }}</li>
              <li>&nbsp;&nbsp;{{ $t("supervisionUpdatesText2") }}</li>
            </ul>
          </li>
          <li class="mb-4">
            <ul class="flex flex-col gap-3 list-disc pl-1">
              <strong class="text-primary dark:text-secondary text-xl"
                >{{ $t("finalTouchesInspectionTitle") }}
              </strong>
              <li>&nbsp;&nbsp;{{ $t("finalTouchesInspectionText") }}</li>
              <li>&nbsp;&nbsp;{{ $t("finalTouchesInspectionText2") }}</li>
            </ul>
          </li>
          <li class="mb-4">
            <ul class="flex flex-col gap-3 list-disc pl-1">
              <strong class="text-primary dark:text-secondary text-xl"
                >{{ $t("handoverSatisfactionTitle") }}
              </strong>
              <li>&nbsp;&nbsp;{{ $t("handoverSatisfactionText") }}</li>
              <li>&nbsp;&nbsp;{{ $t("handoverSatisfactionText2") }}</li>
            </ul>
          </li>
          <li class="mb-4">
            <ul class="flex flex-col gap-3 list-disc pl-1">
              <strong class="text-primary dark:text-secondary text-xl"
                >{{ $t("afterServiceSupportTitle") }}
              </strong>
              <li>&nbsp;&nbsp;{{ $t("afterServiceSupportText") }}</li>
            </ul>
          </li>
        </ol> -->
      </div>
      <!--end grid-->
      <StepVideos />
    </div>
    <!--end container-->
  </section>
  <!--end section-->
  <!-- End -->
</template>
