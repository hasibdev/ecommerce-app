<template>
   <app-layout>
      <template #toolbar>
         <toolbar-one>
            <template #middle>
               <div class="text-center">
                  <q-icon name="las la-search" color="grey-5" class="search-icon q-px-sm" />
                  <input class="search-input" placeholder="Search" type="text">
               </div>
            </template>
            <template #append>
               <p class="q-pl-md">Cancle</p>
            </template>
         </toolbar-one>
      </template>

   </app-layout>
</template>

<script>
import AppLayout from 'layouts/AppLayout.vue'
import ToolbarOne from 'components/toolbars/ToolbarOne.vue'
export default {
   components: {
      AppLayout, ToolbarOne
   }
}
</script>

<style lang="scss" scoped>
</style>
