<template>
  <div class="tab-bar-item" @click="btnClick">
    <div :style="activeStyle"><slot></slot></div>
  </div>
</template>

<script>
  export default {
    name: "tabbarItem",
    props:{
      path:String,
      activeColor:{
        type:String,
        default:'green'
      }
    },
    computed:{
      isActive(){
        return this.$route.path === this.path
      },
      activeStyle(){
        return this.isActive ? {color:this.activeColor} : {}
      }
    },
    methods:{
      btnClick(){
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    font-size: 14px;
  }
  img {
    width: 24px;
    height: 24px;
    padding-top: 2px;
    vertical-align: middle;
  }
</style>
