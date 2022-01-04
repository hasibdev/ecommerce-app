<template>
   <div id="home-hero">
      <q-carousel navigation swipeable infinite v-model="slide" height="230px" transition-prev="slide-right" transition-next="slide-left" animated control-color="grey-10" class="rounded-borders">

         <q-carousel-slide v-for="(item, i) in items" :key="i" :name="i" :img-src="item.image" class="column no-wrap  ">
            <div class="q-mt-md">
               <h5 class="text-bold q-mb-sm text-grey-3">{{item.title}}</h5>
               <p class="q-pr-xl text-body1 text-grey-5">{{item.subtitle}}</p>
               <q-btn color="orange-7" label="Shop Now" class="q-mt-lg" />
            </div>
         </q-carousel-slide>

      </q-carousel>

      <div class="under-bottom q-pa-md round-10 custom-shadow">
         <div class="row">
            <div class="col">
               <div class="flex items-center">
                  <div class="q-pa-sm round-10 bg-blue-1">
                     <q-icon name="las la-wallet text-blue-10" size="30px" />
                  </div>
                  <div class="q-ml-sm">
                     <h6>$4,899</h6>
                     <p>Balance</p>
                  </div>
               </div>
            </div>
            <div class="col">
               <div class="flex items-center">
                  <div class="q-pa-sm round-10 bg-cyan-1">
                     <q-icon name="las la-ticket-alt text-cyan-10" size="30px" />
                  </div>
                  <div class="q-ml-sm">
                     <h6>12</h6>
                     <p>Voucher Avilable</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         slide: 1,
         items: [
            { title: 'Collection! Air More Uptempo', subtitle: 'New Arivals', image: 'http://phplaravel-692081-2338552.cloudwaysapps.com/storage/media/GQ6ry3XUj0akdpG1E1efXJDzoKSHX0UU6eR9bQeH.jpeg' },
            { title: 'Collection! Air More Uptempo', subtitle: 'New Arivals', image: 'http://phplaravel-692081-2338552.cloudwaysapps.com/storage/media/GQ6ry3XUj0akdpG1E1efXJDzoKSHX0UU6eR9bQeH.jpeg' },
            { title: 'Collection! Air More Uptempo', subtitle: 'New Arivals', image: 'http://phplaravel-692081-2338552.cloudwaysapps.com/storage/media/GQ6ry3XUj0akdpG1E1efXJDzoKSHX0UU6eR9bQeH.jpeg' },
            { title: 'Collection! Air More Uptempo', subtitle: 'New Arivals', image: 'http://phplaravel-692081-2338552.cloudwaysapps.com/storage/media/GQ6ry3XUj0akdpG1E1efXJDzoKSHX0UU6eR9bQeH.jpeg' }
         ]
      }
   }
}
</script>

<style lang="scss">
#home-hero {
   position: relative;
   .q-carousel__navigation-icon--inactive {
      opacity: 0.5 !important;
   }
   .q-carousel__navigation-inner {
      button {
         i {
            font-size: 12px !important;
         }
      }
   }
   .q-carousel__navigation--bottom {
      bottom: 15px;
   }
   .q-carousel__navigation-icon--active {
      color: #000 !important;
   }
   .under-bottom {
      margin-top: -10px;
      background: #fff;
      position: relative;
      z-index: 9;
   }
}
</style>
