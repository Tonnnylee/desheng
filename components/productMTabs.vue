<template>
	<div class="select-tabs">
		<ul class="product-function product-hor-function clearfix">
			<li v-if="feature" class="active">Features</li>
			<li v-if="application">Application</li>
			<li v-if="specification">Specification</li>
			<li v-if="content">Product Content</li>
		</ul>
		<div v-if="feature" class="tab-content horizen-tab col-lg-9 col-md-8">
			<pre>{{ feature }}</pre>
		</div>
		<div v-if="application" style="display:none;" class="tab-content horizen-tab col-lg-9 col-md-8">
			<pre>{{ application }}</pre>
		</div>
		<div v-if="specification" style="display:none;" class="tab-content horizen-tab col-lg-9 col-md-8">
			<pre>{{ specification }}</pre>
		</div>
		<div v-if="content" style="display:none;" class="tab-content horizen-tab col-lg-9 col-md-8">
			<pre v-html="content"></pre>
		</div>
	</div>
</template>

<script>
	export default {
		mounted() {
			this.initTabs();
		},
		props: {
			data: {
				type: Object
			}
		},
		methods: {
			initTabs() {
				var tab = $(".product-hor-function li");
				$(tab[0]).addClass("active");
				var tabContent = $(".horizen-tab");
        tabContent.hide();
        $(tabContent[0]).show();
				tab.on("click", function () {
					tab.removeClass('active');
					var tabIndex = $(this).index();
					$(this).addClass('active');
					$(".horizen-tab").hide();
					$(tabContent[tabIndex]).show();
				})
			}
		},
		computed: {
			feature() {
				if (this.data.feature) {
					return this.data.feature
				}
			},
			application() {
				if (this.data.application) {
					return this.data.application
				}
			},
			specification() {
				if (this.data.application) {
					return this.data.specification
				}
			},
			content() {
				if (this.data.content) {
					return this.data.content
				}
			}
		}
	}

</script>

<style lang="less" scoped>
	.select-tabs {
		position: relative;
		/*min-height:350px;*/
		margin-bottom: 50px;
	}
	.product-function {
		padding-left: 0;
    background:#e7dcd3;
		li {
			float: left;
			width: 25%;
			background: #e7dcd3;
			font-size: 20px;
			padding: 15px 30px;
			box-sizing: border-box;
			margin-bottom: 1px;
			cursor: pointer;
			border-right: 1px solid #ededed;
      text-align: center;
			&:last-child {
				border-right: none;
			}
		}
		li.active {
			background: #fff;
			position: relative;
			color: #e70f20;
			&:before {
				position: absolute;
				width: 100%;
				height: 3px;
				background: #e70f20;
				bottom: 0px;
				left: 0;
				z-index: 100;
				content: "";
			}
		}
	}

	.tab-content {
		background: #fff;
		padding: 25px;
		left: 0;
		padding-left: 50px;
		padding-right: 38px;
		box-sizing: border-box;
		width: 100%;
		min-height: 315px;
		pre {
			white-space: pre-wrap;
			word-wrap: break-word;
			background: transparent;
			min-height: 150px;
			width: 100%;
			overflow: visible;
			line-height: 1.5;
      font-weight:300;
			img {
				max-width: 100% !important;
			}
		}
	}
</style>
