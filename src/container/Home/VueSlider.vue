<template lang="html">
  <div class="vue-slider">
    <md-card>
    <md-card-actions>
      <div class="md-subhead">
        Some Random Text
      </div>
      <md-button class="md-icon-button"
                 target="_blank"
                 href="https://github.com/surmon-china/vue-awesome-swiper/blob/master/examples/12-grab-cursor.vue">
        <md-icon>code</md-icon>
      </md-button>
    </md-card-actions>
    <md-card-media>
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <swiper-slide>Slide 7</swiper-slide>
        <swiper-slide>Slide 8</swiper-slide>
        <swiper-slide>Slide 9</swiper-slide>
        <swiper-slide>Slide 10</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </md-card-media>
  </md-card>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  name: 'vue-slider',

    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          slidesPerView: 4,
          centeredSlides: true,
          paginationClickable: true,
          spaceBetween: 30,
          grabCursor: true
        }
      }
    },

    components: {
      swiperSlide,
      swiper,

    }
  }
</script>

<style lang="scss">
.vue-slider {
  .swiper-slide {
      width: 60%;
    }
    .swiper-slide:nth-child(2n) {
      width: 40%;
    }
    .swiper-slide:nth-child(3n) {
      width: 20%;
    }
}
</style>
