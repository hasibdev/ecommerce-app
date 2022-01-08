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

      <!-- Footer -->
      <template #footer>
         <q-footer id="app_footer" class="bg-white text-grey-9 q-pa-md ">
            <div class="flex justify-between ">
               <p class="text-body1 ">Sub total price</p>
               <h6>$245</h6>
            </div>

            <div class="flex justify-between items-center q-mt-sm">
               <div>
                  <p class="text-grey-6">Total</p>
                  <p class="text-bold text-body1">$490</p>
               </div>
               <q-btn rounded unelevated color="primary" class="q-px-xl q-py-sm">Buy Now</q-btn>
            </div>

         </q-footer>
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
                  <q-icon name="o_map" color="primary" size="md" />
                  Shipping Address
               </h6>
               <span class="text-primary">Edit</span>
            </div>

            <p class="text-bold text-body1 q-mt-md">Shoo Phar Nhoe</p>
            <p class="text-grey-7 text-body1 q-mt-sm">Planet Namex, 989 Warhammer Street</p>
            <p class="text-grey-7 text-body1 q-mt-sm">(+78) 8989 8787</p>
         </div>

         <q-separator class="q-my-lg" />

         <!-- Delivery Service -->
         <div class="">
            <div class="flex justify-between items-center">
               <h6>
                  <q-icon name="las la-truck" size="md" class="text-primary q-mr-sm" />
                  Delivery Service
               </h6>
               <span class="text-primary">Edit</span>
            </div>

            <p class="text-bold text-body1 q-mt-md">Delivery Service</p>
            <p class="text-grey-7 text-body1 q-mt-sm">FeedEx Reguler (3-4 days)</p>
            <p class="text-grey-7 text-body1 q-mt-sm">$3.50</p>
         </div>

         <q-separator class="q-my-lg" />

         <div class="flex justify-between items-center">
            <h6>
               <q-icon name="las la-credit-card" size="md" class="text-primary q-mr-sm" />
               Payment Methods
            </h6>
            <span class="text-primary">Edit</span>
         </div>

         <h6>E-Wallet</h6>

         <q-separator class="q-my-lg" />

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
