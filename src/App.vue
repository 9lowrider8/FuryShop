<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, FreeMode } from 'swiper';


import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  setup() {
    return {
      modules: [],
    };
  },
}
</script>

<style scoped>
img {
  width: 100%;
}
</style>