<template>
   <app-layout>
      <template #toolbar>
         <toolbar-one>
            <template #middle>
               <p class="text-center text-body1 text-bold">Profile</p>
            </template>
         </toolbar-one>
      </template>
      <div class="text-center">
         <q-avatar size="150px">
            <img :src="require('assets/images/user-04.png')">
         </q-avatar>
         <h6 class="q-mt-lg">Jane Doe</h6>
      </div>

      <div class="flex items-center q-mt-lg custom-shadow q-px-md q-py-sm round-10">
         <div class="q-pa-sm round-10 bg-blue-1">
            <q-icon name="las la-wallet text-primary" size="30px" />
         </div>
         <div class="q-ml-sm">
            <h6>$4,899</h6>
            <p>Balance</p>
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
   }
}
</script>

<style lang="scss" scoped>
</style>
