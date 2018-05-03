<template>
	<div class="ratingsWrapper" ref='ratingsWrapper'>
		<div class="ratings-content">
			<div class="info">
				<div class="mark">
					<div class="num">{{datas.seller.score}}</div>
					<div class="text">综合评分</div>
					<div class="contrast">高于周围{{datas.seller.rankRate}}%商家</div>
				</div>
				<div class="stars">
					<div class="serviceScore">
						<span class="text">服务态度</span>
						<star :score="datas.seller.serviceScore" :size="36"></star>
						<span class="num">{{datas.seller.serviceScore}}</span>	
					</div>
					<div class="foodScore">
						<span class="text">食物评分</span>
						<star :score="datas.seller.foodScore" :size="36"></star>
						<span class="num">{{datas.seller.foodScore}}</span>	
					</div>
				</div>
			</div>
			<div class="divider"></div>
			<div class="evaluation">
				<div class="classify" >
					<span class="item" v-for="(item,index) in classify" :class="{'active':item.active,'bad':index===2,'badActive':index===2&&item.active}" @click="evel(item)">{{item.name}}
						<span class="count">{{item.count}}</span>
					</span>					
				</div>
				<div class="switch" @click='show=!show'>
					<span class="icon-check_circle" :class="{'on':show}"></span>
					<span class="text">只看内容评价</span>
				</div>
				<div class="evel-list">
					<ul>
						<li class="evel" v-for="item in commontsss">
							<div class="avatar">
								<img :src="item.avatar" alt="" height="28" width="28">
							</div>
							<div class="content">
								<div class="user">
									<span class="name">{{item.username}}</span>

									<span class="rateTime">{{item.rateTime}}</span>
								</div>
								<div class="star-wrapper">
									<star :size="24" :score="item.score"></star>
									<span class="deliveryTime">{{item.deliveryTime}}分钟送达</span>
								</div>
								<div class="text">{{item.text}}</div>
								<div class="recommend">
									<span class="icon" :class="item.rateType?'icon-thumb_down':'icon-thumb_up'"></span>
									<span class="dish" v-for="dish in item.recommend">{{dish}}</span>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import Scroll from "better-scroll"
    import star from "./star"
 	import axios from "axios"
	export default{
		props:['datas'],
		data() {
			return{
				ratings: [],
				classify : [
					{name:'全部',count:0, commont: [],active:true},
					{name:'好评',count:0, commont: [],active:false},
					{name:'吐槽',count:0, commont: [],active:false}
				],
				show:true,
				commontss: []
			}
		},
		//创建组件时，会执行mounted里面的
		mounted () {
		
			axios.get('../../../static/data.json').then(res=>{
				this.ratings = res.data.ratings
				this.commontss = res.data.ratings
				this.ratings.forEach(val=>{
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
				this.$nextTick(()=>{
					this.sc=new Scroll(this.$refs['ratingsWrapper'],{
							click: true
						})
					}					
				)				
			})
			
    	},
    	//组件有没有缓存，只要访问就会执行activated的
    	activated () {
    		console.log(2)
    	},
    	methods : {
    		evel(item) {
    			this.classify.forEach(val=>{
    				val.active=false
    			})
    			this.commontss=item.commont
    			item.active=true
    		}
    	},
    	computed: {
    		commontsss (){
    			this.$nextTick(()=>{
    				this.sc.refresh()
    			})
    			if(this.show){
    			//筛选出是否只显示有内容评价
    			let arr=[]
    			this.commontss.forEach(val=>{
    				if(val.text.length){
    					arr.push(val)
    				}
    			})
    			return arr
    		  }else{
    		  	return this.commontss
    		  }

    		}
    	},
    	components: {
    		star
    	}

	}
</script>