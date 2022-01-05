<template>
   <div class="fullscreen body-bg text-center q-pa-md flex flex-center">
      <div>
         <div style="">
            <h6>404</h6>
         </div>

         <div style="opacity:.5">
            <h5>Oops. Nothing here...</h5>
         </div>

         <q-btn class="q-mt-xl" color="primary" unelevated to="/" label="Go Home" no-caps />
      </div>
   </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
   name: 'Error404'
})
</script>
