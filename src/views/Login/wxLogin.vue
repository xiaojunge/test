<template>
  <div class="wxLoginWidth">
<!--    微信登录-->
    <div class="wxLoginBg">
      <template v-if="loginShow">
        <div class='wxLoginDiv1'>
          <el-tag size="small">切换登录</el-tag>
          <img src="/images/phoneLogin.png" @click="changeLogin"/>
        </div>
        <div class="loginWxCenter">
          <p>扫码登录</p>
          <img src="/images/anzhuoCode.png"/>
        </div>
      </template>
      <!--    手机号登录-->
      <template v-if="!loginShow">
        <div class="phoneLoginPad">
          <div class='wxLoginDiv1'>
            <img src="/images/wxLogin.png" @click="changeLogin"/>
          </div>
          <p class="switchReg">
            <span @click="changeReg(1)" >手机号登录</span>
            |
            <span @click="changeReg(2)" >注册登录</span>
          </p>
          <p>未注册的手机号登录成功后将自动注册</p>
          <div>
            <el-input class="phoneInput" v-model="phoneValue" placeholder="请输入手机号"></el-input>
            <el-input class="phoneInput" v-model="phoneCode" placeholder="请输入验证码">
              <el-button slot="append" >发送验证码</el-button>
            </el-input>
            <el-button class="phoneBtn" type="primary">登录</el-button>
          </div>
        </div>
      </template>
    </div>

  </div>
</template>
<script>
export default {
  data(){
    return{
      phoneValue:"",
      phoneCode:'',
      loginShow:false,

    }
  },
  methods:{
    changeLogin(){
      this.loginShow=!this.loginShow
    },
    changeReg(index){
      if(index==2){
        this.$router.push('/reg')
      }
    }
  }
}
</script>

<style scoped>
@import "../../../public/css/login.css";
</style>