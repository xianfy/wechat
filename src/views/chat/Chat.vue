<template>
<div class="Chat">
  <NavBar>
    <div slot="center">微信</div>
  </NavBar>
  <infoList :personList="person"></infoList>
</div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import infoList from "components/common/infoList/infoList";

  export default {
    name: "Chat",
    data(){
      return{
        person:[
          {
            name:'刘德华',
            id:1,
          },
          {
            name:'周杰伦',
            id:2
          },
          {
            name:'薛之谦',
            id:3
          },
          {
            name:'林俊杰',
            id:4
          }
        ]
      }
    },
    components:{
      NavBar,
      infoList
    },
    created() {
      // 将用户加入到vuex集成化状态管理中
      this.$store.state.cartList.push(this.person)
    }
  }
</script>

<style scoped>

</style>
