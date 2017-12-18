<template>
	<div class="about-page page-top">
    <!--<nav-fix :data="navs"></nav-fix>-->
		<common :data="content"></common>
		<div class="container">
			<news-middle :newsType="newsType"></news-middle>
		</div>
    <div class="company-img">
       <h2>COMPANY ORGANIZATION CHART</h2>
      <img v-show="!isMobile" src="../../static/images/company-architecture.jpg" />
      <img v-show="isMobile" src="../../static/images/mingdan.jpg" />
    </div>
    <div class="merit-wrap">
      <div class="merit-left">
        <div class="scrollbar-wrap">
          <h2>Qualification and Honor</h2>
          <vue-scrollbar style="background:#e70f20;" class="my-scrollbar vueScrollbar" ref="Scrollbar">
            <div class="textConten">
              <div class="text-list">
                <p>In 2002，TAKSTAR acquired the Adopting International Standard Product Marking Certificate by</p>
                <p>Guangdong  Administration of Quality and Technology Supervision.  TAKSTAR products also conformed</p>
                <p>to international advanced standard and reached international advanced level.</p>
              </div>
              <div class="text-list">
                 <p>In 2003， TAKSTAR registered trademark TAKSTAR”and“得勝”， honoring as Guangdong famous brand. </p>
                 <p>It meant that TAKSTAR had been the registered trademark with better market credit and public</p>
                 <p>familiarity in Guangdong since 2003.</p>
              </div>
              <div class="text-list">
                <p>In 2005，TAKSTAR became the China Entertainment Technology Association Unit.  As an excellent </p>
                <p>enterprise in audio equipment industry，TAKSTAR would lead and promote production and technology</p>
                <p>of entertainment equipment.</p>
              </div>
              <div class="text-list">
                <p>In 2007，TAKSTAR successfully organized Guangdong Engineering Technology Research and</p>
                <p>Development Center. We qualified complete experimental condition of electro-acoustic engineering</p>
                <p>technology， owned professional teams with high-quality R&D and engineering design and testing.</p>
              </div>
              <div class="text-list">
                <p>In 2013，TAKSTAR was honored as the Guangdong Famous Brand Products by Guangdong Administration</p>
                <p>of Quality and Technology Supervision.  It was an appreciation of having suchadvantage than same</p>
                <p>industry  products among market share，brand popularity and product quality for TAKSTAR.</p>
              </div>
              <div class="text-list">
                <p>In 2014，TAKSTAR was successfully certified by ISO9001:2000 Quality Management System.</p>
                <p>It was the comprehensive testing of company management standard,</p>
                <p>as well as the important guarantee for company’s  stable and healthy development.</p>
              </div>
              <div class="text-list">
                <p>In 2016，TAKSTAR was  awarded as National Advantageous Enterprise of Intellectual Property Right by State Intellectual Property Office of The P.R.C.</p>
                <p>We had become a leading enterprise with independent intellectual property right and international competitive advantage.</p>
              </div>
              <div class="text-list">
                <p>In 2007 and 2016, TAKSTAR was titled the High-tech Enterprise twice,</p>
                <p>which was the recognition for our ability of independent technical innovation and High-end technology R&D.</p>
              </div>
              <div class="text-list">
                <p>On August 2017, TAKSTAR was successfully certified by ISO 9001:2015 Quality Management,</p>
                <p>ISO 14001：2015 Environmental Management and OHSAS 18001：2007 Occupational Health and Safety Management.</p>
              </div>
            </div>
          </vue-scrollbar>
        </div>
      </div>
      <div class="merit">
        <div v-swiper:mySwiper="swiperOption">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="banner in banners">
              <div class="bannerWrap">
                <img :src="banner">
              </div>
            </div>
          </div>
          <div class="swiper-button-prev swiper-button-gray-left"></div>
          <div class="swiper-button-next swiper-button-gray-right"></div>
        </div>
      </div>
    </div>


		<div class="container history-content">
      <h2>Development Process</h2>
			<div class="History">
				<div v-swiper:mySwiper2="HistoryOption">
					<div class="swiper-wrapper">
						<div class="swiper-slide" v-for="his in history">
							<span>{{his.year}}</span>
						</div>
					</div>
				</div>
				<div class="swiper-button-prev swiper-button-gray-left history-prev"></div>
				<div class="swiper-button-next swiper-button-gray-right history-next"></div>
			</div>

			<div class="HistoryContent" v-for="(con,index) in history" v-show="index === historyCurPrive">
				<div class="HistoryContentRight">
					<h1>{{con.title1}}</h1>
					<p>{{ con.p1 }}</p>
					<p>{{ con.p2 }}</p>
				</div>
				<div class="HistoryContentLeft">
					<h1>{{ con.title2 }}</h1>
					<p>{{ con.p3 }}</p>
					<p>{{ con.p4 }}</p>
				</div>
				<div class="HistoryContentRight">
					<h1>{{ con.title3 }}</h1>
					<p>{{ con.p5 }}</p>
					<p>{{ con.p6 }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import navFix from '../../components/navFix.vue';
	import newsMiddle from '~components/AboutUs/news.vue';
	import common from '../../components/common.vue';
	import pcHeader from '../../assets/images/header_bg2.jpg';
	import mHeader from '../../assets/images/header_bg_phone2.jpg';
  import VueScrollbar from '../../components/vueScrollBar/vue-scrollbar.vue';
  import '../../assets/css/vue-scrollbar.css';
	export default {
		name: 'company',
		head() {
			return {
				title: 'Company',
				meta: [
					{ name: 'description', content: '' }
				]
			}
		},
		data() {
			return {
        isMobile:false,
				banners: ['/images/company/1.jpg', '/images/company/2.jpg', '/images/company/3.jpg',
          '/images/company/4.jpg',
          '/images/company/5.jpg',
          '/images/company/6.jpg',
          '/images/company/7.jpg',
          '/images/company/8.jpg',
          '/images/company/9.jpg',
          '/images/company/10.jpg',
          '/images/company/11.jpg',
          '/images/company/12.jpg',
          '/images/company/13.jpg',
          '/images/company/14.jpg',
          '/images/company/15.jpg',
        ],
				swiperOption: {
					nextButton: '.swiper-button-next',
					prevButton: '.swiper-button-prev',
					slidesPerView: 1,
					spaceBetween: 30,
					loop: true
				},
				historyCurPrive: 1,
				history: [
          {
            year: '1995-1999',
            title1: '',
            p1: '• Guangdong TAKSTAR Electronics Co., Ltd. was founded On may of 1995',
            p2: '',
            title2: 'Untraceable month of 1999',
            p3: '• In 1999, TAKSTAR  won the "quality of advanced units of private enterprises in Guangdong province" title',
            p4: '',
            title3: '',
            p5: '',
            p6: ''
          },
          {
            year: 2002,
            title1: 'December',
            p1: '• TAKSTAR  passed the certification of international standard product mark',
            P2: '',
            title2: 'August',
            p3: '• TAKSTAR  successfully passed the ISO9001:2000 quality management system certification',
            p4: '',
            title3: '',
            p5: '',
            p6: ''
          },
          {
            year: 2003,
            title1: 'January',
            p1: '• TAKSTAR  registered trademark "1.gif", "2.gif" was named "Guangdong province famous trademark"',
            p2: '',
            title2: 'October',
            p3: '• TAKSTAR  was named "China‘s market quality, customer satisfaction, the most competitive," the first brand"',
            p4: '',
            title3: '',
            p5: '',
            p6: ''
          },
          {
            year: 2004,
            title1: 'June',
            p1: "• the company's RD and production of loudspeakers through 3C certification",
            p2: '',
            title2: 'November',
            p3: '• the company developed and produced microphone and headset products through CE certification',
            p4: '',
            title3: '',
            p5: '',
            p6: ''
          },
          {
            year: 2005,
            title1: 'April',
            p1: '• the company launched a comprehensive security system Zaoxin victory',
            p2: '',
            title2: 'June',
            p3: '• wins the company R &amp; D, production of "CM-450 type vacuum tube condenser microphone" won the "scientific and Technological Progress Award" two prize',
            p4: '',
            title3: 'July',
            p5: '• wins the company R &amp; D, production of "CM-450 type vacuum tube condenser microphone" won the Guangdong key new product certificate',
            p6: ''
          },
          {
            year : 2006,
            title1: 'Untraceable month of 2006',
            p1: '• In 2006, the industrial park was completed, covering an area of 29375 square meters',
            p2: '',
            title2: 'June',
            p3: "• TAKSTAR  company's R &amp; D and production of 'UHF-968 type wireless headset' won the 'scientific and Technological Progress Award' three prize",
            p4: ''
          },
          {
            year : 2007,
            title1: 'April',
            p1: '• TAKSTAR  company was named "high-tech enterprises."',
            p2: '',
            title2: 'May',
            p3: '• the company successfully set up "Guangdong electroacoustic engineering technology research and development center"',
            p4: '',
            title3: 'December',
            p5: '• the company developed and produced "small diaphragm capacitor microphone" to obtain the certificate of scientific achievements',
            p6: '',
            title3: '',
            p5: '',
            p6: ""
          },
          {
            year: 2008,
            title1 : 'January',
            p1: "• TAKSTAR  company to become China brand Federation vice chairman of the electroacoustic industry unit'.",
            p2: "",
            title2: 'August',
            p3: '• wins the company R &amp; D, production of "small vibration membrane condenser microphone" won the Huizhou science and Technology Award three prize',
            p4: '',
            title3: 'November',
            p4 : '',
            p6: '• the R &amp; D and production of "TS-650 headset" won the certificate of scientific and technological achievements'
          },
          {
            year: 2009,
            title1: 'July',
            p1:'• wins the company R &amp; D, production of "small vibration membrane condenser microphone" won the Guangdong provincial science and Technology Award three prize',
            p2:'',
            title2: 'December',
            p3:'• TAKSTAR  brand was selected as "ten major national brands"',
            p4: '',
            title3: '',
            p5: '',
            p6: ""
          },
          {
            year: 2010,
            title1: 'April',
            p1: '• won the company by the Huizhou Intellectual Property Office awarded the "intellectual property rights advantage enterprise" glorious title',
            p2: '',
            title2: 'May',
            p3: '• won the company was awarded the Boluo County intellectual property rights advanced units"',
            p4: '',
            title3: 'September',
            p5: '• won the company "TS-650 type wired headset" development, won the Boluo county science and technology award honor certificate',
            p6: '• won the company "TS-650 type wired headset" development, won the "Huizhou science and technology award certificate."'
          },
          {
            year: 2011,
            title1: 'March',
            p1: '• the winner named "2010 HC Victory Cup" ceremony was held ceremoniously',
            p2: '',
            title2: 'May',
            p3: '• won the company won the seventh China (Shenzhen) International Cultural Industry Expo Huizhou exhibition excellent exhibition award"',
            p4: '• won the company was awarded the Boluo County intellectual property rights advanced units"',
            title3: 'Untraceable month of 2011',
            p5: '• In 2011, TAKSTAR  brand was named "top ten national brands"',
            p6: '• In 2011, TAKSTAR  brand was named "Ten Excellent microphone and microphone Brand Award"'
          },
          {
            year: 2012,
            title1: 'August ',
            p1: '• won the "2012 Guangdong intellectual property rights model enterprise" title',
            p2: '',
            title2: 'Untraceable month of 2012',
            p3: '• TAKSTAR  brand was named "top ten microphone brand"',
            p4: '',
            title3: '',
            p5: '',
            p6: ''
          },
          {
            year: 2013,
            title1: 'October',
            p1: '• the 400-6828-333 national service hotline was officially launched',
            p2: '',
            title2: 'December',
            p3: '• TAKSTAR products were identified as "Guangdong famous brand products"',
            p4: '',
            title3: 'Untraceable month of 2013',
            p5: '• TAKSTAR  brand was named "top ten microphone brand"',
            p6: '• TAKSTAR  brand was named "top ten national brands"'
          },
          {
            year: 2014,
            title1: 'January',
            p1: '• won the trademark by the State Administration for Industry and Commerce Trademark Review Committee named "China"s well-known trademarks."',
            p2: '',
            title2: 'June',
            p3: '• won the first dealer professional audio system and engineering training completed successfully',
            p4: '',
            title3: 'September',
            p5: '• winning brand open "micro era" - winning official WeChat service number formally launched',
            p6: '• successfully passed the quality management system certification ISO9001:2008'
          },
          {
            year: 2015,
            title1: 'January',
            p1: '• TAKSTAR  park officially put into production operations',
            p2: '',
            title2: 'April',
            p3: '• to hold the 20th anniversary "successful" celebration party, bustling scene racket.',
            p4: '',
            title3: 'December',
            p5: '• successfully organized the second dealer professional sound system and engineering application training',
            p6: ''
          },
          {
            year: 2016,
            title1: 'January',
            p1: '• won by the Huangpu District Shanghai Volunteers Association awarded the "2016 annual public welfare Ambassador Award", "love and charity unit."',
            p2: '',
            title2: 'October',
            p3: '• the company won the "500 strong manufacturing enterprises in Guangdong province"',
            p4: '',
            title3: 'December',
            p5: '• the  company  was  identified  by the national  hi tech  enterprise',
            p6: '• the product was honored as "famous brand of Guangdong province"'
          },
          {
            year: 2017,
            title1: 'January',
            p1: '• TAKSTAR became a member of the China Electronics society',
            p2: '• TAKSTAR  won  the "excellent brand demonstration enterprise" in Guangdong province',
            title2: 'February',
            p3: '• TAKSTAR   became a member of China educational equipment industry association',
            p4: '',
            title3: '',
            p5: '',
            p6: ''
          }
        ],
				HistoryOption: {
					nextButton: '.history-next',
					prevButton: '.history-prev',
					slidesPerView: 6,
					initialSlide: 16,
					centeredSlides: true,
					paginationClickable: true,
          slideToClickedSlide:true,
					spaceBetween: 30,
          mousewheelControl: true,
					onSlideChangeEnd: swiper => {
						this.historyCurPrive = swiper.realIndex;
					}
				},
				navs: [
					{
						title: 'Company Profile',
						domain:'about',
						path: 'company'
					},
					{
						title: 'Factory Tour',
						domain:'about',
						path: 'factoryTour'
					},
					{
						title: 'R&D',
						domain:'about',
						path: 'rd'
					},
					{
						title: 'Quality Control',
						domain:'about',
						path: 'quality'
					},
					{
						title: 'Contact Us',
						domain:'about',
						path: 'feedback'
					}
				],
				newsType: [
          {
            html: `
								<h1>COMPANY PROFILE</h1>
								<p>Established in 1995, Takstar is a leading producer in electro-acoustic industry, commencing as a microphone manufacturer, its product range has grown up to become diversified, which comprises professional microphone, headphone, voice amplifier and integrated application products.
 With a large production building area up to 45000㎡, 1000 employees, complete processing workshops and advanced equipments, Takstar is acknowledged  as one of the largest electro-acoustic production bases in the world and a comprehensive corporation consolidating research and development, manufacture, sales and after-service.</p>
							`,
            type: 'newsText'
          },
          {
            html: '/images/company-profile-sm2.jpg',
            type: 'newsImg'
          },
          {
            html: '/images/company-profile-sm.jpg',
            type: 'newsImg'
          },
          {
            html: `
								<h1>Social mission</h1>
								<p style="padding-bottom:2em">to provide users with high quality audio experience and innovative applications for acoustic applications</p>
								<h1>Enterprise requirements</h1>
								<p style="padding-bottom:2em">to play creative, optimize the process, quality control, to meet customers</p>
								<h1>Cultural concept</h1>
								<p style="padding-bottom:2em">innovation, efficiency, respect, responsibility</p>
							`,
            type: 'newsText'
          }
        ],
				content: {
					title: 'Company Profile',
          pcSrc: pcHeader,
          mSrc: mHeader,
					summary: "You can hear it"
				}
			}
		},
		components: {
			navFix,
			newsMiddle,
			common,
      VueScrollbar
		},
		mounted() {
			this.handleResize();
			window.addEventListener('resize', this.handleResize);
      this.initEvent();
		},
		beforeDestroy() {
			window.removeEventListener('resize', this.handleResize);
		},
		methods: {
		  initEvent(){
		    var swipers = $(".swiper-slide");
		    swipers.on("click",function(){
		      var index = $(this).index();
		      var HistoryContent = $(".HistoryContent");
          HistoryContent.hide();
          $(HistoryContent[index]).show();
        })
      },
			handleResize(e) {
				if (document.documentElement.clientWidth + 23 <= 768) {
				    this.isMobile = true;
					this.newsType = [
						{
							html: '/images/company-profile-sm.jpg',
							type: 'newsImg'
						},
						{
							html: `
								<h1>COMPANY PROFILE</h1>
							<p>Established in 1995, Takstar is a leading producer in electro-acoustic industry, commencing as a microphone manufacturer, its product range has grown up to become diversified, which comprises professional microphone, headphone, voice amplifier and integrated application products.
 With a large production building area up to 45000㎡, 1000 employees, complete processing workshops and advanced equipments, Takstar is acknowledged  as one of the largest electro-acoustic production bases in the world and a comprehensive corporation consolidating research and development, manufacture, sales and after-service.</p>
							`,
							type: 'newsText'
						},
						{
							html: '/images/company-profile-sm2.jpg',
							type: 'newsImg'
						},
						{
							html: `
							<h1>Social mission</h1>
								<p style="padding-bottom:2em">to provide users with high quality audio experience and innovative applications for acoustic applications</p>
								<h1>Enterprise requirements</h1>
								<p style="padding-bottom:2em">to play creative, optimize the process, quality control, to meet customers</p>
								<h1>Cultural concept</h1>
								<p style="padding-bottom:2em">innovation, efficiency, respect, responsibility</p>
							`,
							type: 'newsText'
						}
					]
				} else {
					this.newsType = [
						{
							html: `
								<h1>COMPANY PROFILE</h1>
								<p>Established in 1995, Takstar is a leading producer in electro-acoustic industry, commencing as a microphone manufacturer, its product range has grown up to become diversified, which comprises professional microphone, headphone, voice amplifier and integrated application products.
 <br/>With a large production building area up to 45000㎡, 1000 employees, complete processing workshops and advanced equipments, Takstar is acknowledged  as one of the largest <br/> electro-acoustic production bases in the world and a comprehensive corporation consolidating research and development, manufacture, sales and after-service.</p>
							`,
							type: 'newsText'
						},
						{
              html: '/images/company-profile-sm2.jpg',
							type: 'newsImg'
						},
						{
              html: '/images/company-profile-sm.jpg',
							type: 'newsImg'
						},
						{
							html: `
								<h1>Takstar Mission</h1>
								<p style="padding-bottom:2em">To offer quality sound experience and provide creative applied sound solutions for world-wide users.</p>
								<h1>Our Requirements</h1>
								<p style="padding-bottom:2em">Our Requirements, Optimize Process, Control Quality ,Satisfy Customers</p>
								<h1>Our Culture</h1>
								<p style="padding-bottom:2em">Innovation, Efficiency, Respect, Responsibility</p>
							`,
							type: 'newsText'
						}
					]
				}
			}
		}
	}

</script>

<style lang="less" scoped>
  .company-img{
    padding-top:50px;
    padding-bottom:50px;
    background:#f6f6f6;
    width:100%;
    .company-bg{
      width:100%;
      background:url("../../static/images/company-architecture.jpg") no-repeat center center;
      height:596px;
    }
    img{
      width:99%;
    }
    h2{
      font-size:3em;
      margin:20px 0;
      margin-bottom:15px;
      text-align: center;
    }
  }
  .merit-wrap{
    overflow: hidden;
    .merit-left{
      float:left;
      height:720px;
      width:50%;
      box-sizing: border-box;
      padding:45px;
      padding-right:10px;
      background:#e70f20;
      .scrollbar-wrap{
        float:right;
        height:100%;
        width:80%;
        color:#fff;
        background:#e70f20;
        h2{
          font-size:2.8em;
          margin-bottom:40px;
        }
        .vueScrollbar{
          height:88%;
        }
        .textConten{
          background:#e70f20;
          padding-right:20px;
          .text-list{
            margin:20px;
            margin-left:35px;
            position:relative;
            &:first-child{
              margin-top:0;
            }
            &:before{
               position:absolute;
               content:"";
               top:10px;
               left:-35px;
               width:18px;
               height:18px;
               border-radius:100%;
               background:#ecded4;
               border:2px solid #fff;
            }
            p{
              line-height:30px;
              font-size:15px;
            }
          }
        }
      }
    }
  }

	.merit {
		background: #4f4f4f !important;
		margin: 30px 0;
    margin-top:0;
    width:50%;
    height:720px;
    float:right;
    .swiper-container{
      height: 100%;
      width: 80%;
      margin-left: 10px;
      .bannerWrap{
        padding-top: 136px;
      }
    }
	}
  @media (max-width: 1024px) {
    .merit-wrap {
      .merit-left {
        .scrollbar-wrap {
          width:100%;
          h2 {
            font-size: 2.0em;
          }
        }
      }
    }
  }
  //ipad
  @media (max-width:768px){
    .company-img {
      padding-top:1px;
      h2{
        font-size:2em;
      }
    }
    .merit-wrap{
      .merit-left{
        width:100%;
        height:auto !important;
        .scrollbar-wrap {
          width:100%;
          .textConten{
            background:#e70f20;
            padding-right:10px;
            .text-list{
              margin-right:0;
              position:relative;
            }
          }
        }
      }
      .merit{
        width:100%;
        margin-bottom:0;
        .swiper-container{
          width:100%;
        }
      }
    }
  }
  //phone
  @media (max-width:414px){
    .company-img h2{
      font-size:1.8em;
    }
    .merit-wrap{
      .merit-left{
        padding:20px;
        height:auto !important;
        .scrollbar-wrap{
          width:100%;
          h2{
            font-size:2em;
            margin-bottom:12px;
          }
        }
        .vue-scrollbar__scrollbar-vertical{
          width:6px;
          .scrollbar{
            width:6px;
          }
        }
      }
      .merit{
        height:520px;
        .swiper-slide .bannerWrap{
          padding-top:100px;
          img{
            width: 75%;
            position: absolute;
            top: 0px;
            left: 0;
            bottom: 0;
            right: 0;
            margin: auto;
          }
        }
      }
    }
    .about-page{
      .history-content{
        > h2{
          font-size:35px;
        }
      }
      .History{
        margin:15px auto 15px auto;
        .swiper-slide{
          span{
            font-size:1.2em;
          }
        }
        .swiper-slide-active{
          span{
            font-size:1.5em;
          }
        }
      }
    }
  }
	.swiper-container-horizontal>.swiper-pagination-bullets {
		background: #ece3dc !important;
	}

	.swiper-button-gray-left {
		left: 8%;
		background: url(../../assets/images/left.png) no-repeat center;
	}

	.swiper-button-gray-right {
		right: 8%;
		background: url(../../assets/images/right.png) no-repeat center;
	}

	.swiper-slide {
		.bannerWrap {
			text-align: center;
			padding: 30px;
			font-size: 18px;
			img {
        vertical-align: middle;
        width: 49%;
        min-width: 120px;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        margin: auto;
			}
			.swiper-slide-h1 {
				font-size: 1em;
				display: inline-block;
				vertical-align: middle;
				text-align: left;
				line-height: 24px;
				color: #000;
				font-weight: 300;
			}
		}
	}

  .history-content{
    > h2{
      font-size:45px;
      text-align: center;
      margin-top:20px;
    }
  }
	.History {
		position: relative;
		margin: 50px auto 30px auto;
		width: 40%;
		min-width: 220px;
		font-size: 17px;

		.swiper-slide {
			span {
				font-size: 1em;
				font-weight:300;
			}
      cursor: pointer;
		}
		.swiper-wrapper {
			align-items: flex-end;
			max-width: 450px;
		}
		.swiper-slide-active {
			span {
				font-size: 1.5em;
				color: #e70f20;
				font-weight: 400;
			}
			margin-right:50px !important;
		}
		.swiper-button-gray-left {
			left: -20%;
			top: 60%;
			background-size: 12px;
		}

		.swiper-button-gray-right {
			top: 60%;
			right: -20%;
			background-size: 12px;
		}
	}

	.HistoryContent {
		padding: 10px;
		min-height: 600px;
		font-size: 16px;
		background: url(../../assets/images/tuo.png) no-repeat center;
		.HistoryContentRight,
		.HistoryContentLeft {
			font-weight: 300;
			width: 50%;
			padding: 2% 3%;
      height:158px;
			h1 {
				color: #999;
				font-size: 1.5em;
				margin-bottom: 10px;
			}
			p {
				line-height: 24px;
				margin-bottom: 10px;
				color: #000;
				font-size: 1.1em;
			}
		}

		.HistoryContentRight {
			margin: 0 0 0 auto;
		}
		.HistoryContentLeft {
			text-align: right;
		}
	}
  //mobile
	@media (max-width:767px) {
    .merit{
      height:565px;
      .swiper-container{
        margin-left:0;
      }
    }
		.swiper-button-gray-left,
		.swiper-button-gray-right {
			background-size: 18px;
		}
    .swiper-button-gray-left{
      left:1%;
    }
    .swiper-button-gray-right{
      right:1.5%;
    }
		.swiper-slide .bannerWrap {
			font-size: 14px;
      padding:0;
      padding-top:115px;
			img {
				vertical-align: middle;
				width: 75%;
        position: absolute;
        top: 0px;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
			}
			.swiper-slide-h1 {
				display: block;
				margin-top: 25px;
				text-align: center;
			}
		}
		.History {
      width:70%;
			.swiper-button-gray-left,
			.swiper-button-gray-right {
				background-size: 10px;
			}

			.swiper-slide-active {
				margin-right: 40px !important;
			}
		}
		.HistoryContent {
			font-size: 14px;
			background-position: 0 10px;
			.HistoryContentLeft,
			.HistoryContentRight {
				margin: 0 0 0 auto;
				text-align: left;
				width: 100%;
				padding-left: 30px;
				min-height: 160px;
			}
		}

		.History {
			font-size: 13px;
		}
	} // pad
	@media (min-width:768px) and (max-width:992px) {
		.bannerWrap {
			font-size: 14px;
			img {
				vertical-align: middle;
				width: 30%;
			}
			.swiper-slide-h1 {
				display: block;
				width: 30%;
			}
		}
		.History {
			font-size: 15px;
		}
		.HistoryContent {
			font-size: 15px;
		}
	} // big pad
	@media (min-width:993px) and (max-width:1200px) {
		.bannerWrap {
			font-size: 14px;
			img {
				vertical-align: middle;
				width: 30%;
			}
			.swiper-slide-h1 {
				display: block;
				width: 30%;
			}
		}
	}
</style>
