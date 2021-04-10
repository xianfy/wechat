<template>
<div class="CWNavBar">
  <NavBar>
    <div slot="left" class="left" @click="backClick">
      <img src="~assets/img/back.svg" alt="">
    </div>
    <div slot="center" class="center">{{thisPerson}}</div>
    <div slot="right" class="right"><span>+</span></div>
  </NavBar>
</div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";

  export default {
    name: "CWNavBar",
    data(){
      return {
        id:null
      }
    },
    props:{
      personList:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      NavBar
    },
    created() {
      // 动态路由获取用户id
      this.id = this.$route.params.id
    },
    computed:{
      thisPerson(){
        return this.personList[(this.id-1)].name
      }
    },
    methods:{
      backClick(){
        // 返回主页面按钮
        this.$router.back('/Chat')
      },
    }
  }
</script>

<style scoped>
  .left {
    position: absolute;
    top: 5px;
    left: 10px;
  }
  .left img {
    width: 20px;
    height: 20px;
  }
  .right {
    font-size: 24px;
    position: absolute;
    top: 0px;
    right: 10px;
  }
</style>
