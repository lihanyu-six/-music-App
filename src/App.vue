<template>
  <div id="player">
    <h2 class="title">牧宇音乐</h2>
    <div class="search" @keyup.13="search">
      <input type="text" v-model="iptVal" />
      <button @click="search">
        <span class="iconfont icon-search"></span>
      </button>
    </div>
    <div class="tab-wrapper">
      <!-- 对应的内容区域 -->
      <div class="tab-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iptVal: "陈奕迅"
    };
  },
  methods: {
    search() {
      if (this.iptVal.trim() != "") {
        this.$router.push("/songs?id=" + this.iptVal);
      }else{
        alert('不能为空哦!')
      }
    }
  }
};
</script>

<style>
@import url("./assets/css/iconfont.css");
@import url("./assets/css/index.css");
body {
  background: url("./assets/img/timg.jpg") no-repeat center;
  background-size: 100% 100%;
  background-attachment: fixed;
}
</style>