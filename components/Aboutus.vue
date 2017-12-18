<template>
	<div class="About">
		<h2 class="about-title">ABOUT US</h2>
		<div class="cut-off-line"></div>
		<div class="container about-container">
			<div class="acticle-left col-lg-4 col-md-4 col-sm-6 col-xs-12">
				<h3 class="content-title">Latest News</h3>
				<div v-for="(item,index) in articles" :key="index" class="acticle-wrap">
					<a :href="`/news/${item.id}`">
						<p class="acticle-title">{{ item.title }}</p>
						<span class="acticle-time">{{ item.createDateShow.split(" ")[0] }}</span>
					</a>
				</div>
			</div>
			<div v-for="(el,index) in lastElist" class="acticle-right col-lg-4 col-md-4 col-sm-6 col-xs-12">
				<nuxt-link class="news_link" :to="{name: 'news-id', params:{id: el.id}}">
					<div class="img-wrap">
						<img v-if="el.uploadImgUrl" :src="prefixImg + el.uploadImgUrl">
						<img v-else src="../assets/images/newsPlaceholder.jpg">
					</div>
					<p class="acticle-title" :title="el.title">{{ el.title }}</p>
				</nuxt-link>
				<p class="acticle-summary" :title="el.summary">{{ el.summary }}</p>
			</div>
			<div v-for="(tl,index) in lastEXlist" class="visible-lg-block visible-md-block acticle-right col-lg-4 col-md-4 col-sm-6 col-xs-12">
				<nuxt-link class="news_link" :to="{name: 'news-id', params:{id: tl.id}}">
					<div class="img-wrap">
						<img v-if="tl.uploadImgUrl" :src="prefixImg + tl.uploadImgUrl">
						<img v-else src="../assets/images/newsPlaceholder.jpg">
					</div>
					<p class="acticle-title" :title="tl.title">{{ tl.title }}</p>
				</nuxt-link>
				<p class="acticle-summary" :title="tl.summary">{{ tl.summary }}</p>
			</div>

			<div class="contact-wrap col-lg-4 col-md-4 col-sm-6 col-xs-12">
				<h3 class="content-title contact-title">Contact Center</h3>
				<div class="acticle-wrap ">
					<p class="acticle-title acticle-question">Additional questions? feel free to contact us</p>
				</div>
				<div class="acticle-link">
					<a href="/about/feedback.html">
	          		Contact now
	          		<span class="iconfont icon-right fr"></span>
	          	</a>
				</div>
			</div>
			<div class="contact-wrap col-lg-4 col-md-4 col-sm-6 col-xs-12">
				<h3 class="content-title contact-title">Technology support</h3>
				<div class="acticle-wrap">
					<p class="acticle-title acticle-question">Additional technology support? feel free to contact us</p>
				</div>
				<div class="acticle-link">
					<a href="/about/feedback.html">
	          		Technology support
	          		<span class="iconfont icon-right fr"></span>
	          	</a>
				</div>
			</div>
			<div class="contact-wrap col-lg-4 col-md-4 col-sm-6 col-xs-12 visible-lg-block visible-md-block">
				<h3 class="content-title">Detail call</h3>
				<div class="acticle-wrap ">
					<p class="acticle-title acticle-question">Product information</p>
				</div>
				<div class="acticle-call">
          86-752-6383644
        </div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			data: Array
		},
		data() {
			return {
				prefixImg: process.env.prefixImg
			}
		},
		computed: {
			articles() {
				return this.data
			},
			articleTime() {
				var releaseTime = this.articles.createDateShow;
				var timeArr = releaseTime.split(" ");
				return timeArr[0];
			},
			lastElist() {
				return this.$store.state.article.lastElist.slice(0, 1)
			},
			lastEXlist() {
				return this.$store.state.article.lastEXlist.slice(0, 1)
			}
		}
	}

</script>

