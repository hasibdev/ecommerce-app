<template>
   <app-layout>
      <hero-slider></hero-slider>
   </app-layout>
</template>

<script>
import AppLayout from 'layouts/AppLayout.vue'
import { defineComponent } from 'vue'
import HeroSlider from 'components/home/HeroSlider.vue'

export default defineComponent({
   components: { AppLayout, HeroSlider },
   name: 'PageIndex'
})
</script>
