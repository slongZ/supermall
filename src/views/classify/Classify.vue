<template>
  <div id="category">
    <nav-bar class="nav-bar">
      <div slot="center">分类</div>
    </nav-bar>

    <scroll class="left-content" ref="scrollLeft">
      <left-bar :cateInfo="cateInfo" @leftBarClick="leftBarClick"></left-bar>
    </scroll>

    <scroll class="right-content" ref="scroll">
      <right-top :subInfo="subInfo"></right-top>
      <tab-control :titles="['综合', '新品', '销量']" @tabClick="tabClick">
      </tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import LeftBar from "@/views/classify/childComps/LeftBar.vue";
import Scroll from "../../components/common/scroll/Scroll.vue";
import RightTop from "./childComps/RightTop.vue";
import TabControl from "../../components/content/TabControl.vue";
import GoodsList from '../../components/content/goods/GoodsList.vue';

import {
  getCategory,
  getSubcategory,
  getSubcategoryDetail,
} from "@/network/category";
import { itemListenerMixin, backTopMixin } from "@/common/mixin.js";

export default {
  name: "Classify",
  components: {
    NavBar,
    LeftBar,
    Scroll,
    RightTop,
    TabControl,
    GoodsList,
  },

  data() {
    return {
      cateInfo: [],
      subInfo: [],
      goods: {
        pop: [],
        new: [],
        sell: [],
      },
      maitKey: null,
      miniWallkey: null,
      type: "pop",
    };
  },

  mounted() {
    this.getCategory();
  },

  mixins: [itemListenerMixin, backTopMixin],

  computed: {
    showGoods() {
      return this.goods[this.type];
    },
  },

  methods: {
    tabClick(index) {
      switch(index){
        case 0:
          this.type = "pop";
          break;
        case 1:
          this.type = "new";
          break;
        case 2:
          this.type = "sell";
          break;
      }
    },

    leftBarClick(index){
      this.getSubcategory(this.cateInfo[index].maitKey);
      this.getSubcategoryDetail(this.cateInfo[index].miniWallkey,"pop");
      this.getSubcategoryDetail(this.cateInfo[index].miniWallkey,"new");
      this.getSubcategoryDetail(this.cateInfo[index].miniWallkey,"sell");
    },

    getCategory() {
      getCategory().then((res) => {
        this.cateInfo = res.data.category.list;
        this.getSubcategory(this.cateInfo[0].maitKey);
        this.getSubcategoryDetail(this.cateInfo[0].miniWallkey, "pop");
        this.getSubcategoryDetail(this.cateInfo[0].miniWallkey, "new");
        this.getSubcategoryDetail(this.cateInfo[0].miniWallkey, "sell");
        setTimeout(() => {
          this.$refs.scrollLeft.refresh();
        }, 100);
      });
    },

    getSubcategory(maitKey) {
      getSubcategory(maitKey).then((res) => {
        this.subInfo = res.data.list;
      });
    },

    getSubcategoryDetail(miniWallkey, type) {
      getSubcategoryDetail(miniWallkey, type).then((res) => {
        this.goods[type] = res;
      });
    },
  },
};
</script>

<style scoped>
#category {
  height: 100vh;
  width: 100vw;
  position: relative;
}
.nav-bar {
  background-color: dodgerblue;
  color: white;
}
.left-content {
  position: absolute;
  left: 0;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
}
.right-content {
  width: 80vw;
  position: absolute;
  left: 20vw;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
}
</style>