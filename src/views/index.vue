<template>
  <div >
    <div class="indexNavgation">
<!--      左侧边栏-->
      <div>
        <Navigation></Navigation>
      </div>
<!--      右侧内容-->
      <div>

      </div>
    </div>
  </div>
</template>
<script>
import Navigation from '../components/Navigation.vue'
export default {
  name:'myINdex',
  components: {
    Navigation
  },
  data(){
    return{
    }
  }
}
</script>

<style scoped>
  @import "../../public/css/index.css";
</style>

