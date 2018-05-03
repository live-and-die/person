<template>
	<div class="goods">
		<div class="menu-wrapper" ref="menuWrapper">
			<ul>
				<li class="menu-item"  v-for="item in datas.goods">
					<span  class="text" >
						<span v-show="item.type>0" class="iconMap" :class="icon[item.type]"></span>
							{{item.name}}
					</span>
				</li>
			</ul>
		</div>
		<div class="foods-wrapper" ref="foodsWarapper">
			<ul>
			 <li v-for="item in datas.goods" class="food-list food-list-hook">
				<h1 class="title">{{item.name}}</h1>
				  <ul>
					<li v-for="food in item.foods" class="food-item" @click="xiangqingye(food)"> 
						<div class="icon">
							<img :src="food.icon"  width="57" height="57" alt="">
						</div>
						<div class="content">
							<h2 class="name">{{food.name}}</h2>
							<p class="description">{{food.description}}</p>
							<div class="sell-info">
								<span class="sellCount">月售{{food.sellCount}}份</span>
								<span class="rating">好评率{{food.rating}}</span>
								<div class="price">
									<span class="newPrice">${{food.price}}</span>
								</div>
								<div class="cartcontrol-wrapper">
									<cartcontrol :food="food"></cartcontrol>	
								</div>
							</div>
						</div>
					</li>
				  </ul>	
			 </li>
			</ul>
		</div>
		<shopcart :food="food" :deliverPrice="datas.seller.deliveryPrice" :minprice="datas.seller.minPrice"></shopcart>	
		<footDetail :foodDetails="foodDetails" ref="footDetail"></footDetail>
		
	</div>
</template>
<script>
    import Scroll from "better-scroll"
    import shopcart from "./shopcart.vue"
    import cartcontrol from "./cartcontrol.vue"
    import footDetail from "./footDetail.vue"
	export default{
		
		props:['datas'],
		data () {
			return{
				goods : this.datas.goods,
				foodDetails : {},
				icon:["decrease","discount","special","invoice","guarantee"],
			}
		},
		mounted () {
			this.$nextTick(() =>{
				// this.scroll()
			})
		},
		methods : {
			/* eslint-disable no-new */
			scroll () {
				this.sc=new Scroll(this.$refs['foodsWarapper'],{click:true})
				this.px=new Scroll(this.$refs['menuWrapper'],{click:true})
			},
			xiangqingye (value) {
				//父组件获取子组件的数据的使用方法
				this.$refs['footDetail'].foodshow()
				this.foodDetails = value

			}
		},
		computed: {
			food () {
				let arr =[]
				this.datas.goods.forEach(goods=>{
					goods.foods.forEach(foods=>{
						if (foods.count > 0){
							arr.push(foods)
						}
					})
				})
				return arr
			}
		},
		// activated () {
  //   		this.sc.refresh()
  //   		this.px.refresh()
  //   	},
		components:{
			shopcart,
			cartcontrol,
			footDetail
		}
		
	}
</script>