<template>
  <div class="carousel-item">
    <li>
      <slot></slot>
    </li>
  </div>
</template>

<script>
export default {
  name: 'CarouselItem'
}
</script>

<style>

.carousel-item li{
  float: left;
  width: 100vw;
  height: 50vw;
}
.carousel-item li img{
  width: 100vw;
  height: 50vw;
}
</style>