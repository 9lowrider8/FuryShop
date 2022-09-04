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
      <ul>
        <li>
          <router-link to="product/11">
            <img
              src="https://dkstatics-public.digikala.com/digikala-adservice-banners/5cd769d60300a3cf32f9f0c43422b0517acef09f_1661597052.jpg?x-oss-process=image/quality,q_95"
              alt="">
          </router-link>
        </li>
        <li>
          <router-link to="product/22">
            <img
              src="https://dkstatics-public.digikala.com/digikala-adservice-banners/0283930dca2a437d99c1ac1a141809e0f72427a7_1661350324.jpg?x-oss-process=image/quality,q_95"
              alt="">
          </router-link>
        </li>
        <li>
          <router-link to="product/33">
            <img
              src="https://dkstatics-public.digikala.com/digikala-adservice-banners/ca65c9fdce4fd3d742c14012cbb853f832cb0eea_1661582505.jpg?x-oss-process=image/quality,q_95"
              alt="">
          </router-link>
        </li>
        <li>
          <router-link to="product/66">
            <img
              src="https://dkstatics-public.digikala.com/digikala-adservice-banners/97e65966c7e556eb1ac0149e3114873f0b02463d_1661357273.jpg?x-oss-process=image/quality,q_95"
              alt="">
          </router-link>
        </li>
      </ul>
    </div>
    <swiper :slidesPerView="6" :spaceBetween="8" :freeMode="true" :grabCursor="true" :centeredSlides="true"
      :modules="modules" class="mySwiper" id="secondswiper">
      <swiper-slide class="card" v-for="(item, index) in suggestedProducts" :key="index">
        <a href="">
          <img :src="item.image" alt=""><span>{{ item.title }}</span>
        </a>
      </swiper-slide>
    </swiper>
    <div class="banner">
      <a href=""><img
          src="https://dkstatics-public.digikala.com/digikala-adservice-banners/6be4627377fb7e158b8420a5173e4f7c4c201380_1661353937.jpg?x-oss-process=image/quality,q_95"
          alt=""></a>

    </div>

  </div>
</template>

<script>
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, FreeMode } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/free-mode";

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
      discountProducts: [],
      suggestedProducts: "",

    }
  },
  created() {
    axios
      .get('https://fakestoreapi.com/products?limit=10')
      .then(response => (
        this.suggestedProducts = response.data
      ));
    console.log(this.suggestedProducts)
  }
}
</script>