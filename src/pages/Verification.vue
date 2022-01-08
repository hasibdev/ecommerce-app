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
