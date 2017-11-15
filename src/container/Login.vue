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

        </div>

        <div class="field login-footer">

          <div class="control" v-if="!login">
            <button class="button is-primary" @click="loginProcess()">Login</button>
          </div>
          <div class="control" v-if=" login">
            <button class="button is-info" @click="redirect()">Sign Up</button>
          </div>
          <div class="forgot-password" v-if="!login">
            <button class="button is-dark is-outlined">Forgot Password</button>
          </div>

        </div>

      </div>
      <pre>
        {{$data}}
      </pre>
    </div>
  </div>
</template>

<script>
import api from '@/api/main';
export default {
  name: 'Login',

  data () {
    return {
      loginEmail: 'sagar@gmail.com',
      loginPassword: '123456',
      login: false
    }
  },

  created() {
    // window.axios.get('https://jsonplaceholder.typicode.com/posts')
    // .then((response) => {
    //   console.log(response.data);
    // })
  },

  methods: {
    loginProcess() {
      //1 login
      api.login(this.loginEmail, this.loginPassword)
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
        console.log(this.$auth.setToken(token));
        //3 redirect
        this.redirectAfterLogin();
      }
      else {
        //error
      }
    },
    redirectAfterLogin() {
      this.$router.push({ name: 'Landing' });
    }
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
