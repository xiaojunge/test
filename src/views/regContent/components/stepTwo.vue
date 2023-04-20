<template>
  <div class="stepTwoBg">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane  v-for="(item,index) in stepTwoTab" :key="index" :label="item.name" ></el-tab-pane>
    </el-tabs>
    <div>
      <div class="documentInfo" v-if="activeName==0">
        <p>
          <span class="documentInfoIcon"></span>
          店铺类型
        </p>
        <div class="stepShopType">
          <p>
            <span>店铺ID</span>
            <span>5852233</span>
          </p>
          <p>
            <span>店铺类型</span>
            <span>企业店</span>
          </p>
        </div>
      </div>
      <!--        经营类目-->
      <div class="documentInfo" v-if="activeName==1">
        <p>
          <span class="documentInfoIcon"></span>
          经营类目
        </p>
        <div class="stepShopType">
          <p>
            <span>经营类目</span>
            <el-button type="primary" icon="el-icon-plus" @click="openCategory">添加经营类目</el-button>
          </p>
        </div>
      </div>
<!--      店铺基本信息-->
      <div class="documentInfo" v-if="activeName==2">
        <p>
          <span class="documentInfoIcon"></span>
          店铺基本信息
        </p>
        <div class="stepShopType">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="200px" class="demo-ruleForm">
            <el-form-item label="店铺名称" prop="shopName">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="店铺logo" prop="shopLogo" >
              <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false">
              </el-upload>
            </el-form-item>
          </el-form>
        </div>
      </div>
<!--      店铺管理人信息-->
      <div class="documentInfo" v-if="activeName==3">
        <p>
          <span class="documentInfoIcon"></span>
          店铺管理人信息
        </p>
        <div class="stepShopType">
          <el-form :model="ruleFormManage" :rules="rules" ref="ruleFormManage" label-width="200px" class="demo-ruleForm">
            <el-form-item label="管理人姓名" prop="manageName">
              <el-input v-model="ruleFormManage.name"></el-input>
            </el-form-item>
            <el-form-item label="管理人手机号" prop="managePhone">
              <el-input v-model="ruleFormManage.phone"></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="manageCode">
              <div class="manageCodeFlex">
                <el-input v-model="ruleFormManage.code"></el-input>
                <el-button  type="primary">发送验证码</el-button>
              </div>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <el-dialog  title="经营类目选择" :visible.sync="dialogTableVisible">
      <div >
        <el-cascader
            class="categoryWidth"
            placeholder="试试搜索：指南"
            :options="options"
            :props="{ multiple: true }"
            filterable></el-cascader>
        <div class="afrrimAategory">
          <el-button type="primary">确认</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  components: {
  },
  data(){
    return{
      dialogTableVisible: false,
      activeName: '2',
      stepTwoTab:[
        {id:1,name:'店铺类型'},
        {id:2,name:'经营类目'},
        {id:3,name:'店铺基本信息'},
        {id:4,name:'管理人信息'},
      ],
      ruleForm:{
        name: '',
      },
      ruleFormManage:{
        name:'',
        phone:'',
        code:""
      },
      rules: {
        shopName: [
          { required: true, message: '请输入店铺名称', trigger: 'blur' },
          { min: 2, max: 60, message: '长度在 2 到 60 个字符', trigger: 'blur' }
        ],
        manageName:[
          { required: true, message: '请输入管理人姓名', trigger: 'blur' },
          { min: 2, max: 60, message: '长度在 2 到 60 个字符', trigger: 'blur' }
        ],
        managePhone:[
          { required: true, message: '请输入管理人手机号', trigger: 'blur' },
          { min: 11, max:11, message: '长度在 11 个字符', trigger: 'blur' }
        ],
        manageCode:[
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { min: 0, max:4, message: '长度在 0 到 4 个字符', trigger: 'blur' }
        ]
      },
      options: [{
        value: 'zhinan',
        label: '指南',
        children: [{
          value: 'shejiyuanze',
          label: '设计原则',
          children: [{
            value: 'yizhi',
            label: '一致'
          }, {
            value: 'fankui',
            label: '反馈'
          }, {
            value: 'xiaolv',
            label: '效率'
          }, {
            value: 'kekong',
            label: '可控'
          }]
        }, {
          value: 'daohang',
          label: '导航',
          children: [{
            value: 'cexiangdaohang',
            label: '侧向导航'
          }, {
            value: 'dingbudaohang',
            label: '顶部导航'
          }]
        }]
      }, {
        value: 'zujian',
        label: '组件',
        children: [{
          value: 'basic',
          label: 'Basic',
          children: [{
            value: 'layout',
            label: 'Layout 布局'
          }, {
            value: 'color',
            label: 'Color 色彩'
          }, {
            value: 'typography',
            label: 'Typography 字体'
          }, {
            value: 'icon',
            label: 'Icon 图标'
          }, {
            value: 'button',
            label: 'Button 按钮'
          }]
        },]
      },]
    }
  },
  methods:{
    // 打开类目
    openCategory(){
      this.dialogTableVisible=true
    },
    handleClick(event) {
      this.activeName=event.index;
    }
  },
  mounted() {

  }
}
</script>

<style scoped>
@import "../../../../public/css/reg.css";
</style>