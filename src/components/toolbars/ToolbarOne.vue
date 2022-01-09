<template>
   <div id="toolbar_one" class="flex justify-between items-center full-width q-my-sm q-px-md">
      <!-- Prepend -->
      <div class="prepend-content">
         <slot name="prepend">
            <q-icon v-if="canBack" @click="$router.back()" name="las la-angle-left" color="primary" size="25px" class="q-pr-sm" />
            <back-btn v-if="backWithText" />
         </slot>
      </div>

      <!-- Middle Input area -->
      <div class="middle-content">
         <slot name="middle">
            <q-icon name="las la-search" color="grey-5" class="search-icon q-px-sm" />
            <input @click="openSearchView" @focus="openSearchView" class="search-input" placeholder="Search" type="text">
         </slot>
      </div>

      <!-- Append -->
      <div class="append-content">
         <slot name="append">
            <q-btn to="/cart" flat round dense color="primary" icon="las la-shopping-cart" class="q-ml-md" />
            <q-btn @click="openMessage" v-if="canMessage" flat round dense color="primary" icon="las la-sms" class="q-ml-sm" />
         </slot>
      </div>
   </div>
</template>

<script>
import BackBtn from 'components/buttons/BackBtn.vue'
import HelpChat from 'components/modals/HelpChat.vue'
export default {
   props: {
      canBack: {
         type: Boolean,
         default: false
      },
      canMessage: {
         type: Boolean,
         default: false
      },
      backWithText: {
         type: Boolean,
         default: false
      }
   },
   components: {
      BackBtn
   },
   methods: {
      openSearchView(e) {
         e.preventDefault()
         this.$router.push('/search-view')
      },
      openMessage(e) {
         this.$q.dialog({
            component: HelpChat
         })
      }
   }
}
</script>

<style lang="scss" scoped>
</style>
