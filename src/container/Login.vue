<template>
  <div class="login">

    <div class="container">

      <div class="box inside-box">
        <div class="title-head">
          <span class="title is-1">ResumeBuilder</span>
          <button class="button is-info" v-show="login" @click="login=false">Signup</button>
          <button class="button is-primary" v-show="!login" @click="login=true">Login</button>
        </div>

        <div class="login-form" v-show="login">

          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input name="loginEmail" v-model="loginEmail" type="email" data-vv-delay="1000"
              :class="{'input': true, 'is-danger': errors.has('loginEmail') }"
              placeholder="Email input" v-validate="'required|email'">
            </div>
            <span v-show="errors.has('loginEmail')" class="help is-danger">
              {{ errors.first('loginEmail') }}
            </span>
          </div>


          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input name="loginPassword" v-model="loginPassword" type="password" data-vv-delay="1000"
              :class="{'input': true, 'is-danger': errors.has('loginPassword') }"
              placeholder="********" v-validate="'required'" @keyup.enter="loginValidate">
            </div>
            <span v-show="errors.has('loginPassword')" class="help is-danger">
              {{ errors.first('loginPassword') }}
            </span>
          </div>

        </div>

        <div class="signup-form" v-show="!login">
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input name="signupName" v-model="signupName" type="text" data-vv-delay="1000"
              :class="{'input': true, 'is-danger': errors.has('signupName') }"
              v-validate="'required'" placeholder="Name">
            </div>
            <span v-show="errors.has('signupName')" class="help is-danger">
              The Signup Name is required!
            </span>
          </div>
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input name="signupEmail" v-model="signupEmail" type="email" data-vv-delay="1000"
              :class="{'input': true, 'is-danger': errors.has('signupEmail') }"
              placeholder="Email input" v-validate="'required|email'">
            </div>
            <span v-show="errors.has('signupEmail')" class="help is-danger">
              {{ errors.first('signupEmail') }}
            </span>
          </div>
          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input name="signupPassword" v-model="signupPassword" type="password" data-vv-delay="1000"
              :class="{'input': true, 'is-danger': errors.has('signupPassword') }"
              v-validate="'required|min:8'" placeholder="********">
            </div>
            <span v-show="errors.has('signupPassword')" class="help is-danger">
              {{ errors.first('signupPassword') }}
            </span>
          </div>
          <div class="field">
            <label class="label">Confirm Password</label>
            <div class="control">
              <input name="signupConfirmPassword" v-model="signupConfirmPassword" type="password"
              :class="{'input': true, 'is-danger': errors.has('signupConfirmPassword') }" @keyup.enter="signupValidate"
              v-validate="'required|confirmed:signupPassword'" placeholder="********" data-vv-delay="1000">
            </div>
            <span v-show="errors.has('signupConfirmPassword')" class="help is-danger">
              {{ errors.first('signupConfirmPassword') }}
            </span>
          </div>
        </div>

        <div class="field login-footer">

          <div class="control" v-show="login">
            <button class="button is-primary" @click="loginValidate">
              Login
            </button>
          </div>
          <div class="control" v-show="!login">
            <button class="button is-info" @click="signupValidate">Sign Up</button>
          </div>
          <div class="forgot-password" v-show="login">
            <button class="button is-dark is-outlined" @click="forgotPassword = true">Forgot Password</button>
          </div>
          <ForgotPassword v-if="forgotPassword" @close="forgotPassword=false"></ForgotPassword>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import ForgotPassword from '@/components/ForgotPassword';
