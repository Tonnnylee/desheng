<template>
	<div class="footer-tabs">
		<div class="panel-group wrap" id="accordion" role="tablist" aria-multiselectable="true">
			<div class="panel">
				<div class="panel-heading" role="tab" id="headingOne">
					<h4 class="panel-title">
						<a role="button" class="collapsed tablink" data-toggle="collapse" data-parent="#accordion" href="#collapseOne2" aria-expanded="false"
						 aria-controls="collapseOne2">
	          <span class="fl">About us</span>
	          <span class="fr iconfont icon-arrow-t"></span>
	        </a>
					</h4>
				</div>
				<div id="collapseOne2" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
					<div class="panel-body">
						<p>
							<nuxt-link to="/about/company.html">Company Profile</nuxt-link>
						</p>
						<p>
							<nuxt-link to="/about/competence.html">Core Competence</nuxt-link>
						</p>
						<p>
							<nuxt-link to="/about/technology.html">Key Techology</nuxt-link>
						</p>
            <p>
              <nuxt-link to="/about/capacity.html">Production Capacity</nuxt-link>
            </p>
            <p>
              <nuxt-link to="/about/feedback.html">Contact Us</nuxt-link>
            </p>
					</div>
				</div>
			</div>
			<!-- end of panel -->
      <div class="panel">
        <div class="panel-heading" role="tab" id="headingFour">
          <h4 class="panel-title">
            <a class="collapsed tablink" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour2" aria-expanded="false"
               aria-controls="collapseFour2">
              <span class="fl">Products and Solutions</span>
              <span class="fr iconfont icon-arrow-t"></span>
            </a>
          </h4>
        </div>
        <div id="collapseFour2" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
          <div class="panel-body">
            <p><a href="/product/type?categoryUnifyMark=Headphone">Headphone</a></p>
            <p><a href="/product/type?categoryUnifyMark=Microphone">Microphone</a></p>
            <p><a href="/product/type?categoryUnifyMark=Protable_amplifier">Portable Amplifier</a></p>
            <p><a href="/product/type?categoryUnifyMark=Audio_system">Audio System</a></p>
            <p><a href="/product/type?categoryUnifyMark=Integrated_application">Integrated Application</a></p>
            <p><a href="/product/type?categoryUnifyMark=Accessory">Accessory</a></p>
            <p><a href="/service/solutions">Solutions</a></p>
          </div>
        </div>
      </div>
      <!-- end of panel -->
			<div class="panel">
				<div class="panel-heading" role="tab" id="headingTwo">
					<h4 class="panel-title">
						<a class="collapsed tablink" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo2" aria-expanded="false"
						 aria-controls="collapseTwo2">
	          <span class="fl">Service & Support</span>
	          <span class="fr iconfont icon-arrow-t"></span>
	        </a>
					</h4>
				</div>
				<div id="collapseTwo2" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
					<div class="panel-body">
						<p>
							<nuxt-link to="/service/professional.html">Professional OEM</nuxt-link>
						</p>
						<p>
							<nuxt-link to="/service/solutions.html">Solutions</nuxt-link>
						</p>
						<p>
							<nuxt-link to="/service/distributors.html">International Distributors</nuxt-link>
						</p>
						<p>
							<nuxt-link to="/service/download">Download Center</nuxt-link>
						</p>
						<p><a href="http://english.t3315.com/">Anti-fake Check</a></p>
					</div>
				</div>
			</div>
			<!-- end of panel -->
			<div class="panel">
				<div class="panel-heading" role="tab" id="headingThree">
					<h4 class="panel-title">
						<a class="collapsed tablink" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree2" aria-expanded="false"
						 aria-controls="collapseThree2">
	          <span class="fl">News</span>
	          <span class="fr iconfont icon-arrow-t"></span>
	        </a>
					</h4>
				</div>
				<div id="collapseThree2" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
					<div class="panel-body">
						<p>
							<nuxt-link to="/news">New Products</nuxt-link>
						</p>
            <p>
              <nuxt-link to="/news?newsc=new">Enterprise Press</nuxt-link>
            </p>
            <p>
              <nuxt-link to="/news?newsc=exhibition">Exhibitions</nuxt-link>
            </p>
            <p>
              <a href="javascript:;">Tel: 86-752-6383644</a>
            </p>
					</div>
				</div>
			</div>
			<!-- end of panel -->
			<div class="panel">
				<div class="panel-heading" role="tab" id="headingFive">
					<div class="panel-contacUs">
						<span style="color:#bdbdbd;">Contact Now :</span>
						<span class="ContactUs-wechat" @click.self="handleWechat">
							<div v-show="wechatVisibility"  class="wechatWrap">
									<div class="wechatImg" @click.self="HandlewechatVisibility($event)" v-show="wechatVisibility">
										<div class="imgBox">
												<i @click="wechatVisibility = false" class="iconfont icon-guanbi"></i>
												<img src="../assets/images/wechat.jpg" alt="">
												<h4>Open the WeChat and </br> search "takstar_gd" to follow us!</h4>
										</div>
									</div>
							</div>
						</span>
						<a href="skype: zhanggc.china@gmail.com?call" @click="skypeCheck">
              <img src="../assets/images/s.png" style="border: none;" alt="Call me!" />
            </a>
            <div v-show="skypeVisibility"  class="skypeWrap">
              <div class="skypeImg">
                <div class="imgBox">
                  <i @click="skypeVisibility = false" class="iconfont icon-guanbi"></i>
                  <h4>Skype account:</br> zhanggc.china@gmail.com</h4>
                </div>
              </div>
            </div>
					</div>
				</div>
			</div>
			<div class="panel">
				<div class="panel-heading" role="tab" id="headingFive">
					<h4 class="panel-copyright">
						<span>&copy; 1995-2017 Guangdong Takstar Electronic Co,Ltd.All Rights Reserved. Reproduction in whole or in part without permission
        is prohibited.</span>
					</h4>
				</div>
			</div>
			<!-- end of panel -->
		</div>
	</div>
