<template>
	<div class="fl product-wrapper">
		<div class="product-img">
		   <img v-if="products.length > 0" :src="prefixImg+products[0].url">
		   <img v-else src="../assets/images/proPlaceholder-1.0.0.jpg">
		</div>
		<div class="slide_module horizen-slide">
		    <div id="left" class="iconfont icon-jiantoushangicon"></div>
		    <div class="wrap">
		        <ul>
		            <li v-if="showimg3d" rel="img3d" class="img3D active">
		        		<span class="iconfont icon-tubiao25"></span>
		        	</li>
		            <li v-if="products.length > 0" v-for="product in products">
		                 <img :src="prefixImg+product.url" />
		            </li>
		            <li v-else>
		        		<img src="../assets/images/proPlaceholder-1.0.0.jpg">
		        	</li>
		        </ul>
		    </div>
		    <div id="right" class="iconfont icon-arrow-t"></div>
		</div>
	</div>
</template>

<script>
	export default {
		props:{
			data:{
				type:Array
			},
			detail:{
				type:Object
			}

		},
		computed:{
			products(){
				if(this.data){
					return this.data;
				}
			},
			product(){
				return this.detail
			},
			showimg3d(){
				if(this.detail.img3dUrl){
					return true
				}else{
					this.slideImg = true;
					return false
				}
			}

		},
		data(){
			return {
				prefixImg: process.env.prefixImg,
				slideImg : false
			}
		},
		mounted(){
			this.initDetail();
		},
		methods:{
			initDetail(){
				var left = $("#left");
				var right = $("#right");
				var ul = $(".horizen-slide").find("ul");
				var lis = ul.find("li").not(".img3D");
				var liAmount;
				if(ul.find(".img3D").length > 0){
					liAmount = lis.length - 3;
				}else{
					liAmount = lis.length - 4;
				}
				//获取每个li高度
				var h = ul.find('li').outerWidth(true);
				var i = 0;
				var L = 0;
				left.click(function(){
					if(i > 0){
						if(L < 0){
							L = L + h;
							ul.stop().animate({'left': L});
							i--
						}else {
							return false;
						}
					} else {
						return false;
					}
				});
				right.click(function(){
					if (i < liAmount) {
						console.log(liAmount);
						console.log(i);
						L = L - h
						ul.stop().animate({'left': L});
						i++;
					} else {
						return false;
					}
				});
        lis.removeClass('active');
        $(".img3D").addClass('active');
				$(".img3D").on("click",function(){
					$(".product-img-3d").show();
					lis.removeClass('active');
					$(this).addClass('active');
				});
				lis.on("click",function(e){
					$(".product-img-3d").hide();
					$(".img3D").removeClass('active');
					lis.removeClass('active');
					$(this).addClass('active');
					var getImg = $(this).find("img").attr("src");
					var proImg = $(".product-img img");
					proImg.attr("src",getImg);
				})
			}
		}
	}
</script>

<style lang="less" scoped>
    .product-wrapper{
    	 width:370px;
    	 height:482px;
    	 .img3D{
			text-align: center;
			line-height: 2.3;
    	 	span{
    	 		font-size:30px;
    	 		color:#ea1b2d;
    	 	}
    	 }
    	 .slide_module { position: relative; width: 355px; height: 70px; margin-top:20px;    margin-left: 10px;}
			.slide_module .wrap { width: 300px; height: 70px; position: absolute; left: 35px; overflow: hidden; }
			.slide_module ul { width: 300%; position: absolute; top: 0; left: 0; }
			.slide_module li { width: 70px; height: 70px; float: left; margin-right:6px; border:2px solid #e3e3e3}
			.slide_module li.active{
				border:2px solid #e70f20;
			}
		    .slide_module li img{
		    	width:100%;
		    	height:100%;
		    }
			.slide_module .active { border: 10px solid #000; }
		#left{
			position: absolute;
			top:28px;
			left:10px;
			cursor: pointer;
			font-size:18px;
			font-weight:600;
			transform: rotate(-90deg);
		}
		#right{
			position: absolute;
			top:28px;
			right:-2px;
			cursor: pointer;
			font-size:18px;
			font-weight:600;
			transform: rotate(-90deg);
		}
		.product-img{
			margin-top:20px;
			width:370px;
			img{
				width:100%;
			}
		}
    }
</style>
