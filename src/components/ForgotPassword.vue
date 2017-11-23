<template lang="html">
  <div class="forgot-password">
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Forgot Password</p>
          <button class="delete" @click="$emit('close')"></button>
        </header>
        <section class="modal-card-body">
          <div class="field" v-show="showEmail">
            <label class="label">Email</label>
            <div class="control">
              <input name="forgotPasswordEmail" v-model="forgotPasswordEmail" type="email" data-vv-delay="1000"
              :class="{'input': true, 'is-danger': errors.has('forgotPasswordEmail') }"
              placeholder="Email input" v-validate="'required|email'" @keyup.enter="forgotPassword">
            </div>
            <span v-show="errors.has('forgotPasswordEmail')" class="help is-danger">
              The Email must be a valid Email Address.
            </span>
          </div>

          <div v-show="!showEmail">
            <div class="field">
              <label class="label">Key</label>
              <div class="control">
                <input name="confirmKey" v-model="confirmKey" type="email"
                :class="{'input': true, 'is-danger': errors.has('confirmKey') }"
                placeholder="Email input" v-validate="'required|confirmed:confirmKey'">
              </div>
              <span v-show="errors.has('confirmKey')" class="help is-danger">
                The Key you entered may be incorrect.
              </span>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input name="new_password" v-model="new_password" type="password" data-vv-delay="1000"
                :class="{'input': true, 'is-danger': errors.has('new_password') }"
                v-validate="'required|min:8'" placeholder="********">
              </div>
              <span v-show="errors.has('new_password')" class="help is-danger">
                {{ errors.first('new_password') }}
              </span>
            </div>
            <div class="field">
              <label class="label">Confirm Password</label>
              <div class="control">
                <input name="confirm_password" v-model="confirm_password" type="password"
                :class="{'input': true, 'is-danger': errors.has('confirm_password') }" @keyup.enter="signupValidate"
                v-validate="'required|confirmed:new_password'" placeholder="********" data-vv-delay="1000">
              </div>
              <span v-show="errors.has('confirm_password')" class="help is-danger">
                {{ errors.first('confirm_password') }}
              </span>
            </div>
          </div>

        </section>
        <footer class="modal-card-foot">
          <div class="">
            <a class="button is-success" @click="forgotPassword" v-show="showEmail">Confirm</a>
            <a class="button is-success" @click="updatePassword" v-show="!showEmail">Change Password</a>
            <a class="button" @click="$emit('close')">Cancel</a>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api/main';
export default {
  name: 'forgot-password',

  data() {
    return {
      forgotPasswordEmail: '',
      showEmail: true,
      key: null,
      confirmKey: null,
      new_password: '',
      confirm_password: ''
    }
  },

  methods: {
    forgotPassword() {
      api.forgotPassword(this.forgotPasswordEmail)
      .then(response => {
        console.log("forgotPassword", response);
        if(response.data == "Please Enter Valid Invalid Email Id.") {
          //toast
          this.$toasted.error("Please Enter Valid Invalid Email Id.", {
            theme: 'bubble',
            position: 'bottom-center',
            duration: 3000,
          })
        }
        else {
          this.key = response.data;
          //toast
          this.$toasted.show("Please wait while we send you the OTP in your provided mail account!", {
            theme: 'bubble',
            position: 'bottom-center',
            duration: 3000,
          })
          this.showEmail = false;
        }
      })
      .catch(error => {
        console.log("forgotPassword", error);
      })
    },

    updatePassword() {
      api.updatePassword(this.forgotPasswordEmail, this.new_password)
      .then(response => {
        if(response.data == "Password Change Sucessfully!!!") {
          this.$toasted.success("Password Change Sucessfully!", {
            theme: 'bubble',
            position: 'top-center',
            duration: 3000,
          })
          this.$toasted.success("Please Login again to continue with your new password.", {
            theme: 'bubble',
            position: 'top-center',
            duration: 3000,
          })
          this.$bus.$emit('close');
        }
        else {

        }
      })
      .catch(error => {
        console.log(error);
      })
    }
  }
}
</script>

<style lang="scss">
.forgot-password {

}
</style>