</template>

<script>
	export default {
		name: 'footerPhone',
		data() {
			return {
				wechatVisibility: false,
        skypeVisibility: false
			}
		},
		mounted() {
			this.initTabs();
		},
		watch: {
			'$route': 'routerChange'
		},
		methods: {
      skypeCheck(){
        var vm = this;
        var yes = confirm("Have you installed skype?");
        if(yes){
          window.location = 'skype: zhanggc.china@gmail.com?call'
          vm.skypeVisibility = true;
          return true;
        }else{
          window.open("https://www.skype.com");
          return false;
        }
      },
			initTabs() {
				var tablink = $(".footer-tabs .tablink");
				tablink.on("click", function () {
					var iconf = $(this).find(".iconfont");
					if (iconf.hasClass('active')) {
						iconf.removeClass('active');
					} else {
						iconf.addClass('active');
					}
				})
			},
			handleWechat() {
				this.wechatVisibility = true;
			},
			HandlewechatVisibility(e) {
				this.wechatVisibility = false;
			},
			routerChange() {
				$(".footer-tabs .tablink .iconfont").removeClass('active');
				$('#collapseOne2').collapse('hide');
				$('#collapseTwo2').collapse('hide');
				$('#collapseThree2').collapse('hide');
				$('#collapseFour2').collapse('hide');
			}
		}
	}

</script>

<style lang="less" scoped>
	.footer-tabs {
		.panel {
			border-width: 0 0 1px 0;
			border-style: solid;
			border-color: #404040;
			background: none;
			box-shadow: none;
		}
		.panel:last-child {
			border-bottom: none;
		}
		.panel-group .panel {
			border-radius: 0;
		}
		.panel-group .panel+.panel {
			margin-top: 0;
		}
		.panel-heading {
			background-color: #1a1a1a;
			border-radius: 0;
			border: none;
			color: #fff;
			padding: 0;
		}
		.panel-title a {
			display: block;
			color: #fff;
			padding: 15px;
			position: relative;
			font-size: 18px;
			overflow: hidden;
			.iconfont {
				-webkit-transition: all 0.5s;
				transition: all 0.5s;
				-webkit-transform: rotate(0deg);
				transform: rotate(0deg);
			}
			.iconfont.active {
				-webkit-transition: all 0.5s;
				transition: all 0.5s;
				-webkit-transform: rotate(180deg);
				transform: rotate(180deg);
			}
		}
		.panel-body {
			background: #d6d6d6;
      padding:0;
			p {
				white-space: pre-wrap;
				word-wrap: break-word;
				background: transparent;
        border-bottom:1px solid #c2c2c2;
        height:45px;
        line-height:45px;
        padding-left:15px;
				a {
          color:#000;
          font-weight:300;
          display: inline-block;
          width: 100%;
				}
			}
		}
		.panel:last-child .panel-heading {
			-webkit-transition: border-radius 0.3s linear 0.2s;
			transition: border-radius 0.3s linear 0.2s;
		}
		.panel:last-child .panel-heading.active {
			border-radius: 0;
			-webkit-transition: border-radius linear 0s;
			transition: border-radius linear 0s;
		}
		.panel-copyright {
			color: #a7a7a7;
			text-align: center;
			font-size: 12px;
      line-height:22px;
			padding: 25px;
		}
	}

	.panel-group .panel-heading+.panel-collapse>.panel-body,
	.panel-group .panel-heading+.panel-collapse>.list-group {
		border-color: #404040;
	}

	.panel-contacUs {
		padding: 10px 15px;
		position: relative;
	}

	.panel-contacUs a {
		width: 32px;
		vertical-align: middle;
	}

	.panel-contacUs span {
		font-size: 18px;
		font-weight: bold;
		vertical-align: middle;
		padding-right: 30px;
	}



	.panel-contacUs .ContactUs-wechat .wechatWrap,.skypeWrap {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,.5);
		z-index: 999;
		display: table;
	}

	.panel-contacUs .ContactUs-wechat .wechatImg,.skypeImg {
		display: table-cell;
		vertical-align: middle;
	}

	.panel-contacUs .wechatImg .imgBox,.skypeImg .imgBox{
		background-color: #fff;
		padding: 5%;
		margin: 0 auto;
		width: 60%;
		position: relative;
	}

	.panel-contacUs .wechatImg .imgBox i,.panel-contacUs .skypeImg .imgBox i {
		color: #333;
		font-size: 20px;
		position: absolute;
		right: 5px;
		top:5px;
		cursor: pointer;
	}

	.panel-contacUs .ContactUs-wechat .wechatImg .imgBox h4,
  .panel-contacUs .skypeImg .imgBox h4,
  {
		color: #666;
		font-weight: normal;
		font-size: 16px;
		text-align: center;
		margin-top: 8px;
		line-height: 24px;
	}

	.panel-contacUs .ContactUs-wechat .wechatImg img {
		width: 100%;
	}

	.panel-contacUs .ContactUs-wechat {
		width: 32px;
		margin-right: 10px;
		display: inline-block;
		padding-right: 0;
		position: relative;
		background: url(../assets/images/weixin.png) no-repeat center;
		background-size: 100%;
		height: 41px;
	}

	.panel-contacUs .ContactUs-wechat img {
		width: 100%;
	}

	#accordion {
		margin-bottom: 0;
	}
</style>
