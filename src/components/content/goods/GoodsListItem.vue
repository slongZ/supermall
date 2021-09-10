<template>
  <div class="goods-list-item" :class="{ item: isUse }" @click="itemClick">
    <img :src="showImage" alt="" @load="imageLoad" />
    <div class="goods-list-item-text">
      <p>{{ goodsItem.title }}</p>
      <span class="price">￥{{ goodsItem.price }}</span>
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
  data() {
    return {
      isUse: false,
    };
  },
  methods: {
    imageLoad() {
      this.$bus.$emit("itemImageLoad", {});
        if(!this.goodsItem.show){
          if(!this.isUse){this.isUse = true;}
        }
    },
    itemClick() {
      this.$router.push("/detail/" + this.goodsItem.iid);
    },
  },
  computed: {
    showImage() {
      if (!this.goodsItem.show) {
        return this.goodsItem.img;
      }
      return this.goodsItem.image || this.goodsItem.show.img;
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
  padding-left: 2vw;
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

.item {
  width: 34vw;
}
.item img {
  width: 34vw;
  height: 51vw;
}
</style>