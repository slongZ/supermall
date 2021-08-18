<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav-bar"></detail-nav-bar>
    <scroll class="content">
    <detail-swiper class="detail-swiper" :top-images="topImages"></detail-swiper>
    <detail-base-info :goods="goods"></detail-base-info>
    <detail-shop-info :shop="shop"></detail-shop-info>    
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar.vue'
import DetailSwiper from './childComps/DetailSwiper.vue'
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'
import Scroll from '../../components/common/scroll/Scroll.vue'



import {getDetail,Goods,Shop} from '@/network/detail'

export default {
  name:"Detail",
  data(){
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {}
    }
  },
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll
  },
  created(){
    // 1.保存传入的iid
    this.iid = this.$route.params.iid

    // 2.根据iid请求详情数据
    getDetail(this.iid).then(res => {
      console.log(res);
      // 1.获取顶部的图片轮播数据
      this.topImages =res.result.itemInfo.topImages;
      
      // 2.获取商品信息
      this.goods = new Goods(res.result.itemInfo,res.result.columns,res.result.shopInfo.services )

      // 3.创建店铺信息
      this.shop = new Shop(res.result.shopInfo)
    })
  }

}
</script>

<style scoped>
#detail{
  position: relative;
  z-index: 10;
  background-color: #fff;
  height:100vh;
}
.detail-nav-bar{
  background-color: white;
}
.content{
  position: absolute;
  left: 0;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
}
</style>