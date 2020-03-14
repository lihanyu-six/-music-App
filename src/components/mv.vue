<template>
   <div class="video" v-if="Mvdata!=''">
    <div class="title-wrapper">
      <span class='tag'>MV</span>
      <span class='title'>{{Mvdata.name}}</span>
      <span class='artist'>{{Mvdata.artists | filterName}}</span>
    </div>
    <video :src="Mvdata.brs | getchaoQin" controls></video>
  </div>
</template>

<script>
export default {
    data() {
        return {
            Mvdata:''
        }
    },
    created() {
        let _mvId = this.$route.query.id;
        this.$axios({
            url:'https://autumnfish.cn/mv/detail',
            params:{
                mvid:_mvId,
                xxx:Math.random()*999
            }
        }).then(res=>{
            window.console.log(res)
             this.Mvdata = res.data.data
        })
    },
    filters:{
        filterName(arr){
            return arr.map(item=>{
                return item.name
            }).join(' | ')
        },
        getchaoQin(obj){
            let _num = 0;
             for(let key in obj){
                 if(Number(key) >_num){
                     _num = Number(key)
                 }
             }
             return obj[_num]
        }
    }
}
</script>

<style>

</style>