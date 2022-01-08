<template>
   <app-layout>
      <!-- Toolbar setup -->
      <template #toolbar>
         <toolbar-one canMessage>
            <template #middle>
               <p class="text-body1">My Orders</p>
            </template>
         </toolbar-one>
      </template>

      <!-- main Content -->
      <!-- Slider -->
      <div id="orders_category_slider">
         <swiper :slides-per-view="3" :freeMode="true" :mousewheel="true" :space-between="5">
            <swiper-slide v-for="(item, i) in items" :key="i">
               <p class="text-item" :class="{active: i==0}">{{ item.title }}</p>
            </swiper-slide>
         </swiper>
      </div>

      <!-- Content list -->
      <div v-for="(item, i) in 2" :key="i" :class="{'custom-shadow': i==0}" class="bg-white round-10 q-pa-sm q-mt-md">
         <div class="flex items-center">
            <div>
               <q-avatar size="70px" class="round-10">
                  <img src="https://cdn.quasar.dev/img/boy-avatar.png">
               </q-avatar>
            </div>
            <div class="q-ml-md">
               <p class="text-body1">Headphone Joss</p>
               <p class="flex items-center" style="margin-top: 5px;">
                  <span class="bg-grey-14 inline-block rounded-borders" style="width:19px; height:19px;"></span>
                  <span class="q-ml-sm inline-block ">Grey</span>
               </p>

               <p class="text-body1 q-mt-sm"> 2pcs <span class="text-bold q-ml-sm">$120</span></p>
            </div>
         </div>

         <div class="row q-mt-sm">
            <q-btn no-caps outline color="primary" rounded class="col" label="Give Feedback" />
            <div style="width: 15px;"></div>
            <q-btn no-caps color="primary" rounded class="col" label="Re-Order" />
         </div>
      </div>
   </app-layout>
</template>

<script>
import AppLayout from 'layouts/AppLayout.vue'
import ToolbarOne from 'components/toolbars/ToolbarOne.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'

export default {
   components: {
      AppLayout, ToolbarOne, Swiper, SwiperSlide
   },
   data() {
      return {
         items: [
            { title: "Shipped" },
            { title: "Delivered" },
            { title: "Cancled" }
         ]
      }
   }
}
</script>

<style lang="scss" scoped>
#orders_category_slider {
   .text-item {
      color: $primary;
      text-align: center;
      padding: 5px 10px;
      border: 1px solid transparent;
      border-radius: 18px;
      &.active {
         border-color: $primary;
         font-weight: 500;
      }
   }
}
</style>
