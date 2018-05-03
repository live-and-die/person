<template>
	<div class="shopCart">
		<div class="content" @click="showa">
			<div class="content-left">
				<div class="logo-wrapper">
					<div class="logo active">
						<i class="icon-shopping_cart"></i>
					</div>
					<div class="badge" v-show="totalprice>0">{{totalcount}}</div>
				</div>
				<div class="price" :class="{'active':totalprice}">${{totalprice}}</div>
				<div class="desc" v-show="totalprice<99" >另需要配送费￥{{deliverPrice}}元</div>
			</div>
			<div class="content-right" :class="{'enough':this.totalprice>=this.minprice}">
				<div class="pay">{{paydesc}}</div>
			</div>
		</div>
		<transition name="transHeight" >
		<div class="shopcart-list" v-show="show&&totalprice>0">
			<div class="list-header">
          		<h1 class="title" >购物车</h1>
          		<span class="empty" @click="empty">清空</span>
        	</div>
        	<div class="list-content" ref="listcontent">
        		<ul> 
        			<li class="food" v-for="item in food">
        				<span class="name">{{item.name}}</span>
        				<div class="price">
			              <span>${{item.price}}</span>
			            </div>
			            <div class="cartcontrol-wrapper">
			            	<cartcontrol :food="item"></cartcontrol>	
			            </div>
        			</li>
        		</ul>
        	</div>
		</div>
		</transition>
	</div>
</template>
<script>
	import cartcontrol from './cartcontrol.vue'
	import Scroll from "better-scroll"
	export default{
		props:["deliverPrice","minprice","food"],
		data () {
			return {
				show:false
			}
		},
		components: {
			cartcontrol
		},
		computed: { 
			//总金额
			totalprice () {
				let total = 0
				this.food.forEach(food=>{
					total+=food.price*food.count
				})
				return total
			},
			//总数量
			totalcount () {
				let totalnum = 0
				this.food.forEach(food=>{
					totalnum+=food.count
				})
				return totalnum
			},
			//还差多少元起送
			paydesc () {
				if (this.totalprice===0){
					return `${this.minprice}元起送`
				}else if(this.totalprice<this.minprice){
					return `还差${this.minprice-this.totalprice}元起送`
				}else{
					return `去结算`
				}
			},
		},
		methods : {
			//清空购物车
			empty () {				
				this.food.forEach(val => {
					val.count = 0
				})
			},
			showa () {
				this.show= !this.show
				//等待dom更新完之后
				this.$nextTick(()=>{
					if(!this.sc){
					this.sc = new Scroll(this.$refs['listcontent'],{click:true})
					}else{
					//强制重新计算滚动高度
					this.sc.refresh()
					}
				})
				
			}
		}
	}
</script>