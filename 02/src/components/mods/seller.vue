<template>
	<div class="seller-wrapper" ref="sellerWrapper">
		<div class="seller-content">
			<div class="info">
				<div class="title">
					<div class="text">
						{{datas.seller.name}}
					</div>
					<div class="star-wrapper">
						<star :size="36" :score="datas.seller.score"></star>
						<div class="rate-count">({{datas.seller.ratingCount}})</div>
						<div class="sell-count">月售{{seller.sellCount}}单</div>
					</div>
					<div class="collect" @click="show=!show">
						<span class="icon-favorite" :class="{'active':show}"></span>
						<span class="text">{{show?'收藏':'已收藏'}}</span>
					</div>
					<div class="remark">
						<div class="block">
							<h2>起送价</h2>
							<div class="content">
								<span class="num">{{datas.seller.minPrice}}</span>元
							</div>
						</div>
						<div class="block">
				            <h2>商家配送</h2>
				            <div class="content">
				              <span class="num">{{datas.seller.deliveryPrice}}</span>元
				            </div>
				        </div>
				        <div class="block">
				            <h2>平均配送时间</h2>
				            <div class="content">
				              <span class="num">{{datas.seller.deliveryTime}}</span>分钟
				            </div>
				        </div>
					</div>
					<div class="divider"></div>
				    <div class="activities">
				        <div class="bulletin">
				          <h1>公告与活动</h1>
				          <div class="content">
				            {{datas.seller.bulletin}}
				          </div>
				        </div>
				    </div>
				    <div class="supports">
				    	<ul>
				    		<li class="item" v-for="item in datas.seller.supports">
				    			<span class="iconMap" :class="icon[item.type]"></span>
				    			<span class="text">{{item.description}}</span>
				    		</li>
				    	</ul>
				    </div>
				    <!-- 商家图片 -->
				    <div class="divider"></div>
				      <div class="seller-imgs">
				        <h1>商家实景</h1>
				        <div class="img-wrapper" ref="picsWrapper">
				          <div ref="picList">
				            <img v-for="pic in datas.seller.pics" :src="pic" width="120" height="90">
				          </div>
				        </div>
				      </div>
				      <div class="divider"></div>
				      <div class="seller-info">
				        <h1>商家信息</h1>
				        <ul class="info-list">
				          <li class="info" v-for="info in datas.seller.infos">{{info}}</li>
				        </ul>
				      </div>

				</div>
			</div>
		</div>
	</div>
</template>
<script>
 	import Scroll from "better-scroll"
 	import axios from "axios"
	export default{
		props:['datas'],
		data(){
			return {
				show:true,
				icon:["decrease","discount","special","invoice","guarantee"],
				seller:{},
			}
		},
		mounted () {
			//应为ajax数据已经获取完成了，且组件中没有其他的计算方法来改变dom操作，这种情况下是可以直接获取的
			axios.get("../../../static/data.json").then(res=>{
				this.seller=res.data.seller				
				this.$nextTick(()=>{
					this.sc=new Scroll(this.$refs['sellerWrapper'],{click:true})
				})

			})
			/* eslint-disable no-new */
			
			
			
		},
		activated () {
    		this.sc.refresh()
    	},
	}
</script>