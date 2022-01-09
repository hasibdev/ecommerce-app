<template>
   <q-dialog position="bottom" ref="dialog" @hide="onDialogHide">
      <q-card class="q-dialog-plugin q-pa-md">
         <div class="flex justify-between items-center">
            <h6>Filter</h6>
            <span class="text-primary">Reset</span>
         </div>

         <p class="q-my-lg text-body1">Sort By</p>

         <div class="">
            <q-btn outline color="grey-6 q-mr-sm q-mb-sm" label="Featured" class="round-10" />
            <q-btn outline color="grey-6 q-mr-sm q-mb-sm" label="Price : Low to High" class="round-10" />
            <q-btn outline color="grey-6 q-mr-sm q-mb-sm" label="Price : High to Low" class="round-10" />
            <q-btn outline color="grey-6 q-mr-sm q-mb-sm" label="Newest Arrival" class="round-10" />
            <q-btn outline color="grey-6 q-mr-sm q-mb-sm" label="Customer Reviews" class="round-10" />
         </div>

         <div class="q-my-lg">
            <p class="text-body1 q-mb-sm">Price</p>
            <div class="row q-col-gutter-md">
               <div class="col">
                  <q-input outlined type="number" placeholder="Lowest" />
               </div>
               <div class="col">
                  <q-input outlined type="number" placeholder="Highest" />
               </div>
            </div>
         </div>

         <q-btn label="Save" color="primary" rounded size="lg" class="full-width " />
      </q-card>
   </q-dialog>
</template>

<script>
export default {
   components: {

   },
   props: {
      // ...your custom props
   },

   emits: [
      // REQUIRED
      'ok', 'hide'
   ],

   methods: {
      // following method is REQUIRED
      // (don't change its name --> "show")
      show() {
         this.$refs.dialog.show()
      },

      // following method is REQUIRED
      // (don't change its name --> "hide")
      hide() {
         this.$refs.dialog.hide()
      },

      onDialogHide() {
         // required to be emitted
         // when QDialog emits "hide" event
         this.$emit('hide')
      }
   }
}
</script>
