<template>
   <app-layout>
      <template #toolbar>
         <toolbar-one backWithText>
            <template #middle>
               <p class="text-center text-body1 text-bold q-mr-lg">Verification</p>
            </template>
            <template #append>
               <div></div>
            </template>
         </toolbar-one>
      </template>

      <template #footer>
         <q-footer class="body-bg text-grey-9 q-pa-md ">
            <q-btn rounded unelevated color="primary" size="lg" class="q-px-xl q-py-sm full-width">Buy Now</q-btn>
         </q-footer>
      </template>

      <div class="q-mt-xl">
         <p class="text-h6 text-center">Please enter the verification code Send to (+2) 223 0494</p>

         <div class="row q-mt-lg q-col-gutter-md q-mx-md">
            <div class="col">
               <q-input v-model="code" outlined type="number" class="text-h5 text-center" maxlength="1" />
            </div>
            <div class="col">
               <q-input v-model="code" outlined type="number" class="text-h5 text-center" maxlength="1" />
            </div>
            <div class="col">
               <q-input v-model="code" outlined type="number" class="text-h5 text-center" maxlength="1" />
            </div>
            <div class="col">
               <q-input v-model="code" outlined type="number" class="text-h5 text-center" maxlength="1" />
            </div>
         </div>

         <h6 class="q-mt-xl text-center text-primary">Recend Code (16)</h6>
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
         code: ''
      }
   }
}
</script>

<style lang="scss" scoped>
</style>
