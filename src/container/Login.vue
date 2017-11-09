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
              <input class="input" type="email" placeholder="Email input">
            </div>
          </div>


          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input class="input" type="password" placeholder="********">
            </div>
          </div>

        </div>

        <div class="signup-form" v-if="login">

        </div>

        <div class="field login-footer">

          <div class="control" v-if="!login">
            <button class="button is-primary" @click="redirect()">Login</button>
          </div>
          <div class="control" v-if=" login">
            <button class="button is-info" @click="redirect()">Sign Up</button>
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
export default {
  name: 'Login',

  data () {
    return {
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
    redirect() {
      this.$router.push({ name: 'Landing' });
    }
  }
}
</script>

<style lang="scss">
.login {

  min-height: 100%;
  background-image: linear-gradient(260deg, #2376ae 0%, #c16ecf 100%);

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
