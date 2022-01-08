<template>
   <app-layout>
      <template #toolbar>
         <toolbar-one backWithText>
            <template #middle>
               <p class="text-center text-body1 text-bold q-mr-lg">Checkout</p>
            </template>
            <template #append>
               <div></div>
            </template>
         </toolbar-one>
      </template>

      <!-- Main Content -->
      <div>
         <q-list>
            <q-item tag="label" class="bg-white round-10 q-mt-md">
               <!-- Label -->
               <q-item-section>
                  <p class="text-body1">Headphone Joss</p>
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

         <!-- Shipping Address -->
         <div class="q-mt-lg">
            <div class="flex justify-between items-center">
               <h6>
                  <span class="material-icons-outlined text-primary text-h5 q-mr-sm">
                     map
                  </span>
                  Shipping Address
               </h6>
               <span class="text-primary">Edit</span>
            </div>

            <p class="text-bold text-body1 q-mt-md">Shoo Phar Nhoe</p>
            <p class="text-grey-7 text-body1 q-mt-md">Planet Namex, 989 Warhammer Street</p>
            <p class="text-grey-7 text-body1 q-mt-sm">(+78) 8989 8787</p>
         </div>

         <q-separator />

         <!-- Delivery Service -->
         <div class="q-mt-lg">
            <div class="flex justify-between items-center">
               <h6>
                  <q-icon name="las la-truck" />
                  Shipping Address
               </h6>
               <span class="text-primary">Edit</span>
            </div>

            <p class="text-bold text-body1 q-mt-md">Shoo Phar Nhoe</p>
            <p class="text-grey-7 text-body1 q-mt-md">Planet Namex, 989 Warhammer Street</p>
            <p class="text-grey-7 text-body1 q-mt-sm">(+78) 8989 8787</p>
         </div>

      </div>
   </app-layout>
</template>

<script>
import ToolbarOne from 'components/toolbars/ToolbarOne.vue'
import AppLayout from 'layouts/AppLayout.vue'
export default {
   components: {
      AppLayout, ToolbarOne
   },
   data() {
      return {
         quantity: 1
      }
   }
}
</script>

<style lang="scss" scoped>
</style>