import api from '@/api/main';
export default {
  name: 'Login',

  data () {
    return {
      login: true,
      signUpInsert: false,
      loginEmail: '',
      loginPassword: '',
      signupName: '',
      signupEmail: '',
      signupPassword: '',
      signupConfirmPassword: '',
      forgotPassword: false
    }
  },

  created() {
    if(this.$route.params.data == "login") {
      this.login = true;
    }
    else {
      this.login = false;
    }
  },

  methods: {

    loginValidate() {
      this.$validator.validateAll({
        //checks for login email and password
        'loginEmail': this.loginEmail,
        'loginPassword': this.loginPassword,
      })
      .then((result) => {
        // console.log(result);  //true or false
        if (result) {
          //go ahead.
          this.loginProcess(this.loginEmail, this.loginPassword);
        }
        else {
          this.$toasted.error('Please fill in the necessary details!', {
            theme: "outline",
            position: "bottom-center",
            duration : 3000
          });
        }
      });
    },

    loginProcess(email, password) {
      api.login(email, password)
      .then(response => {
        this.saveToken(response.data.token);
        // console.log("Inside Login: ", this.signUpInsert);
        // if(this.signUpInsert) {
        //   api.insert()
        //   .then(response => {
        //     console.log("insert", response);
        //   })
        //   .catch(error => {
        //     console.log("insert", error.response);
        //   })
        // }
        // else {
        //
        // }
      })
      .catch(error => {
        console.log(error);
        if(error == "Error: Network Error") {
          this.$toasted.error(error, {
            theme: "outline",
            position: "bottom-center",
            duration : 3000
          });
        }
        else if (error.response.data[0]) {
          this.$toasted.error(error.response.data[0], {
            theme: "outline",
            position: "bottom-center",
            duration : 3000
          });
        }
        else {
          console.log(error.response.statusText);
          this.$toasted.error(error.response.statusText, {
            theme: "outline",
            position: "bottom-center",
            duration : 3000
          });
        }
      })
    },

    saveToken(token) {
      // console.log(token);
      if(token) {
        this.$auth.setToken(token);
        //3 redirect
        this.redirectAfterLogin();
      }
      else {
        //error
      }
    },

    redirectAfterLogin() {
      this.$router.push({ name: 'Landing' });
    },

    signupValidate() {
      this.$validator.validateAll({
        //checks for signup email and password
        'signupName': this.signupName,
        'signupEmail': this.signupEmail,
        'signupPassword': this.signupPassword,
        'signupConfirmPassword': this.signupConfirmPassword,
      })
      .then((result) => {
        // console.log(result);  //true or false
        if (result) {
          //go ahead.
          this.signupProcess();
        }
        else {
          this.$toasted.error('Please fill in the necessary details!', {
            theme: "outline",
            position: "bottom-center",
            duration : 3000
          });
        }
      });
    },

    signupProcess() {
      api.register(this.signupName, this.signupEmail, this.signupPassword, this.signupConfirmPassword)
      .then(response => {
        console.log(response);
        if(response.data == "registration done...") {
          // login
          this.signUpInsert = true;
          this.loginProcess(this.signupEmail, this.signupPassword);
        }
        else {
          console.log('Error in User Creation!');
        }
      })
      .catch(error => {
        console.log(error.response);
        this.$toasted.error(error.response.statusText, {
          theme: "outline",
          position: "bottom-center",
          duration : 3000
        });
      })
    },
  },
  components: {
    ForgotPassword
  }
}
</script>

<style lang="scss">
.login {

  // min-height: 100%;
  // background-image: linear-gradient(260deg, #2376ae 0%, #c16ecf 100%);
  background-image: linear-gradient(260deg, #2376ae 0%, #ffffff 100%);

  .container {
    padding: 1em;
    min-height:100vh;
  }

  .box {
    padding: 0;
  }

  .inside-box {
    width: 500px;
    margin: 0 auto;
    margin-top: 2rem;
    border-radius: 3px;
    height: auto;
    box-shadow: 3px 3px 25px #000;
  }

  .title-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    padding-right: 1rem;
    border-bottom: solid 1px black;
    span.title {
      padding-left: 1rem;
      margin-bottom: 0;
    }
  }

  .login-form {
    padding: 1rem;
  }

  .signup-form {
    padding: 1rem;
  }

  .login-footer {
    padding: 1rem;
    border-top: solid 1px black;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media all and (max-width: 500px) {

    .box {
      max-width: 350px;
      .title-head {
        display: flex;
        flex-direction: column;
        .title {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
      }
    }

  }

}

a {
  color: #42b983;
}
</style>
