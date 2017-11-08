<template lang="html">
  <div class="view-templates-page">

    <div class="box">
      <span class="title is-2"> Choose your Template...</span>
      <div class="columns is-multiline">
        <div class="column is-half">
          <div class="card">
            <div class="card-content">
              <figure class="image is-square">
                <img src="../../resume/resume1.png">
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
        <div class="column is-half">
          <div class="card">
            <div class="card-content">
              <figure class="image is-square">
                <img src="../../resume/resume2.jpg">
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
        <div class="column is-half">
          <div class="card">
            <div class="card-content">
              <figure class="image is-square">
                <img src="../../resume/resume3.jpg">
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
        <div class="column is-half">
          <div class="card">
            <div class="card-content">
              <figure class="image is-square">
                <img src="../../resume/resume3.jpg">
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
    <div class="box">
      <span class="title is-2"> Choose your Template...</span>
      <div class="columns is-multiline">
        <div class="column is-one-third" v-for="i in 5" :key="5">
          <div class="card">
            <div class="card-content">
              <figure class="image is-square">
                <img src="../../resume/resume3.jpg">
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
    margin-top: 1rem;
    margin-bottom: 1rem;
    .title {
      padding-left: 1rem;
    }
  }
  .columns {
    padding: 1rem;
    margin-bottom: 2rem;
  }
  .card-content {
    padding: .5rem;
    padding-bottom: 0;
  }
}
</style>
