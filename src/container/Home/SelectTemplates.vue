<template lang="html">
  <div class="view-templates-page">

    <span class="title is-2"> Choose your Template...</span>
    <div class="columns is-multiline">
      <div class="column is-one-third" v-for="resume,i in resumes">

        <div class="card">
          <div class="card-image">
            <figure class="image is-square">
              <!-- <img src="../../../static/resume/DA0.png"> -->
              <img :src="getImage(i)" placeholder="Resume Image">
            </figure>
          </div>

          <div class="card-footer">
            <router-link :to="{ name: 'Dashboard', params: { resume_id: resume.id } }" class="media-content">
              <p><span class="title is-4">{{resume.name}}</span></p>
              <p><span class="subtitle is-6">{{resume.description}}</span></p>
            </router-link>
          </div>
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
        // console.log('userTemplates', response.data);
        this.resumes = response.data;
      })
      .catch(error => {
        console.log(error);
      })
    },

    getImage(i) {
      return '../../../static/resume/DA' + i + '.png';
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
    border: solid 1px #aaa;
    margin-bottom: 1rem;
    background-color: white;
  }
  .media-content {
    margin-left: 8%;
    padding: 10px 0;
  }
}
</style>
