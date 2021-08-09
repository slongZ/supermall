<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">首页</div>
    </nav-bar>
    <main-carousel v-if='flag' :bannerst="banners"></main-carousel>
    <home-recommend-view v-if='flag' :recommends="recommends"></home-recommend-view>
  </div>
</template>

<script>

import NavBar from "@/components/common/navbar/NavBar";
import { getHomeMultidata } from "@/network/home";
import MainCarousel from './childComps/MainCarousel.vue';
import HomeRecommendView from './childComps/HomeRecommendView.vue';

export default {
  name: "Home",
  components: {
    NavBar,
    MainCarousel,
    HomeRecommendView
  },
  data() {
    return {
      banners: [],
      recommends: [],
      flag: false
    };
  },
  created() {
    // 1.请求多个数据
    getHomeMultidata().then((res) => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
      this.flag='true'
    });
  },
};
</script>

<style>
.home-nav {
  background-color: dodgerblue;
  color: white;
}
</style>