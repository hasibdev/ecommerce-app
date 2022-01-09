<template>
   <div id="home-hero">
      <q-carousel navigation autoplay swipeable infinite v-model="slide" height="230px" transition-prev="slide-right" transition-next="slide-left" animated control-color="grey-10" class="rounded-borders">

         <q-carousel-slide v-for="(item, i) in items" :key="i" :name="i" :img-src="item.file.path" class="column no-wrap">
            <div class="q-mt-md slide-content">
               <h5 class="text-bold q-mb-sm text-grey-3">{{item.caption_1}}</h5>
               <p class="q-pr-xl text-body1 text-grey-5">{{item.caption_2}}</p>
               <q-btn color="orange-7" :label="item.call_to_action_text" class="q-mt-lg" />
            </div>
         </q-carousel-slide>

      </q-carousel>

      <div class="under-bottom q-pa-md round-10 custom-shadow">
         <div class="row">
            <div class="col">
               <div class="flex items-center">
                  <div class="q-pa-sm round-10 bg-blue-1">
                     <q-icon name="las la-wallet text-primary" size="30px" />
                  </div>
                  <div class="q-ml-sm">
                     <h6>$4,899</h6>
                     <p style="font-size: 12px;">Balance</p>
                  </div>
               </div>
            </div>
            <div class="col">
               <div class="flex items-center">
                  <div class="q-pa-sm round-10 bg-cyan-1">
                     <q-icon name="las la-ticket-alt text-secondary" size="30px" />
                  </div>
                  <div class="q-ml-sm">
                     <h6>12</h6>
                     <p style="font-size: 12px;">Voucher Avilable</p>
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
         slide: 0,
         items: []
      }
   },
   async created() {
      try {
         const resSliders = await this.$api.get('/sliders')
         this.items = resSliders.data.slides
      } catch (error) {
         console.log(error)
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
   .slide-content {
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
