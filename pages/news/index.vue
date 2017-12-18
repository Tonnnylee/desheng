<template>
	<div class="NewList-page page-top">
		<levelbar :customRouter="customRouter"></levelbar>
		<div class="container news-container">
			<div class="head-tabs">
				<ul>
					<li class="tabs-li" :class="{'active': Newsc === 'new'}">
					<nuxt-link :to="{query:{newsc: 'new'}}">New Products</nuxt-link>
					<div class="tabs-line"></div>
					</li>
					<li class="tabs-li" :class="{'active': Newsc == ''}">
						<nuxt-link :to="{path:'/news'}">Enterprise press</nuxt-link>
						<div class="tabs-line"></div>
					</li>
					<li class="tabs-li" :class="{'active': Newsc === 'exhibition'}">
					<nuxt-link :to="{query:{newsc: 'exhibition'}}">Exhibitions</nuxt-link>
					<div class="tabs-line"></div>
					</li>
				</ul>
			</div>
			<!--<div v-if="!Earticle.length" class="loader"><span>Loading...</span></div>-->
			<!-- Enterprise press -->
			<div class="list-wrap clearfix" v-show="Newsc == ''">
				<div class="" align="center" v-show="!Earticle.length">No more content</div>
				<div v-for="eitem in Earticle">
					<article-Item :data="eitem"></article-Item>
				</div>
			</div>
			<!-- new press -->
			<div class="list-wrap clearfix" v-show="Newsc == 'new'">
				<div class="" align="center" v-show="!Narticle.length">No more content</div>
				<div v-for="titem in Narticle">
				  <article-Item :data="titem"></article-Item>
				</div>
			</div>
			<!-- exhibition press -->
			<div class="list-wrap clearfix" v-show="Newsc == 'exhibition'">
				<div class="" align="center" v-show="!EXarticle.length">No more content</div>
				<div v-for="titem in EXarticle">
				  <article-Item :data="titem"></article-Item>
				</div>
			</div>
			<pagination v-if="Newsc == ''" :noPage="''" class="pages" :pageInfo="EpageInfo" @change="Epagechange"></pagination>
			<pagination v-if="Newsc == 'new'" :noPage="''" class="pages" :pageInfo="NpageInfo" @change="Npagechange"></pagination>
			<pagination v-if="Newsc == 'exhibition'" :noPage="''" class="pages" :pageInfo="EXpageInfo" @change="EXpagechange"></pagination>
		</div>
	</div>
