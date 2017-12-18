<template>
	<div class="select-tabs">
		<div class="panel-group wrap" id="accordion" role="tablist" aria-multiselectable="true">
	      <div v-if="feature" class="panel">
	        <div class="panel-heading" role="tab" id="headingOne">
	          <h4 class="panel-title">
	        <a role="button" class="collapsed tablink" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
	          <span class="fl">Feature</span>
	          <span class="fr iconfont icon-arrow-t"></span>
	        </a>
	      </h4>
	        </div>
	        <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
	          <div class="panel-body">
	            <pre>{{ feature }}</pre>
	          </div>
	        </div>
	      </div>
	      <!-- end of panel -->
	      <div v-if="application" class="panel">
	        <div class="panel-heading" role="tab" id="headingTwo">
	          <h4 class="panel-title">
	        <a class="collapsed tablink" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
	          <span class="fl">Application</span>
	          <span class="fr iconfont icon-arrow-t"></span>
	        </a>
	      </h4>
	        </div>
	        <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
	          <div class="panel-body">
	            <pre>{{ application }}</pre>
	          </div>
	        </div>
	      </div>
	      <!-- end of panel -->
	      <div v-if="specification" class="panel">
	        <div class="panel-heading" role="tab" id="headingThree">
	          <h4 class="panel-title">
	        <a class="collapsed tablink" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
	          <span class="fl">Specification</span>
	          <span class="fr iconfont icon-arrow-t"></span>
	        </a>
	      </h4>
	        </div>
	        <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
	          <div class="panel-body">
	            <pre>{{ specification }}</pre>
	          </div>
	        </div>
	      </div>
	      <!-- end of panel -->
	      <div v-if="content" class="panel">
	        <div class="panel-heading" role="tab" id="headingFour">
	          <h4 class="panel-title">
	        <a class="collapsed tablink" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
	          <span class="fl">Production Content</span>
	          <span class="fr iconfont icon-arrow-t"></span>
	        </a>
	      </h4>
	        </div>
	        <div id="collapseFour" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
	          <div class="panel-body">
	            <pre v-html="content"></pre>
	          </div>
	        </div>
	      </div>
	      <!-- end of panel -->
	    </div>
	</div>
</template>

<script>
	export default {
		mounted(){
			this.initTabs();
		},
		props:{
			data:{
				type:Object
			}
		},
		methods:{
			initTabs(){
				var tablink = $(".select-tabs .tablink");
				tablink.on("click",function(){
					var iconf = $(this).find(".iconfont");
					if(iconf.hasClass('active')){
						iconf.removeClass('active');
					}else{
						iconf.addClass('active');
					}
				})
			}
		},
		computed:{
			feature(){
				if(this.data.feature){
					return this.data.feature
				}
			},
			application(){
				if(this.data.application){
					return this.data.application
				}
			},
			specification(){
				if(this.data.application){
					return this.data.specification
				}
			},
			content(){
				if(this.data.content){
					return this.data.content
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.select-tabs{
		.panel {
		  border-width: 0 0 1px 0;
		  border-style: solid;
		  border-color: #cfc5bc;
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
		  background-color:#e6dcd3;
		  border-radius: 0;
		  border: none;
		  color: #fff;
		  padding: 0;
		}
		.panel-title a {
		  display: block;
		  color: #313234;
		  padding: 15px;
		  position: relative;
		  font-size: 20px;
		  overflow: hidden;
		  .iconfont{
		  	 -webkit-transition: all 0.5s;
		  	 transition: all 0.5s;
		     -webkit-transform: rotate(0deg);
		          transform: rotate(0deg);
		  }
		  .iconfont.active{
		  	-webkit-transition: all 0.5s;
		  	transition: all 0.5s;
        color:#e70f20;
		     -webkit-transform: rotate(180deg);
		          transform: rotate(180deg);
		  }
		}
		.panel-body {
		  background: #fff;
		  pre{
		  	white-space: pre-wrap;
			word-wrap: break-word;
			background:transparent;
			min-height:100px;
			line-height: 1.5;
        font-weight:300;
        img{
          max-width:100% !important;
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
	}
</style>
