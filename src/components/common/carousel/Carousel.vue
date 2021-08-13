<template>
  <div class="carousel">
    <label @click="leftBtn">←</label>
    <ul :style="{ width: 100 * leng + 'vw', left: -100 * inx + 'vw' }">
      <slot></slot>
    </ul>
    <span @click="rightBtn">→</span>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  props: {
    lengt: Number,
  },
  data() {
    return {
      leng: this.lengt,
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

<style>
.carousel {
  width: 100vw;
  height: 50vw;
  overflow: hidden;
  position: relative;
}
.carousel ul {
  list-style-type: none;
  height: 50vw;
  position: absolute;
  top: 0px;
  left: -100vw;
  margin: 0px;
  padding: 0px;
}

.carousel label,
.carousel span {
  width: 13vw;
  height: 13vw;
  background-color: black;
  position: absolute;
  top: 18.5vw;
  border-radius: 10px;
  opacity: 0.5;
  color: white;
  line-height: 13vw;
  text-align: center;
  z-index: 5;
}
.carousel label {
  left: 0px;
}
.carousel span {
  right: 0px;
}
</style>