<template>
  <div class="login">

    <div class="container">

      <div class="box inside-box">
        <span class="title is-1">ResumeBuilder</span>

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

        <div class="field login-footer">

          <div class="control">
            <button class="button is-info" @click="redirect()">Submit</button>
          </div>
          <div class="forgot-password">
            <span class="title is-5">Forgot Password</span>
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
    }
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

  .inside-box {
    width: 500px;
    margin: 0 auto;
    margin-top: 2rem;
    border-radius: 1px;
  }

  .login-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

}

a {
  color: #42b983;
}
</style>
