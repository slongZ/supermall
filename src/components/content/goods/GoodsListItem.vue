<template>
  <div class="goods-list-item" @click="itemClick">
    <img :src="goodsItem.show.img" alt="" @load="imageLoad" />
    <div class="goods-list-item-text">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect"> ✩{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imageLoad() {
      this.$bus.$emit("itemImageLoad", {});
    },
    itemClick() {
      this.$router.push("/detail/" + this.goodsItem.iid);
    },
  },
};
</script>

<style>
.goods-list-item {
  padding-top: 4px;
  padding-left: 4vw;
  width: 44vw;
}
.goods-list-item img {
  width: 44vw;
  height: 66vw;
  border-radius: 5px;
}
.goods-list-item p {
  margin: 0px;
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.goods-list-item span {
  padding-left: 3vw;
  text-align: center;
}
.price {
  color: red;
  font-weight: bold;
  font-size: 15px;
}
.collect {
  padding-top: 4px;
  padding-right: 3vw;
  float: right;
  color: grey;
  font-size: 11px;
}
</style>