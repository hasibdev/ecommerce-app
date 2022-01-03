<template>
   <q-footer class="bg-white text-grey-9">

      <ul class="menu-list">
         <li v-for="(item, i) in items" :key="i">
            <q-icon :name="item.icon" size="25px" />
            <p class="q-mb-none">{{item.label}}</p>
         </li>
      </ul>

   </q-footer>
</template>

<script>
export default {
   name: 'app-footer',
   data() {
      return {
         items: [
            {
               label: "Home",
               icon: "home",
               to: '/'
            },
            {
               label: "My Order",
               icon: "shopping_cart",
               to: '/cart'
            },
            {
               label: "Profile",
               icon: "account_circle",
               to: '/profile'
            },
            {
               label: "Profile",
               icon: "account_circle",
               to: '/profile'
            }
         ]
      }
   }
}
</script>

<style lang="scss" scoped>
.menu-list {
   list-style: none;
   display: flex;
   justify-content: space-between;
   width: 100%;
   padding: 13px 20px;
   border-top: 0.2px solid $grey-14;
   margin: 0;
   li {
      text-align: center;
      // padding: 5px 10px;
   }
}
</style>
