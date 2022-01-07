<template>
   <q-page class="relative-position">

      <!-- Header -->
      <q-header class="body-bg text-grey-10">

         <slot name="toolbar">
            <toolbar-one />
         </slot>

      </q-header>

      <!-- Main Content -->
      <div class="q-pa-md">
         <slot />
      </div>

      <!-- Footer -->
      <slot name="footer">
         <app-footer v-if="footer" />
      </slot>

   </q-page>
</template>

<script>
import ToolbarOne from 'components/toolbars/ToolbarOne.vue'
import AppFooter from './AppFooter.vue'

export default {
   components: { ToolbarOne, AppFooter },
   name: "app-layout",
   props: {
      footer: {
         type: Boolean,
         default: true
      }
   },
   data() {
      return {
         text: ''
      }
   }
}
</script>

<style lang="scss" scoped>
</style>
