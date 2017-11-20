<template lang="html">
  <div class="navbar-page">

    <nav class="navbar is-primary">

      <div class="navbar-brand">
        <a class="navbar-item" @click="redirect()">
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
            <div class="field is-grouped">
              <p class="control">
                <a class="button is-primary is-outlined is-inverted" @click="logout()">
                  <span class="icon">
                    <i class="fa fa-download"></i>
                  </span>
                  <span>{{this.name}}</span>
                  <span>Logout</span>
                </a>
              </p>
            </div>
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
    redirect() {
      this.$router.push({ name: 'Landing' });
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
