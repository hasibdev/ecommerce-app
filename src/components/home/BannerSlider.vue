<template>
   <div id="home-banner" class="q-mt-md">
      <swiper :slides-per-view="4" :pagination="{ 'clickable': true }" :space-between="10">
         <swiper-slide v-for="(item, i) in items" :key="i">
            <div @click="$router.push(`/categories/${i}`)" class="text-center q-pb-xl">
               <div class="q-pa-md border-1 round-10 inline-block">
                  <q-icon :name="item.icon" color="blue-10" size="30px" />
               </div>
               <p class="q-mt-md">{{ item.title }}</p>
            </div>
         </swiper-slide>
      </swiper>
   </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, {
   Pagination
} from 'swiper'

// install Swiper modules
SwiperCore.use([Pagination])
// Import Swiper styles
import 'swiper/css'
import "swiper/css/pagination"

export default {
   components: {
      Swiper,
      SwiperSlide
   },
   data() {
      return {
         items: [
            { title: "Handphone", icon: 'las la-mobile' },
            { title: "TV", icon: 'las la-tv' },
            { title: "Headphone", icon: 'las la-headphones' },
            { title: "Gaming", icon: 'las la-gamepad' },
            { title: "Handphone", icon: 'las la-mobile' },
            { title: "TV", icon: 'las la-tv' },
            { title: "Headphone", icon: 'las la-headphones' }
         ]
      }
   }
}
</script>

<style lang="scss">
#home-banner {
   .q-carousel__navigation-icon--inactive {
      opacity: 0.5 !important;
   }
   .swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
   .swiper-pagination-horizontal.swiper-pagination-bullets
      .swiper-pagination-bullet {
      margin: 0 8px;
   }
   .swiper-pagination-bullet-active {
      background-color: $grey-10;
   }
}
</style>
