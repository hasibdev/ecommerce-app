<template>
   <app-layout>
      <!-- Toolbar Setup -->
      <template #toolbar>
         <toolbar-one backWithText>
            <template #append>
               <div></div>
            </template>
            <template #middle>
               <p class="text-center text-body1 text-bold q-mr-lg">My Cart</p>
            </template>

         </toolbar-one>
      </template>

      <!-- Main Content -->
      <div>
         <q-list>
            <q-item tag="label" clickable v-ripple class="bg-white round-10 custom-shadow">
               <q-item-section side top>
                  <q-checkbox v-model="check1" />
               </q-item-section>

               <q-item-section>
                  <q-item-label>Headphone Joss</q-item-label>
                  <q-item-label caption>
                     <p class="flex items-center" style="margin-top: 5px;">
                        <span class="bg-grey-14 inline-block rounded-borders" style="width:19px; height:19px;"></span>
                        <span class="q-ml-sm inline-block ">Grey</span>
                     </p>
                     <p class="text-h6 text-black q-mt-sm text-bold">$254</p>
                  </q-item-label>
               </q-item-section>
            </q-item>
            <q-item tag="label" clickable v-ripple class="bg-white round-10 q-mt-md">
               <q-item-section side top>
                  <q-checkbox v-model="check1" />
               </q-item-section>

               <q-item-section>
                  <q-item-label>Headphone Joss</q-item-label>
                  <q-item-label caption>
                     <p class="flex items-center" style="margin-top: 5px;">
                        <span class="bg-grey-14 inline-block rounded-borders" style="width:19px; height:19px;"></span>
                        <span class="q-ml-sm inline-block ">Grey</span>
                     </p>
                     <p class="text-h6 text-black q-mt-sm text-bold">$254</p>
                  </q-item-label>
               </q-item-section>
            </q-item>
         </q-list>
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
         check1: false
      }
   }
}
</script>

<style lang="scss" scoped>
</style>
