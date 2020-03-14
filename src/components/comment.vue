<template>
  <div class="comment-wrapper">
    <div class="items" v-if="list != ''">
      <div class="item" v-for="(item, index) in list" :key="index">
        <div class="left">
          <img :src="item.user.avatarUrl" alt="">
        </div>
        <div class="right">
          <div class="top">
            <span class='user'>{{item.user.nickname}}</span> :
            <span class='content'>{{item.content}}</span>
          </div>
          <div class="bottom">
            <div class="time">{{item.time | getTime}}</div>
            <div class="like-wrapper">
                <span>👍</span>{{(item.likedCount)}}
            </div>
          </div>
        </div>
      </div>
     
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
    data() {
        return {
            list:[]
        }
    },
    created() {
        let _comId = this.$route.query.id;
        this.$axios({
            url:'/comment/music',
            params:{
                id:_comId,
                xxx:Math.random()*999
            }
        }).then(res=>{
            window.console.log(res)
            this.list = res.data.comments
        })
    },
    filters:{
        getTime(num){
            moment(num).format('YYYY-MM-DD HH-mm-ss')
        }
    }
}
</script>

<style>
.comment-wrapper .items .item .right .top .content {
  color: skyblue !important;
  font-size: 14px;
  opacity: 1;
}
</style>