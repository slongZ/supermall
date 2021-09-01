<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <scroll class="content" ref="scroll">
    <cart-list></cart-list>
    </scroll>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import CartList from './childComps/CartList.vue';
import CartBottomBar from './childComps/CartBottomBar.vue';

import {mapGetters} from 'vuex'
import Scroll from '../../components/common/scroll/Scroll.vue';

export default {
  name: "Shopping",
  components: {
    NavBar,
    CartList,
    Scroll,
    CartBottomBar,
  },
  computed: {
    // 从getters中获取
    ...mapGetters(['cartLength'])
  },
  activated(){
    this.$refs.scroll.refresh()
  }
};
</script>

<style scoped>
.cart{
  width: 100vw;
  height: 100vh;
  position: relative;
}
.nav-bar {
  background-color: dodgerblue;
  color: white;
}
.content{
  position:absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
}
</style>