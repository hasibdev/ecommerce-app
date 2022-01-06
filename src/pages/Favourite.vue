<template>
   <app-layout>
      <div v-for="(item, i) in 2" :key="i" :class="{'custom-shadow': i==0}" class="bg-white round-10 q-pa-sm q-mt-md">
         <div class="flex items-center">
            <div>
               <q-avatar size="70px" class="round-10">
                  <img src="https://cdn.quasar.dev/img/boy-avatar.png">
               </q-avatar>
            </div>
            <div class="q-ml-md">
               <p class="text-body1">TV Gedih</p>
               <div class="flex">
                  <q-rating :model-value="3.5" icon-half="star_half" :max="5" size="13px" color="secondary" />
                  <span class="q-ml-sm" style="font-size: 10px;">1259 Reviews</span>
               </div>

               <p class="text-h6 text-bold q-mt-sm">$120</p>
            </div>
         </div>

         <div class="flex q-mt-sm">
            <q-btn outline dense color="primary" class="round-10 q-pa-sm" icon="las la-trash" />
            <q-btn no-caps color="primary" rounded class="flex-1 q-ml-md" label="Buy Now" />
         </div>
      </div>
   </app-layout>
</template>

<script>
import AppLayout from 'layouts/AppLayout.vue'
export default {
   components: {
      AppLayout
   }
}
</script>

<style lang="scss" scoped>
</style>
