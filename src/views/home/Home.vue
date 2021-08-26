<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">首页</div>
    </nav-bar>

    <tab-control
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControl1"
      class="tab-control-alternate"
      v-show="isTabControlshow"
    ></tab-control>

    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <main-carousel
        v-if="flag"
        :bannerst="banners"
        @carouselImageLoad="carouselImageLoad"
      ></main-carousel>
      <home-recommend-view
        v-if="flag"
        :recommends="recommends"
      ></home-recommend-view>
      <feature-view></feature-view>
      <tab-control
        class="home-tab-control"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl"
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
import {itemListenerMixin, backTopMixin} from "@/common/mixin.js";

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
  },
  mixins: [itemListenerMixin,backTopMixin],
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
      isTabControlshow: false,
      tabOffsetTop: 0,
      saveY: 0
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
  mounted() {

    // 赋值
    // this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
    // console.log(this.$refs.tabControl.$el.offsetTop)
  },
  activated(){
    this.$refs.scroll.scroll.scrollTo(0,this.saveY, 1);
    // 刷新
    this.$refs.scroll.scroll.refresh()
  },
  deactivated(){
    // 保存y值
    this.saveY = this.$refs.scroll.scroll.y;

    // 取消监听
    this.$bus.$off('itemImgLoad', this.itemImgListener)
  },
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
      this.$refs.tabControl.currentTypeIndex = index;
      this.$refs.tabControl1.currentTypeIndex = index;
    
    },

    contentScroll(position) {
      // 回顶按钮BackTop显示
      this.isShowBackTop = -position.y > 1000;

      // 决定tabControl是否吸顶
      this.isTabControlshow = -position.y > this.tabOffsetTop;    },

    // 上拉加载
    loadMore() {
      // console.log('上拉加载更多')
      this.getHomeGoods(this.currentType);
      // 已经进行每张图片都进行检查
      // this.$refs.scroll.scroll.refresh()
    },

    //
    carouselImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
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

        this.$refs.scroll.scroll.finishPullUp();
      });
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
#home {
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: dodgerblue;
  color: white;
}
.content {
  position: absolute;
  left: 0;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
}
.tab-control-alternate{
  position:relative;
  top:44px;
  z-index: 9;
}
</style>