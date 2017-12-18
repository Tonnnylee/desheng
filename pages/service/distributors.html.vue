<template>
	<div class="ServiceSupport-page page-top">
		<levelbar :customRouter="customRouter"></levelbar>
    <!--<nav-fix :data="navs"></nav-fix>-->
		<div class="container">
			<header class="intro-head">
         <h1>International Distributors</h1>
         <p>Deliver Good Sound</p>
			</header>
      <div class="supporter_filter_wrap">
        <div class="fl">
          <p>Please note that Takstar does not currently transact product sales directly to end-users outside of China.</p>
          <p>If you would like to purchase a Takstar product,please contact your nearestAuthorized Distribution Centre listed as follows,</p>
          <p>If you have enquires on purchasing products that are according to your specific design,please send email to sales@takstar.com</p>
        </div>
        <div class="fr">
          <select v-model="selected" class="service_selectDown">
            <option value="" selected>ALL</option>
            <option value="ARGENTINA" >ARGENTINA BANGLADESH</option>
            <option value="BRAZIL">BRAZIL</option>
            <option value="COLOMBIA">COLOMBIA</option>
            <option value="CHILE">CHILE</option>
            <option value="ISRAEL">ISRAEL</option>
            <option value="ITALY">ITALY</option>
            <option value="INDONESIA">INDONESIA</option>
            <option value="KAZAKHSTAN">KAZAKHSTAN</option>
            <option value="KOREA">KOREA</option>
            <option value="LITHUANIA">LITHUANIA</option>
            <option value="MEXICO">MEXICO</option>
            <option value="MOROCCO">MOROCCO</option>
            <option value="MYANMAR">MYANMAR</option>
            <option value="PAKISTAN">PAKISTAN</option>
            <option value="SOUTH AFRICA">SOUTH AFRICA</option>
            <option value="UKRAINE">UKRAINE</option>
            <option value="UNITED KINGDOM">UNITED KINGDOM</option>
            <option value="VIETNAM">VIETNAM</option>
          </select>
        </div>
      </div>
      <div v-if="isLoad" class="loader"><span>Loading...</span></div>
			<div class="dis-list col-lg-6 col-md-6 col-sm-12 col-xs-12" v-for="ls in articles" v-show="!isLoad">
				<div v-html="ls.content">
				</div>
			</div>
		</div>
    <div v-if="serCount === '0' && !isLoad" class="notFound">
      <div class="notFound-wrap">
        <img src="../../assets/images/notdisplay.jpg">
      </div>
    </div>
		<pagination :pageInfo="pageInfo" @change="pagechange"></pagination>
    <div class="container">
      <p class="supporter_bottom_p">If you have purchased a Takstar product, and have any enquiry on the service and repair issues, please find the contact information on the Contact Us section of this website, or contact your nearest Authorized Distribution Centre.</p>
    </div>
	</div>
</template>

<script>
	import levelbar from '~components/levelbar';
	import pagination from '~components/pagination.vue';
  import navFix from '../../components/navFix.vue';

	export default {
		name: 'service',
		head() {
			return {
				title: 'International Distributors',
				meta: [
					{ name: 'description', content: 'Since having cooperative distributors in over 20 countries，TAKSTAR will continue to develop cooperation with more countries and regions.' }
				]
			}
		},
		components: {
			levelbar,
			pagination,
      navFix
		},
		watch: {
		  selected() {
		    this.selectText = $(".service_selectDown option:selected").text();
		    this.searchData();
      }
    },
		async fetch({ store, params }) {
			   var serviceList = await store.dispatch('fetchServiceList', {
					state:1,
					pageNo: 1,
					pageSize: 6,
           categoryUnifyMarks:["INTERNATIONAL_DISTRIBUTORS"]
				});
		},
		data() {
			return {
				isLoad: false,
        selected: '',
				selectText: '',
				pageInfo: {
					total: 100,
					current: 1,
					pagenum: 6,
					pagegroup: 5
				}
			}
		},
		created() {
			this.pageInfo.total = this.serCount;
		},
		methods: {
			pagechange: function (current) {
				this.pageInfo.current = current;
				let options = {
					state:1,
					pageNo: current,
					pageSize: 6,
          categoryUnifyMarks:["INTERNATIONAL_DISTRIBUTORS"]
				}
				this.pageChange(options)
			},
			pageChange(options) {
				this.isLoad = true;
				this.$store.dispatch('fetchServiceList', options).then(response => {
					this.isLoad = false;
				})
			},
      searchData(){
			  var vm = this;
			  this.isLoad = true;
			  this.$store.dispatch('fetchServiceList', {
          state:1,
          pageNo: 1,
          pageSize: 6,
          kw: vm.selected,
          categoryUnifyMarks:["INTERNATIONAL_DISTRIBUTORS"]
        }).then(response => {
          this.isLoad = false
          vm.pageInfo.total = vm.serCount
        })
      }
		},
		computed: {
			articles() {
				return this.$store.state.article.serList
			},
      serCount() {
			    return this.$store.state.article.serCount
      },
      customRouter(){
			    return [
            {
              name: 'Home',
              path: '/'
            },
            {
              name: 'Service',
              path: '/service'
            },
            {
                name: 'Distributors',
                path: '/service/distributors.html'
            }
          ]
      }
		}
	}

