<template>
   <q-card class="custom-shadow">
      <q-img :src="image" />
      <q-card-section>
         <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis text-grey-10">
               {{ name }}
            </div>
         </div>

         <!-- Ragings -->
         <div class="flex justify-between">
            <q-rating :model-value="star" icon-half="star_half" :max="5" size="13px" color="secondary" />
            <span class="" style="font-size: 10px;">{{ reviews }} Reviews</span>
         </div>

         <p class="text-h6 text-bold q-mt-sm">${{ price }}</p>

      </q-card-section>
   </q-card>
</template>

<script>
export default {
   props: {
      name: {
         type: String,
         required: true
      },
      price: {
         type: Number,
         required: true
      },
      star: {
         type: Number,
         required: true
      },
      reviews: {
         type: Number,
         required: true
      },
      image: {
         type: String,
         required: true
      }
   }
}
</script>

<style lang="scss" scoped>
</style>
