<template>
   <div id="home-banner">
      <swiper :slides-per-view="3" :space-between="50" :freeMode="true">
         <swiper-slide>Slide 1</swiper-slide>
         <swiper-slide>Slide 2</swiper-slide>
         <swiper-slide>Slide 3</swiper-slide>
         <swiper-slide>Slide 1</swiper-slide>
         <swiper-slide>Slide 2</swiper-slide>
         <swiper-slide>Slide 3</swiper-slide>
      </swiper>
   </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { FreeMode } from 'swiper'
// Import Swiper styles
import 'swiper/css'
import "swiper/css/free-mode"

SwiperCore.use(FreeMode)

export default {
   components: {
      Swiper,
      SwiperSlide
   }
}
</script>

<style lang="scss">
#home-banner {
   .q-carousel__navigation-icon--inactive {
      opacity: 0.5 !important;
   }
   // .q-carousel__navigation-icon--active {
   //    color: red !important;
   // }
}
</style>
