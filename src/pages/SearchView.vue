<template>
   <app-layout :footer="false">
      <!-- Toolbar -->
      <template #toolbar>
         <toolbar-one>
            <template #middle>
               <div class="text-center">
                  <q-icon name="las la-search" color="grey-5" class="search-icon q-px-sm" />
                  <input v-model="searchText" class="search-input" placeholder="Search" type="text">
               </div>
            </template>
            <template #append>
               <p @click="$router.back()" class="q-pl-md">Cancle</p>
            </template>
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
               <q-item v-for="(item, i) in 3" :key="i" clickable v-ripple class="q-my-sm round-10" :class="{'custom-shadow': i==0}">
                  <q-item-section avatar>
                     <q-avatar rounded color="transparent" text-color="white">
                        <q-img class="rounded-borders" src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
                     </q-avatar>
                  </q-item-section>

                  <q-item-section>
                     <q-item-label>
                        <h6 class="">Headphone Joss</h6>
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
               <q-item v-for="item in 3" :key="item" dense class="q-my-sm" clickable v-ripple>
                  <q-item-section avatar>
                     <q-avatar rounded color="transparent" text-color="white">
                        <q-img class="rounded-borders" src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
                     </q-avatar>
                  </q-item-section>

                  <q-item-section>
                     <q-item-label>
                        <h6 class="">Headphone Joss</h6>
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

      </div>

   </app-layout>
</template>

<script>
import AppLayout from 'layouts/AppLayout.vue'
import ToolbarOne from 'components/toolbars/ToolbarOne.vue'
export default {
   components: {
      AppLayout, ToolbarOne
   },
   data() {
      return {
         searchText: ''
      }
   },
   mounted() {
      console.log('mounted')
   }
}
</script>

<style lang="scss" scoped>
</style>
