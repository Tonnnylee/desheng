<template>
	<div class="Product-page page-top">
		<levelbar :customRouter="customRouter"></levelbar>
		<slide-phone class="visible-xs-block" :data="products"></slide-phone>
		<div class="container">
			<div class="product-head clearfix">
				<div v-if="product.img3dUrl" class="product-img-3d xs-hide">
					<div v-if="isLoad" class="loader"><span></span></div>
					<div id="3dplayer" class='proPlayer_container' data-width='370' data-height='370' :data-path='prefixImg+product.img3dUrl'>
             <img v-show="ifD3img" class="d3_img" src="../../../assets/images/360.png">
          </div>
				</div>
				<slide-vertical class="visible-lg-block visible-md-block" :data="products" :detail="product"></slide-vertical>
				<slide-horizen class="visible-sm-block" :data="products" :detail="product"></slide-horizen>
				<div class="fr product-info">
					<h2>{{ product.name }}</h2>
					<ul class="tabs-wrap">
						<li v-for="label in product.attrItemList">
							{{ label.attrItemName }}
						</li>
					</ul>
					<pre v-show="product.summary !== null" style="white-space: pre-wrap;word-wrap: break-word;" class="product-description">{{ product.summary }}</pre>
					<span v-show="showMoreBtn" class="moreBtn">{{ more }}</span>
					<div class="clearfix"></div>
					<div v-show="showVideo" class="video-wrap">
						<div class="playBtn">
							<img src="../../../assets/images/playBtn-1.0.0.png">
						</div>
						<video>
							<source :src="prefixImg+product.videoUrl">
						</video>
					</div>
          <div v-show="hasFile" class="download_div">
            <nuxt-link :to="{path:'/service/download',query:{item: product.proModel}}">Download</nuxt-link>
          </div>
				</div>
			</div>
		</div>
		<div class="product-detail-wrap">
			<div class="container">
				<h2 class="visible-lg-block visible-md-block visible-sm-block">Product Detail</h2>
				<tabs-vertical :data="product" class="visible-md-block visible-lg-block"></tabs-vertical>
			</div>
			<tabs-horizen :data="product" class="visible-sm-block"></tabs-horizen>
			<tabs-phone :data="product" class="visible-xs-block"></tabs-phone>
			<div v-if="showRelated" class="container">
				<h2>Related Products</h2>
				<swiper-three class="visible-lg-block" :data="relateds"></swiper-three>
				<swiper-two class="visible-sm-block visible-md-block" :data="relateds"></swiper-two>
				<swiper-phone :data="relateds" class="visible-xs-block"></swiper-phone>
			</div>
		</div>
	</div>
</template>
<script>
	import levelbar from '../../../components/levelbar.vue';
	import slideVertical from '../../../components/productSlide.vue';
	import slideHorizen from '../../../components/productMSlide.vue';
	import slidePhone from '../../../components/slidePhone';
	import tabsVertical from '../../../components/productTabs.vue';
	import tabsHorizen from '../../../components/productMTabs.vue';
	import tabsPhone from '../../../components/tabsPhone.vue';
	import swiperThree from '../../../components/swiperThree.vue';
	import swiperTwo from '../../../components/swiperTwo.vue';
	import swiperPhone from '../../../components/swiperPhone.vue';
  import NuxtLink from '../../../.nuxt/components/nuxt-link';
  import request from '~plugins/axios';
  import { Img3dEvent } from '~plugins/js/rotateImg.js';

	export default {
		components: {
      NuxtLink, 
			levelbar,
			slideVertical,
			slideHorizen,
			slidePhone,
			tabsVertical,
			tabsHorizen,
			swiperThree,
			swiperTwo,
			tabsPhone,
			swiperPhone
		},
		name: 'productDetail',
		head() {
			return {
				title: '【Takstar '+ this.product.proModel + ' ' + this.product.categoryName +'】 Product Detail',
				meta: [
					{ name: 'description', content: 'Takstar ' + this.product.proModel + ' ' + this.product.categoryName + 'Product Detail' }
				]
			}
		},
		data() {
			return {
				prefixImg: process.env.prefixImg,
				isLoad: true,
        ifD3img: false,
				more: 'show more',
				showMoreBtn: false,
				hasFile: false
			}
		},
		async fetch({ store, params, query, error }) {
			var product = await store.dispatch('fetchProduct', {
				id: params.id.split(".")[0]
			}).catch(err => {
				return undefined;
			});
			if (product === undefined) {
				return error({ statusCode: 404, message: 'page not present' });
			}
			var productImgs = await store.dispatch('fetchProductImgs', {
				id: params.id.split(".")[0]
			});
			var relateds = await store.dispatch('fetchProductRelated', {
				state: 1,
				pageSize: 12,
				pageNo: 1,
				id: params.id.split(".")[0]
			})
		},
		validate({ params, query, store }) {
			if (!(/^\d+$/.test(params.id.split(".")[0]))) {
				return false;
			}
			return true;
		},
		watch: {
		    '$route':function() {
						this.Img3dPromise(this);
				}
    },
		computed: {
		  proModel(){
		    return this.product.proModel;
      		},
			products() {
				return this.$store.state.product.ProductImgs;
			},
			product() {
				return this.$store.state.product.Product;
			},
			relateds() {
				return this.$store.state.product.ProRelateds;
			},
			customRouter() {
				let Product = this.$store.state.product.Product;
				return [
				  {
					name: 'Home',
					path: '/'
				  },
				  {
					name: 'Product',
					path: '/product'
				  },
				  {
					name: Product.categoryName,
					path: '/product/type?categoryUnifyMark=' + Product.categoryUnifyMark
				  },
				  {
					name: Product.proModel,
					path: ''
				  }
				]
			},
			showRelated() {
				if (this.relateds.length !== 0) {
					return true;
				} else {
					return false;
				}
			},
			showVideo() {
				if (this.product.videoUrl) {
					return true
				} else {
					return false
				}
			},
			showSummary() {
				if (this.product.summary !== '') {
					return true
				} else {
					return false
				}
			}
		},
		mounted() {
			var vm = this;
      		vm.fetchProModel();
      this.Img3dPromise(vm);
			if (this.showVideo) {
				this.initVideo();
			}
			this.initEvents();
		},
		methods: {
        fetchProModel(){
        var vm = this;
         return request.get('/downloadFile/list', {
          params: {
            kw: vm.proModel
          }
        }).then(response => {
          if(response.data.errorInfo.errorCode === 200){
            if(response.data.data.list.length > 0){
              vm.hasFile = true;
            }else{
              vm.hasFile = false;
            }
          }
        }).catch(err => {
           vm.hasFile = false;
         })
      },
      Img3dPromise(vm){
        Img3dEvent(vm);
      },
			initVideo() {
				var video = document.querySelector(".video-wrap video");
				var playBtn = $(".playBtn");
				playBtn.on("click", function () {
					video.play();
					playBtn.hide();
				});
				$(".video-wrap video").on("click", function () {
					video.pause();
					playBtn.show();
				});
				video.addEventListener('ended', function () {
					video.load();
					playBtn.show();
				})
			},
			initEvents() {
				var i = 0;
				var vm = this;
				var product = $(".product-description");
				var productHeight = product.height();
				if(productHeight >= 170){
				  vm.showMoreBtn = true;
          product.css("height","170px").css("overflow","hidden");
        }else{
          vm.showMoreBtn = false;
        }
				$(".moreBtn").click("click", function () {
					if (i == 0) {
            product.css("height", "auto");
						vm.more = 'collapse';
						i = 1;
					} else {
            product.css("height", "170px");
						vm.more = 'show more';
						i = 0;
					}
				});
			}
		}
	}

