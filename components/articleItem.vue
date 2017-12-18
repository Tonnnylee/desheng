<template>
	<div class="list-item col-lg-4 col-md-4 col-sm-6 col-xs-12">
		<div>
			<nuxt-link :to="{ name: 'news-id', params: { id: id+'.html' }}">
				<img v-if="imgUrl" :src="prefixImg + imgUrl" :alt="title">
				<img v-else src="../assets/images/newsPlaceholder.jpg">
				<h3 class="list-title">
					{{ title }}
				</h3>
				<p class="list-detail">
					{{ detail }}
				</p>
			</nuxt-link>
		</div>
	</div>
</template>

<script>
	export default {
		props:{
			data:{
				type: Object
			}
		},
		data(){
			return{
				prefixImg: process.env.prefixImg
			}
		},
		computed:{
			imgUrl(){
				if(this.data.uploadImgUrl){
					return this.data.uploadImgUrl;
				}
			},
			title(){
				if(this.data.title){
					return this.data.title
				}
			},
			detail(){
				if(this.data.summary){
					return this.data.summary;
				}
			},
			id(){
				if(this.data.id){
					return this.data.id;
				}
			}
		}
	}
</script>

<style lang="less" scoped>
  .list-item{
    padding:5px;
    a{
      width:100%;
      &:hover{
        .list-title,.list-detail{
          color:#e40f21;
        }
      }
    }
    div{
      background:#fff;
      padding:10px;
      padding-bottom:22px;
      .list-title{
        margin:15px 0;
        margin-bottom:5px;
        font-size:22px;
        line-height: 1.5;
        color:#000;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        transition:color 0.5s ease;
      }
      .list-detail{
        color:#555555;
        font-size:15px;
        word-wrap: break-word;
        overflow: hidden;
        height: 45px;
        font-weight: 300;
        line-height: 1.5;
        transition:color 0.5s ease;
      }
    }
    img{
      width:100%;
      height:auto !important;
    }
  }
  //phone
  @media (min-width:0) and (max-width:767px){
    .list-item{
      padding:5px 10px;
      div{
        padding:10px;
        padding-bottom:10px;
        .list-title{
          margin:5px 0;
          width:50%;
        }
        .list-detail{
          width:50%;
        }
      }
      img{
        float:left;
        width:45%;
        margin-right:10px;
        height:auto !important;
      }
    }
  }
</style>