</template>
<script>
	import levelbar from '~components/levelbar';
	import articleItem from '~components/articleItem.vue';
	import pagination from '~components/pagination.vue';
	import imgUrl from '~assets/images/navImg.jpg';
	import request from '~plugins/axios';
	export default {
		name: 'articleList',
		head() {
			return {
				title: 'Article',
				meta: [
					{ name: 'description', content: '' }
				]
			}
		},
		components: {
			levelbar,
			articleItem,
			pagination
		},
		data() {
			return {
				isLoad: false,
				prefixImg: process.env.prefixImg
			}
		},
		fetch({ store, params, query, isServer }) {
		},
		asyncData({ store, query, isServer }) {
		  var unifyMark = [];
		  switch(query.newsc){
        case 'new':
          unifyMark.push('NEW_PRODUCTS')
          break;
        case 'exhibition':
          unifyMark.push('EXHIBITION_FOCUS')
          break;
        default:
          unifyMark.push('ENTERPRISE_PRESS')
          break;
      }
			return request.get('/article/list', {
				params: {
					state: 1,
					pageNo: query.page ? query.page : 1,
					pageSize: 12,
					categoryUnifyMarks: unifyMark
				}
			}).then(response => {
				let data = response.data;
				if (data.errorInfo.errorCode === 200) {
					return {
						EpageInfo: {
							total: Number(data.data.count),
							current: Number(query.page) ? Number(query.page) : 1,
							pagenum: 12,
							pagegroup: 4
						},
						NpageInfo: {
						  total: Number(data.data.count),
              current: Number(query.page) ? Number(query.page) : 1,
              pagenum: 12,
              pagegroup: 4
            },
						EXpageInfo: {
              total: Number(data.data.count),
              current: Number(query.page) ? Number(query.page) : 1,
              pagenum: 12,
              pagegroup: 4
            },
            Earticle: query.newsc ? [] : data.data.list,
            Narticle: query.newsc === 'new' ? data.data.list : [],
            EXarticle: query.newsc === 'exhibition' ? data.data.list : []
					}
				}
			}).catch(err => console.log(err))
		},
		beforeUpdate() {

		},
		created() {
			// this.assignEvent();
		},
		mounted() {
			this.initEvents();
		},
		methods: {
			assignEvent() {
				// Object.assign(this.EpageInfo, {
				// 	current: Number(this.$route.query.page) || 1,
				// 	total: this.Earticle.count
				// });
				// Object.assign(this.TpageInfo, {
				// 	current: Number(this.$route.query.page) || 1,
				// 	total: this.Tarticle.count
				// })
			},
			Tpagechange(current) {
				// this.TpageInfo.current = current;
				// let options = {
				// 	state: false,
				// 	query: {
				// 		state: 1,
				// 		pageNo: current,
				// 		pageSize: 9,
				// 		categoryUnifyMarks: ['TEAM_NEWS']
				// 	}
				// }
				// this.TpageChange(options)
			},
			Epagechange(current) {
				// this.EpageInfo.current = current;
				// let options = {
				// 	state: false,
				// 	query: {
				// 		state: 1,
				// 		pageNo: current,
				// 		pageSize: 9,
				// 		categoryUnifyMarks: ['ENTERPRISE_PRESS']
				// 	}
				// }
				// this.EpageChange(options)
			},
			EpageChange(options) {
				// this.isLoad = true;
				// this.$store.dispatch('fetchEArList', options.query).then(response => {
				// 	this.isLoad = false;
				// })
			},
			TpageChange(options) {
				// this.isLoad = true;
				// this.$store.dispatch('fetchTArList', options.query).then(response => {
				// 	this.isLoad = false;
				// })
			},
      Npagechange(options) {
      },
			EXpagechange(options) {
      },
			initEvents() {
				var tabs = $(".tabs-li");
				var listWrap = $(".list-wrap");
				var pages = $(".pages");
				var tabsLink = tabs.find("a");
				tabs.on("click", function () {
					var index = $(this).index();
					tabs.removeClass('active');
					$(this).addClass('active');
				})
				tabsLink.on("touchstart", function () {
					var el = $(this);
					var link = el.attr('href');
					window.location = link;
				})
			}
		},
		computed: {
			Newsc() {
				return this.$route.query.newsc || ''
			},
			customPath() {
			  //return this.Newsc ? '?newsc=team' : ''
        switch(this.Newsc){
          case 'new':
            return '?newsc=new'
            break;
          case 'exhibition':
            return '?newsc=exhibition'
            break;
          default:
            return ''
            break;
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
            name: this.Newsc,
            path: '/news' + this.customPath
          }
        ]
      }
		}
	}

</script>
<style lang="less">
	.NewList-page {
		background: #ededed;
	}

	.head-tabs {
		border-bottom: 1px solid #909090;
		margin-bottom: 15px;
		text-align: center;
	}

	.head-tabs ul {
		display: inline-block;
		margin: 0 auto;
		min-width: 300px;
	}

	.tabs-li {
		cursor: pointer;
		position: relative;
		box-sizing: border-box;
		float: left;
		margin-left: 60px;
		font-size: 22px;
		color: #000;
		transition: all 0.5s ease;
	}

	.tabs-li a {
		display: block;
		padding: 15px 0;
	}

	.tabs-line {
		position: absolute;
		bottom: -2px;
		left: 0;
		width: 0px;
		height: 4px;
		background: #e71018;
		transition: all 0.5s ease;
	}

	.active .tabs-line {
		width: 100%;
	}

	.tabs-li:hover {
		color: #e71018;
		.tabs-line {
			width: 100%;
		}
	}

	.tabs-li.active a {
		color: #e71018;
		text-decoration: none;
	}

	.list-wrap {
		.list-item {
			padding: 5px;
			div {
				background: #fff;
				padding: 10px;
				padding-bottom: 30px;
				.list-title {
					margin: 15px 0;
					font-size: 22px;
					line-height: 1.5;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					color: #000;
					margin-bottom: 10px;
				}
				.list-detail {
					color: #555555;
					font-size: 16px;
					overflow: hidden;
				}
			}
			img {
				width: 100%;
			}
		}
	}
  //ipad
	@media (min-width:768px) and (max-width:992px) {
		.NewList-page {
			.tabs-li {
				margin-left: 25px;
			}
		}
	} //phone
	@media (min-width:0px) and (max-width:767px) {
		.NewList-page {
			.news-container {
				padding: 0;
			}
			.tabs-li {
				margin-left: 12px;
        font-size:19px;
			}
      .tabs-li:first-child{
        margin-left: 0px;
      }
			.list-wrap {
				.list-item div {
					.list-title {
						font-size: 20px;
						font-weight: 400;
						line-height: 1.7;
					}
				}
			}
		}
	}
  @media (min-width:0px) and (max-width:320px){
    .NewList-page {
      .news-container {
        padding: 0;
      }
      .tabs-li {
        margin-left: 9px;
        font-size: 19px;
      }
      .tabs-li:first-child{
        margin-left: 0px;
      }
    }
  }
</style>
