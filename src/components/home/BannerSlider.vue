<template>
   <div class="q-mt-md swiper-wrapper items-center">
      <swiper v-if="items.length" :slides-per-view="4" :pagination="{ 'clickable': true }" :mousewheel="true" :space-between="10">
         <swiper-slide v-for="(item, i) in items" :key="i">
            <div @click="$router.push(`/categories/${i}`)" class="text-center q-pb-xl">
               <div class="q-pa-md border-1 round-10 inline-block">
                  <!-- <q-icon :name="item.icon" color="blue-10" size="30px" /> -->
                  <q-img :src="item.logo.path" width="40px" />
               </div>
               <p class="q-mt-md">{{ item.name }}</p>
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
         items: []
      }
   },
   async created() {
      const res = await this.$api('/featured-categories')
      this.items = res.data.categories
   }
}
</script>

<style lang="scss">
</style>
