<template>
  <div class="result-wrapper" v-if="list != ''">
    <div class="song" v-for="(item, index) in list" :key="index" @click="liClick(item.id)" @dblclick="getCom(item.id)">
      <div class="name">
        <span class="iconfont icon-play"></span>
        {{item.name}}
        <span class="iconfont icon-editmedia" v-if="item.mvid != 0" @click.stop="getMv(item.mvid)"></span>
      </div>
      <div class="singer">{{item.artists|filterName}}</div>
      <div class="album">《{{item.album.name}}》</div>
      <div class="time">{{item.duration|filterTime}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      timeIr:''
    };
  },
  methods: {
    getSong() {
      let _songId = this.$route.query.id;
      this.$axios({
        url: "/search",
        params: {
          keywords: _songId,
          xxx: Math.random() * 999
        }
      }).then(res => {
        // window.console.log(res);
        this.list = res.data.result.songs;
      });
    },
    getMv(mvid){
            this.$router.push('/mv?id='+mvid)
    },
    getCom(comId){
        clearTimeout(this.timeIr)
        this.$router.push('/comment?id='+comId)
    },
    liClick(playId){
        clearTimeout(this.timeIr)
        this.timeIr = setTimeout(()=>{
            this.$router.push('/player?id='+playId)
        },300)
    }
  },
  created() {
      this.getSong();
  },
  filters: {
    filterName(arr) {
      return arr
        .map(item => {
          return item.name;
        })
        .join(" | ");
    },
    filterTime(num) {
      let _m = "0000" + Math.floor(num / 1000 / 60);
      let _s = "0000" + Math.floor((num / 1000) % 60);
      return _m.slice(-2) + ":" + _s.slice(-2);
    }
  },
  watch: {
    "$route.query.id"() {
      this.getSong();
    }
  }
};
</script>

<style>
.song {
  color: rgba(0, 0, 0, 0.87) !important;
  font-style: 700;
  opacity: 0.6;
}
.result-wrapper .song {
  background-color: white;
}
.result-wrapper .song:hover {
  background-color: grey;
  cursor: pointer;
}
.musicPlay {
  position: fixed;
  top: 50px;
  right: 50px;
  width: 200px;
  display: block;
}
</style>