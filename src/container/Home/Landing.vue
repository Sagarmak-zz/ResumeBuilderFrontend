<template lang="html">
  <div class="landing">

    <div class="columns is-multiline">

      <div class="column is-one-third">
        <div class="card">
          <div class="card-content">
            <figure class="image is-square">
              <img src="../../../static/resume/resume3.jpg">
            </figure>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">
              <span>
                Edit
              </span>
            </p>
            <p class="card-footer-item">
              <span>
                Delete
              </span>
            </p>
          </footer>
        </div>
      </div>

      <div class="column is-one-third flex-apply">
        <div class="card add-button">
          <a class="button is-large" @click="redirect()">
            <span class="icon is-large">
              <i class="fa fa-2x fa-plus-circle"></i>
            </span>
            <span class="add title is-2">Add</span>
          </a>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import ViewTemplates from '@/components/ViewTemplates';
import api from '@/api/main';
export default {
  name: 'landing',
  created() {
    this.userTemplates();
  },
  data() {
    return {
      showViewtemplate: false,
    }
  },
  methods: {
    redirect() {
      this.$router.push({ name: 'SelectTemplates' });
    },
    userTemplates() {
      api.userTemplates()
      .then(response => {
        console.log("UserTemplates", response);
      })
      .catch(error => {
        console.log(error);
        console.log(error.response.status, error.response.statusText);
      });
    }
  },
  components: {
    ViewTemplates
  }
}
</script>

<style lang="scss">
.landing {

  // margin: 1rem;

  .add-button {
    box-shadow: none;
  }

  .button.is-large {
    padding: 5rem;
    border: solid 2px #ddd;
  }

  .flex-apply {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .column.is-one-third {
    margin-bottom: 1rem;
  }
}
</style>
