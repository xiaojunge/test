<template>
  <div class="regWidth">
    <div>
      <p class="regTypeTitle">请选择主体类型</p>
      <div>
        <div v-for="(item,idnex) in regType" :key="idnex">
          <div>
            <img class="regtypeImg" :src="item.img">
          </div>
          <p class="regTypeName">{{item.name}}</p>
          <p class="regTypeDetail">{{item.detail}}</p>
          <el-button type="primary" @click="goSettle">立即入驻</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      regType:[
        {id:1,img:'/images/myselfReg.png',name:'个人身份',detail:'适合无营业执照, 以个人身份开店。部分类目开放可点击【查看类目】了解'},
        {id:2,img:'/images/individuality.png',name:'个体工商户',detail:'适合有营业执照，营业执照“类型”处显示“个体工商户'},
        {id:3,img:'/images/enterprise.png',name:'企业/公司',detail:'适合有营业执照，营业执照“类型”处显示“***公司/企业/个人独资企业”等'},
      ]
    }
  },
  methods:{
    goSettle(){
      this.$router.push('/regDetails')
    }
  }
}
</script>

<style scoped>
@import "../../public/css/reg.css";
</style>