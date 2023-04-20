<template>
  <div class="navTabPOsiton">
    <div class="navTabFlex" >
      <div v-for="(item,index) in navTabList" :key="index"  class="navTabFlexTitle">
        <div class="navTabName" :class="navTypeShow==index?'navTypeActive':''" @click="changeTabNav(index,item)">
          <img v-if="!item.show" :src="item.img"/>
          <img v-if="item.show" :src="item.active">
          <span>{{item.name}}</span>
        </div>
        <div  v-if="item.show" class="littleNavgation">
          <p class="littleNavgationP" v-for="(item1,index1) in item.children" :key="index1"   :class="navTypeChildernShow==index1?'navchirdenTypeActive':''" @click="changeTabNavChildren(index1)"> {{ item1.name }}</p>
        </div>
      </div>
    </div>
    <p class="navTabBorder"></p>
  </div>
</template>
<script>
export default {
  name:'myNavgation',
  data(){
    return{
      navTypeShow:0,
      navTypeChildernShow:0,
      navTabList:[
        {id:1,img:'/images/shopIcon.svg',name:'店铺',active:'/images/shopActive.webp',show:false,children:[
            {id:1,name:'店铺运营'},
            {id:2,name:'店铺信息'},
            {id:3,name:'店铺设置'},
            {id:4,name:'经营账号管理'},
            {id:5,name:'资质中心'},
            {id:6,name:'子账号管理'},
          ]},
        {id:2,img:'/images/commodityIcon.svg',name:'商品',active:'/images/commodityActive.webp',show:false,children:[
            {id:1,name:'商品创建'},
            {id:2,name:'商品管理'},
          ]},
        {id:3,img:'/images/orderIcon.svg',name:'订单',active:'/images/orderActive.webp',show:false,children:[
            {id:1,name:'订单管理'},
          ]},
        {id:4,img:'/images/salesIcon.svg',name:'售后',active:'/images/salesActive.webp',show:false,children:[
            {id:1,name:'售后管理'},
          ]},
        {id:5,img:'/images/contentIcon.svg',name:'内容',active:'/images/contentActive.webp',},
      ]
    }
  },
  methods:{
    changeTabNav(index,item){
      this.navTypeShow=index;
      this.navTabList.forEach((items,indexss)=>{
        if(item.show==false&&indexss==index){
          item.show=true;
        }else{
          items.show=false;
        }
      })
    },
    changeTabNavChildren(index){

      this.navTypeChildernShow=index;
      console.log(this.navTypeChildernShow)
    }
  },
  mounted() {
    this.navTabList[0].show=true
  }
}
</script>

<style scoped>
</style>