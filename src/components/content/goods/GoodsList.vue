<template>
  <div class="goods-list">
    <goods-list-item 
      v-for="(item,index) in goods" :key="index"
      :goodsItem="item">
    </goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'

export default {
  name: 'GoodsList',
  components: {
    GoodsListItem
  },
  props: {
    goods:{
      type: Array,
      default(){
        return {}
      }
    }
  }
}
</script>

<style>
.goods-list{
  display: flex;
  flex-wrap:wrap;
}
</style>