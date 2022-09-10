<template>
  <div id="main-page">
    <swiper :pagination="{
      type: 'progressbar',
    }" :navigation="true" :modules="modules" class="mySwiper" id="top-slider">
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
    <div id="discount">
      <ul >
        <li v-for="(item, index) in discountProducts" :key="index">
          <router-link :to="{ path: '/product/'+ item.id}">
            <img :src="item.image" alt="">
            
          </router-link>
        </li>
      </ul>
    </div>
    <swiper
    :breakpoints="{
      '370': {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      '640': {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      '768': {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      '1024': {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    }"  
      :freeMode="true" :grabCursor="true" :centeredSlides="true"
      :modules="modules" class="mySwiper" id="secondswiper">
      <swiper-slide id="slide" class="card" v-for="(item, index) in suggestedProducts" :key="index">
        <router-link :to="{ path: '/product/'+ item.id}">
          <img width="200" height="100" :src="item.image" alt=""><span>{{ item.title }}</span>
        </router-link>
      </swiper-slide>
    </swiper>
    <div class="banner">
      <a href=""><img
          src="https://dkstatics-public.digikala.com/digikala-adservice-banners/6be4627377fb7e158b8420a5173e4f7c4c201380_1661353937.jpg?x-oss-process=image/quality,q_95"
          alt=""></a>

    </div>
    <hr>
  </div>
</template>

<script>


import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, FreeMode } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/free-mode";
import axios from 'axios'
export default {
  name: "App",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation, FreeMode],
    };
  },
  data() {
    return {
      discountProducts: "",
      suggestedProducts: "",
    }
  },
  created() {
    axios
      .get('https://fakestoreapi.com/products?limit=10')
      .then(response => (
        this.suggestedProducts = response.data
      ));
      axios
      .get('https://fakestoreapi.com/products?limit=4')
      .then(response => (
        this.discountProducts = response.data
      ))
  }
}
</script>