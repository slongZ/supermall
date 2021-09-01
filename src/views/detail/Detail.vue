<template>
  <div id="detail">
    <detail-nav-bar
      class="detail-nav-bar"
      @titleClick="titleClick"
      ref="nav"
    ></detail-nav-bar>
    <scroll
      class="content"
      :probe-type="3"
      @scroll="contentScroll"
      ref="scroll"
    >
      <detail-swiper
        class="detail-swiper"
        :top-images="topImages"
        @detailSwiperImageLoad="detailSwiperImageLoad"
      ></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info
        :detail-info="detailInfo"
        @imgLoad="imgLoad"
      ></detail-goods-info>
      <detail-param-info
        :param-info="paramInfo"
        ref="params"
      ></detail-param-info>
      <detail-comment-info
        :comment-info="commentInfo"
        ref="comment"
      ></detail-comment-info>
      <goods-list :goods="recommends" ref="recommend"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
    <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import Scroll from "../../components/common/scroll/Scroll.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailParamInfo from "./childComps/DetailParamInfo.vue";
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue";
import GoodsList from "../../components/content/goods/GoodsList.vue";
import DetailBottomBar from './childComps/DetailBottomBar.vue';


import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "@/network/detail";
import { itemListenerMixin, backTopMixin } from "@/common/mixin.js";
import { debounce } from "@/common/utils.js";
import { mapActions } from 'vuex'

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: null,
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
  },
  mixins: [itemListenerMixin,backTopMixin],
  created() {
    // 1.保存传入的iid
    this.iid = this.$route.params.iid;

    // 2.根据iid请求详情数据
    getDetail(this.iid).then((res) => {
      // console.log(res);
      // 1.获取顶部的图片轮播数据
      this.topImages = res.result.itemInfo.topImages;

      // 2.获取商品信息
      this.goods = new Goods(
        res.result.itemInfo,
        res.result.columns,
        res.result.shopInfo.services
      );

      // 3.创建店铺信息
      this.shop = new Shop(res.result.shopInfo);

      // 4.保存商品的详情数据
      this.detailInfo = res.result.detailInfo;

      // 5.获取参数信息
      this.paramInfo = new GoodsParam(
        res.result.itemParams.info,
        res.result.itemParams.rule
      );

      // 6.取出评论信息
      if (res.result.rate.cRate !== 0) {
        this.commentInfo = res.result.rate.list[0];
      }
    });

    // 3.请求推荐数据
    getRecommend().then((res) => {
      this.recommends = res.data.list;
    });

    // 4.给getThemeTopY赋值
    this.getThemeTopY = debounce(() => {
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      this.themeTopYs.push(Number.MAX_VALUE)
    });
  },
  mounted() {},
  destroyed() {
    this.$bus.$off("itemImgLoad", this.itemImgListener);
  },
  methods: {
    ...mapActions(['addCart']),
    detailSwiperImageLoad() {
      this.$refs.scroll.refresh();
    },

    imgLoad() {
      this.newRefresh();
      this.getThemeTopY();
    },

    titleClick(index) {
      this.$refs.scroll.scroll.scrollTo(0, -this.themeTopYs[index], 100);
    },

    contentScroll(position){
      // 1.获取y值
      const positionY = -position.y;
      let length = this.themeTopYs.length;
      // 2.positionY和主题中值进行对比
      for(let i = 0; i < length-1; i++){
        if(this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1])) {
          this.currentIndex = i;          this.$refs.nav.currentIndex =this.currentIndex
        }
      }

      // 3.是否显示回到顶部
      this.isShowBackTop = -position.y > 1000
    },

    addToCart(){
      // 1.获取购物车需要展示的信息
      const product = {}
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;

      // 2.将商品添加到购物车
      // this.$store.commit('addCart',product)
      // this.$store.dispatch('addCart',product).then(res => {
      //   console.log(res)
      // })
      this.addCart(product).then(res => {
        console.log(res)
        this.$toast.show(res, 2000)
      })
    }
  },
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 10;
  background-color: #fff;
  height: 100vh;
}
.detail-nav-bar {
  background-color: white;
}
.content {
  position: absolute;
  left: 0;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
}
.detail-swiper {
  position: relative;
}
</style>