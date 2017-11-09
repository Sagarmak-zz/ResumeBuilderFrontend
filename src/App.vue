<template>
  <div id="app">

    <div class="">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="scss">
@import "../node_modules/bulma/sass/utilities/initial-variables";

@import "./scss/variables";

// 4. Import the rest of Bulma
@import "../node_modules/bulma/bulma";

html {
  background-color: whitesmoke;
}
</style>
