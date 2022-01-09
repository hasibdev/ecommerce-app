<template>
   <q-footer id="app_footer" class="bg-white text-grey-9">

      <ul class="menu-list">
         <li v-for="(item, i) in items" :key="i" @click="handleRoute(item)" :class="{active: item.name == $route.name}" class="text-grey-7">
            <q-icon :name="item.icon" size="25px" />
            <p class="q-mb-none text-subtitle2">{{item.label}}</p>
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
               icon: "o_home",
               to: '/',
               name: 'home'
            },
            {
               label: "My Order",
               icon: "o_shopping_cart",
               to: '/orders',
               name: 'orders'
            },
            {
               label: "Favourite",
               icon: "bookmark_border",
               to: '/favourite',
               name: 'favourite'
            },
            {
               label: "Profile",
               icon: "o_account_circle",
               to: '/profile',
               name: 'profile'
            }
         ]
      }
   },
   methods: {
      handleRoute(item) {
         this.$router.push(item.to)
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
   padding: 13px 25px;
   border-top: 0.2px solid $grey-5;
   margin: 0;
   li {
      text-align: center;
      transition: 0.2s ease-in-out;
      &.active {
         color: $primary !important;
      }
   }
}
#app_footer {
   bottom: -1px;
}
</style>
