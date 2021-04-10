// 引入
import Vue from 'vue'
import Router from 'vue-router'

// 路由的懒加载
const Address = () => import('views/address/Address')
const Chat = () => import('views/chat/Chat')
const Find = () => import('views/find/Find')
const Profile = () => import('views/profile/Profile')
const chatWindow = () => import('views/chatwindow/chatWindow')

// 安装插件
Vue.use(Router)
// 配置相关路由
const routes = [
  {
    path: '',
    // redirect重定向
    redirect: '/Chat'
  },
  {
    path:'/Chat',
    component:Chat,
    meta: {
      title: '微信'
    },
  },
  {
    path:'/chatWindow/:id',
    component:chatWindow,
    meta: {
      title:'聊天窗口'
    }
  },
  {
    path:'/Address',
    component: Address,
    meta: {
      title: '通讯录'
    },
  },
  {
    path:'/Find',
    component: Find,
    meta: {
      title: '发现'
    },
  },
  {
    path: '/Profile',
    component: Profile,
    meta: {
      title: '我的'
    },
  }
]
// 创建路由对象
const router = new Router({
  routes,
  mode: 'history'
})

// 导出router路由对象
export default router
