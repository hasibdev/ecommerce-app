<template>
   <div id="home-banner" class="q-mt-md">
      <swiper :slides-per-view="4" :pagination="{ 'clickable': true }" :space-between="10">
         <swiper-slide v-for="(item, i) in items" :key="i">
            <div class="text-center q-pb-xl">
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
            { title: "Handphone", icon: 'las la-truck' },
            { title: "TV", icon: 'las la-spinner' },
            { title: "Headphone", icon: 'las la-life-ring' },
            { title: "Gaming", icon: 'las la-envelope' },
            { title: "Handphone", icon: 'las la-truck' },
            { title: "TV", icon: 'las la-spinner' },
            { title: "Headphone", icon: 'las la-life-ring' },
            { title: "Gaming", icon: 'las la-envelope' }
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
   // .q-carousel__navigation-icon--active {
   //    color: red !important;
   // }
}
</style>
