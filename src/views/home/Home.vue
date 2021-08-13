<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">首页</div>
    </nav-bar>

    <scroll class="content" ref="scroll" 
            :probe-type="3" @scroll="contentScroll"
            :pull-up-load="true" @pullingUp="loadMore">
      <main-carousel v-if="flag" :bannerst="banners"></main-carousel>
      <home-recommend-view v-if="flag" :recommends="recommends"></home-recommend-view>
      <feature-view></feature-view>
      <tab-control
        class="home-tab-control"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
      ></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>

    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
    
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import MainCarousel from "./childComps/MainCarousel.vue";
import HomeRecommendView from "./childComps/HomeRecommendView.vue";
import FeatureView from "./childComps/FeatureView.vue";
import TabControl from "../../components/content/TabControl.vue";
import GoodsList from "../../components/content/goods/GoodsList.vue";
import Scroll from "../../components/common/scroll/Scroll.vue";

import { getHomeMultidata, getHomeGoods } from "@/network/home";
import BackTop from '../../components/backTop/BackTop.vue';

export default {
  name: "Home",
  components: {
    NavBar,
    MainCarousel,
    HomeRecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      flag: false,
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      goodsFlag: false,
      currentType: "pop",
      isShowBackTop: true
    };
  },
  created() {
    // 1.请求多个数据
    this.getHomeMultidata();

    // 2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  // 每张图片检查
  // mounted(){
  //   this.$bus.$on("itemImageLoad", () => {
  //     this.$refs.scroll.scroll.refresh()
  //     // this.scroll.refresh();
  //     console.log(this.$refs.scroll.scroll.hasVerticalScroll + "|" + this.$refs.scroll.scroll.scrollerHeight);
  //   });
  // },
  methods: {

    // 事件监听
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.scroll.scroll.refresh();
      console.log('换tab重新计算')
    },

    // 回顶部
    backClick(){
      this.$refs.scroll.scroll.scrollTo(0,0,500)
    },

    // 回顶按钮显示
    contentScroll(position){
      this.isShowBackTop = (-position.y) > 1000
    },

    // 上拉记载
    loadMore(){
      // console.log('上拉加载更多')
      this.getHomeGoods(this.currentType);
      this.$refs.scroll.scroll.refresh()
    },

    // 网络请求
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        this.flag = true;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.flagGoods = false;
        
        this.$refs.scroll.scroll.finishPullUp()
      })
    },
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
};
</script>

<style scoped>
#home{
  height:100vh;
  position: relative;
}
.home-nav {
  background-color: dodgerblue;
  color: white;
}
/* 没起作用 */
/* .home-tab-control {
  position: sticky;
  top: 44px;
} */
.content {
  position: absolute;
  left: 0;
  top:44px;
  bottom: 49px;
  /* margin-top: 44px;
  width: 100vw;
  height: calc(100vh - 93px);  */
  overflow: hidden;
}
</style>