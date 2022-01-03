<template>
   <app-layout>
      <hero-slider></hero-slider>
      <br>
      <banner-slider></banner-slider>
   </app-layout>
</template>

<script>
import AppLayout from 'layouts/AppLayout.vue'
import { defineComponent } from 'vue'
import HeroSlider from 'components/home/HeroSlider.vue'
import BannerSlider from 'components/home/BannerSlider.vue'

export default defineComponent({
   components: { AppLayout, HeroSlider, BannerSlider },
   name: 'PageIndex'
})
</script>
