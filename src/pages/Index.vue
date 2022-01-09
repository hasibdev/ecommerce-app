<template>
   <app-layout>
      <hero-slider />

      <br>
      <banner-slider />

      <br>
      <todays-best />

   </app-layout>
</template>

<script>
import AppLayout from 'layouts/AppLayout.vue'
import { defineComponent } from 'vue'
import HeroSlider from 'components/home/HeroSlider.vue'
import TodaysBest from 'components/home/TodaysBest.vue'
import BannerSlider from 'components/home/BannerSlider.vue'

export default defineComponent({
   name: 'PageIndex',
   components: { AppLayout, BannerSlider, TodaysBest, HeroSlider },
   data() {
      return {
         heroSlider: null,
         loading: false
      }
   }
})
</script>
