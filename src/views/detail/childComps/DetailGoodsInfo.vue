<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="info-desc">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="(item,index) in detailInfo.detailImage[0].list" :key="index" :src="item" @load="imgLoad" alt="">
    </div>
  </div>  
</template>

<script>
export default {
  name: 'DetailGoodsInfo',
  props:{
    detailInfo:{
      type: Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    imgLoad(){
      this.$emit('imgLoad')
    }
  }
}
</script>

<style scoped>
.goods-info{
  width: 100vw;
}

.info-desc .start,
.info-desc .end{
  margin: 20px 10px;
  height: 1px;
  border-top: 1px solid black;
}
.info-desc .desc{
  margin: 0 10px;
  font-size: 12px;
}
.info-key{
  text-align: center;
  margin: 20px
}
.info-list img{
  width: 100vw;
}
</style>