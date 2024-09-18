<template>

    <!-- Start -->
    <section class="relative md:py-24 py-16" id="features">
        <div class="container lg mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 pb-8 items-center">
                <div>
                    <h6 class="text-orange-600 text-base font-medium uppercase mb-2">What We Do ?</h6>
                    <h3 class="mb-4 md:text-2xl text-xl font-semibold dark:text-white md:mb-0">Perfect Solution For
                        Your <br> Business</h3>
                </div>

                <div>
                    <p class="text-slate-400 dark:text-slate-300 max-w-xl">Launch your campaign and benefit from our
                        expertise on designing and managing conversion centered Tailwind CSS html page.</p>
                </div>
            </div><!--end grid-->

            <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
                <div v-for="data in datas" :key="data" :class="data.class">
                    <div
                        class="size-20 bg-orange-600/5 text-orange-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm">
                        <i :class="data.icon"></i>
                    </div>

                    <div class="content mt-7">
                        <a href=""
                            class="text-lg hover:text-orange-600 dark:text-white dark:hover:text-orange-600 transition-all duration-500 ease-in-out font-medium">{{
                    data.name }}</a>
                        <p class="text-slate-400 mt-3">{{ data.desc }}</p>

                        <div class="mt-5">
                            <a href=""
                                class="btn btn-link hover:text-orange-600 dark:hover:text-orange-600 after:bg-orange-600 dark:text-white transition duration-500">Read
                                More <i class="uil uil-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div><!--end grid-->
        </div><!--end container-->


        <div class="container md:mt-24 mt-16">
            <div class="grid grid-cols-1 pb-8 text-center">
                <h6 class="text-orange-600 text-base font-medium uppercase mb-2">Work Process</h6>
                <h3 class="mb-4 md:text-2xl text-xl font-medium dark:text-white">Digital System For Our Business
                </h3>

                <p class="text-slate-400 dark:text-slate-300 max-w-xl mx-auto">Launch your campaign and benefit from
                    our expertise on designing and managing conversion centered Tailwind CSS html page.</p>
            </div><!--end grid-->

            <div class="grid grid-cols-1 mt-8">
                <div v-for="item in items" :key="item" class="timeline relative">
                    <div class="timeline-item">
                        <div v-if="item.name === 'Strategy'" class="grid sm:grid-cols-2">
                            <div>
                                <div class="duration date-label-left ltr:float-right rtl:float-left md:me-7 relative">
                                    <img :src="item.image" class="size-64" alt="">
                                </div>
                            </div><!--end col-->
                            <div class="mt-4 md:mt-0">
                                <div
                                    class="event event-description-right ltr:float-left rtl:float-right ltr:text-left rtl:text-right md:ms-7">
                                    <h5 class="text-lg dark:text-white mb-1 font-medium">{{ item.name }}</h5>
                                    <p class="timeline-subtitle mt-3 mb-0 text-slate-400">{{ item.desc }}</p>
                                </div>
                            </div><!--end col-->
                        </div><!--end grid-->
                    </div><!--end timeline item-->

                    <div class="timeline-item pt-4">
                        <div v-if="item.name === 'Development'" class="grid sm:grid-cols-2">
                            <div class="md:order-1 order-2">
                                <div
                                    class="event event-description-left ltr:float-left rtl:float-right ltr:text-right rtl:text-left md:me-7">
                                    <h5 class="text-lg dark:text-white mb-1 font-medium">{{ item.name }}</h5>
                                    <p class="timeline-subtitle mt-3 mb-0 text-slate-400">{{ item.desc }}</p>
                                </div>
                            </div><!--end col-->
                            <div class="md:order-2 order-1">
                                <div class="duration duration-right md:ms-7 relative">
                                    <img src="assets/images/svg/coding.svg" class="size-64" alt="">
                                </div>
                            </div><!--end col-->
                        </div><!--end grid-->
                    </div><!--end timeline item-->

                    <div class="timeline-item  pt-4">
                        <div v-if="item.name === 'Launch'" class="grid sm:grid-cols-2">
                            <div class="mt-4 mt-sm-0">
                                <div class="duration date-label-left ltr:float-right rtl:float-left md:me-7 relative">
                                    <img src="assets/images/svg/office-desk.svg" class="size-64" alt="">
                                </div>
                            </div><!--end col-->
                            <div class="mt-4 mt-sm-0">
                                <div
                                    class="event event-description-right ltr:float-left rtl:float-right ltr:text-left rtl:text-right md:ms-7">
                                    <h5 class="text-lg dark:text-white mb-1 font-medium">{{ item.name }}</h5>
                                    <p class="timeline-subtitle mt-3 mb-0 text-slate-400">{{ item.desc }}</p>
                                </div>
                            </div><!--end col-->
                        </div><!--end grid-->
                    </div><!--end timeline item-->
                </div>
            </div>
        </div><!--end container-->
    </section><!--end section-->
    <!-- End -->

</template>

<script>
import image from 'assets/images/svg/design-thinking.svg';
import image2 from 'assets/images/svg/coding.svg';
import image3 from 'assets/images/svg/office-desk.svg';


export default {
    data() {
        return {
            datas: [
                {
                    icon: 'uil uil-adjust-circle',
                    name: 'Grow Your Business',
                    desc: 'The phrasal sequence of the is now so that many campaign and benefit',
                    class: 'features p-6 hover:shadow-xl hover:shadow-slate-100 dark:hover:shadow-slate-800 transition duration-500 rounded-3xl mt-8'
                },
                {
                    icon: 'uil uil-circuit',
                    name: 'Drive More Sales',
                    desc: 'The phrasal sequence of the is now so that many campaign and benefit',
                    class: 'features p-6 shadow-xl shadow-slate-100 dark:shadow-slate-800 transition duration-500 rounded-3xl mt-8'
                },
                {
                    icon: 'uil uil-fire',
                    name: 'Handled By Expert',
                    desc: 'The phrasal sequence of the is now so that many campaign and benefit',
                    class: 'features p-6 hover:shadow-xl hover:shadow-slate-100 dark:hover:shadow-slate-800 transition duration-500 rounded-3xl mt-8'

                },
                {
                    icon: 'uil uil-flower',
                    name: 'Discussion For Idea',
                    desc: 'The phrasal sequence of the is now so that many campaign and benefit',
                    class: 'features p-6 shadow-xl shadow-slate-100 dark:shadow-slate-800 transition duration-500 rounded-3xl mt-8'


                },
                {
                    icon: '"uil uil-shopping-basket',
                    name: 'Increase Conversion',
                    desc: 'The phrasal sequence of the is now so that many campaign and benefit',
                    class: 'features p-6 hover:shadow-xl hover:shadow-slate-100 dark:hover:shadow-slate-800 transition duration-500 rounded-3xl mt-8'

                },
                {
                    icon: 'uil uil-flip-h',
                    name: 'Sales Growth Idea',
                    desc: 'The phrasal sequence of the is now so that many campaign and benefit',
                    class: 'features p-6 shadow-xl shadow-slate-100 dark:shadow-slate-800 transition duration-500 rounded-3xl mt-8'


                },
            ],
            items: [
                {
                    image: image,
                    name: 'Strategy',
                    desc: 'The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,'
                },
                {
                    image: image2,
                    name: 'Development',
                    desc: 'The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,'
                },
                {
                    image: image3,
                    name: 'Launch',
                    desc: 'The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,'
                }
            ]
        }
    },


}
</script>

<style lang="scss" scoped></style>