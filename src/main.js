import Vue from 'vue'
import VueRouter from "vue-router"
import App from './App'
import goods from './components/goods/goods.vue'
import ratings from './components/ratings/ratings.vue'
import seller from './components/seller/seller.vue'
 
Vue.use(VueRouter)
 
// 2. 定义路由
const routes = [
  { path: '/goods',name:'goods', component: goods },
  { path: '/ratings',name:'ratings', component: ratings },
  { path: '/seller',name:'seller', component: seller }
]
 
// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})
 
// 4. 创建和挂载根实例。
const app = new Vue({
  router,render: h => h(App)
}).$mount('#app')

//初始页面  vue1.0 是router.go();  在vue1中用vue2  页面会一直刷新！！
router.push ('/goods')