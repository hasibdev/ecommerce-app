<template>
   <q-page class="relative-position">
      <!-- Header -->
      <q-header class="bg-white">

         <slot name="toolbar">
            <toolbar-one />
         </slot>

      </q-header>

      <!-- Main Content -->
      <div class="q-pa-md">
         <slot />
      </div>

      <!-- Footer -->
      <app-footer />

   </q-page>
</template>

<script>
import ToolbarOne from 'components/toolbars/ToolbarOne.vue'
import AppFooter from './AppFooter.vue'
export default {
   components: { ToolbarOne, AppFooter },
   name: "app-layout",
   data() {
      return {
         text: ''
      }
   }
}
</script>

<style lang="scss" scoped>
</style>
