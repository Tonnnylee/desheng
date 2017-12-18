<template>
	<div class="menu">
		<div class="panel-group wrap" id="accordion" role="tablist" aria-multiselectable="true">
		  <header>MENU <span class="iconfont fr icon-guanbi"></span></header>
	      <div class="panel">
	        <div class="panel-heading" role="tab" id="headingOne3">
	          <h4 class="panel-title">
	        <nuxt-link to="/" class="nuxt-link collapsed tablink">
	          <span class="fl">HOME</span>
	          <span class="fr iconfont icon-arrow-t"></span>
	        </nuxt-link>
	      </h4>
	        </div>
	      </div>
	      <!-- end of panel -->
	      <div class="panel">
	        <div class="panel-heading" role="tab" id="headingTwo3">
	          <h4 class="panel-title">
		        <nuxt-link to="/product/" class="nuxt-link collapsed tablink">
		          <span class="fl">PRODUCT</span>
		          <span class="fr iconfont icon-arrow-t"></span>
		        </nuxt-link>
	      	  </h4>
	        </div>
	      </div>

      <div class="panel">
        <div class="panel-heading" role="tab" id="headingFour3">
          <h4 class="panel-title">
            <a class="collapsed tablink" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour3" aria-expanded="false" aria-controls="collapseFour3">
              <span class="fl">SERVICE</span>
              <span class="fr iconfont icon-arrow-t"></span>
            </a>
          </h4>
        </div>
        <div id="collapseFour3" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
          <div class="panel-body">
            <p><nuxt-link class="nuxt-link" to="/service/professional.html">Professional OEM</nuxt-link></p>
            <p><nuxt-link class="nuxt-link" to="/service/solutions.html">Solutions</nuxt-link></p>
            <p><nuxt-link class="nuxt-link" to="/service/distributors.html">International Distributors</nuxt-link></p>
            <p><nuxt-link class="nuxt-link" to="/service/download">Download Center</nuxt-link></p>
            <p><a class="nuxt-link" href="http://english.t3315.com/">Anti-fake Check</a></p>
          </div>
        </div>
      </div>
	      <!-- end of panel -->
	      <div class="panel">
	        <div class="panel-heading" role="tab" id="headingThree3">
	          <h4 class="panel-title">
		        <nuxt-link to="/news/" class="nuxt-link collapsed tablink">
		          <span class="fl">NEWS</span>
		          <span class="fr iconfont icon-arrow-t"></span>
		        </nuxt-link>
	      	   </h4>
	        </div>
	      </div>
      <!-- end of panel -->
	      <div class="panel">
	        <div class="panel-heading" role="tab" id="headingFour3">
	          <h4 class="panel-title">
		        <a class="collapsed tablink" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFive3" aria-expanded="false" aria-controls="collapseFive3">
		          <span class="fl">ABOUT US</span>
		          <span class="fr iconfont icon-arrow-t"></span>
		        </a>
		      </h4>
	        </div>
	        <div id="collapseFive3" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
	          <div class="panel-body">
	            <p><nuxt-link class="nuxt-link" to="/about/company.html">Company Profile</nuxt-link></p>
          		<p><nuxt-link class="nuxt-link" to="/about/competence.html">Core Competence</nuxt-link></p>
          		<p><nuxt-link class="nuxt-link" to="/about/technology.html">Key Technology</nuxt-link></p>
          		<p><nuxt-link class="nuxt-link" to="/about/capacity.html">Production Capacity</nuxt-link></p>
          		<p><nuxt-link class="nuxt-link" to="/about/feedback.html">Contact Us</nuxt-link></p>
	          </div>
	        </div>
	      </div>
	    </div>
	</div>
</template>

<script>
	export default {
		mounted(){
			this.initTabs();
		},
		methods:{
			initTabs(){
				var tablink = $(".menu .panel-heading a");
				tablink.on("click", function(){
					if($(this).hasClass("nuxt-link")){
						return false;
					}else{
						var allIcons = tablink.find(".iconfont");
						var iconf = $(this).find(".iconfont");
						if(iconf.hasClass('active')){
							iconf.removeClass('active');
						}else{
							allIcons.removeClass('active');
							iconf.addClass('active');
						}
					}
				})
				$("header .iconfont,.panel .nuxt-link").on("click",function(){
					 $(".menu").css({ "opacity":"0","transform":"translate3d(100%,0,0)" });
          $("body,html").css({
            height:"auto",
            overflow:"auto"
          });
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.menu{
		width:100%;
		min-height:100%;
		background:#f7f7f7;
		position: fixed;
		top:0;
    bottom:0;
    overflow-x:hidden;
    overflow-y:auto;
		z-index:1001;
		transform: translate3d(100%, 0,0);
		opacity: 0;
		transition:all 0.5s ease;
		header{
			padding:15px 20px;
			font-size:20px;
			color:#666666;
			border-bottom: 1px solid #e3e3e3;
			.iconfont{
				font-size:22px;
				color:#000;
			}
		}
		.panel {
		  border-width: 0 0 1px 0;
		  border-style: solid;
		  border-color: #eaeaea;
		  background: none;
		  box-shadow: none;
		}
		.panel:last-child {
		  border-bottom: none;
		}
		.panel-group .panel {
		  border-radius: 0;
		}
		.panel-group .panel + .panel {
		  margin-top: 0;
		}
		.panel-heading {
		  background-color:#f7f7f7;
		  border-radius: 0;
		  border: none;
		  color: #000;
		  padding: 0;
		}
		.panel-title a {
		  display: block;
		  color: #000;
		  padding: 15px 20px;
		  position: relative;
		  font-size: 18px;
		  overflow: hidden;
		  .iconfont{
		  	 -webkit-transition: all 0.5s;
		  	 transition: all 0.5s;
		     -webkit-transform: rotate(-90deg);
		          transform: rotate(-90deg);
		  }
		  .iconfont.active{
		  	-webkit-transition: all 0.5s;
		  	transition: all 0.5s;
		     -webkit-transform: rotate(-180deg);
		          transform: rotate(-180deg);
		  }
		}
		.panel-body {
		  background: #e7e7e7;
		  padding:0;
		  p{
		  	padding:8px 20px;
		  	line-height: 1.5;
		  	white-space: pre-wrap;
			word-wrap: break-word;
			background:transparent;
			border-bottom:1px solid #d6d6d6;
			a{
				color:#000;
				font-size:18px;
        font-weight:300;
        width:100%;
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
		.panel-copyright{
			color:#a7a7a7;
			text-align: center;
			font-size:12px;
			padding:25px;
		}
	}
  //ipad
  @media (min-width:768px) and (max-width:992px){
    .menu{
      header{
        padding: 20px 20px;
        font-size: 30px;
        .iconfont{
          font-size:30px;
        }
      }
      .panel-title{
        a{
          padding: 20px 20px;
          font-size: 25px;
        }
      }
      .panel-body p{
        padding:15px 20px;
        a{
          font-size:22px;
        }
      }
    }
  }
  //phone
  @media (min-width:0px) and (max-width:767px){
    .menu{
      .panel-body{
        p{
          padding:15px 20px;
        }
      }
    }
  }
  //small phone
  @media (max-height:530px){
    .menu{
      header{
        font-size:18px;
        padding:15px 15px;
      }
      .panel-title{
        a{
          font-size:16px;
          padding:10px 15px;
        }
      }
      .panel-body p{
        padding:15px 20px;
        a{
          font-size:15px;
        }
      }
    }
  }
</style>
