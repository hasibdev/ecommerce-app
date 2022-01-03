<template>
   <q-page class="relative-position">
      <!-- Header -->
      <q-header class="bg-white">
         <q-toolbar>
            <slot name="toolbar">
               <toolbar-one />
            </slot>
         </q-toolbar>
      </q-header>

      <!-- Main Content -->
      <div>
         <slot />
      </div>

      <!-- Footer -->
      <q-footer>
         <q-toolbar>
            <q-toolbar-title>Footer</q-toolbar-title>
         </q-toolbar>
      </q-footer>

   </q-page>
</template>

<script>
import ToolbarOne from 'components/toolbars/ToolbarOne.vue'
export default {
   components: { ToolbarOne },
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
