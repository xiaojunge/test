<template>
  <div class="classWidth">
    <div class="regstepOneDetailMr">
      <!--      企业主体信息填写-->
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
            <el-form-item label="公司名称" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="统一社会信用代码" prop="creditCode">
              <el-input v-model="ruleForm.creditCode"></el-input>
            </el-form-item>
            <el-form-item label="主体类型" prop="mainType">
              <span>企业</span>
            </el-form-item>
            <el-form-item label="营业期限" prop="termTime">
              <el-date-picker
                  v-model="ruleForm.termTime"
                  type="month"
                  placeholder="选择月">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="营业地址" prop="address">
              <el-cascader
                  v-model="ruleForm.cityValue"
                  :options="cityList"
              ></el-cascader>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitFormruleForm('ruleForm')">立即创建</el-button>
            </el-form-item>
          </el-form>
        </div>
        <!--        法定代表人信息-->
        <div class="documentInfo">
          <p>
            <span class="documentInfoIcon"></span>
            法定代表人信息
          </p>
          <el-form :model="ruleFormlegal" :rules="rules" ref="ruleFormlegal" label-width="200px" class="demo-ruleForm">
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
            <el-form-item label="身份证照片" prop="identityImg" >
              <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false">
              </el-upload>
            </el-form-item>
            <el-form-item label="法定代表人姓名" prop="legalName">
              <el-input v-model="ruleFormlegal.legalName"></el-input>
            </el-form-item>
            <el-form-item label="法定代表人身份证号码" prop="legalCode">
              <el-input v-model="ruleFormlegal.legalCode"></el-input>
            </el-form-item>
            <el-form-item label="法定代表人身份证开始日期" prop="legalCode">
              <el-date-picker
                  v-model="ruleFormlegal.identityStartTime"
                  type="date"
                  placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="法定代表人身份证截止日期" prop="legalCode">
              <el-date-picker
                  v-model="ruleFormlegal.identityEndTime"
                  type="date"
                  placeholder="选择日期">
              </el-date-picker>
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
import {getCityList} from "@/utils/city";
export default {
  data(){
    return{
      ruleForm: {
        name: '',
        creditCode:'',
        termTime:'',
        cityValue: [],

      },
      ruleFormlegal:{
        identityValue:'',
        legalName:'',
        legalCode:'',
        identityStartTime:'',
        identityEndTime:''
      },
      rules: {
        name: [
          { required: true, message: '请输入公司名称', trigger: 'blur' },
          { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
        ],
        creditCode: [
          { required: true, message: '请输入公司名称', trigger: 'blur' },
          { min: 18, max: 18, message: '长度在 18 个字符', trigger: 'blur' }
        ],
        termTime: [
          { required: true, message: '请选择营业期限', trigger: 'change' }
        ],
        address:[
          { required: true, message: '请选择营业地址', trigger: 'change' }
        ],
        identityValue:[
          { required: true, message: '法定代表人身份归属地', trigger: 'change' }
        ],
        legalCode: [
          { required: true, message: '请输入法定代表人身份证号码', trigger: 'blur' },
          { min: 18, max: 18, message: '长度在 18 个字符', trigger: 'blur' }
        ],
        legalName:[
          { required: true, message: '请输入法定代表人姓名', trigger: 'blur' },
          { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
        ],
        identityStartTime: [
          { required: true, message: '请选择法定代表人身份证开始日期', trigger: 'change' }
        ],
        identityEndTime: [
          { required: true, message: '请选择法定代表人身份证截止日期', trigger: 'change' }
        ],
      },

      cityList:[],
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
    let cityArr=getCityList();
    cityArr.forEach(item=>{
      item.label=item.name;
      item.value=item.name;
      item.children=item.city
      item.children.forEach(item1=>{
        item1.label=item1.name;
        item1.value=item1.name;
      })
    })
    this.cityList=cityArr;
  }
}
</script>

<style scoped>
@import "../../../../public/css/reg.css";
</style>