</script>

<style lang="less">
	.ServiceSupport-page {
		background: #ededed;
		padding-bottom: 20px;
    .notFound{
      .notFound-wrap{
        margin:30px auto;
      }
    }
		.intro-head {
			text-align: center;
			width: 100%;
			background: url("../../assets/images/support&service.jpg") center center no-repeat;
			height: 326px;
			h1 {
				font-size: 40px;
				color: #fff;
				padding-top: 85px;
        padding-bottom: 0px;
			}
			p {
				font-size: 53px;
        font-weight:300;
				color: #fff;
				width: 80%;
        line-height: 1.5;
				margin: 0 auto;
			}
		}
    .supporter_filter_wrap{
      box-sizing: border-box;
      padding:25px 25px;
      padding-right:0;
      overflow: hidden;
      padding-bottom:0;
      p{
        font-size:13px;
        color:#757575;
        line-height:25px;
      }
    }
    .service_selectDown{
      width: 280px;
      margin-top: 27px;
      border: 1px solid #ddd;
      padding: 10px;
      background-color: #fff;
      background-repeat: no-repeat;
      font-weight: 300;
    }
    .supporter_bottom_p{
      color:#666;
      font-size:14px;
      margin-bottom:60px;
    }
	}

  @media (min-width:993px) {
    .dis-list:nth-child(2n) {
      padding-right: 0;
    }
    .container .dis-list:nth-child(2n+1) {
      padding-left: 0;
    }
  }

	.dis-list a {
		width: 100%;
	}

	.dis-list div {
		width: 100%;
		background: #fff;
		box-sizing: border-box;
		padding: 15px;
		margin-top: 25px;
		li {
			line-height: 2.2;
			color: #666;
			font-size: 15px;
			p:nth-child(1) {
				color: #949494;
        display:inline;
			}
      p:nth-child(2){
        color:#000;
        display:inline;
        font-weight:300;
      }
		}
    ul li:nth-child(1){
      p{
        color:#000;
      }
    }
	}
	.dis-list h2 {
		padding-bottom: 15px;
		border-bottom: 2px solid #000;
		margin-bottom: 10px;
		font-size: 20px;
		color: #e7111b;
    p{
      display:inline-block;
    }
		p:nth-child(2) {
			color: #999999;
			font-size: 14px;
			margin-left: 10px;
		}
	}

  //ipad
  @media (max-width:992px) and (min-width:769px) {
    .dis-list{
      padding:0px;
    }
  }
  //phone
	@media (max-width:768px) and (min-width:0px) {
		.ServiceSupport-page {
      .intro-head{
        margin-top:15px;
        h1{
          padding-top:90px;
          font-size:33px;
        }
        p{
          font-size:33px;
        }
      }
      .dis-list{
        padding:0px;
        h2{
          p{
            display: block;
            line-height: 25px;
            margin-left:0;
          }
        }
      }
		}
	}

  @media (max-width:414px){
    .ServiceSupport-page {
      .supporter_filter_wrap{
        padding:10px;
        p{
          font-size:15px;
          font-weight:300;
        }
        .fr{
          margin:0 auto;
          width:80%;
          float:inherit !important;
        }
      }
    }
  }
  @media (max-width:320px){
    .ServiceSupport-page{
      .service_selectDown{
        width:253px;
      }
    }
  }
</style>
