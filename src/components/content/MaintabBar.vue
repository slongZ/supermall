<template>
  <div class="maintabBar">
    <tab-bar>
      <tab-bar-item path="/home" activeColor="dodgerblue">
        <img slot="item-icon" src="@/assets/img/tabbar/home.png" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/home_active.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/classify">
        <img slot="item-icon" src="@/assets/img/tabbar/classify.png" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/classify_active.png" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopping">
        <img slot="item-icon" src="@/assets/img/tabbar/shopping.png" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/shopping_active.png" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="@/assets/img/tabbar/profile.png" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/profile_active.png" alt="">
        <div slot="item-text">我</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>

import TabBar from '../common/tabbar/TabBar'
import TabBarItem from '../common/tabbar/TabBarItem'

  export default {
    name: 'MainTabBar',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>
.maintabBar{
  z-index: 9;
}
</style>