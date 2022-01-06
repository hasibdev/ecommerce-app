<template>
   <app-layout :footer="false">
      <!-- Toolbar setup -->
      <template #toolbar>
         <toolbar-one backWithText>
            <template #middle>
               <div></div>
            </template>
            <template #append>
               <!-- <q-icon color="grey-10" size="22px" name="share" class="q-pa-md" /> -->
               <span class="material-icons-outlined text-h6 q-pa-sm">
                  share
               </span>
            </template>
         </toolbar-one>
      </template>

      <div class="products-swiper">
         <swiper :pagination="{clickable: true}" :slides-per-view="1" :mousewheel="true">
            <swiper-slide v-for="(item, i) in 4" :key="i">
               <q-img :src="require(`assets/images/products/0${item}.jpg`)" />
            </swiper-slide>
         </swiper>
      </div>
   </app-layout>
</template>

<script>
import ToolbarOne from 'components/toolbars/ToolbarOne.vue'
import AppLayout from 'layouts/AppLayout.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import "swiper/css/pagination"
export default {
   components: {
      ToolbarOne, AppLayout, Swiper, SwiperSlide
   }
}
</script>

<style lang="scss" scoped>
</style>
