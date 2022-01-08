<template>
   <app-layout>
      <template #toolbar>
         <toolbar-one canMessage>
            <template #middle>
               <p class="text-center text-body1 text-bold q-ml-xl">Profile</p>
            </template>
         </toolbar-one>
      </template>
      <div class="text-center">
         <q-avatar size="150px">
            <img :src="require('assets/images/user-04.png')">
         </q-avatar>
         <h6 class="q-mt-lg">Jane Doe</h6>
      </div>

      <div class="flex items-center q-mt-lg custom-shadow q-px-md q-py-sm round-10">
         <div class="q-pa-sm round-10 bg-blue-1">
            <q-icon name="las la-wallet text-primary" size="30px" />
         </div>
         <div class="q-ml-sm">
            <h6>$4,899</h6>
            <p>Balance</p>
         </div>

         <q-btn class="q-ml-auto" rounded unelevated color="primary">Top Up</q-btn>

      </div>

      <!-- List -->
      <div id="profile_expansion" class="q-mt-lg">
         <q-list class="rounded-borders">
            <q-expansion-item icon="las la-user-circle" label="My Profile">
               <q-card>
                  <q-card-section>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                     commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                     eveniet doloribus ullam aliquid.
                  </q-card-section>
               </q-card>
            </q-expansion-item>
            <q-expansion-item icon="las la-map-marker" label="My Address">
               <q-card>
                  <q-card-section>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                     commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                     eveniet doloribus ullam aliquid.
                  </q-card-section>
               </q-card>
            </q-expansion-item>
            <q-expansion-item icon="las la-bell" label="Notification">
               <q-card>
                  <q-card-section>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                     commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                     eveniet doloribus ullam aliquid.
                  </q-card-section>
               </q-card>
            </q-expansion-item>
            <q-expansion-item icon="gpp_good" label="Help Center">
               <q-card>
                  <q-card-section>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                     commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                     eveniet doloribus ullam aliquid.
                  </q-card-section>
               </q-card>
            </q-expansion-item>
            <q-expansion-item icon="logout" label="Logout" expand-icon-class="hidden"> </q-expansion-item>
         </q-list>
      </div>

   </app-layout>
</template>

<script>
import ToolbarOne from 'components/toolbars/ToolbarOne.vue'
import AppLayout from 'layouts/AppLayout.vue'
export default {
   components: {
      AppLayout, ToolbarOne
   }
}
</script>

<style lang="scss" scoped>
#profile_expansion {
   .q-item__section.q-item__section--avatar {
      align-items: center !important;
   }
}
</style>
