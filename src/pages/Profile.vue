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
            <img src="https://cdn.quasar.dev/img/avatar.png">
         </q-avatar>
         <h6 class="q-mt-lg">John Doe</h6>
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
