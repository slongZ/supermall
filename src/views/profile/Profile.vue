<template>
  <div id="profile">
    <nav-bar class="profile-nav">
      <div slot="center">个人中心</div>
    </nav-bar>
    <profile-info></profile-info>
    <profile-jump></profile-jump>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import ProfileInfo from './childComps/ProfileInfo.vue';
import ProfileJump from './childComps/ProfileJump.vue';

export default {
  name: "Profile",
  components: {
    NavBar,
    ProfileInfo,
    ProfileJump
  }

};
</script>

<style scoped>
#profile{
  position: relative;
  top: 44px;
}
.profile-nav{
  background-color: dodgerblue;
  color: white;
}
</style>