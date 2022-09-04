<template>
  <div>
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, FreeMode } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/free-mode";

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
      modules: [Pagination, Navigation, FreeMode],
    };
  },
}
</script>

<style scoped>
img {
  width: 100%;
}
</style>