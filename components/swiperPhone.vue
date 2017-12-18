<template>
	<div class="RelateProduct">
		<div class="col-xs-6" v-for="good in goods">
		   <img v-if="good.defaultImgUrl" :src="prefixImg + good.defaultImgUrl">
       <img v-else src="../assets/images/proPlaceholder-1.0.0.jpg">
		    <p class="title">{{ good.name }}</p>
		    <p class="content">{{ good.summary }}</p>
		   <nuxt-link :to="{path:`/product/type/${good.id}.html`}">View Details</nuxt-link>
		</div>
	</div>
</template>
<script>
export default {
    props:{
		data:Array
	},
	data(){
		return {
			prefixImg: process.env.prefixImg
		}
	},
	computed:{
		goods(){
			if(this.data){
				return this.data.slice(0,4);
			}
		}
	}
}
</script>

<style lang="less" scoped>
	.RelateProduct{
		width:100%;
		div{
			background:#fff;
			padding:10px;
			box-sizing: border-box;
			margin-bottom:15px;
			&:nth-child(odd){
				margin-right:15px;
			}
		}
		div.col-xs-6{
			width:48%;
		}
		img{
			width:100%;
		}
		p.title{
			color:#000;
			font-size:18px;
			font-weight: 600;
			overflow: hidden;
			text-overflow:ellipsis;
			white-space: nowrap;
			margin-top:15px;
			margin-bottom: 5px;
			height:20px;
		}
		p.content{
			color:#686868;
			font-size:14px;
			font-weight: 600;
			overflow: hidden;
			text-overflow:ellipsis;
			white-space: nowrap;
			margin-bottom: 10px;
			height: 20px;
      color:#666;
		}
		a{
			width:100%;
			color:#fff;
			background:#e80f20;
			font-weight: 600;
			font-size:16px;
			text-align: center;
			padding:10px 0;
		}
	}

  //big phone
  @media (min-width:660px) and (max-width:767px){
    .RelateProduct{
      div.col-xs-6{
        width:48.8%;
      }
    }
  }
  //small phone
  @media (min-width:320px) and (max-width:405px){
    .RelateProduct{
      div.col-xs-6{
        width:47%;
      }
    }
  }
</style>
