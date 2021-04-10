<template>
<div class="infoListItem" @click="goChat">
 <div class="info">
   <img src="~assets/img/ldh.jpg" alt="">
   <div class="userInfo">
     <div class="userInfoTop">
       <span class="userName">{{personListItem.name}}</span>
       <span class="timeNow">17:10:53</span>
     </div>
     <div class="infoNow">当前信息</div>
   </div>
 </div>
</div>
</template>

<script>
  export default {
    name: "infoListItem",
    props:{
      personListItem:{
        type:Object,
        default:{}
      }
    },
    methods:{
      goChat(){
        this.$router.push('/chatWindow/'+this.personListItem.id)//动态路由将用户id传到聊天界面
      },
    }
  }
</script>

<style scoped>
  .info {
    display: flex;
    padding: 10px;
    border-bottom: 1px solid #999999;
  }
  .info img {
    width: 15%;
    border-radius: 5px;
  }
  .userInfo {
    margin-left: 10px;
  }
  .userInfoTop {
    position: relative;
    top: 0;
    left: 0;
    margin-top: 3px;
    margin-bottom: 10px;
  }
  .userName {
    font-size: 14px;
  }
  .timeNow {
    position: relative;
    top: 0;
    right: -150px;
    font-size: 10px;
    color: #999999;
  }
  .infoNow {
    font-size: 10px;
    color: #999999;
  }
</style>
