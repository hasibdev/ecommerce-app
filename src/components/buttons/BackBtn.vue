<template>
   <q-btn @click="$router.back()" flat no-caps dense icon="las la-angle-left" label="Back" color="primary" size="13px" class="custom-back-btn q-pl-none q-pr-sm"></q-btn>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.custom-back-btn {
   i.la-angle-left {
      margin-right: 0px !important;
   }
}
</style>
