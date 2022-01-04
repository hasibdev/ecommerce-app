<template>
   <div id="home-banner">
      <swiper :slides-per-view="1.3" :space-between="0" :freeMode="true">
         <swiper-slide v-for="(item, i) in items" :key="i">
            <div class="row">
               <q-icon :name="item.icon" color="primary" size="35px" class="col-2" />
               <div class="col-10 ">
                  <div class="q-ml-sm">
                     <h6>{{item.title}}</h6>
                     <p>{{item.subtitle}}</p>
                  </div>
               </div>
            </div>
         </swiper-slide>
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
   },
   data() {
      return {
         items: [
            { title: "Payment & Delivery", subtitle: 'Free shipping for orders over $50', icon: 'las la-truck' },
            { title: "Return & Refund", subtitle: 'Free 100% money back guarantee', icon: 'las la-spinner' },
            { title: "Quality Support", subtitle: 'Alway online feedback 24/7', icon: 'las la-life-ring' },
            { title: "JOIN OUR NEWSLETTER", subtitle: '10% off by subscribing to our newsletter', icon: 'las la-envelope' }
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
