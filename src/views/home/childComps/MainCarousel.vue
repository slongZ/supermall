<template>
  <div class="main-carousel">
    <carousel :leng="banners.length" class="carousel">
      <carousel-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link"><img :src="item.image"  @load="imageLoad" /></a>
      </carousel-item>

    </carousel>
  </div>
</template>

<script>
import Carousel from "@/components/common/carousel/Carousel.vue";
import CarouselItem from "@/components/common/carousel/CarouselItem.vue";

export default {
  name: "MainCarousel",
  components: {
    Carousel,
    CarouselItem,
  },
  props: {
    bannerst: Array,
  },
  data() {
    return {
      banners: this.bannerst,
      isLoad: false,
    };
  },
  methods: {
    imageLoad() {
      if (!this.isLoad) {
        this.$emit("carouselImageLoad");
        this.isLoad = true;
      }
    },
  },
};
</script>

<style scoped>
</style>