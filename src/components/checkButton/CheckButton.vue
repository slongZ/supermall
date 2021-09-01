<template>
  <div class="check-button" :class="{check:isChecked}">
    <img src="@/assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'CheckButton.vue',
  props:{
    isChecked:{
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
.check-button{
  border-radius: 50%;
  border: 1px solid #333;
}
.check{
  border-color: red;
  background-color: red;
}
</style>