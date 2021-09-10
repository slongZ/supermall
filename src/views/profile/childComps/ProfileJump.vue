<template>
  <div class="profile-jump">
    <div class="profile-jump-div">
      <img src="@/assets/img/profile/information.jpg" alt="">
      <div>我的消息</div>
    </div>
    <div class="profile-jump-div">
      <img src="@/assets/img/profile/sale.jpg" alt="">
      <div>积分商城</div>
    </div>
    <div class="profile-jump-div">
      <img src="@/assets/img/profile/vip.jpg" alt="">
      <div>会员卡</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileJump'
}
</script>

<style scoped>
.profile-jump-div{
  height: 50px;
  width: 100vw;
  line-height: 50px;
  display: flex;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
}
.profile-jump-div img{
  height: 30px;
  width: 30px;
  margin: 10px;
}
</style>