<template lang="html">
  <div class="view-templates-page">

      <span class="title is-2"> Choose your Template...</span>
      <div class="columns is-multiline">
        <div class="column is-one-third" v-for="resume in resumes">
          <div class="card">
            <div class="card-content">
              <figure class="image is-square">
                <img src="../../../static/resume/resume3.jpg">
              </figure>
            </div>
            <footer class="card-footer">
              <a class="card-footer-item">
                <span>
                  Select
                </span>
              </a>
            </footer>
          </div>
        </div>
      </div>

  </div>
</template>

<script>
import api from '@/api/main';
export default {
  name: 'view-templates-page',
  created() {
    this.selectTemplate();
  },

  data() {
    return {
      resumes: ''
    }
  },

  methods: {
    selectTemplate() {
      api.selectTemplate()
      .then(response => {
        // console.log(response.data[0][i]);
        // console.log(response.data[0][0].id);
        // console.log(response.data[0][0].name);
        // console.log(response.data[0][0].description);
        console.log(response.data);
        // console.log(response.data[0]);
        this.resumes = response.data;
        // console.log(this.resumes);
      })
      .catch(error => {
        console.log(error);
      })
    }
  }
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
