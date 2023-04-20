<template>
  <div :class="path=='wxLogin'?'wxLoginBackgroundImg': 'imitateBg'" >
    <my-header></my-header>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  watch:{
    "$route":"getPath",
  },
  data(){
    return{
      path:''
    }
  },
  methods:{
    getPath(){
      this.path=this.$route.name
    },
  }
}
</script>

<style>
.imitateBg{
  background: url(../public/images/indexg.png) no-repeat;
  min-height: 1000px;
  background-size: 100% 100%;
}
.wxLoginBackgroundImg{
  background: url(../public/images/wxLoginBg.png) no-repeat;
  min-height: 1000px;
  background-size: 100% 100%;
}
*{
  margin: 0;
  padding: 0;
}
body,html{
  margin: 0;
  padding: 0;
}
.classWidth{
  width: 1300px;
  margin: 0 auto;
}

</style>
