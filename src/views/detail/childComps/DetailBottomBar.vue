<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
        <div class="cart" @click="addToCart">加入购物车</div>
        <div class="buy">购买</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBottomBar',
  methods:{
    addToCart(){
      this.$emit('addCart')
    }
  }
}
</script>

<style scoped>
.bottom-bar{
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 49px;
  display: flex;
  text-align: center;
}
.bar-item{
  flex: 1;
  display: flex;
}
.bar-item>div{
  flex: 1;
}
.bar-left .text{
  font-size: 13px;
}
.bar-left .icon{
  display: block;
  width: 21px;
  height:21px;
  margin: 7px auto 3px;
  }
.service{
  background: url("~@/assets/img/detail/icon01.png") 0 0/100%;
}
.shop{
    background: url("~@/assets/img/detail/icon02.png") 0 0/100%;
}
.select{
  background: url("~@/assets/img/detail/icon03.png") 0 0/100%;
}
.bar-right{
  font-size: 15px;
  color: #fff;
  line-height: 58px;
}
.bar-right .cart{
  background-color: #ffe817;
  color: #333;
}
.bar-right .buy{
  background-color: #f69;
}
</style>