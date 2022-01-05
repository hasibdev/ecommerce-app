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
      <!-- Check box -->
      <div class="flex justify-between">
         <q-checkbox v-model="check1" label="Select All" />
         <span v-if="check1" class="text-primary">Delete All</span>
      </div>
      <!-- List -->
      <div>
         <q-list>
            <q-item v-for="(item, i) in 3" :key="i" tag="label" :class="{'custom-shadow': i==0}" class="bg-white round-10 q-mt-md">
               <q-item-section side top>
                  <q-checkbox v-model="check1" />
               </q-item-section>

               <!-- Label -->
               <q-item-section>
                  <q-item-label>Headphone Joss</q-item-label>
                  <q-item-label caption>
                     <p class="flex items-center" style="margin-top: 5px;">
                        <span class="bg-grey-14 inline-block rounded-borders" style="width:19px; height:19px;"></span>
                        <span class="q-ml-sm inline-block ">Grey</span>
                     </p>
                     <p class="text-h6 text-black q-mt-sm text-bold">$254</p>
                  </q-item-label>
                  <!-- Quantity adjust -->
                  <q-item-label>
                     <div class="flex justify-end">
                        <div style="margin-top: -25px;">
                           <q-btn dense unelevated @click="--quantity" color="grey-3" class="round-10 text-grey-6" icon="remove" />
                           <q-btn outline dense unelevated color="grey-3" class="round-10 q-px-md text-grey-10 q-mx-sm">{{ quantity }}</q-btn>
                           <q-btn dense unelevated @click="++quantity" color="grey-3" class="round-10 text-grey-6" icon="add" />
                        </div>
                     </div>
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
         check1: false,
         quantity: 1
      }
   }
}
</script>

<style lang="scss" scoped>
</style>
