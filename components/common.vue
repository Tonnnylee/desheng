<template>
	<div class="Common-page">
		<div class="header">
			<img v-show="!isMobile" :src="content.pcSrc" alt="">
			<img v-show="isMobile"  :src="content.mSrc" alt="">
			<div class="textBox">
				<h2>{{ content.title }}</h2>
				<p>{{ content.summary }}</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			data: {
				type: Object
			}
		},
		data() {
			return {
				isMobile:false
			}
		},
		mounted() {
      this.handleResize();
      window.addEventListener('resize', this.handleResize);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.handleResize);
    },
		methods: {
			handleResize(e) {
				this.isMobile = document.documentElement.clientWidth + 18 <= 992;
			}
		},
		computed: {
			content() {
				return this.data
			}
		}
	}

</script>

<style lang="less" scoped>
	.Common-page {
		background: #e7ddd4;
	}

	.header {
		width: 100%;
		text-align: center;
		position: relative;
		.textBox {
			position: absolute;
			top: 50%;
			left: 50%;
			-webkit-transform: translate(-50%, -50%);
			-ms-transform: translate(-50%, -50%);
			-moz-transform: translate(-50%, -50%);
			width: 100%;
			font-size: 20px;
			p {
				max-width: 60%;
				text-align: center;
				font-size: 3.3em;
				line-height: 1em;
				margin: 0 auto;
				color: #fff;
				font-weight: 300;
			}
			h2 {
				color: #fff;
				font-size: 3.5em;
        font-weight:600;
				padding-bottom: 0.3em;
			}
		}

		img {
			width: 100%;
		}
	}

	.container {
		margin-top: 30px;
		padding-bottom: 60px;
		h3 {
			color: #000;
			margin-top: 25px;
			margin-bottom: 15px;
			font-size: 18px;
			font-weight: 600;
		}
		p {
			color: #3b322b;
		}
	}
  //mobile
	@media (max-width:767px) {
		.header {
			.textBox {
				font-size: 14px;
				p{
					max-width: 90%;
          font-size:2.0em;
				}
				h2{
          font-size:2.5em;
        }
			 }
		 }
	}

	@media (min-width:320px) and (max-width:520px) {

	} // pad
	@media (min-width:768px) and (max-width:992px) {
		.header {
			.textBox {
				font-size: 16px;
			 }
		 }
	} // big pad
	@media (min-width:993px) and (max-width:1200px) {
		.header {
			.textBox {
				font-size: 18px;
			 }
		 }
	}
</style>
