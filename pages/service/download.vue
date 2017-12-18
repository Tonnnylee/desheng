<template>
	<div class="Download-page page-top">
    <!--<nav-fix :data="navs"></nav-fix>-->
		<levelbar></levelbar>
		<div class="phone-title visible-xs-block">Document & Download</div>
		<div class="form phone-search visible-xs-block">
			<input @keyup.enter="searchData" type="text" v-model="keywords" class="form-control" placeholder="Input the model No" name="search">
			<span @click="searchData" class="iconfont icon-sousuo-sousuo"></span>
		</div>
		<div class="download-wrap">
			<div class="download-head">
				<span class="fl download-cate">{{ selectText ? selectText : 'All' }}</span>
				<div class="fr">
					<div class="form fr visible-lg-block visible-md-block visible-sm-block">
						<input type="text" @keyup.enter="searchData" v-model="keywords" class="form-control" placeholder="Input the model No" name="search">
						<span @click="searchData" class="iconfont icon-sousuo-sousuo"></span>
					</div>
					<select v-model="selected" id="selectDown" class="fr">
						<option v-for="fileCate in fileCates" :value="fileCate.id">{{ fileCate.name }}</option>
						<option selected value="">All</option>
					</select>
				</div>
			</div>
			<div v-if="isLoad" class="loader"><span>Loading...</span></div>
			<div v-show="!isLoad">
				<div class="file-row" v-for=" fileItem in fileItems">
					<div class="col-lg-3 col-md-4 col-sm-3 col-xs-3 download-code">
						{{ fileItem.name }}
					</div>
					<div class="col-lg-3 col-md-3 col-sm-3 col-xs-5 download-name">
						{{ fileItem.proModel }}
					</div>
					<div class="col-lg-6 col-md-5 col-sm-6 col-xs-4 download-botton">
						<a :href="prefixImg+fileItem.downloadUrl" target="_blank" class="btn">Download</a>
					</div>
				</div>
			</div>
		</div>
		<pagination class="pages" :pageInfo="pageInfo" @change="pagechange"></pagination>
	</div>
</template>

<script>
	import pagination from '../../components/pagination.vue';
	import levelbar from '../../components/levelbar.vue';
  import navFix from '../../components/navFix.vue';

	export default {
		name: 'download',
		head() {
			return {
				title: 'Download Center',
				meta: [
					{ name: 'description', content: 'The product instructions，catalogues and software are in Download Center for your download and inquiry.' }
				]
			}
		},
		components: {
			pagination,
			levelbar,
      navFix
		},
		watch: {
			selected() {
				this.searchData();
				this.selectText = $("option:selected").text();
			},
			keywords() {
				this.searchData();
			}
		},
		data() {
			return {
				isLoad: false,
				prefixImg: process.env.prefixImg,
				keywords: this.$route.query.item || '',
				selected: '',
				selectText:'',
				pageInfo: {
					total: 100,
					current: 1,
					pagenum: 6,
					pagegroup: 5
				}
			}
		},
		asyncData({ store, query, isServer }) {
		  store.dispatch('fetchFileList', {
        state: 1,
        pageNo: 1,
        pageSize: 6,
        kw: query.item ? query.item : null
      });
    },
		created() {
			this.assignEvent();
      this.fetchFileCates();
		},
		mounded(){
      if(this.keywords !== null){
        this.searchData();
        setTimeout(function(){
          $(".Download-page .icon-sousuo-sousuo").click();
        },1000);
      }
    },
		methods: {
			assignEvent() {
				Object.assign(this.pageInfo, {
					total: this.fileCount.count
				})
			},
			pagechange(current) {
				this.pageInfo.current = current;
				let options = {
					query: {
						state: 1,
						pageNo: current,
						pageSize: 6
					}
				}
				this.pageChange(options)
			},
			pageChange(options) {
				this.isLoad = true;
				this.$store.dispatch('fetchFileList', options.query).then(response => {
					this.isLoad = false;
				})
			},
			trim(str) {
        return str.replace(/(^\s*)|(\s*$)/g, '');
      },
			//search
			searchData() {
				var vm = this;
				this.isLoad = true;
				this.$store.dispatch('fetchFileList', {
					state: 1,
					pageNo: 1,
					pageSize: 6,
					kw: vm.keywords ? this.trim(vm.keywords) : null,
					categoryId: vm.selected || ''
				}).then(response => {
					this.isLoad = false,
					vm.pageInfo.total = vm.fileCount.count
				})
			},
			//get fileCategoryList
      fetchFileCates(){
        this.$store.dispatch('fetchFileCategory', {
          state: 1,
          pageNo: 1,
          pageSize: 50
        })
      }
		},
		computed: {
			fileItems() {
				return this.$store.state.files.list;
			},
			fileCount() {
				return this.$store.state.files.data;
			},
			fileCates() {
				return this.$store.state.files.cateList;
			}
		}
	}

