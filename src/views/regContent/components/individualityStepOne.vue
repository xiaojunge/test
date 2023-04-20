<template>
  <div class="classWidth">
    <div class="regstepOneDetailMr">
      <!--      个体工商户主体信息填写-->
      <div>
        <!--        营业证件信息-->
        <div class="documentInfo tradeInfoBottom">
          <p>
            <span class="documentInfoIcon"></span>
            营业证件信息
          </p>
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="200px" class="demo-ruleForm">
            <el-form-item label="营业执照照片" prop="licenseImg" >
              <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false">
              </el-upload>
            </el-form-item>
          </el-form>
        </div>
        <!--        法定代表人信息-->
        <div class="documentInfo">
          <p>
            <span class="documentInfoIcon"></span>
            经营者信息
          </p>
          <el-form :model="ruleFormlegal" :rules="rules" ref="ruleFormlegal" label-width="200px" class="demo-ruleForm">
            <el-form-item label="身份证照片" prop="identityImg" >
              <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false">
              </el-upload>
            </el-form-item>
            <el-form-item label="法定代表人身份归属地" prop="identityValue">
              <el-select v-model="ruleFormlegal.identityValue" placeholder="请选择">
                <el-option
                    v-for="item in identityArr"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleFormlegal')">立即创建</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      ruleForm: {

      },
      ruleFormlegal:{
        identityValue:'',
      },
      rules: {
        identityValue:[
          { required: true, message: '法定代表人身份归属地', trigger: 'change' }
        ],

      },

      identityArr: [{
        value: '选项1',
        label: '中国大陆'
      }, {
        value: '选项2',
        label: '中国香港'
      }, {
        value: '选项3',
        label: '中国澳门'
      }, {
        value: '选项4',
        label: '中国台湾'
      }, {
        value: '选项5',
        label: '海外'
      }],

    }
  },
  methods:{
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    submitFormruleForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  },
  mounted() {
  }
}
</script>

<style scoped>
@import "../../../../public/css/reg.css";
</style>