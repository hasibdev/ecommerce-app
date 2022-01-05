<template>
   <app-layout>
      <template #toolbar>
         <toolbar-one>
            <template #prepend>
               <back-btn />
            </template>
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
import BackBtn from 'components/buttons/BackBtn.vue'
import ProductCard from 'components/ProductCard'
export default {
   components: {
      AppLayout, ToolbarOne, BackBtn, ProductCard
   }
}
</script>

<style lang="scss" scoped>
</style>
