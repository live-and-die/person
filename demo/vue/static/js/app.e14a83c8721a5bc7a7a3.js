webpackJsonp([1],{"9CZw":function(t,s){},FToM:function(t,s){},NHnr:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a("7+uW"),e={props:["score","size"],computed:{yimao:function(){for(var t=[],s=Math.floor(this.score),a=this.score-s>=.5,i=0;i<s;i++)t.push("on");for(a&&t.push("half");t.length<5;)t.push("off");return t}}},c={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"star",class:"star-"+this.size},this._l(this.yimao,function(t){return s("span",{staticClass:"star-item",class:t})}))},staticRenderFns:[]},n=a("VU/8")(e,c,!1,null,null,null).exports,o={data:function(){return{icon:["decrease","discount","special","invoice","guarantee"],show:!1}},props:["seller"],components:{star:n}},l={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"header"},[a("div",{staticClass:"content-wrapper"},[a("div",{staticClass:"avatar"},[a("img",{attrs:{src:t.seller.avatar,width:"64",height:"64",alt:""}})]),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"title"},[a("span",{staticClass:"brand"}),t._v(" "),a("span",{staticClass:"name"},[t._v(t._s(t.seller.name))])]),t._v(" "),a("div",{staticClass:"description"},[t._v(t._s(t.seller.description)+"//"+t._s(t.seller.deliveryTime)+"分钟送达\n\t\t\t")]),t._v(" "),a("div",{staticClass:"supports"},[a("div",{staticClass:"supports_desc"},[a("span",{staticClass:"icon decrease"}),t._v(" "),a("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[0].description))])])])]),t._v(" "),a("div",{staticClass:"support-count",on:{click:function(s){t.show=!t.show}}},[a("span",{staticClass:"count"},[t._v(t._s(t.seller.supports.length+"个"))]),t._v(" "),a("i",{staticClass:"icon-keyboard_arrow_right"})])]),t._v(" "),a("div",{staticClass:"bulletin-wrapper",on:{click:function(s){t.show=!t.show}}},[a("span",{staticClass:"bulletin-title"}),t._v(" "),a("span",{staticClass:"bulletin-text"},[t._v(t._s(t.seller.bulletin))])]),t._v(" "),a("div",{staticClass:"background"},[a("img",{attrs:{src:t.seller.avatar,width:"100%",height:"100%",alt:""}})]),t._v(" "),a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"detail"},[a("div",{staticClass:"detail-wrapper clearfix"},[a("div",{staticClass:"detail-main"},[a("h1",{staticClass:"name"},[t._v(t._s(t.seller.name))]),t._v(" "),a("div",{staticClass:"star-wrapper"},[a("star",{attrs:{score:t.seller.score,size:48}})],1),t._v(" "),a("div",{staticClass:"title"},[a("div",{staticClass:"line"}),t._v(" "),a("div",{staticClass:"text"},[t._v("产品详情")]),t._v(" "),a("div",{staticClass:"line"})]),t._v(" "),a("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s){return a("li",{staticClass:"support-item"},[a("span",{staticClass:"icon",class:t.icon[s.type]}),t._v(" "),a("span",{staticClass:"text"},[t._v(t._s(s.description))])])})),t._v(" "),a("div",{staticClass:"title"},[a("div",{staticClass:"line"}),t._v(" "),a("div",{staticClass:"text"},[t._v("商家公告")]),t._v(" "),a("div",{staticClass:"line"})]),t._v(" "),a("div",{staticClass:"bulletin"},[t._v(t._s(t.seller.bulletin))])]),t._v(" "),a("div",{staticClass:"detail-close",on:{click:function(s){t.show=!t.show}}},[a("i",{staticClass:"icon-close"})])])])])],1)},staticRenderFns:[]};var r=a("VU/8")(o,l,!1,function(t){a("FToM")},null,null).exports,v=a("mtWM"),d=a.n(v),u={data:function(){return{datas:{seller:{},goods:[],ratings:[]}}},mounted:function(){var t=this;d.a.get("/static/data.json").then(function(s){t.datas.seller=s.data.seller,t.datas.goods=s.data.goods,t.datas.ratings=s.data.ratings,t.$nextTick(function(){t.$refs.abc.scroll()})})},methods:{},components:{vheader:r}},_={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("vheader",{attrs:{seller:t.datas.seller}}),t._v(" "),a("div",{staticClass:"tab"},[a("div",{staticClass:"tab-item"},[a("router-link",{attrs:{to:"/goods"},on:{click:t.abcd}},[t._v("商品")])],1),t._v(" "),a("div",{staticClass:"tab-item"},[a("router-link",{attrs:{to:"/ratings"}},[t._v("评论")])],1),t._v(" "),a("div",{staticClass:"tab-item"},[a("router-link",{attrs:{to:"/seller"}},[t._v("商家")])],1)]),t._v(" "),a("keep-alive",[a("router-view",{ref:"abc",attrs:{datas:t.datas}})],1)],1)},staticRenderFns:[]};var p=a("VU/8")(u,_,!1,function(t){a("9CZw")},"data-v-cd0ea7c2",null).exports,f=a("/ocq"),h=a("43Vb"),m=a.n(h),C=a("Dd8w"),w=a.n(C),g=a("NYxO"),x={props:["food"],data:function(){return{}},methods:w()({},Object(g.b)(["vxaddCart","vxdecreaseCart"]),{addCard:function(t){if(!t._constructed)return!1;console.log(22),console.log(this.food.count),void 0===this.food.count&&(i.a.set(this.food,"count",0),i.a.set(this.food,"active",!0)),console.log(33),console.log(this.food.count),this.food.count++,this.food.active&&(this.vxaddCart(this.food),this.food.active=!1)},decrease:function(){if(!event._constructed)return!1;this.food.count--,0===this.food.count&&(this.vxdecreaseCart(this.food),this.food.active=!0),console.log(this.vxfood.length)}}),computed:w()({},Object(g.c)(["vxfood"]))},k={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"cartcontrol"},[a("transition",{attrs:{name:"fadeRotate"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-decrease",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.decrease(s)}}},[a("span",{staticClass:"icon-remove_circle_outline inner"})])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-count"},[t._v(t._s(t.food.count))]),t._v(" "),a("div",{staticClass:"cart-add",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.addCard(s)}}},[a("i",{staticClass:"icon-add_circle"})])],1)},staticRenderFns:[]},y=a("VU/8")(x,k,!1,null,null,null).exports,b={props:["deliverPrice","minprice","food"],data:function(){return{show:!1}},components:{cartcontrol:y},computed:{totalprice:function(){var t=0;return this.food.forEach(function(s){t+=s.price*s.count}),t},totalcount:function(){var t=0;return this.food.forEach(function(s){t+=s.count}),t},paydesc:function(){return 0===this.totalprice?this.minprice+"元起送":this.totalprice<this.minprice?"还差"+(this.minprice-this.totalprice)+"元起送":"去结算"}},methods:{empty:function(){this.food.forEach(function(t){t.count=0})},showa:function(){var t=this;this.show=!this.show,this.$nextTick(function(){t.sc?t.sc.refresh():t.sc=new m.a(t.$refs.listcontent,{click:!0})})}}},$={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"shopCart"},[a("div",{staticClass:"content",on:{click:t.showa}},[a("div",{staticClass:"content-left"},[a("div",{staticClass:"logo-wrapper"},[t._m(0),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.totalprice>0,expression:"totalprice>0"}],staticClass:"badge"},[t._v(t._s(t.totalcount))])]),t._v(" "),a("div",{staticClass:"price",class:{active:t.totalprice}},[t._v("$"+t._s(t.totalprice))]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.totalprice<99,expression:"totalprice<99"}],staticClass:"desc"},[t._v("另需要配送费￥"+t._s(t.deliverPrice)+"元")])]),t._v(" "),a("div",{staticClass:"content-right",class:{enough:this.totalprice>=this.minprice}},[a("div",{staticClass:"pay"},[t._v(t._s(t.paydesc))])])]),t._v(" "),a("transition",{attrs:{name:"transHeight"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.show&&t.totalprice>0,expression:"show&&totalprice>0"}],staticClass:"shopcart-list"},[a("div",{staticClass:"list-header"},[a("h1",{staticClass:"title"},[t._v("购物车")]),t._v(" "),a("span",{staticClass:"empty",on:{click:t.empty}},[t._v("清空")])]),t._v(" "),a("div",{ref:"listcontent",staticClass:"list-content"},[a("ul",t._l(t.food,function(s){return a("li",{staticClass:"food"},[a("span",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),a("div",{staticClass:"price"},[a("span",[t._v("$"+t._s(s.price))])]),t._v(" "),a("div",{staticClass:"cartcontrol-wrapper"},[a("cartcontrol",{attrs:{food:s}})],1)])}))])])])],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"logo active"},[s("i",{staticClass:"icon-shopping_cart"})])}]},D={props:["foodDetails"],data:function(){return{showDetail:!1,classify:[{name:"全部",count:0,commont:[],active:!0},{name:"好评",count:0,commont:[],active:!1},{name:"吐槽",count:0,commont:[],active:!1}],commontss:[],flag:!0}},mounted:function(){},methods:{add:function(t){this.$refs.cartcontrol.addCard(t)},foodshow:function(){var t=this;this.showDetail=!0,this.$nextTick(function(){t.foodDetails.ratings.forEach(function(s){t.classify[0].count++,t.classify[0].commont.push(s),s.rateType?(t.classify[2].count++,t.classify[2].commont.push(s)):(t.classify[1].count++,t.classify[1].commont.push(s))})}),this.$nextTick(function(){t.cs?t.cs.refresh():t.cs=new m.a(t.$refs.detailWrapper,{click:!0})}),this.commontss=this.classify[0].commont},classifyclick:function(t){this.commontss=t.commont,this.classify.forEach(function(t){t.active=!1}),t.active=!0},updatecs:function(){var t=this;this.$nextTick(function(){t.cs.refresh()})}},computed:{commontsss:function(){var t=[];return this.updatecs(),this.flag?(this.commontss.forEach(function(s){s.text.length>0&&t.push(s)}),t):this.commontss}},components:{cartcontrol:y}},T={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("transition",{attrs:{name:"move"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.showDetail,expression:"showDetail"}],ref:"detailWrapper",staticClass:"detailWrapper"},[a("div",{staticClass:"foodDetail"},[a("div",{staticClass:"back",on:{click:function(s){t.showDetail=!t.showDetail}}},[a("i",{staticClass:"icon-arrow_lift"})]),t._v(" "),a("img",{attrs:{src:t.foodDetails.image,height:"425",width:"100%",alt:""}}),t._v(" "),a("div",{staticClass:"info"},[a("div",{staticClass:"title"},[t._v(t._s(t.foodDetails.name))]),t._v(" "),a("div",{staticClass:"desc"},[a("span",[t._v("月售"+t._s(t.foodDetails.sellCount))]),t._v(" "),a("span",[t._v("好评率"+t._s(t.foodDetails.rating)+"%")])]),t._v(" "),a("div",{staticClass:"price"},[t._v("\n\t\t\t\t$"+t._s(t.foodDetails.price)+"\n\t\t\t")]),t._v(" "),a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:!t.foodDetails.count,expression:"!foodDetails.count"}],staticClass:"shopCart",on:{click:function(s){t.add(s)}}},[a("div",{staticClass:"text"},[t._v("加入购物车")])])]),t._v(" "),a("cartcontrol",{ref:"cartcontrol",attrs:{food:t.foodDetails}})],1),t._v(" "),a("div",{staticClass:"divider"}),t._v(" "),a("div",{staticClass:"desc"},[a("div",{staticClass:"title"},[t._v("商品介绍")]),t._v(" "),a("div",{staticClass:"content"},[t._v(t._s(t.foodDetails.info))])]),t._v(" "),a("div",{staticClass:"divider"}),t._v(" "),a("div",{staticClass:"evaluation"},[a("div",{staticClass:"title"},[t._v("商品评价")]),t._v(" "),a("div",{staticClass:"classify"},t._l(t.classify,function(s,i){return a("span",{staticClass:"item",class:{active:s.active,bad:2===i,badActive:2===i&&s.active},on:{click:function(a){t.classifyclick(s)}}},[t._v(t._s(s.name)+t._s(s.count))])})),t._v(" "),a("div",{staticClass:"switch",on:{click:function(s){t.flag=!t.flag}}},[a("span",{staticClass:"icon-check_circle",class:{on:t.flag}}),t._v(" "),a("span",{staticClass:"text"},[t._v("只看有内容的评价")])]),t._v(" "),a("div",{staticClass:"evel-list"},[a("ul",t._l(t.commontsss,function(s){return a("li",{staticClass:"evel"},[a("div",{staticClass:"userInfo"},[a("div",{staticClass:"time"},[t._v(t._s(s.rateTime))]),t._v(" "),a("div",{staticClass:"user"},[a("span",[t._v(t._s(s.rateTime))]),t._v(" "),a("img",{attrs:{src:s.avatar,width:"12",height:"12",alt:""}})])]),t._v(" "),a("div",{staticClass:"content"},[a("span",{staticClass:"icon",class:s.rateType?"icon-thumb_down":"icon-thumb_up"}),t._v(" "),a("span",{staticClass:"text"},[t._v(t._s(s.text))])])])}))])])])])])},staticRenderFns:[]},E={props:["datas"],data:function(){return{goods:this.datas.goods,foodDetails:{},icon:["decrease","discount","special","invoice","guarantee"]}},mounted:function(){this.$nextTick(function(){})},methods:{scroll:function(){this.sc=new m.a(this.$refs.foodsWarapper,{click:!0}),this.px=new m.a(this.$refs.menuWrapper,{click:!0})},xiangqingye:function(t){this.$refs.footDetail.foodshow(),this.foodDetails=t}},computed:{food:function(){var t=[];return this.datas.goods.forEach(function(s){s.foods.forEach(function(s){s.count>0&&t.push(s)})}),t}},components:{shopcart:a("VU/8")(b,$,!1,null,null,null).exports,cartcontrol:y,footDetail:a("VU/8")(D,T,!1,null,null,null).exports}},W={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"goods"},[a("div",{ref:"menuWrapper",staticClass:"menu-wrapper"},[a("ul",t._l(t.datas.goods,function(s){return a("li",{staticClass:"menu-item"},[a("span",{staticClass:"text"},[a("span",{directives:[{name:"show",rawName:"v-show",value:s.type>0,expression:"item.type>0"}],staticClass:"iconMap",class:t.icon[s.type]}),t._v("\n\t\t\t\t\t\t"+t._s(s.name)+"\n\t\t\t\t")])])}))]),t._v(" "),a("div",{ref:"foodsWarapper",staticClass:"foods-wrapper"},[a("ul",t._l(t.datas.goods,function(s){return a("li",{staticClass:"food-list food-list-hook"},[a("h1",{staticClass:"title"},[t._v(t._s(s.name))]),t._v(" "),a("ul",t._l(s.foods,function(s){return a("li",{staticClass:"food-item",on:{click:function(a){t.xiangqingye(s)}}},[a("div",{staticClass:"icon"},[a("img",{attrs:{src:s.icon,width:"57",height:"57",alt:""}})]),t._v(" "),a("div",{staticClass:"content"},[a("h2",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),a("p",{staticClass:"description"},[t._v(t._s(s.description))]),t._v(" "),a("div",{staticClass:"sell-info"},[a("span",{staticClass:"sellCount"},[t._v("月售"+t._s(s.sellCount)+"份")]),t._v(" "),a("span",{staticClass:"rating"},[t._v("好评率"+t._s(s.rating))]),t._v(" "),a("div",{staticClass:"price"},[a("span",{staticClass:"newPrice"},[t._v("$"+t._s(s.price))])]),t._v(" "),a("div",{staticClass:"cartcontrol-wrapper"},[a("cartcontrol",{attrs:{food:s}})],1)])])])}))])}))]),t._v(" "),a("shopcart",{attrs:{food:t.food,deliverPrice:t.datas.seller.deliveryPrice,minprice:t.datas.seller.minPrice}}),t._v(" "),a("footDetail",{ref:"footDetail",attrs:{foodDetails:t.foodDetails}})],1)},staticRenderFns:[]},N=a("VU/8")(E,W,!1,null,null,null).exports,F={props:["datas"],data:function(){return{ratings:[],classify:[{name:"全部",count:0,commont:[],active:!0},{name:"好评",count:0,commont:[],active:!1},{name:"吐槽",count:0,commont:[],active:!1}],show:!0,commontss:[]}},mounted:function(){var t=this;d.a.get("../../../static/data.json").then(function(s){t.ratings=s.data.ratings,t.commontss=s.data.ratings,t.ratings.forEach(function(s){t.classify[0].count++,t.classify[0].commont.push(s),s.rateType?(t.classify[2].count++,t.classify[2].commont.push(s)):(t.classify[1].count++,t.classify[1].commont.push(s))}),t.$nextTick(function(){t.sc=new m.a(t.$refs.ratingsWrapper,{click:!0})})})},activated:function(){console.log(2)},methods:{evel:function(t){this.classify.forEach(function(t){t.active=!1}),this.commontss=t.commont,t.active=!0}},computed:{commontsss:function(){var t=this;if(this.$nextTick(function(){t.sc.refresh()}),this.show){var s=[];return this.commontss.forEach(function(t){t.text.length&&s.push(t)}),s}return this.commontss}},components:{star:n}},P={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{ref:"ratingsWrapper",staticClass:"ratingsWrapper"},[a("div",{staticClass:"ratings-content"},[a("div",{staticClass:"info"},[a("div",{staticClass:"mark"},[a("div",{staticClass:"num"},[t._v(t._s(t.datas.seller.score))]),t._v(" "),a("div",{staticClass:"text"},[t._v("综合评分")]),t._v(" "),a("div",{staticClass:"contrast"},[t._v("高于周围"+t._s(t.datas.seller.rankRate)+"%商家")])]),t._v(" "),a("div",{staticClass:"stars"},[a("div",{staticClass:"serviceScore"},[a("span",{staticClass:"text"},[t._v("服务态度")]),t._v(" "),a("star",{attrs:{score:t.datas.seller.serviceScore,size:36}}),t._v(" "),a("span",{staticClass:"num"},[t._v(t._s(t.datas.seller.serviceScore))])],1),t._v(" "),a("div",{staticClass:"foodScore"},[a("span",{staticClass:"text"},[t._v("食物评分")]),t._v(" "),a("star",{attrs:{score:t.datas.seller.foodScore,size:36}}),t._v(" "),a("span",{staticClass:"num"},[t._v(t._s(t.datas.seller.foodScore))])],1)])]),t._v(" "),a("div",{staticClass:"divider"}),t._v(" "),a("div",{staticClass:"evaluation"},[a("div",{staticClass:"classify"},t._l(t.classify,function(s,i){return a("span",{staticClass:"item",class:{active:s.active,bad:2===i,badActive:2===i&&s.active},on:{click:function(a){t.evel(s)}}},[t._v(t._s(s.name)+"\n\t\t\t\t\t"),a("span",{staticClass:"count"},[t._v(t._s(s.count))])])})),t._v(" "),a("div",{staticClass:"switch",on:{click:function(s){t.show=!t.show}}},[a("span",{staticClass:"icon-check_circle",class:{on:t.show}}),t._v(" "),a("span",{staticClass:"text"},[t._v("只看内容评价")])]),t._v(" "),a("div",{staticClass:"evel-list"},[a("ul",t._l(t.commontsss,function(s){return a("li",{staticClass:"evel"},[a("div",{staticClass:"avatar"},[a("img",{attrs:{src:s.avatar,alt:"",height:"28",width:"28"}})]),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"user"},[a("span",{staticClass:"name"},[t._v(t._s(s.username))]),t._v(" "),a("span",{staticClass:"rateTime"},[t._v(t._s(s.rateTime))])]),t._v(" "),a("div",{staticClass:"star-wrapper"},[a("star",{attrs:{size:24,score:s.score}}),t._v(" "),a("span",{staticClass:"deliveryTime"},[t._v(t._s(s.deliveryTime)+"分钟送达")])],1),t._v(" "),a("div",{staticClass:"text"},[t._v(t._s(s.text))]),t._v(" "),a("div",{staticClass:"recommend"},[a("span",{staticClass:"icon",class:s.rateType?"icon-thumb_down":"icon-thumb_up"}),t._v(" "),t._l(s.recommend,function(s){return a("span",{staticClass:"dish"},[t._v(t._s(s))])})],2)])])}))])])])])},staticRenderFns:[]},R=a("VU/8")(F,P,!1,null,null,null).exports,V={props:["datas"],data:function(){return{show:!0,icon:["decrease","discount","special","invoice","guarantee"],seller:{}}},mounted:function(){var t=this;d.a.get("../../../static/data.json").then(function(s){t.seller=s.data.seller,t.$nextTick(function(){t.sc=new m.a(t.$refs.sellerWrapper,{click:!0})})})},activated:function(){this.sc.refresh()}},U={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{ref:"sellerWrapper",staticClass:"seller-wrapper"},[a("div",{staticClass:"seller-content"},[a("div",{staticClass:"info"},[a("div",{staticClass:"title"},[a("div",{staticClass:"text"},[t._v("\n\t\t\t\t\t"+t._s(t.datas.seller.name)+"\n\t\t\t\t")]),t._v(" "),a("div",{staticClass:"star-wrapper"},[a("star",{attrs:{size:36,score:t.datas.seller.score}}),t._v(" "),a("div",{staticClass:"rate-count"},[t._v("("+t._s(t.datas.seller.ratingCount)+")")]),t._v(" "),a("div",{staticClass:"sell-count"},[t._v("月售"+t._s(t.seller.sellCount)+"单")])],1),t._v(" "),a("div",{staticClass:"collect",on:{click:function(s){t.show=!t.show}}},[a("span",{staticClass:"icon-favorite",class:{active:t.show}}),t._v(" "),a("span",{staticClass:"text"},[t._v(t._s(t.show?"收藏":"已收藏"))])]),t._v(" "),a("div",{staticClass:"remark"},[a("div",{staticClass:"block"},[a("h2",[t._v("起送价")]),t._v(" "),a("div",{staticClass:"content"},[a("span",{staticClass:"num"},[t._v(t._s(t.datas.seller.minPrice))]),t._v("元\n\t\t\t\t\t\t")])]),t._v(" "),a("div",{staticClass:"block"},[a("h2",[t._v("商家配送")]),t._v(" "),a("div",{staticClass:"content"},[a("span",{staticClass:"num"},[t._v(t._s(t.datas.seller.deliveryPrice))]),t._v("元\n\t\t\t            ")])]),t._v(" "),a("div",{staticClass:"block"},[a("h2",[t._v("平均配送时间")]),t._v(" "),a("div",{staticClass:"content"},[a("span",{staticClass:"num"},[t._v(t._s(t.datas.seller.deliveryTime))]),t._v("分钟\n\t\t\t            ")])])]),t._v(" "),a("div",{staticClass:"divider"}),t._v(" "),a("div",{staticClass:"activities"},[a("div",{staticClass:"bulletin"},[a("h1",[t._v("公告与活动")]),t._v(" "),a("div",{staticClass:"content"},[t._v("\n\t\t\t            "+t._s(t.datas.seller.bulletin)+"\n\t\t\t          ")])])]),t._v(" "),a("div",{staticClass:"supports"},[a("ul",t._l(t.datas.seller.supports,function(s){return a("li",{staticClass:"item"},[a("span",{staticClass:"iconMap",class:t.icon[s.type]}),t._v(" "),a("span",{staticClass:"text"},[t._v(t._s(s.description))])])}))]),t._v(" "),a("div",{staticClass:"divider"}),t._v(" "),a("div",{staticClass:"seller-imgs"},[a("h1",[t._v("商家实景")]),t._v(" "),a("div",{ref:"picsWrapper",staticClass:"img-wrapper"},[a("div",{ref:"picList"},t._l(t.datas.seller.pics,function(t){return a("img",{attrs:{src:t,width:"120",height:"90"}})}))])]),t._v(" "),a("div",{staticClass:"divider"}),t._v(" "),a("div",{staticClass:"seller-info"},[a("h1",[t._v("商家信息")]),t._v(" "),a("ul",{staticClass:"info-list"},t._l(t.datas.seller.infos,function(s){return a("li",{staticClass:"info"},[t._v(t._s(s))])}))])])])])])},staticRenderFns:[]},z=a("VU/8")(V,U,!1,null,null,null).exports;i.a.use(f.a);var M=new f.a({routes:[{path:"/",redirect:"/goods"},{path:"/goods",component:N},{path:"/ratings",component:R},{path:"/seller",component:z},{path:"/*",redirect:"/"}]});i.a.use(g.a);var S=new g.a.Store({state:{vxfood:[]},mutations:{vxaddCart:function(t,s){t.vxfood.push(s)},vxdecreaseCart:function(t,s){t.vxfood.forEach(function(a,i){a.name===s.name&&t.vxfood.splice(i,1)})}}});i.a.config.productionTip=!1,new i.a({el:"#app",router:M,store:S,components:{App:p},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.e14a83c8721a5bc7a7a3.js.map