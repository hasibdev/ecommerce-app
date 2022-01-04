<template>
   <div>
      <div class="q-mb-lg flex justify-between">
         <h5>Today's Best Deal</h5>
         <span>View All</span>
      </div>

      <div class="row q-col-gutter-md">
         <div class="col-6">
            <q-card class="custom-shadow">
               <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
               <q-card-section>
                  <div class="row no-wrap items-center">
                     <div class="col text-h6 ellipsis text-grey-10">
                        Cafe Basilico
                     </div>
                  </div>

                  <q-rating v-model="stars" :max="5" size="20px" color="grey-7" />

                  <p class="text-red-12 text-h5 text-bold q-mt-sm">$32.50</p>

               </q-card-section>
            </q-card>
         </div>
         <div class="col-6">
            <q-card class="custom-shadow">
               <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
               <q-card-section>
                  <div class="row no-wrap items-center">
                     <div class="col text-h6 ellipsis text-grey-10">
                        Cafe Basilico
                     </div>
                  </div>

                  <q-rating v-model="stars" :max="5" size="20px" color="grey-7" />

                  <p class="text-red-12 text-h5 text-bold q-mt-sm">$32.50</p>

               </q-card-section>
            </q-card>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         stars: 3
      }
   }
}
</script>

<style lang="scss" scoped>
</style>
