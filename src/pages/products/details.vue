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
      <!-- Footer -->
      <template #footer>
         <q-footer class="bg-white text-grey-9">
            <div class="flex justify-between items-center q-px-md q-my-lg">
               <q-btn dense outline color="primary" icon="las la-shopping-cart" class="q-pa-md round-10"></q-btn>
               <q-btn rounded color="primary" class="q-px-xl q-py-sm flex-1 q-ml-lg">Buy Now</q-btn>
            </div>
         </q-footer>
      </template>

      <!-- Products Slider -->
      <div class="products-swiper">
         <swiper :pagination="{clickable: true}" :slides-per-view="1" :mousewheel="true">
            <swiper-slide v-for="(item, i) in 4" :key="i">
               <q-img :src="require(`assets/images/products/0${item}.jpg`)" />
            </swiper-slide>
         </swiper>
      </div>

      <!-- Main Content -->
      <div class="q-mt-lg relative-position">
         <!-- Product details -->
         <h5 class="q-pr-lg">Handphone</h5>
         <h4 class="q-mt-sm">$234</h4>
         <!-- Ragings -->
         <div class="flex q-mt-sm">
            <q-rating :model-value="4" icon-half="star_half" :max="5" size="16px" color="secondary" />
            <span class="q-ml-sm" style="font-size: 12px;">562 Reviews</span>
         </div>

         <div class="floating-btn bg-white">
            <span class="material-icons-outlined text-h5 q-pa-sm">
               favorite_border
            </span>
         </div>
      </div>

      <!-- Sold range -->
      <div class="sold-range q-mt-md">
         <span class="first-range"></span>
         <span class="second-range"></span>
         <span class="content">200 Sold</span>
      </div>

      <!-- Variant -->
      <div class="q-mt-md">
         <q-btn color="primary" class="q-pa-lg q-mr-sm round-10" />
         <q-btn color="secondary" class="q-pa-lg q-mr-sm round-10" />
         <q-btn color="grey-6" class="q-pa-lg q-mr-sm round-10" />
         <q-btn color="black" class="q-pa-lg q-mr-sm round-10" />
      </div>

      <!-- Description -->
      <div class="q-mt-lg">
         <p class="text-body1">Description Product</p>
         <p class="text-grey-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
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
.sold-range {
   position: relative;
   height: 30px;
   display: flex;
   align-items: center;
   border-radius: 10px;
   overflow: hidden;
   .first-range,
   .second-range {
      position: absolute;
      height: 100%;
   }
   .first-range {
      background: $secondary;
      width: 100%;
      opacity: 0.3;
   }
   .second-range {
      background: $primary;
      width: 65%;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
   }
   .content {
      position: relative;
      color: white;
      padding: 10px;
   }
}

// Floating Favourite Icon
.floating-btn {
   position: absolute;
   top: 10px;
   right: 0;
}
</style>
