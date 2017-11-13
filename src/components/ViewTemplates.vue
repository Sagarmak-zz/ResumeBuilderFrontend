<template lang="html">
  <div class="view-template">
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Modal title</p>
          <button class="delete" aria-label="close" @click="$emit('close')"></button>
        </header>
        <section class="modal-card-body">
          <!-- Content ... -->

          <!-- All the templates goes here -->
          <div class="columns is-mobile">

            <div class="column is-half card" v-for="i in 6" :key="i">
              <div class="card-content">
                <figure class="image is-square">
                  <img src="../assets/resume/resume1.png">
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
          <!-- Content ... -->
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success">Save changes</button>
          <a class="button" @click="$emit('close')">Cancel</a>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'view-template',
  methods: {
    // close() {
    //   this.$bus.$emit('close');
    //   console.log('Close called inside ViewTemplate');
    // }
  }
}
</script>

<style lang="scss">
.view-template {

  .box {
    padding: 0;
  }

  .modal-card {
    min-width: 1300px;
    min-height: 650px;
    .modal-card-body {
      background-color: #fafafa;
    }
  }

  .column.is-half.card {
    max-width: 450px;
    margin-right: 1rem;
    padding-bottom: 0;
    // div:not(:nth-child(3n)) {
    // background-color: red;
    // }
  }

  .card-content {
    padding: 0;
  }

  .card-footer {

  }

  .modal-card-head {
    padding: 1rem;
  }

  .modal-card-foot {
    padding: 1rem;
  }

}
</style>
