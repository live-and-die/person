<template>
	<transition name="move">
		<div class="detailWrapper" v-show="showDetail" ref="detailWrapper">
		<div class="foodDetail">
			<div class="back" @click="showDetail=!showDetail">
				<i class="icon-arrow_lift"></i>
			</div>
			<img :src="foodDetails.image" height="425" width="100%" alt="">
			<div class="info">
				<div class="title">{{foodDetails.name}}</div>
				<div class="desc">
					<span>月售{{foodDetails.sellCount}}</span>
					<span>好评率{{foodDetails.rating}}%</span>
				</div>
				<div class="price">
					${{foodDetails.price}}
				</div>
				<transition name="fade">
					<div class="shopCart" @click = "add($event)" v-show="!foodDetails.count">
						<div class="text">加入购物车</div>
					</div>
				</transition>
				<cartcontrol ref="cartcontrol" :food="foodDetails"></cartcontrol>
			</div>
			<div class="divider"></div>
			<div class="desc">
				<div class="title">商品介绍</div>
				<div class="content">{{foodDetails.info}}</div>
			</div>
			<div class="divider"></div>
			<div class="evaluation">
				<div class="title">商品评价</div>
				<div class="classify">
					<span class="item" :class="{'active':item.active,'bad':index===2,'badActive':index===2&&item.active}" v-for="(item,index) in classify" @click="classifyclick(item)">{{item.name}}{{item.count}}</span>
				</div>
				<div class="switch" @click="flag = !flag">
					<span class="icon-check_circle" :class="{'on':flag}"></span>
					<span class="text">只看有内容的评价</span>
				</div>
				<div class="evel-list">
					<ul>
						<li class="evel" v-for="item in commontsss">
							<div class="userInfo">
								<div class="time">{{item.rateTime}}</div>
								<div class="user">
									<span>{{item.rateTime}}</span>
									<img :src="item.avatar" width="12" height="12" alt="">
								</div>
							</div>
							<div class="content">
			                  <span class="icon" :class="item.rateType?'icon-thumb_down':'icon-thumb_up'"></span>
			                  <span class="text">{{item.text}}</span>
			                </div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	</transition>
</template>
<script>
	import Scroll from 'better-scroll'
    import cartcontrol from './cartcontrol.vue'
	export default {
		props:['foodDetails'],
		data () {
			return{
				showDetail:false,
				classify : [
				{name:'全部',count:0, commont: [],active:true},
				{name:'好评',count:0, commont: [],active:false},
				{name:'吐槽',count:0, commont: [],active:false}],
				commontss:[],
				flag:true
			}
		},
		mounted () {
    	},
		methods : {
			add (event) {
				this.$refs["cartcontrol"].addCard(event)
			},
			foodshow () {
				this.showDetail = true
				this.$nextTick(()=>{
					this.foodDetails.ratings.forEach((val)=>{
						this.classify[0].count++
						this.classify[0].commont.push(val)
						if(val.rateType){
							this.classify[2].count++
							this.classify[2].commont.push(val)
						}else{
							this.classify[1].count++
							this.classify[1].commont.push(val)
						}
					})
				})
				this.$nextTick(()=>{
					if(!this.cs){
						this.cs = new Scroll(this.$refs['detailWrapper'],{
							click: true
						})
					}else{
						this.cs.refresh()
					}
				})
				this.commontss=this.classify[0].commont
			},
			classifyclick (item) {
				this.commontss=item.commont
				this.classify.forEach(val=>{
					val.active = false
				})
				item.active = true
			},
			updatecs () {

				this.$nextTick(()=>{
					this.cs.refresh()
				})
			}
		},
		computed : {
			commontsss () {
				let arr = []
				//1,注册了一个$nextTick 2,更新完dom 3,检测到dom更新完 执行$nextTick的回调
				this.updatecs()
				//只看内容评价
				if(this.flag){
					this.commontss.forEach(val=>{
						if(val.text.length>0){
							arr.push(val)
						}
					})
					return arr
				}
				//看全部评价
				else{
					return this.commontss
				}
			}
		},
		components: {
			cartcontrol
		}
	}
	

</script>