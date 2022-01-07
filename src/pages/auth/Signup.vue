<template>
   <app-layout :footer="false">
      <!-- Toolbar setup -->
      <template #toolbar>
         <toolbar-one backWithText>
            <template #middle>
               <p class="text-center text-body1 text-bold" style="margin-right: 60px;">Create an Account</p>
            </template>
            <template #append>
               <div></div>
            </template>
         </toolbar-one>
      </template>

      <!-- Main Content -->
      <div class="q-mt-md">
         <form @submit.prevent="formSubmit" class="q-mt-lg">
            <!-- First and Last Name -->
            <div class="row q-col-gutter-sm">
               <div class="col">
                  <q-input outlined color="secondary" v-model="form.firstName" type="text" placeholder="First Name" input-class="text-body1" class="q-mb-md" />
               </div>
               <div class="col">
                  <q-input outlined color="secondary" v-model="form.lastName" type="text" placeholder="Last Name" input-class="text-body1" class="q-mb-md" />
               </div>
            </div>
            <!-- Mobile -->
            <div class="row q-col-gutter-sm">
               <div class="col-3">
                  <q-select outlined v-model="mobileCode" :options="mobileOptions" :label="form.mobileCode" class="small-select-box" dropdown-icon="expand_more" />
               </div>
               <div class="col-9">
                  <q-input outlined color="secondary" v-model="form.lastName" type="number" placeholder="Mobile Number" input-class="text-body1" class="q-mb-md" />
               </div>
            </div>

            <!-- Email -->
            <q-input outlined color="secondary" v-model="form.email" type="email" placeholder="Email Address" input-class="text-body1" class="q-mb-md" />
            <!-- Password -->
            <q-input outlined color="secondary" v-model="form.password" :type="passwordVisible?`text`:`password`" input-class="text-body1" placeholder="Password">
               <template #append>
                  <q-avatar @click="passwordVisible=!passwordVisible" :icon="passwordVisible?`visibility_off`:`visibility`" font-size="25px"></q-avatar>
               </template>
            </q-input>
            <div class="flex justify-between q-mt-md">
               <p v-if="false" class="text-negative">Incorect password</p>
               <p class="text-body2 q-ml-auto">Forgot Password?</p>
            </div>

            <p class="text-grey-5 q-mt-md">By signing up for a Elektra account you are agreeing to our community Terms of service and privacy policy.</p>

            <q-btn rounded no-caps size="lg" label="Sign Up" color="primary" class="full-width q-mt-lg" />
            <p class="text-grey-6 text-body1 text-center q-my-md">Or Sign up with</p>
            <q-btn rounded outline no-caps size="lg" label="Continue With FB" color="primary" class="full-width" />
            <q-btn rounded outline no-caps size="lg" label="Continue With Google" color="primary" class="full-width q-mt-md" />

            <p class="text-body1 q-mt-lg text-center">Already have an account?
               <q-btn dense flat no-caps to="/signin" label="Log In" class="text-bold text-body1" />
            </p>
         </form>
      </div>
   </app-layout>
</template>

<script>
import ToolbarOne from 'components/toolbars/ToolbarOne.vue'
import AppLayout from 'layouts/AppLayout.vue'
export default {
   components: {
      ToolbarOne, AppLayout
   },
   data() {
      return {
         form: {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            mobile: '',
            mobileCode: '+880'
         },
         passwordVisible: false,
         mobileOptions: ['+880', '+650', '+84']
      }
   },
   methods: {
      formSubmit() {
         this.$router.push('/')
      }
   }
}
</script>

<style lang="scss">
.small-select-box {
   .q-field__append.q-field__marginal {
      padding-left: 0px !important;
   }
   .q-field__control {
      padding: 0 7px !important;
   }
}
</style>
