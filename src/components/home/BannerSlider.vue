<template>
   <div class="q-mt-md swiper-wrapper items-center">
      <swiper v-if="items.length" :slides-per-view="4" :pagination="{ 'clickable': true }" :mousewheel="true" :space-between="20">
         <swiper-slide v-for="(item, i) in items" :key="i">
            <div @click="$router.push(`/categories/${item.slug}`)" class="text-center q-pb-xl">
               <div class="q-pa-sm border-1 round-10 flex justify-center items-center" style="height:55px;">
                  <!-- <q-icon :name="item.icon" color="blue-10" size="30px" /> -->
                  <q-img :src="item.logo.path" width="45px" />
               </div>
               <p class="q-mt-md">{{ item.name }}</p>
            </div>
         </swiper-slide>
      </swiper>

      <!-- Skeleton -->
      <div v-else class="full-width">
         <div class="row justify-between">
            <div class="col-3">
               <q-skeleton type="QToggle" width="65px" height="65px" />
            </div>
            <div class="col-3">
               <q-skeleton type="QToggle" width="65px" height="65px" />
            </div>
            <div class="col-3">
               <q-skeleton type="QToggle" width="65px" height="65px" />
            </div>
            <div class="col-3">
               <q-skeleton type="QToggle" width="65px" height="65px" />
            </div>
            <div class="col-12 flex justify-center q-mt-lg q-mb-md">
               <q-skeleton type="circle" size="10px" />
               <q-skeleton type="circle" class="q-mx-sm" size="10px" />
               <q-skeleton type="circle" size="10px" />
            </div>
         </div>
      </div>
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