<style lang="less">
	.About {
		background: #e7ddd4;
		padding: 42px;
		padding-bottom: 75px;
		div {
			a {
				width: 100%;
			}
		}
	}

	.about-title {
		margin: 0 auto;
		margin-top: 10px;
		margin-bottom: 15px;
		font-size: 30px;
		text-align: center;
		color: #666;
		width: 200px;
	}

	.cut-off-line {
		height: 1px;
		width: 115px;
		margin: 26px auto;
		margin-top: 0;
		margin-bottom: 50px;
		background: #666;
	}

	.acticle-wrap {
		margin: 18px 0;
		line-height: 2.4;
		a {
			&:hover {
				p.acticle-title {
					color: #e70f20;
				}
			}
		}
	}

	.acticle-left,
	.acticle-right {
		min-height: 318px;
		max-height: 318px;
		margin-bottom: 20px;
		a:hover {
			.acticle-title {
				color: #e70f20;
			}
		}
	}

	.content-title {
		color: #333436;
		font-size: 24px;
		font-weight: 600;
		margin-bottom: 25px;
	}

	.contact-title {
		margin-bottom: 15px;
	}

	.img-wrap {
		margin-bottom: 30px;
		img {
			width: 91%;
		}
		.acticle-img {
			width: 90%;
			display: block;
			margin-bottom: 20px;
		}
	}

	.acticle-title {
		color: #363739;
		font-size: 19px;
		line-height: 1.3;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		width: 90%;
		transition: all 0.3s ease;
	}

	.acticle-question {
		font-size: 15px;
	}

	.acticle-summary,
	.acticle-time {
		font-size: 14px;
		color: #666;
		margin-top: 12px;
		margin-bottom: 30px;
	}

	.acticle-summary {
		line-height: 1.5;
		width: 90%;
		height: 42px;
		overflow: hidden;
	}

	.contact-wrap {
		margin-top: 60px;
	}

	.acticle-link {
		width: 89%;
		border: 2px solid #e70f20;
		color: #e70f20;
	}

	.acticle-link a {
		color: #e70f20;
		width: 100%;
		box-sizing: border-box;
		display: inline-block;
		padding: 0px 10px;
		font-size: 18px;
		height: 46px;
		line-height: 46px;
	}

	.acticle-link .iconfont {
		font-size: 26px;
	}

	.acticle-call {
		font-size: 30px;
		margin-top: 16px;
	}

	@media (min-width:993px) and (max-width:1100px) {
		.about-container {
			width: 900px;
			.acticle-wrap {
				margin: 10px 0;
				line-height: 1.5;
			}
			.acticle-left,
			.acticle-right {
				min-height: 215px;
				max-height: 215px;
			}
		}
	}

	@media (min-width:1150px) and (max-width:1220px) {
		.about-container {
			width: 1090px;
		}
	}

	@media (min-width:1410px) {
		.about-container {
			width: 1350px;
		}
	}

	@media (min-width:1445px) {
		.about-container {
			width: 1380px;
		}
	}

	//ipad
	@media (min-width:768px) and (max-width:992px) {
		.About {
			padding: 35px 0px;
			padding-bottom: 50px;
		}
		.img-wrap img {
			width: 100%;
		}
    .acticle-link{
      width:100%;
    }
	} //phone
	@media (max-width:767px) {
		.About {
			padding: 15px 0px;
			.container {
				padding: 5px;
				.acticle-wrap {
					line-height: 1.5;
				}
				.acticle-title {
					width: 100%;
				}
				.acticle-link {
					width: 100%;
				}
				.img-wrap {
					img {
						width: 100%;
					}
				}
				div[class*="col-"] {
					padding-left: 5px;
					padding-right: 5px;
				}
				.acticle-summary {
					margin-top: 8px;
					margin-bottom: 20px;
				}
				.acticle-left,
				.acticle-right {
					max-height: none;
				}
				.contact-wrap {
					margin-top: 30px;
				}
			}
		}
	}
</style>
