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
import Auth from '@/packages/auth/Auth';
export default {
  name: 'navbar',
  created() {
    this.$bus.$on('logout', () => {
      Auth.destroyToken();
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
.home {}
</style>
