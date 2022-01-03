<template>
   <div id="home-hero">
      <q-carousel padding navigation swipeable infinite autoplay="" v-model="slide" height="250px" transition-prev="slide-right" transition-next="slide-left" animated control-color="primary" class="rounded-borders">
         <q-carousel-slide v-for="item in 4" :key="item" :name="item" class="column no-wrap flex-center bg-grey-5">
            <div class="q-mt-md">
               <h5 class="text-bold letter-space-1 q-mb-sm">Example Banner Promo</h5>
               <p class="q-pr-xl text-body1 text-grey-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, voluptatem!</p>
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

<style lang="scss">
#home-hero {
   .q-carousel__navigation-icon--inactive {
      opacity: 0.5 !important;
   }
   // .q-carousel__navigation-icon--active {
   //    color: red !important;
   // }
}
</style>
