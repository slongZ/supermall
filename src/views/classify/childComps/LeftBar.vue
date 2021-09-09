<template>
  <div id="left-bar">
    <div
      v-for="(item,index) in cateInfo"
      v-bind:key="index"
      class="title"
      :class="{choose:isShow}"
      >
      <span>{{item.title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeftBar',
  props: {
    cateInfo: {
      type: Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      isShow: false
    }
  }
}
</script>

<style scoped>
#left-bar{
  position: relative;
}
.title{
  width:20vw;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: lightgray;
}
.choose{
  background: white;
  color:dodgerblue;
  border-left: 3px solid dodgerblue;
}
</style>