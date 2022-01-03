<template>
   <div class="flex justify-between full-width q-my-sm q-px-md">
      <!-- Input area -->
      <div class="input-area">
         <q-icon name="fas fa-search" color="grey-5" class="search-icon q-px-sm" />
         <input class="search-input" placeholder="Search" type="text">
      </div>
      <q-btn flat round dense color="primary" icon="shopping_cart" class="q-ml-md" />
   </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.input-area {
   position: relative;
   flex: 1;
   .search-icon {
      position: absolute;
      left: 5px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 20px;
   }
   .search-input {
      background-color: $grey-3;
      padding: 11px 10px 11px 45px;
      width: 100%;
      border: 0;
      border-radius: 10px;
      font-size: 17px;
      color: $grey-14;
      letter-spacing: 1px;
   }
}
.search-input:focus {
   outline: none;
}
</style>
