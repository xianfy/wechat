<template>
  <div id="app">
      <router-view></router-view>
<!--    底部选项卡组件-->
    <MainTabBar></MainTabBar>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabbar'

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
  @import "assets/css/base.css";
</style>
