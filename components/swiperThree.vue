<template>
	<div class="slide-wrap ThreeSlide">
		<div v-swiper:mySwiper="swiperOption">
		    <div class="swiper-wrapper">
		      <div class="swiper-slide" v-for="good in goods">
		      	<img v-if="good.defaultImgUrl" :src="prefixImg+good.defaultImgUrl">
		      	<img v-else src="../assets/images/proPlaceholder-1.0.0.jpg">
				<div class="fr goodsDetail">
					<h3>{{ good.name }}</h3>
					<p>{{ good.summary }}</p>
					<nuxt-link :to="{path:`/product/type/${good.id}.html`}">View Details</nuxt-link>
				</div>
		      </div>
		    </div>
		</div>
		<span v-show="goodsAmount > 3" class="swiper-button-left iconfont icon-jiantoushangicon"></span>
		<span v-show="goodsAmount > 3" class="swiper-button-right iconfont icon-jiantoushangicon"></span>
	</div>
</template>

<script>
	export default {
		props:{
			data:Array
		},
		data(){
			return {
				prefixImg: process.env.prefixImg,
				swiperOption: {
          effect:'slide',
					initialSlide: 1,
					loop: false,
					nextButton: '.ThreeSlide .swiper-button-right',
          prevButton: '.ThreeSlide .swiper-button-left',
					paginationClickable: true,
					slidesPerView: 3,
					spaceBetween:30,
					height:70
				}
			}
		},
		computed:{
			goods(){
				if(this.data){
					return this.data;
				}
			},
      goodsAmount(){
			    return this.goods.length;
      }
		}
	}
</script>

<style lang="less" scoped>
	.ThreeSlide{
		width:94%;
	    margin:0 auto;
	    margin-bottom:45px;
	    .swiper-slide{
	    	background:#fff;
	    	position: relative;
			img{
				width:35%;
				display: inline-block;
				position: absolute;
				top:50%;
				left:0;
				transform:translate(5%,-50%);
			}
			.goodsDetail{
				width:62%;
        padding: 30px 10px;
				box-sizing: border-box;
				h3{
					font-size:18px;
					font-weight: 600;
					color:#000;
					margin-bottom:10px;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
          height: 22px;
				}
				p{
					font-size:14px;
					line-height: 20px;
					height:40px;
					overflow: hidden;
          color:#666;
				}
				a{
					display: inline-block;
					padding:10px 20px;
					background:#e70f20;
					color:#fff;
					margin-top:15px;
				}
			}
		}
		.swiper-button-left,.swiper-button-right{
			top:50%;
			position: absolute;
		    width: 27px;
		    height: 44px;
		    margin-top: -22px;
		    z-index: 10;
		    cursor: pointer;
		    font-size:35px;
		}
		.swiper-button-left{
		    left:15px;
		    transform:rotate(-90deg);
		}
		.swiper-button-right{
			right:15px;
			transform:rotate(90deg);
		}
	}
</style>
