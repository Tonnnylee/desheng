<template>
	<div class="SliderPhone">
		<div v-swiper:mySwiper="swiperOption">
           <div class="swiper-wrapper">
              <div v-if="products.length > 0" class="swiper-slide" v-for="product in products">
                 <img :src="prefixImg+product.url">
              </div>
              <div v-else class="swiper-slide" v-for="">
              	 <img src="../assets/images/proPlaceholder-1.0.0.jpg">
              </div>
           </div>
        </div>
        <div class="swiper-pagination swiper-pagination-bullets"></div>
	</div>
</template>

<script>
	export default {
		props:{
			data:{
				type:Array
			}
		},
		computed:{
			products(){
				if(this.data){
					return this.data;
				}
			}
		},
		data(){
			return {
				prefixImg: process.env.prefixImg,
				swiperOption: {
                autoplay: 3000,
                initialSlide: 0,
                direction : 'horizontal',
                loop: true,
                pagination: '.swiper-pagination',
                paginationElement: 'li'
              }
			}
		}
	}
</script>

<style lang="less" scoped>
	.SliderPhone{
		margin-bottom:20px;
		position: relative;
		border-bottom:1px solid #e0e0e0;
		padding-bottom:20px;
		.swiper-slide{
			img{
        max-width: 320px;
        max-height: 320px;
        margin: 0 auto;
        display: block;
        margin-top: 5px;
			}
		}
		.swiper-pagination{
			bottom:15px;
			margin:0 auto;
			width:100%;
		}
		.swiper-pagination-bullet{
			margin:0 5px;
		}
		.swiper-pagination-bullet-active{
			background:#ec0d1f;
		}
	}

</style>
