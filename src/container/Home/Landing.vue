<template lang="html">
  <div class="landing">

    <!-- main div starts -->
    <div class="columns is-multiline">

      <!-- 1/3 col -->
      <div class="column is-one-third" v-for="i in 2">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">John Smith</p>
                <p class="subtitle is-6">@johnsmith</p>
              </div>
            </div>

            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nec iaculis mauris. <a>@bulmaio</a>.
              <a href="#">#css</a> <a href="#">#responsive</a>
              <br>
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
        </div>
      </div>

      <div class="column is-one-third flex-apply">
        <div class="card add-button">
          <a class="button is-large">
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
export default {

}
</script>

<style lang="scss">
.landing {

  margin: 1rem;

  .add-button {
    box-shadow: none;
  }

  .button {
    padding: 5rem;
    border: solid 2px #ddd;

  }

  .flex-apply {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
