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
import BannerSlider from 'components/home/BannerSlider.vue'
import TodaysBest from 'components/home/TodaysBest.vue'

export default defineComponent({
   components: { AppLayout, HeroSlider, BannerSlider, TodaysBest },
   name: 'PageIndex'
})
</script>
