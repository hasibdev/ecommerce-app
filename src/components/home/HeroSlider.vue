<template>
   <div>
      <q-carousel padding navigation v-model="slide" transition-prev="slide-right" transition-next="slide-left" animated control-color="primary" class="rounded-borders">
         <q-carousel-slide v-for="item in 4" :key="item" :name="item" class="column no-wrap flex-center bg-grey-5">
            <div class="q-mt-md">
               <h5>Example Banner Promo</h5>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, voluptatem!</p>
            </div>
         </q-carousel-slide>

      </q-carousel>
   </div>
</template>

<script>
export default {
   data() {
      return {
         slide: 1
      }
   }
}
</script>

<style lang="scss" scoped>
</style>
