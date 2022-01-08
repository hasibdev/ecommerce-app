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
      <!-- Footer -->
      <template #footer>
         <q-footer id="app_footer" class="bg-white text-grey-9">

            <div v-if="true" class="flex justify-between items-center q-px-md q-my-lg">
               <div>
                  <p class="text-grey-6" style="font-size: 12px;">Total (3 Items)</p>
                  <p class="text-bold text-body1">$490</p>
               </div>
               <q-btn rounded color="primary" class="q-px-xl q-py-sm">Buy Now</q-btn>
            </div>
            <!-- Empty cart footer -->
            <div v-else class="q-ma-md">
               <q-btn rounded to="/" color="primary" class="full-width q-py-sm" label="Continue Shopping" />
            </div>
         </q-footer>
      </template>

      <!-- Main Content -->
      <section v-if="true">
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
                     <q-item-label>
                        <p class="text-body1">Headphone Joss</p>
                     </q-item-label>
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
      </section>

      <!-- Empty Cart -->
      <section v-else>
         <div class="text-center q-mt-lg">
            <cart-svg />
            <div class="q-mt-lg q-pa-md">
               <h6>Your cart is empty</h6>
               <p>looks like you haven't made your choice yet. Come on, find the item you want.</p>
            </div>
         </div>
      </section>

   </app-layout>
</template>

<script>
import AppLayout from 'layouts/AppLayout.vue'
import ToolbarOne from 'components/toolbars/ToolbarOne.vue'
import CartSvg from 'components/svg/CartSvg.vue'
export default {
   components: {
      AppLayout, ToolbarOne, CartSvg
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
