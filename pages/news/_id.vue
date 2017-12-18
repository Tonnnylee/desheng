<template>
	<div class="Detail-page page-top">
		<levelbar :customRouter="customRouter"></levelbar>
		<div class="container phone-container">
			<div class="article-content">
				<h2 class="article-title">{{ article.title }}</h2>
				<p class="article-class fl">{{ article.categoryName }}</p>
				<p class="article-subtitle">Release date:{{ articleTime }}</p>
				<p v-if="showAbstract" class="article-abstract"><span class="abs">Abstract</span>: {{ article.summary }}</p>
				<div class="main-content" v-html="article.content">
				</div>
			</div>

			<div class="more-new">
				<h2 v-if="items.length > 0" class="visible-lg-block visible-md-block visible-sm-block">MORE FROM TAKSTAR NEWS</h2>
				<div v-for="item in items">
					<article-Item :data="item"></article-Item>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import levelbar from '~components/levelbar';
	import articleItem from '~components/articleItem.vue';
	import imgUrl from '~assets/images/navImg.jpg';
	import axios from 'axios';
	export default {
		name: 'articleDetail',
		head() {
			return {
				title: this.article.title,
				meta: [
					{ name: 'description', content: this.article.summary }
				]
			}
		},
		components: {
			levelbar,
			articleItem
		},
		data() {
			return {
			}
		},
		async fetch({ store, params, error }) {
			var article = await store.dispatch('fetchArticle', {
				id: params.id.split(".")[0]
			}).catch(err => {
				return undefined;
			});

			if (article === undefined) {
				return error({ statusCode: 404, message: 'page not present' });
			}

			var relatedList = await store.dispatch('fetchRelatedList', {
				state: 1,
				pageNo: 1,
				pageSize: 6,
				id: params.id.split(".")[0]
			});
		},
		validate({ params, query, store }) {
			if (!(/^\d+$/.test(params.id.split(".")[0]))) {
				return false;
			}
			return true;
		},
		computed: {
			article() {
				return this.$store.state.article.detail;
			},
			articleTime() {
				var releaseTime = this.article.createDateShow;
				var timeArr = releaseTime.split(" ");
				return timeArr[0];
			},
			items() {
				return this.$store.state.article.relatedList;
			},
      customPath() {
			  return this.article.categoryName === 'Enterprise Press' ? '' : '?newsc=team'
      },
			showAbstract() {
				if (this.article.summary) {
					return true;
				} else {
					return false;
				}
			},
			customRouter() {
        return [
          {
            name: 'Home',
            path: '/'
          },
          {
            name: 'News',
            path: '/news'
          },
          {
            name: this.article.categoryName,
            path: '/news' + this.customPath
          }
        ]
      }
		}
	}

</script>

<style lang="less" scoped>
	.Detail-page {
		background: #ededed;
	}

	.article-content {
		margin-top: 15px;
		background: #fff;
		box-sizing: border-box;
		padding: 50px 17%;
		padding-bottom: 60px;
		.article-title {
			font-size: 30px;
			line-height: 1.5;
			margin-bottom: 15px;
		}
		.article-class {
			padding: 5px;
			font-size: 12px;
			border: 1px solid #e40f21;
			border-radius: 3px;
			color: #e40f21;
			margin-right: 10px;
		}
		.article-subtitle {
			margin: 15px 0;
			font-size: 12px;
			color: #919191;
			line-height: 2.2;
      font-weight:300;
		}
		.article-abstract {
			background: #f6f6f6;
			width: 100%;
			font-weight: 300;
			box-sizing: border-box;
			padding: 12px;
			font-size: 14px;
			line-height: 24px;
			margin: 25px 0;
			.abs {
				color: #000;
				font-weight: 400;
			}
		}
		.main-content {
			font-size: 15px;
			line-height: 25px;
			color: #323232;
			word-wrap: break-word;
			word-break: normal;
			width: 100%;
			overflow: hidden;
			p {
				word-wrap: break-word;
				word-break: normal;
        font-weight:300 !important;
        font-size:18px;
			}
			img {
				max-width: 100% !important;
				height: auto !important;
			}
		}
	}

	.more-new {
		overflow: hidden;
		margin-bottom: 30px;
		h2 {
			margin: 50px 0;
			margin-bottom: 40px;
			font-size: 30px;
			text-align: center;
		}
	} //ipad
	@media (min-width:768px) and (max-width:992px) {
		.Detail-page {
			.article-content {
				padding: 15px 30px;
			}
		}
	} //phone
	@media (max-width:767px) and (min-width:0px) {
		.Detail-page {
			.article-content {
				padding: 30px 25px;
				margin-top: 0;
				margin-bottom: 5px;
			}
			.phone-container {
				padding: 0;
				margin: 0;
			}
		}
	}
</style>
