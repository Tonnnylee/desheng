<template>
	<div class="nav-fix visible-lg-block visible-md-block visible-sm-block">
		<ul class="clearfix container">
			<li v-for="(item,index) in items">
				<nuxt-link :to="{path:'/'+item.domain+'/'+item.path }">
					{{ item.title }}
				</nuxt-link>
			</li>
			<li v-if="domain !== 'about'">
				<a href="http://www.t3315.com/">ACTI-Fake Check</a>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props:{
			data:Array
		},
		computed:{
			items(){
				return this.data;
			},
			domain() {
				return this.data[0].domain;
			},
			target(){
				return this.target
			}
		},
		mounted(){
			this.initNav();
		},
		methods:{
			initNav(){
				$(window).on('scroll',function(){
					var scrollHeight = $(document).scrollTop();
					if(scrollHeight > 55){
						$('.nav-fix').css('top','0px');
					}
					if(scrollHeight < 55){
						$('.nav-fix').css('top','-52px');
					}
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.nav-fix{
		position: fixed;
		top:-52px;
		left:0;
		z-index:201;
		min-width:100%;
		background:#d7d7d7;
		height:50px;
		box-sizing: border-box;
		padding:15px 0;
		text-align: center;
		box-shadow: 0px 2px 8px #4c4c4c;
		transition:top 0.3s ease;
		li{
			display: inline-block;
			padding-right:25px;
			padding-left:25px;
			border-right:1px solid #b4b4b4;
			a.active{
				color:#e8101f;
			}
			a:hover{
				color:#e8101f;
			}
		}
		li:last-child{
			border-right:0;
		}
	}
  //ipad
  @media (min-width:768px) and (max-width:992px){
    .nav-fix{
      li{
        padding-right:12px;
        padding-left:12px;
      }
    }
  }
</style>
