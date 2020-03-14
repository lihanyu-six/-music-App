import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../components/home.vue'
import songs from '../components/songs.vue'
import mv from '../components/mv.vue'
import player from '../components/player.vue'
import comment from '../components/comment.vue'

Vue.use(VueRouter)



const router = new VueRouter({
    routes:[
        {
            path:'/',
            component:home
        },
        {
            path:'*',
            component:home
        },
        {
            path:'/songs',
            component:songs
        },
        {
            path:'/mv',
            component:mv
        },
        {
            path:'/player',
            component:player
        },
        {
            path:'/comment',
            component:comment
        }
    ]
})

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}


export default router;