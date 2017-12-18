<template>
	<div class="fl product-wrapper">
		<div class="slide_module vertical-slide" id="miaovSlide">
		    <div id="up" class="iconfont icon-jiantoushangicon"></div>
		    <div class="wrap">
		        <ul>
		        	<li v-if="showimg3d" rel="img3d" @mouseover="slideImg = false" class="img3D Bimg3D active">
		        		 <span class="iconfont icon-tubiao25"></span>
		        	</li>
              <li @mouseenter="slideImg = true" v-for="product in products">
                  <img :src="prefixImg+product.url" />
              </li>
		        </ul>
		    </div>
		    <div id="down" class="iconfont icon-arrow-t"></div>
		</div>
		<div v-show="slideImg" class="product-img">
		   <img v-if="products.length > 0" :src="prefixImg+products[0].url">
		   <img v-else src="../assets/images/proPlaceholder-1.0.0.jpg">
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
			showimg3d(){
				if(this.detail.img3dUrl){
					return true
				}else{
					this.slideImg = true;
					return false
				}
			}
		},
		watch:{
		    "$route":"initDetail"
    },
		data(){
			return {
				prefixImg: process.env.prefixImg,
				slideImg:false
			}
		},
		mounted(){
			this.initDetail();
		},
		methods:{
			initDetail(){
				var vm = this;
				var up = $("#up");
				var down = $("#down");
				var ul = $(".vertical-slide").find("ul");
				var lis = ul.find("li").not(".img3D");
				var liAmount;
				if(ul.find(".img3D").length > 0){
					liAmount = lis.length - 4;
				}else{
					liAmount = lis.length - 5;
				}
				//获取每个li高度
				var h = ul.find('li').outerHeight(true);
				var i = 0;
				var L = 0;
				up.click(function(){
					if(i > 0){
						if(L < 0){
							L = L + h;
							ul.stop().animate({'top': L});
							i--
						}else {
							return false;
						}
					} else {
						return false;
					}
				});
				down.click(function(){
					if (i < liAmount) {
						L = L - h
						ul.stop().animate({'top': L});
						i++;
					} else {
						return false;
					}
				});

        lis.removeClass('active');
        $(".img3D").addClass('active');
				$(".Bimg3D").on("mouseover",function(){
					$(".product-img-3d").show();
					lis.removeClass('active');
					$(this).addClass('active');
				});
				lis.on("mouseover",function(e){
					$(".product-img-3d").hide();
					lis.removeClass('active');
					$(".img3D").removeClass('active');
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
    	 width:640px;
    	 height:517px;
    	 .img3D{
			text-align: center;
			line-height: 2.3;
    	 	span{
    	 		font-size:30px;
    	 		color:#ea1b2d;
    	 	}
    	 }
    	 .slide_module { width: 70px; height: 380px; position: absolute; top:80px; bottom:0; left:40px; }
			.slide_module .wrap { width: 120px; height: 380px; position: absolute; left: 0; overflow: hidden; }
			.slide_module ul { width: 120px; position: absolute; top: 0; left: 0; }
			.slide_module li { width: 70px; height: 70px; float: left; margin-bottom:6px; border:2px solid #e3e3e3}
			.slide_module li.active{
				border:2px solid #e70f20;
			}
		    .slide_module li img{
		    	width:100%;
		    	height:100%;
		    }
			.slide_module a { display: block; width: 100px; height: 100px; border: 1px solid red; margin: 0 auto; position: relative; top: 4px; }
			.slide_module a:hover { border: 1px solid #333; }
			.slide_module .active { border: 10px solid #000; }
		#up{
			position: absolute;
			top:-27px;
			left:28px;
			cursor: pointer;
      font-size: 18px;
      font-weight: 600;
		}
		#down{
			position: absolute;
			bottom:-20px;
			left:26px;
			cursor: pointer;
      font-size: 18px;
      font-weight: 600;
		}
		.product-img{
			margin-left:150px;
			width:400px;
      margin-top:65px;
			img{
				width:100%;
			}
		}
    }
    @media (min-width:1024px) and (max-width:1199px) {
      .product-wrapper {
        width: 590px;
        .product-img {
          margin-left: 120px;
        }
      }
    }
@media (min-width:768px) and (max-width:1024px){
	 .product-wrapper{
     width:590px;
     .product-img{
       margin-left:120px;
     }
   }
}
</style>
