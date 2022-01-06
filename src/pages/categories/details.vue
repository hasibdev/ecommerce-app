<template>
   <app-layout>
      <template #toolbar>
         <toolbar-one backWithText>
            <template #middle>
               <p class="text-center text-body1">Electronics</p>
            </template>
            <template #append>
               <div>
                  <q-btn flat round dense color="primary" icon="las la-shopping-cart" class="q-ml-md" />
                  <q-btn flat round dense color="primary" icon="search" class="q-ml-md" to="/search-view" />
               </div>
            </template>
         </toolbar-one>
      </template>

      <div id="category_slider">
         <swiper :slides-per-view="3.5" :freeMode="true" :mousewheel="true" :space-between="5">
            <swiper-slide v-for="(item, i) in items" :key="i">
               <p class="text-item" :class="{'active': i==0}">{{ item.title }}</p>
            </swiper-slide>
         </swiper>
      </div>

      <!-- Results -->
      <div class="row q-col-gutter-md q-mt-md">
         <div class="col-6" v-for="item in 4" :key="item">
            <product-card name="Cafe Basilico" :price="32.50" :star="3.5" :reviews="1259" image="https://cdn.quasar.dev/img/chicken-salad.jpg" />
         </div>
      </div>

   </app-layout>
</template>

<script>

import AppLayout from 'layouts/AppLayout.vue'
import ToolbarOne from 'components/toolbars/ToolbarOne.vue'
import ProductCard from 'components/ProductCard'

import { Swiper, SwiperSlide } from 'swiper/vue'

export default {
   components: {
      AppLayout, ToolbarOne, ProductCard, Swiper, SwiperSlide
   },
   data() {
      return {
         items: [
            { title: "Handphone", icon: 'las la-mobile' },
            { title: "Gaming", icon: 'las la-gamepad' },
            { title: "TV", icon: 'las la-tv' },
            { title: "Headphone", icon: 'las la-headphones' },
            { title: "Gaming", icon: 'las la-gamepad' },
            { title: "TV", icon: 'las la-tv' },
            { title: "Headphone", icon: 'las la-headphones' }
         ]
      }
   }
}
</script>

<style lang="scss" scoped>
#category_slider {
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
