<template>
  <tabbar>
    <tabbarItem path="/Chat" active-color="green">
      <div class="center">微信</div>
    </tabbarItem>
    <tabbarItem path="/Address" active-color="green">
      <div class="center">通讯录</div>
    </tabbarItem>
    <tabbarItem path="/Find" active-color="green">
      <div class="center">发现</div>
    </tabbarItem>
    <tabbarItem path="/Profile" active-color="green">
      <div class="center">我</div>
    </tabbarItem>
  </tabbar>
</template>

<script>
  import tabbar from 'components/common/tabbar/tabbar'
  import tabbarItem from 'components/common/tabbar/tabbarItem'

  export default {
    name: "MainTabbar",
    components: {
      tabbar,
      tabbarItem
    }
  }
</script>

<style scoped>
  .center {
    position: relative;
    top: 15px;
  }
</style>
