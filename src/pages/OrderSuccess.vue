<template>
   <app-layout>
      <template #toolbar>
         <div></div>
      </template>
      <template #footer>
         <q-footer class="body-bg text-grey-9 q-pa-md ">
            <q-btn to="/" rounded unelevated color="primary" size="lg" class="q-px-xl q-py-sm full-width">Continue Shopping</q-btn>
         </q-footer>
      </template>

      <!-- Main Content -->
      <div class="text-center q-mt-xl q-pt-xl">
         <onboarding-4-svg />

         <h4 class="q-mt-lg">Order successful</h4>
         <p class="text-grey-7 q-mt-md text-body1">Thank you, the product has been successfully purchased by the seller and will send the item 1-2 days.</p>
      </div>
   </app-layout>
</template>

<script>
import AppLayout from 'layouts/AppLayout.vue'
import Onboarding4Svg from 'components/svg/Onboard4.vue'
export default {
   components: {
      AppLayout, Onboarding4Svg
   }
}
</script>

<style lang="scss" scoped>
</style>
