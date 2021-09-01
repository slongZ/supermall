<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button
        class="check-buttom"
        :is-checked="isSelectAll"
        @click.native="checkClick"
      ></check-button>
      <span>全选</span>
    </div>
    <div class="price">合计：{{ totalPrice }}</div>
    <div class="caclculate" @click="calcClick">结算({{ checkLength }})</div>
  </div>
</template>

<script>
import CheckButton from "../../../components/checkButton/CheckButton.vue";
import { mapGetters } from "vuex";

export default {
  name: "CartBottomBar",
  components: {
    CheckButton,
  },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      return (
        "￥" +
        this.$store.state.cartList
          .filter((item) => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0)
          .toFixed(2)
      );
    },
    checkLength() {
      return this.cartList.filter((item) => item.checked).length;
    },
    isSelectAll() {
      if (this.cartList.length === 0) return false;
      return !this.cartList.find((item) => !item.checked);
    },
  },
  methods:{
    checkClick(){
      if(this.isSelectAll){
        this.cartList.forEach(item => item.checked = false)
      } else {
        // 部分或全部选中
        this.cartList.forEach(item => item.checked = true)
      }
    },
    calcClick(){
      if(!this.isSelectAll){
        this.$toast.show('请选择购买的商品',2000)
      }
    }
  }
};
</script>

<style scoped>
.bottom-bar {
  height: 40px;
  width: 100vw;
  position: absolute;
  bottom: 49px;
  display: flex;
  background-color: lightgray;
  line-height: 40px;
}
.check-content {
  display: flex;
  align-items: center;
}
.check-button {
  height: 16px;
  width: 16px;
  line-height: 16px;
  margin-left: 5px;
  margin-right: 5px;
}
.check-content span {
  margin-right: 5px;
}
.price {
  flex: 1;
}
.caclculate {
  width: 90px;
  background-color: red;
  color: white;
  text-align: center;
}
</style>