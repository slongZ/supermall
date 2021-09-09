<template>
  <div id="right-top">
    <div
      v-for="(item, index) in subInfo"
      v-bind:key="index"
      class="right-top-item"
    >
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad" />
        <div class="text">{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RightTop",
  props: {
    subInfo: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    imageLoad() {
      this.$bus.$emit("itemImageLoad", {});
    },
  },
};
</script>

<style scoped>
#right-top {
  width: 80vw;
  position: relative;
  display: flex;
  flex-wrap: wrap;
}
.right-top-item {
  padding: 10px;
  flex: 1;
}
a{
  text-decoration: none;
  color: black;
}
.right-top-item img {
  width: 20vw;
  height: 20vw;
}
.right-top-item .text {
  width: 20vw;
  text-align: center;
}
</style>