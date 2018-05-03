import Vue from 'vue'
import Router from 'vue-router'
import good from "../components/mods/good.vue"
import ratings from "../components/mods/ratings.vue"
import seller from "../components/mods/seller.vue"


Vue.use(Router)

export default new Router({
  routes: [
  	{ path: '/', redirect: '/goods' },
  	{path:'/goods', component: good},
  	{path:'/ratings', component: ratings},
  	{path:'/seller', component: seller},
  	{path: '/*',redirect: '/'}
  ]
})