</script>

<style lang="less" scoped>
	.Product-page {
		background: #fff;
		.container {
			position: relative;
			.product-head {
				padding-bottom: 40px;
			}
		}
		.product-detail-wrap {
			padding-top: 30px;
			background: #ededed;
			position: relative;
			h2 {
				font-size: 30px;
				margin-bottom: 15px;
				margin-top: 25px;
			}
		}
		.product-info {
			width: 45%;
			background: #f7f7f7;
			box-sizing: border-box;
			padding: 15px;
			h2 {
				font-size: 32px;
				color: #000;
				padding-bottom: 12px;
			}
			.tabs-wrap {
				overflow: hidden;
				margin-bottom: 15px;
				li {
					float: left;
					border: 1px solid #e70f20;
					padding: 5px 10px;
					color: #e70f20;
					margin-right: 6px;
					margin-bottom: 6px;
					font-size: 14px;
				}
			}
			.product-description {
				white-space: pre-wrap;
				word-wrap: break-word;
				background: transparent;
				//height: 170px;
				overflow: hidden;
				line-height: 1.5;
				transition: all 0.3s ease;
				margin-bottom: 15px;
				font-weight: 300;
			}
			.moreBtn {
				color: #e80f20;
				text-decoration: underline;
				float: left;
				font-weight: 600;
				cursor: pointer;
				display: block;
				margin-bottom: 25px;
			}
			.video-wrap {
				width: 255px;
				height: 172px;
				position: relative;
				video {
					width: 100%;
					height: 100%;
				}
				.playBtn {
					position: absolute;
					cursor: pointer;
					top: 0;
					left: 0;
					bottom: 0;
					right: 0;
					margin: auto;
					z-index: 100;
					width: 47px;
					height: 34px;
					img {
						width: 100%;
					}
				}
			}
      .download_div{
        background:#e70f20;
        color:#fff;
        padding:10px 0px;
        width:90px;
        font-size:18px;
        text-align: center;
        a{
          color:#fff;
        }
      }
		}
		.product-img-3d {
			width: 370px;
			position: absolute;
			top: 46px;
			left: 175px;
			z-index: 99;
			.proPlayer_container {
				position: relative;
        .d3_img{
         position:absolute;
         z-index:120;
         margin:auto;
         top:0;
         left:0;
         right:0;
         bottom:0;
         cursor: pointer;
         pointer-events:none;
       }
			}
		}
	} //pc-response
	@media (min-width:1024px) and (max-width:1410px) {
		.Product-page .product-info {
			width: 35%;
			margin-left: -40px;
		}
	}

	@media (min-width:992px) and (max-width:1024px) {
		.Product-page .product-info {
			width: 35%;
		}
	} //ipad
	@media (min-width:768px) and (max-width:991px) {
		.Product-page {
			.product-info {
				width: 45%;
				margin-left: 0px;
			}
			.product-wrapper {
				margin-left: -5px;
			}
			.product-img-3d {
				top: 8px;
				left: 5px;
			}
		}
	} //phone
	@media (max-width:767px) {
		.Product-page {
			.product-info {
				width: 100%;
				margin-left: 0;
				.product-description {
					li {
						line-height: 25px;
						font-size: 14px;
					}
				}
				.video-wrap {
					margin: 0 auto;
				}
			}
			.product-img-3d {
				display: none;
			}
			.xs-hide {
				display: none;
			}
		}
	}
</style>
