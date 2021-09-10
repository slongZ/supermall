<template>
  <div class="profile-info">
    <div class="head">
      <div class="image">
      <img src="@/assets/img/profile/head.jpg" alt="">
      </div>
      <div class="info">
        <div>未登陆</div>
        <div>暂无绑定手机</div>
      </div>
    </div>
    <div class="have">
      <div class="flex flex1">
        <div><span>0.00</span>元</div>
        <div>我的余额</div>
      </div>
      <div class="flex flex1">
        <div><span>0</span>张</div>
        <div>我的优惠券</div>
      </div>
      <div class="flex">
        <div><span>0</span>分</div>
        <div>我的积分</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'ProfileInfo',
}
</script>

<style scoped>
.profile-info{
  position: relative;
}
.head{
  height:25vw;
  width: 100vw;
  display: flex;
  background-color: dodgerblue;
}
.head .image{
  height: 25vw;
  width: 25vw;
}
.head img{
  width: 17vw;
  height: 17vw;
  border-radius: 50%;
  position: relative;
  top: 4vw;
  left: 4vw;
}
.info{
  padding: 2.5vw;
  line-height: 10vw;
  color: white;
}
.have{
  height: 25vw;
  width: 100vw;
  display: flex;
}
.flex{
  flex: 1;
  margin: auto;
  text-align: center;
  font-size: 15px;
}
.flex1{
  border-right: 1px solid lightgray;
}
.flex span {
  color: red;
  font-size: 25px;
}
</style>