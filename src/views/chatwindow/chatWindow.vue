<template>
<div class="chatWindow">
<!--  1、导航栏-->
  <CWNavBar class="nav-bar" :person-list="personList"></CWNavBar>
<!--  2、聊天界面-->
  <div class="imgSrc"><!--  显示上传照片-->
  <img :src="imgSrc" ref="img"/>
  </div>
  <div class="divMyMsg" v-for="(item,index) in allMessage" :key="index"><!--  循环渲染文本-->
    <div class="myMsg">
      <span>{{item}}</span>
    </div>
  </div>
<!--  3、选项卡-->
  <div class="InputNavBar">
    <div><input class="inputText" type="text"
                :value="message"
                @input="inputMsg($event)"
                @keyup.enter="add"></div>
    <div class="send" v-show="isShow"><button @click="add">发送</button></div><!--    发送信息按钮-->
    <div class="pushMsg" v-show="!isShow"><!--    上传图片-->
      <input type="file" ref="fileBtn" @change="uploadImg" class="upload"/>
            <!-- 自定义按钮效果 -->
            <div>
              <span>图片</span>
            </div>
    </div>
    <div class="pushMsg" v-show="!isShow"><!--    上传文件-->
      <span @click="alertWarn">文件</span>
    </div>
  </div>
</div>
</template>

<script>
  import CWNavBar from "./childcomps/CWNavBar";

  export default {
    name: "chatWindow",
    components:{
      CWNavBar
    },
    data(){
      return {
        message:'',
        allMessage:[],
        personList: [],
        isShow:false,
        imgSrc: null
      }
    },
    created() {
      this.personList = this.$store.state.cartList[0]
      // console.log(this.personList);
    },
    methods:{
      alertWarn(){
        alert('功能开发中')
      },
      inputMsg(event){
        this.message = event.target.value
        this.isShow = true
      },
      add(){
        // 添加消息
        this.allMessage.push(this.message)
        this.message = ""
        this.isShow = false
      },
      // 上传图片
      async uploadImg() {
        var flag = this;
        const inputFile = await this.$refs.fileBtn.files[0];
        this.inputFile = inputFile;
        if (this.inputFile) {
          const reader = new FileReader();
          reader.readAsDataURL(this.inputFile);
          reader.onload = function(e) {
            flag.imgSrc = this.result;
          };
        }
      },
    },
  }
</script>

<style scoped>
  .nav-bar {
    margin-bottom: 10px;
  }
  .chatWindow {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
    overflow: hidden;
  }
  .InputNavBar {
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 44px;
    line-height: 44px;
    background-color: #F6F4F4;
  }
  .inputText {
    flex: 1;
    height: 50%;
    margin:0px 5px;
    border-radius: 5px;
    outline: none;
  }
  .imgSrc{
    position: relative;
    width: 200px;
    top: 0;
    right: -100px;
    /*text-align: right;*/
  }
  .imgSrc img {
    width: 100%;
    /*height: 100%;*/
    margin-bottom: 15px;
    vertical-align: middle;
  }
  .pushMsg {
    position: relative;
    margin-right: 30px;
  }
  .upload {
    /*width: 100%;*/
    width: 50px;
    position: absolute;
    top: 10px;
    bottom: 0;
    left: -5px;
    right: 0;
    opacity: 0;
  }
  .file{
    width: 50px;
    height: 50px;
    font-size: 16px;
    text-align: center;
    margin-left: 20px;
    background-color: blueviolet;
    color: #000000;
  }
  .send button{
    /*margin-left: 30px;*/
    width: 70px;
    height: 30px;
    color: #ffffff;
    background-color: #1aad1a;
    border: 1px solid #ffffff;
  }
  .divMyMsg {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
  }
  .myMsg {
    display: inline-block;
    background-color: #1aad1a;
    position: absolute;
    right: 10px;
    top: 0;
    border-radius: 10px;
    color: #ffffff;
    padding: 10px;
    margin: 10px 0px;
    text-align: left;
  }
</style>
