<template>
  <div class="classWidth">
    <div class="regDetailMr">
      <div>
        <div>
          <el-steps :space="200" :active="active" align-center>
            <el-step title="填写主体信息"></el-step>
            <el-step title="填写店铺信息"></el-step>
            <el-step title="资质审核"></el-step>
            <el-step title="账户验证"></el-step>
          </el-steps>
        </div>
        <div>
          <el-button type="primary" @click="changBack">上一步</el-button>
          <el-button type="primary" @click="changeNext">下一步</el-button>
        </div>
      </div>
<!--      企业主体信息填写-->
      <div>
<!--        <stepOne v-if="active==0"></stepOne>-->
<!--        <stepTwo></stepTwo>-->
<!--        <individualityStepOne></individualityStepOne>-->
<!--        <myselfStepOne></myselfStepOne>-->
        <stepThree></stepThree>
      </div>
    </div>
  </div>
</template>
<script>
import stepOne from "@/views/regContent/components/stepOne.vue"
import stepTwo from "@/views/regContent/components/stepTwo.vue"
import individualityStepOne from "@/views/regContent/components/individualityStepOne.vue";
import myselfStepOne from "@/views/regContent/components/myselfStepOne.vue";
import stepThree from "@/views/regContent/components/stepThree.vue"
export default {
  components: {
    stepOne,
    stepTwo,
    individualityStepOne,
    myselfStepOne,
    stepThree
  },
  data(){
    return{
      active:0,


    }
  },
  methods:{
    changeNext() {
      if (this.active++ > 2) this.active = 0;
    },
    changBack(){
      if (this.active-- <= 0) this.active = 0;
    },

  },
  mounted() {

  }
}
</script>

<style scoped>
@import "../../../public/css/reg.css";
</style>