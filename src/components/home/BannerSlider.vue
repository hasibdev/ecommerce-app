<template>
   <div id="home-hero">
      <q-carousel padding navigation swipeable infinite="" v-model="slide" height="150px" transition-prev="slide-right" transition-next="slide-left" animated control-color="primary" class="rounded-borders">
         <q-carousel-slide v-for="item in 4" :key="item" :name="item" class="column no-wrap flex-center">
            <div class=" text-center">
               <q-icon size="40px" name="card_membership"></q-icon>
               <p class="letter-space-1 q-mb-sm">Example Banner</p>
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
