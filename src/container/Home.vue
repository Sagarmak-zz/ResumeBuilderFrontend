<template lang="html">
  <div class="home">
    <!-- navbar -->
    <Navbar></Navbar>
    <!-- router-view -->
    <div class="container is-widescreen">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
export default {
  name: 'navbar',
  created() {
    this.$bus.$on('logout', () => {
      this.$auth.destroyToken();
      this.redirect();
    })
  },
  methods: {
    redirect() {
      this.$router.push({ name: 'Login' });
    }
  },
  components: {
    Navbar
  },
}
</script>

<style lang="scss">
.home {
  .container {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
}
</style>
