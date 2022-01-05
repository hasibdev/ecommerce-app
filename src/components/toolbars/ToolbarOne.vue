<template>
   <div id="toolbar_one" class="flex justify-between items-center full-width q-my-sm q-px-md">
      <!-- Prepend -->
      <div class="prepend-content">
         <slot name="prepend" />
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
            <q-btn flat round dense color="primary" icon="las la-shopping-cart" class="q-ml-md" />
         </slot>
      </div>
   </div>
</template>

<script>
export default {
   methods: {
      openSearchView() {
         this.$router.push('/search-view')
      }
   }
}
</script>

<style lang="scss" scoped>
</style>
