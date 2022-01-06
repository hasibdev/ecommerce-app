<template>
   <div class="q-mt-md swiper-wrapper">
      <swiper :slides-per-view="4" :pagination="{ 'clickable': true }" :mousewheel="true" :space-between="10">
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
</style>
