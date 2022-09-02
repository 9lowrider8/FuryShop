<template>
  <div>
    <Header />
    <swiper :pagination="{
      type: 'progressbar',
    }" :navigation="true" :modules="modules" class="mySwiper">
      <swiper-slide><img
          src="https://dkstatics-public.digikala.com/digikala-adservice-banners/9e07d541b92f1564241b835c36174b35da6b31a5_1661089146.jpg?x-oss-process=image/quality,q_95"
          alt="" srcset=""></swiper-slide>
      <swiper-slide><img
          src="https://dkstatics-public.digikala.com/digikala-adservice-banners/83324053d503e0389bc0078fbaa51f7fa860d613_1661340506.jpg?x-oss-process=image/quality,q_95"
          alt="" srcset=""></swiper-slide>
      <swiper-slide><img
          src="https://dkstatics-public.digikala.com/digikala-adservice-banners/4d5f0655017c66ddd531aa9a13e60a755d5b81f9_1661780129.jpg?x-oss-process=image/quality,q_95"
          alt="" srcset=""></swiper-slide>
    </swiper>
    <Footer />
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
}
</script>

<style scoped>
img {
  width: 100%;
}
</style>