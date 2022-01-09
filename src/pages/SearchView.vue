<template>
   <app-layout :footer="false">
      <!-- Toolbar -->
      <template #toolbar>
         <toolbar-one canBack>
            <!-- <template #prepend>
               <q-icon @click="$router.back()" name="las la-angle-left" color="primary" size="25px" class="q-pr-sm" />
            </template> -->

            <template #middle>
               <div class="text-center">
                  <q-icon name="las la-search" color="grey-5" class="search-icon q-px-sm" />
                  <input v-model="searchText" ref="searchInput" class="search-input" placeholder="Search" type="text">
               </div>
            </template>
            <!-- <template v-if="!searchText" #append>
               <p @click="$router.back()" class="q-pl-md">Cancle</p>
            </template> -->
         </toolbar-one>
      </template>

      <!-- Search Suggestions -->
      <div v-if="!searchText">
         <!-- Recent search -->
         <div>
            <div class="flex justify-between items-center">
               <h6 class="text-bold">Recent Search</h6>
               <span>View All</span>
            </div>
            <!-- List -->
            <q-list>
               <q-item v-for="(item, i) in 3" :key="i" clickable v-ripple class="q-my-sm round-10 bg-white" :class="{'custom-shadow': i==0}">
                  <q-item-section avatar>
                     <q-avatar rounded color="transparent" text-color="white">
                        <q-img class="rounded-borders" src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
                     </q-avatar>
                  </q-item-section>

                  <q-item-section>
                     <q-item-label>
                        <p class="text-body1 text-bold">Headphone Joss</p>
                     </q-item-label>
                  </q-item-section>

                  <q-item-section side>
                     <q-icon name="las la-times" size="20px" color="grey-10" />
                  </q-item-section>
               </q-item>
            </q-list>
         </div>
         <!-- Popular Search -->
         <div style="height: 30px;"></div>
         <div>
            <div class="flex justify-between items-center">
               <h6 class="text-bold">Popular Search</h6>
               <span>View All</span>
            </div>
            <!-- List -->
            <q-list>
               <q-item v-for="item in 3" :key="item" class="q-my-sm round-10 bg-white" clickable v-ripple>
                  <q-item-section avatar>
                     <q-avatar rounded color="transparent" text-color="white">
                        <q-img class="rounded-borders" src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
                     </q-avatar>
                  </q-item-section>

                  <q-item-section>
                     <q-item-label>
                        <p class="text-body1 text-bold">Headphone Joss</p>
                     </q-item-label>
                  </q-item-section>

                  <q-item-section side>
                     <q-icon name="las la-times" size="20px" color="grey-10" />
                  </q-item-section>
               </q-item>
            </q-list>
         </div>
      </div>

      <!-- Search Results -->
      <div v-else>
         <div class="flex justify-between items-center">
            <p class="text-body1">Best Match
               <q-icon name="las la-angle-down" />
            </p>
            <div>
               <q-icon name="las la-bars" size="25px" class="text-bold text-grey-8" />
               <q-icon @click="openFilter" name="las la-sliders-h" size="25px" class="text-bold text-grey-8 q-ml-sm" />
            </div>
         </div>

         <!-- Results -->
         <div class="row q-col-gutter-md q-mt-md">
            <div class="col-6" v-for="item in 4" :key="item">
               <product-card name="Cafe Basilico" :price="32.50" :star="3.5" :reviews="1259" image="https://cdn.quasar.dev/img/chicken-salad.jpg" />
            </div>
         </div>
      </div>

   </app-layout>
</template>

<script>
import ProductCard from 'components/ProductCard'
import AppLayout from 'layouts/AppLayout.vue'
import ToolbarOne from 'components/toolbars/ToolbarOne.vue'
import SearchFilter from 'components/modals/SearchFilter.vue'
export default {
   components: {
      AppLayout, ToolbarOne, ProductCard
   },
   data() {
      return {
         searchText: ''
      }
   },
   mounted() {
      this.$refs.searchInput.focus()
   },
   methods: {
      openFilter() {
         this.$q.dialog({ component: SearchFilter })
      }
   }
}
</script>

<style lang="scss" scoped>
</style>
