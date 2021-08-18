<template>
  <div class="detail-swiper-">
    <carousel :leng="topImages.length">
      <carousel-item v-for="(item, index) in topImages" :key="index" >
        <img :src="item" alt="" class="carousel-item-img">
      </carousel-item>
    </carousel>
  </div>
</template>

<script>
import Carousel from "../../../components/common/carousel/Carousel.vue";
import CarouselItem from '../../../components/common/carousel/CarouselItem.vue';

export default {
  name: "DetailSwiper",
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Carousel,
    CarouselItem,
  },
};
</script>

<style scoped>
.detail-swiper{
  position: relative;
}
.carousel-item-img{
  height:65vh;
}
</style>