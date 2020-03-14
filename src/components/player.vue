<template>
   <div class="player">
    <div class="left">
      <img class='disc' src="../assets/img/disc.png" alt="">
      <img class='cover' src="../assets/img/cover.png" alt="">
    </div>
    <div class="right" v-if="songData != ''">
      <div class="title"><img src="../assets/img/tag.png" alt=""><span>{{songData.name}}</span> </div>
      <div class="singer">歌手: <span>{{songData.ar | filterName}}</span></div>
      <div class="album">所属专辑: <span>{{songData.al.name}}</span></div>
      <audio class='audio' controls :src="urlData.url"></audio>
      <ul class='lyric-container'>
        <li class='lyric' v-for="(item, index) in songRic" :key="index">{{item.split(']')[item.split(']').length-1]}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            urlData:'',
            songData:'',
            songRic:''
        }
    },
    created() {
        let _playId = this.$route.query.id;
        // 获取歌曲信息
        this.$axios({
            url:'/song/url',
            params:{
                id:_playId,
                xxx:Math.random()*999
            }
        }).then(res=>{
            // window.console.log(res)
            this.urlData = res.data.data[0];
        });
        // 获取歌曲详细信息
        this.$axios({
            url:'/song/detail',
            params:{
                ids:_playId,
                xxx:Math.random()*999
            }
        }).then(res=>{
            // window.console.log(res)
            this.songData = res.data.songs[0];
        });

        // 获取歌词
        this.$axios({
            url:'/lyric',
            params:{
                id:_playId,
                xxx:Math.random()*999
            }
        }).then(res=>{
            // window.console.log(res);
            if (res.data.lrc != null ){
                this.songRic = res.data.lrc.lyric.split("\n");
            }
        })
    },
    filters:{
        filterName(arr){
            return arr.map(item=>{
                return item.name
            }).join(' | ')
        }
    }
}
</script>

<style>
.lyric {
  color: blanchedalmond;
  font-size: 16px !important;
}
</style>