</script>
<style lang="less" scoped>
	.Download-page {
		background: #ededed;
		min-height: 600px;
		#selectDown {
			width: 200px;
			margin-right: 10px;
			/*注意在下拉框中，width是包括border的宽度的*/
			height: 38px;
			border: 1px solid #ddd;
			padding: 5px;
			background-color: white;
			background-repeat: no-repeat;
      font-weight:300;
		}
		.phone-title {
			width: 95%;
			margin: 15px auto;
			font-weight: 600;
		}
		.phone-search {
			margin: 15px auto;
			background: #fff;
			width: 95%;
		}
		.form {
			width: 300px;
			border: 1px solid #dddddd;
			line-height: 35px;
			.iconfont {
				cursor: pointer;
			}
		}
		input[name="search"] {
			float: left;
			border: none;
			width: 90%;
			outline: none;
			box-shadow: none;
			border-radius: 0;
      font-weight:300;
			&:focus,
			&:hover {
				border: none;
				outline: none;
				box-shadow: none;
			}
		}
		.download-wrap {
			overflow: hidden;
			width: 1100px;
			margin: 0 auto;
			background: #fff;
			margin-top: 25px;
			padding: 15px;
			padding-bottom: 0;
			box-sizing: border-box;
			.download-head {
				height: 50px;
				border-bottom: 1px solid #000;
				span.download-cate {
					display: inline-block;
					margin-top: 8px;
					font-size: 25px;
				}
			}
			.file-row {
				width: 100%;
				min-height: 60px;
				line-height: 60px;
				color: #666666;
				border-bottom: 1px solid #ddd;
				&:last-child {
					border-bottom: none;
				}
				div {
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
          font-weight:300;
				}
			}
			.download-botton {
				text-align: right;
        padding-right: 30px;
				a {
					background: #e70f20;
					color: #fff;
					border-radius: 0;
					padding-left: 20px;
					padding-right: 20px;
				}
			}
		}
	}
  @media (min-width:1015px) and (max-width:1400px){
    .Download-page .download-wrap{
      width:960px;
    }
  }
  //ipad
	@media (min-width:768px) and (max-width:1024px) {
		.Download-page {
			.download-wrap {
				width: 95%;
			}
		}
	} //phone
	@media (min-width:0px) and (max-width:767px) {
		.Download-page {
			.file-row {
				div {
					font-size: 14px;
				}
        download-code {
          text-overflow: initial;
          white-space: normal;
          line-height: 15px;
          overflow: initial;
          padding-top: 5px;
          padding-bottom: 10px;
        }
			}
			.download-wrap {
				width: 95%;
				.download-cate {
					font-size: 20px;
          width: 140px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
				}
				.download-botton {
					padding-left: 12px;
					padding-right: 12px;
					a {
						padding-right: 5px;
						padding-left: 5px;
					}
				}
			}
			#selectDown {
				width: 170px;
				margin-right: 0;
        font-weight:300;
			}
		}
	}
  //small phone
  @media (max-width:320px) and (min-width:0){
    .Download-page{
      .download-wrap{
        .download-cate {
          font-size: 20px;
          width: 100px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  }
</style>
