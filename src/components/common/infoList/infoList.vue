<template>
<div class="infoList">
  <infoListItem v-for="(item,index) in personList" :personListItem="item" :key="index"></infoListItem>
</div>
</template>

<script>
  import infoListItem from "./infoListItem";

  export default {
    name: "infoList",
    components:{
      infoListItem
    },
    props:{
        personList:{
          type:Array,
          default:[]
        }
      }
  }
</script>

<style scoped>
.infoList {
  width: 100%;
  height: 70px;
}
</style>
