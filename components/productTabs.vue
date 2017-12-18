<template>
	<div class="select-tabs">
		<ul class="product-function product-ver-function col-lg-3 col-md-3">
			<li v-if="feature" class="active">Features</li>
			<li v-if="application">Application</li>
			<li v-if="specification">Specification</li>
			<li v-if="content">Product Content</li>
		</ul>
		<div v-if="showFeature" class="tab-content vertical-tab col-lg-9 col-md-9">
			<pre>{{ feature }}</pre>
		</div>
		<div v-if="showApplication" class="tab-content vertical-tab col-lg-9 col-md-9">
			<pre>{{ application }}</pre>
		</div>
		<div v-if="showSpecification" class="tab-content vertical-tab col-lg-9 col-md-9">
			<pre>{{ specification }}</pre>
		</div>
		<div v-if="showContent" class="tab-content vertical-tab col-lg-9 col-md-9">
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
				var tab = $(".product-ver-function li");
				$(tab[0]).addClass('active');
				var tabContent = $(".vertical-tab");
				tabContent.hide();
        		$(tabContent[0]).show();
				tab.on("mouseover", function () {
					tab.removeClass('active');
					var tabIndex = $(this).index();
					$(this).addClass('active');
					$(".vertical-tab").hide();
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
			},
			showContent() {
				if (this.content) {
					return true
				} else {
					return false
				}
			},
			showSpecification() {
				if (this.specification) {
					return true
				} else {
					return false
				}
			},
			showApplication() {
				if (this.application) {
					return true
				} else {
					return false
				}
			},
			showFeature() {
				if (this.feature) {
					return true
				} else {
					return false
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
		padding-right: 0;
		li {
			background: #e7dcd3;
			font-size: 20px;
			padding: 20px 30px;
			box-sizing: border-box;
			margin-bottom: 1px;
			cursor: pointer;
		}
		li.active {
			background: #fff;
			position: relative;
			color: #e70f20;
			&:before {
				position: absolute;
				height: 100%;
				width: 3px;
				background: #e70f20;
				top: 0;
				left: 0;
				z-index: 100;
				content: "";
			}
		}
	}

	.tab-content {
		background: #fff;
		padding: 25px;
		padding-left: 50px;
		min-height: 300px;
		margin-bottom: 30px;
		pre {
			white-space: pre-wrap;
			word-wrap: break-word;
			background: transparent;
      font-weight:300;
			line-height: 1.8;
			img {
				max-width: 100% !important;
			}
		}
	}


</style>
