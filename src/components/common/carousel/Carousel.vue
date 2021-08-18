<template>
  <div class="carousel">
    <span class="left" @click="leftBtn">←</span>
    <ul :style="{ width: 100 * leng + 'vw', left: -100 * inx + 'vw' }">
      <slot></slot>
    </ul>
    <span class="right" @click="rightBtn">→</span>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  props: {
    leng: Number,
  },
  data() {
    return {
      inx: 0,
    };
  },
  methods: {
    leftBtn() {
      if (this.inx == 0) {
        this.inx = this.leng - 1;
        return this.inx;
      } else {
        return --this.inx;
      }
    },
    rightBtn() {
      if (this.inx == this.leng - 1) {
        this.inx = 0;
      } else {
        return ++this.inx;
      }
    },
  },
};
</script>

<style scoped>
.carousel {
  width: 100vw;
  overflow: hidden;
    position: relative;
}
.carousel ul {
  list-style-type: none;
  position: relative;
  top: 0px;
  margin: 0px;
  padding: 0px;
}

.carousel span{
  width: 13vw;
  height: 13vw;
  background-color: black;
  position: absolute;
  top: 50%;
  transform:translateY(-50%);
  border-radius: 10px;
  opacity: 0.5;
  color: white;
  line-height: 13vw;
  text-align: center;
  z-index: 5;
}
.carousel .left {
  left: 0px;
}
.carousel .right {
  right: 0px;
}
</style>