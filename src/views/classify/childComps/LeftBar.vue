<template>
  <div id="left-bar">
    <div
      v-for="(item,index) in cateInfo"
      v-bind:key="index"
      class="title"
      :class="{choose:index === currentTypeIndex}"
      @click="barClick(index)"
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
      currentTypeIndex: 0
    }
  },
  methods:{
    barClick(index){
      this.currentTypeIndex = index;
      this.$emit('leftBarClick', index)
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