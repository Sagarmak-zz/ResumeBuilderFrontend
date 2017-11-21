<template lang="html">
  <div class="navbar-page">

    <nav class="navbar is-primary">

      <div class="navbar-brand">
        <a class="navbar-item" @click="redirectHome">
          <span class="title">ResumeBuilder</span>
        </a>

        <div class="navbar-burger burger" data-target="navMenuTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navMenuTransparentExample" class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <p class="control">
              <a class="button is-primary is-outlined is-inverted" @click="redirectProfile">
                <span class="icon">
                  <i class="fa fa-user"></i>
                </span>
                <span>{{name}}</span>
              </a>
            </p>
            <!-- <div class="field is-grouped">
              <p class="control">
                <a class="button is-primary is-outlined is-inverted" @click="logout()">
                  <span class="icon">
                    <i class="fa fa-sign-out"></i>
                  </span>
                  <span>Logout</span>
                </a>
              </p>
            </div> -->
          </div>
        </div>
      </div>

    </nav>

  </div>
</template>

<script>
export default {
  name: 'navbar',

  created() {
  },

  props: ['name', 'email'],

  methods: {
    logout() {
      this.$bus.$emit('logout');
    },
    redirectHome() {
      this.$router.push({ name: 'Landing' });
    },
    redirectProfile() {
      this.$router.push({ name: 'Profile' });
    }
  }
}
</script>

<style lang="scss">
.navbar-page {
  .navbar.is-primary {
    padding: 0 1.5rem;
  }
}
</style>
