<template>
  <div class="helloHeader">
    <div class="headerpositon">
      <div class="headerFlex">
        <img src="/images/exiaozhiLogo.png"/>
        <div class="headerComyImg">
          <img src="/images/exiaozhiLogo.png" />
          <div>
            <div class="corporation">
              <span >智捷电商</span>
              <span class="headerUp"></span>
            </div>
            <!--      悬浮框-->
            <div class="businessWindow">
              <div class="businessFlex">
                <img src="/images/exiaozhiLogo.png">
                <div>
                  <div>智捷电商</div>
                  <div>ID:15558765112358</div>
                </div>
              </div>
              <div class="countinfo">
                <p class="countInfoFont">个人账号信息</p>
                <div>
                  <span class="countInfowd">昵称</span>
                  <span class="countColor">张胜男</span>
                  <span class="countSun">子账号</span>
                </div>
                <div>
                  <span class="countInfowd">手机号</span>
                  <span class="countColor">15165223365</span>
                </div>
              </div>
              <div class="loginOut">退出</div>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return{
      path:''
    }
  },
  methods:{
    getPath(){
      this.path=this.$route.name
    },
  },
  mounted() {
  },
  watch:{
    "$route":"getPath",
  },
}
</script>

<style scoped>
  @import "../../public/css/header.css";
</style>

