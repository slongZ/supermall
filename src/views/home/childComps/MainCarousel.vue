<template>
  <div>
    <carousel :lengt="banners.length">
      <carousel-item>
        <a :href="banners[0].link"><img :src="banners[0].image" /></a>
      </carousel-item>
      <carousel-item>
        <a :href="banners[1].link"><img :src="banners[1].image" /></a>
      </carousel-item>
      <carousel-item>
        <a :href="banners[2].link"><img :src="banners[2].image" /></a>
      </carousel-item>
      <carousel-item>
        <a :href="banners[3].link"><img :src="banners[3].image" /></a>
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
    };
  },
  methods: {
    test() {
      console.log(this.banners[0].image);
    },
  },
};
</script>

<style>
</style>