<template>
   <div>
      <div class="q-mb-lg flex justify-between">
         <h5>Today's Best Deal</h5>
         <span>View All</span>
      </div>

      <div class="row q-col-gutter-md">
         <div class="col-6" v-for="item in 4" :key="item">
            <product-card @click="$router.push(`/products/${item}`)" name="Cafe Basilico" :price="32.50" :star="3.5" :reviews="1259" image="https://cdn.quasar.dev/img/chicken-salad.jpg" />
         </div>
      </div>
   </div>
</template>

<script>
import ProductCard from 'components/ProductCard'
export default {
   components: {
      ProductCard
   },
   data() {
      return {
         items: []
      }
   },
   async created() {
      const res = await this.$api('/vertical-products/2')
      console.log(res)
   }
}
</script>

<style lang="scss" scoped>
</style>
