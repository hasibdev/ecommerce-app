<template>
   <app-layout>
      <img alt="Quasar logo" src="~assets/quasar-logo-vertical.svg" style="width: 200px; height: 200px">
   </app-layout>
</template>

<script>
import AppLayout from 'layouts/AppLayout.vue'
import { defineComponent } from 'vue'

export default defineComponent({
   components: { AppLayout },
   name: 'PageIndex'
})
</script>
