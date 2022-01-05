<template>
   <div class="fullscreen bg-primary text-white text-center q-pa-md flex flex-center">
      <div>
         <div style="">
            <h6>404</h6>
         </div>

         <div style="opacity:.5">
            <h5>Oops. Nothing here...</h5>
         </div>

         <q-btn class="q-mt-xl" color="white" text-color="blue" unelevated to="/" label="Go Home" no-caps />
      </div>
   </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
   name: 'Error404'
})
</script>
