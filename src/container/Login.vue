<template>
  <div class="login">

    <div class="container">

      <div class="box inside-box">
        <div class="title-head">
          <span class="title is-1">ResumeBuilder</span>
          <button class="button is-info" v-if="!login" @click="login=true">Signup</button>
          <button class="button is-primary" v-if="login" @click="login=false">Login</button>
        </div>

        <div class="login-form" v-if="!login">

          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input v-model="loginEmail" class="input" type="email" placeholder="Email input">
            </div>
          </div>


          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input v-model="loginPassword" class="input" type="password" placeholder="********">
            </div>
          </div>

        </div>

        <div class="signup-form" v-if="login">
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input v-model="signupName" class="input" type="text" placeholder="Name">
            </div>
          </div>
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input v-model="signupEmail" class="input" type="email" placeholder="Email input">
            </div>
          </div>
          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input v-model="signupPassword" class="input" type="password" placeholder="********">
            </div>
          </div>
          <div class="field">
            <label class="label">Confirm Password</label>
            <div class="control">
              <input v-model="signupConfirmPassword" class="input" type="password" placeholder="********">
            </div>
          </div>
        </div>

        <div class="field login-footer">

          <div class="control" v-if="!login">
            <button class="button is-primary" @keyup.enter="loginProcess(loginEmail, loginPassword)" @click="loginProcess(loginEmail, loginPassword)">Login</button>
          </div>
          <div class="control" v-if=" login">
            <button class="button is-info" @click="signupProcess()">Sign Up</button>
          </div>
          <div class="forgot-password" v-if="!login">
            <button class="button is-dark is-outlined">Forgot Password</button>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api/main';
export default {
  name: 'Login',

  data () {
    return {
      loginEmail: '',
      loginPassword: '',
      login: false,
      signupName: '',
      signupEmail: '',
      signupPassword: '',
      signupConfirmPassword: '',
    }
  },

  created() {

  },

  methods: {
    loginProcess(email, password) {
      //1 login
      api.login(email, password)
      .then(response => {
        //2 saveToken
        this.saveToken(response.data.token);
      })
      .catch(error => {
        console.log(error);
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

    signupProcess() {
      api.register(this.signupName, this.signupEmail, this.signupPassword, this.signupConfirmPassword)
        .then(response => {
          // console.log(response);
          if(response.data.message == "User created successfully") {
            this.loginProcess(this.signupEmail, this.signupPassword);
          }
          else {
            console.log('Error in User Creation!');
          }
        })
        .catch(error => {
          console.log(error);
        })
    },
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

}

a {
  color: #42b983;
}
</style>
