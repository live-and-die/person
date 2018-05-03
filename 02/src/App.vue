<template>
  <div id="app">
    <vheader :seller='datas.seller'></vheader>
    <div class="tab">
      <div class="tab-item"><router-link to='/goods' @click="abcd">商品</router-link > </div>
      <div class="tab-item"><router-link to='/ratings'>评论</router-link > </div>
      <div class="tab-item"><router-link to='/seller'>商家</router-link > </div>
    </div>
    <!-- 缓存组件的标签，让再次访问该组件不用重新加载 -->
    <keep-alive> 
    <router-view :datas='datas' ref='abc'></router-view>
    </keep-alive>
  </div>
</template>

<script>
import vheader from "./components/mods/header.vue"
import axios from "axios"
export default {
  data(){
    return{
      datas:{
        //商品的信息
        seller:{},
        //商品数据
        goods:[],
        //评论
        ratings:[]
      }
    }
  },
  mounted () {
    axios.get("/static/data.json").then(res=>{
      this.datas.seller=res.data.seller
      this.datas.goods=res.data.goods
      this.datas.ratings=res.data.ratings
      this.$nextTick(()=>{
        this.$refs.abc.scroll()
      })

    })
  },
  methods: {
    
  },
  components : {
    vheader
  }
}
</script>

<style scoped>
/*scoped代表当前模板和其所有的子模板都有这些应用*/
.tab .tab-item .router-link-active{
  color:red;
}

</style>
