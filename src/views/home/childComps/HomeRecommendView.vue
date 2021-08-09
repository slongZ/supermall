<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item,index) in recommends" v-bind:key="index">
      <a :href="item.link">
        <img :src="item.image">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommendView',
  props: {
    recommends: {
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style>
.recommend{
  display: flex;
  padding:5vw 0;
  border-bottom: 8px solid lightgray;
}

.recommend-item{
  float: left;
  text-align: center;
  flex: 1;
}

.recommend-item img{
  width: 15vw;
  height: 15vw;
}

</style>