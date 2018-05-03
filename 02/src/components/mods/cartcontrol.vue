<template>
	<div class="cartcontrol">
		<transition name="fadeRotate">
		<div class="cart-decrease" @click.stop.prevent='decrease' v-show="food.count>0">
			<span class="icon-remove_circle_outline inner"></span>
		</div>
		</transition>
		<div class="cart-count" v-show="food.count>0">{{food.count}}</div>
		<div class="cart-add" @click.stop.prevent="addCard($event)">
			<i class="icon-add_circle"></i>
		</div>
	</div>
</template>
<script>
	import Vue from "vue"
	import {mapMutations,mapState} from "vuex"
	export default{
		props:['food'],
		data () {
			return{

			}
		},
		methods: {
			...mapMutations(['vxaddCart','vxdecreaseCart']),
			addCard (event) {
				
				if(!event._constructed){
					return false
				}
				console.log(22)
				console.log(this.food.count)
				if (typeof this.food.count === 'undefined'){

					Vue.set(this.food,'count',0)
					Vue.set(this.food,'active',true)
				}
				console.log(33)
				console.log(this.food.count)
				this.food.count++				
				if (this.food.active) {
		          this.vxaddCart(this.food)
		          this.food.active = false
		        }

		        // console.log(this.food)
		        // console.log(this.vxfood.length)
			},
			decrease () {
				if(!event._constructed){
					return false
				}
				this.food.count--;
				if(this.food.count===0){
					this.vxdecreaseCart(this.food)
					this.food.active = true

				}
				console.log(this.vxfood.length)
			}
		},
		computed : {
			...mapState([
				'vxfood'
			])
		}
	}
</script>