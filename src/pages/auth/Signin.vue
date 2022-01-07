<template>
   <app-layout :footer="false">
      <!-- Toolbar setup -->
      <template #toolbar>
         <toolbar-one backWithText>
            <template #middle>
               <p class="text-center text-body1 text-bold" style="margin-right: 60px;">Login</p>
            </template>
            <template #append>
               <div></div>
            </template>
         </toolbar-one>
      </template>

      <!-- Main Content -->
      <div class="q-mt-md">
         <div class="text-center">
            <shop-svg />
            <h6 class="text-bold letter-space-1 q-mt-sm">I Web Design</h6>
            <p class="text-subtitle1 text-grey-7">Enter your e-mail account and password.</p>
         </div>

         <form @submit.prevent="formSubmit" class="q-mt-lg">
            <q-input outlined color="secondary" v-model="form.email" type="email" placeholder="Email Address" input-class="text-body1" class="q-mb-md" />
            <q-input outlined color="secondary" v-model="form.password" :type="passwordVisible?`text`:`password`" input-class="text-body1" placeholder="Password">
               <template #append>
                  <q-avatar @click="passwordVisible=!passwordVisible" :icon="passwordVisible?`visibility_off`:`visibility`" font-size="25px"></q-avatar>
               </template>
            </q-input>
            <div class="flex justify-between q-mt-md">
               <p v-if="false" class="text-negative">Incorect password</p>
               <p class="text-body2 q-ml-auto">Forgot Password?</p>
            </div>

            <q-btn rounded no-caps type="submit" size="lg" label="Login" color="primary" class="full-width q-mt-lg" />
            <p class="text-grey-6 text-body1 text-center q-my-md">Or</p>
            <q-btn rounded outline no-caps size="lg" label="Continue With FB" color="primary" class="full-width" />
            <q-btn rounded outline no-caps size="lg" label="Continue With Google" color="primary" class="full-width q-mt-md" />

            <p class="text-body1 q-mt-lg text-center">Don't have an account?
               <q-btn dense flat no-caps to="/signup" label="Sign Up" class="text-bold text-body1" />
            </p>
         </form>
      </div>
   </app-layout>
</template>

<script>
import ToolbarOne from 'components/toolbars/ToolbarOne.vue'
import AppLayout from 'layouts/AppLayout.vue'
import ShopSvg from 'components/svg/ShopSvg.vue'
export default {
   components: {
      ToolbarOne, AppLayout, ShopSvg
   },
   data() {
      return {
         form: {
            email: 'user@example.com',
            password: '123456'
         },
         passwordVisible: false
      }
   },
   methods: {
      formSubmit() {
         this.$router.push('/')
      }
   }
}
</script>

<style lang="scss" scoped>
</style>
