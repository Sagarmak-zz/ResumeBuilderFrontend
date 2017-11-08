export default {
  // Vue.auth = {
    setToken(token) {
      window.localStorage.setItem('token', token);
    },

    //getToken
    getToken() {
      let token = window.localStorage.getItem('token');
      if(!token)
      return null
      else
      return token;
    },

    //destroyToken
    destroyToken() {
      window.localStorage.removeItem('token');
    },

    //isAuthenticated
    isAuthenticated() {
      if(this.getToken())
      return true
      else
      return false
    },
  // }

    // Object.defineProperties(Vue.prototype, {
    //   $auth: {
    //     get: () => {
    //       return Vue.auth;
    //     }
    //   }
    // })

}
