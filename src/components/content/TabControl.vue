<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item,index) in titles" v-bind:key="index" 
        :class="{active: index === currentTypeIndex}"
        @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      currentTypeIndex:0
    }
  },
  methods:{
    itemClick(index){
      this.currentTypeIndex = index;
      this.$emit('tabClick', index)
    }
  }
}
</script>

<style>
.tab-control{
  display: flex;
  text-align: center;
  font-size: 15px;
  background-color: white;
  z-index: 9;
}
.tab-control-item{
  flex:1;
  height:40px;
  line-height: 40px;
}

.tab-control-item span{
  padding: 5px;
}

.active span{
  color:dodgerblue;
  border-bottom: 3px solid dodgerblue;
}
</style>