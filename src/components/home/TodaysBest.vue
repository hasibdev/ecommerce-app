<template>
   <div>
      <h5 class="q-my-lg">Today's Best Deal</h5>

      <div class="row">
         <div class="col">
            <q-card class="shadow-6">
               <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />

               <q-card-section>
                  <q-btn fab color="primary" icon="place" class="absolute" style="top: 0; right: 12px; transform: translateY(-50%);" />

                  <div class="row no-wrap items-center">
                     <div class="col text-h6 ellipsis">
                        Cafe Basilico
                     </div>
                  </div>

                  <q-rating v-model="stars" :max="5" size="20px" />

                  <p class="text-red-12 text-h5 text-bold q-mt-md">$32.50</p>

                  <q-btn outline color="orange-7" icon="las la-cart-arrow-down" label="ADD TO CART" class="full-width q-mt-lg q-py-sm" />
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
