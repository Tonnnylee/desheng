<template>
	<div class="slide-wrap TwoSlide">
		<div v-swiper:mySwiper="swiperOption">
		    <div class="swiper-wrapper">
		      <div class="swiper-slide" v-for="good in goods">
		        <img v-if="good.defaultImgUrl" :src="prefixImg + good.defaultImgUrl">
            <img v-else src="../assets/images/proPlaceholder-1.0.0.jpg">
				    <div class="fr goodsDetail">
					     <h3>{{ good.name }}</h3>
               <p>{{ good.summary }}</p>
               <nuxt-link :to="{path:`/product/type/${good.id}.html`}">View Details</nuxt-link>
				   </div>
		      </div>
		    </div>
		</div>
		<span class="swiper-button-left iconfont icon-jiantoushangicon"></span>
		<span class="swiper-button-right iconfont icon-jiantoushangicon"></span>
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
					initialSlide: 1,
					loop: false,
					nextButton: '.TwoSlide .swiper-button-right',
          prevButton: '.TwoSlide .swiper-button-left',
					paginationClickable: true,
					slidesPerView: 2,
					spaceBetween:20,
					height:70
				}
			}
		},
		computed:{
			goods(){
				if(this.data){
					return this.data;
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.TwoSlide{
		width:94%;
	    margin:0 auto;
	    margin-bottom:45px;
	    .swiper-slide{
	    	background:#fff;
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
				padding:30px 10px;
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
		    left:10px;
		    transform:rotate(-90deg);
		}
		.swiper-button-right{
			right:10px;
			transform:rotate(90deg);
		}
	}
</style>
