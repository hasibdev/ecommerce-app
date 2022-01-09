<template>
   <q-dialog position="bottom" ref="dialog" @hide="onDialogHide">
      <q-card class="q-dialog-plugin q-pa-md">
         <div class="flex justify-between items-center q-mb-xl">
            <h6>Customer Care</h6>
            <q-icon @click="hide" name="expand_more" size="md" color="grey-10" />
         </div>

         <div>
            <div class="flex items-center no-wrap">
               <q-avatar color="grey-6" />
               <div class="bg-primary round-10 q-ml-md q-pa-md  text-white">
                  <p class="text-body1">hello I am Areef, What can I do for you?</p>
               </div>
            </div>

            <!-- List -->
            <q-list class="q-mt-xl">
               <div class="">
                  <q-item>
                     <q-item-section>
                        <q-item-label class="text-body1">How do I track the items that have been purchased?</q-item-label>
                        <q-separator spaced inset />
                     </q-item-section>
                  </q-item>

                  <q-item>
                     <q-item-section>
                        <q-item-label class="text-body1">How do I sell items on Elektra?</q-item-label>
                        <q-separator spaced inset />
                     </q-item-section>
                  </q-item>

               </div>
            </q-list>

            <!-- Input -->
            <div class="q-mt-md flex justify-between items-end">
               <q-input outlined color="secondary" autogrow placeholder="Type a Message" class="flex-1 bg-grey-2 text-body1" />
               <div style="width:15px;"></div>
               <q-btn unelevated size="lg" class="round-10" color="primary">
                  <send-angel-svg />
               </q-btn>
            </div>

         </div>

      </q-card>
   </q-dialog>
</template>

<script>
import SendAngelSvg from 'components/svg/SendAngel.vue'
export default {
   components: {
      SendAngelSvg
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
