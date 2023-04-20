<template>
  <div class="classWidth">
    <div class="regstepOneDetailMr">
      <!--      个人主体信息填写-->
      <div>
        <!--        营业证件信息-->
        <div class="documentInfo tradeInfoBottom">
          <p>
            <span class="documentInfoIcon"></span>
            个人信息
          </p>
          <el-form :model="ruleForm"  ref="ruleForm" label-width="200px" class="demo-ruleForm">
            <el-form-item label="身份证照片" prop="licenseImg" >
              <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false">
              </el-upload>
            </el-form-item>
          </el-form>
        </div>
<!--        -->
        <div class="documentInfo ">
          <p>
            <span class="documentInfoIcon"></span>
            免于市场主体登记声明
          </p>
          <div class="selectActivity">
            <p>是否属于零星小额交易活动</p>
            <template>
              <el-radio v-model="radio" label="1">属于零星小额交易活动,依法不需要办理市场主体登记</el-radio>
              <el-radio v-model="radio" label="2">不属于</el-radio>
            </template>
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
      radio: '1',
      ruleForm: {

      },

    }
  },
  methods:{
  },
  mounted() {
  }
}
</script>

<style scoped>
@import "../../../../public/css/reg.css";
</style>