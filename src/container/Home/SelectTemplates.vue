<template lang="html">
  <div class="view-templates-page">

    <div class="">
      <span class="title is-2"> Choose your Template...</span>
      <div class="columns is-multiline">
        <div class="column is-one-third" v-for="i in 5" :key="5">
          <div class="card">
            <div class="card-content">
              <figure class="image is-square">
                <img src="../../assets/resume/resume3.jpg">
              </figure>
            </div>
            <footer class="card-footer">
              <p class="card-footer-item">
                <span>
                  View on <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
                </span>
              </p>
              <p class="card-footer-item">
                <span>
                  Share on <a href="#">Facebook</a>
                </span>
              </p>
            </footer>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'view-templates-page',
  data() {
    return {

    }
  },
}
</script>

<style lang="scss">
.view-templates-page {
  .box {
    padding: 0;
    padding-top: 1rem;
    .title {
      padding-left: 1rem;
    }
  }
  .columns {
    padding-top: 1rem;
    margin-bottom: 2rem;
    margin-top: .5rem;
  }
  .card {
    box-shadow: 2px 3px 15px #fff;;
  }
  .card-content {
    padding: .5rem;
    padding-bottom: 0;
  }
  .title.is-2 {
    // margin-bottom: 1rem;
  }
  .column.is-one-third {
    border: solid 1px #ccc;
    margin-bottom: 1rem;
  }
}
</style>
