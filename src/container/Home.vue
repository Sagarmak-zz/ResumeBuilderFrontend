<template lang="html">
  <div class="home">
    <!-- navbar -->
    <Navbar :name="name" :email="email"></Navbar>
    <!-- router-view -->
    <div class="container is-widescreen">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import api from '@/api/main';
export default {
  name: 'navbar',

  data() {
    return {
      name: '',
      email: '',
    };
  },

  mounted() {
    this.userProfile();
  },

  created() {
    this.$bus.$on('logout', () => {
      this.$auth.destroyToken();
      this.redirect();
    });
  },

  methods: {
    userProfile() {
      api.userProfile()
      .then(response => {
        this.name = response.data.name;
        this.email = response.data.email;
        this.$toasted.info('Welcome ' + this.name + '!', {
          theme: 'bubble',
          position: 'top-center',
          duration: 3000,
          icon: 'perm_identity'
        })
      })
      .catch(error => {
        console.log(error);
        console.log(error.response.status, error.response.statusText);
        this.$toasted.error(error.response.status + '-' + error.response.statusText, {
          theme: 'bubble',
          position: 'bottom-center',
          duration: 3000,
          icon: 'error_outline'
        });
        // this.$toasted.error("Please Logout and come back again to continue", {
        //   theme: 'bubble',
        //   position: 'bottom-center',
        //   duration: 3000,
        // })
      })
    },

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
