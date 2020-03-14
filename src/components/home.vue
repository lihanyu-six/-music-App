<template>
  <el-carousel :interval="5000" arrow="always" height="400px">
    <el-carousel-item v-for="(item, index) in list" :key="index">
      <h3><img :src="item.imageUrl" alt=""></h3>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
     data() {
    return {
      list:[]
    }
  },
  created() {
    this.$axios({
      url:'https://autumnfish.cn/banner',
      params:{
        xxx:Math.random()*999
      }
    }).then(res=>{
      // window.console.log(res)
      this.list = res.data.banners
    //   window.console.log(this.list)
    })
  },
}
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>