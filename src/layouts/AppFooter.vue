<template>
   <q-footer id="app_footer" class="bg-white text-grey-9">

      <ul class="menu-list">
         <li v-for="(item, i) in items" :key="i" @click="handleRoute(item)" :class="{active: item.active}">
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
               to: '/',
               active: true
            },
            {
               label: "My Order",
               icon: "shopping_cart",
               to: '/cart',
               active: false
            },
            {
               label: "Favourite",
               icon: "bookmark_border",
               to: '/favourite',
               active: false
            },
            {
               label: "Profile",
               icon: "account_circle",
               to: '/profile',
               active: false
            }
         ]
      }
   },
   methods: {
      handleRoute(item) {
         this.$router.push(item.to)
         this.items = this.items.map(val => ({ ...val, active: false }))
         item.active = true
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

      &.active {
         color: $primary;
      }
   }
}
#app_footer {
   bottom: -1px;
}
</style>
