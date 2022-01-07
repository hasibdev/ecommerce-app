<template>
   <q-page>
      <div id="onboarding_wraper" class="q-pa-md">
         <div style="height: 100px"></div>

         <swiper :pagination="true" :slides-per-view="1" class="text-center">
            <swiper-slide style="padding-bottom: 90px;">
               <onboard-1-svg />
               <h5 class="text-bold q-mt-xl">Online Shopping</h5>
               <p class="text-body1 q-mt-lg">Buy anything you need anywhere and with the guarantee of the best goods.</p>
            </swiper-slide>
            <swiper-slide style="padding-bottom: 90px;">
               <onboard-2-svg />
               <h5 class="text-bold q-mt-xl">An Affordable Price</h5>
               <p class="text-body1 q-mt-lg">we have very cheap prices with easy and simple transactions</p>
            </swiper-slide>
            <swiper-slide style="padding-bottom: 90px;">
               <onboard-3-svg />
               <h5 class="text-bold q-mt-xl">Tracking your Shipments</h5>
               <p class="text-body1 q-mt-lg">Use the tracking system feature to get information about the courier on the map</p>
            </swiper-slide>
         </swiper>

         <div class="q-mt-xl">
            <q-btn rounded no-caps unelevated to="/signin" color="primary" label="Getting Started" size="lg" class="full-width" />
         </div>
      </div>
   </q-page>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import Onboard1Svg from 'components/svg/Onboard1.vue'
import Onboard2Svg from 'components/svg/Onboard2.vue'
import Onboard3Svg from 'components/svg/Onboard3.vue'
export default {
   components: {
      Swiper, SwiperSlide, Onboard1Svg, Onboard2Svg, Onboard3Svg
   }
}
</script>

<style lang="scss">
#onboarding_wraper {
   .swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
   .swiper-pagination-horizontal.swiper-pagination-bullets
      .swiper-pagination-bullet {
      margin: 0 8px;
      transition: all 0.3s ease-in-out;
   }

   .swiper-pagination-bullet-active {
      background-color: $primary;
      width: 28px;
      border-radius: 6px;
   }
}
</style>
