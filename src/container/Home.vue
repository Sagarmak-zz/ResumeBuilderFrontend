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

  components: {
    Navbar
  }
}
</script>

<style lang="scss">
.home {
  
}
</style>
