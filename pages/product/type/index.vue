<template>
  <div class="product-page page-top">
    <levelbar :customRouter="customRouter"></levelbar>
    <div class="container mobileContainer">
      <div class="row productTypeList">
        <div class="col-sm-4 col-md-3 col-lg-3 cancelPadding">
          <filter-bar @handleClickCategory="handleClickCategory" @checkChange="handleCheckChange" :filterList="filterList" :checkList="checkList"></filter-bar>
        </div>
        <div class="col-lg-9 col-md-9 col-sm-8">
          <product-list :isLoad="isLoad" :productList="filterList"></product-list>
          <div v-show="!isLoad">
            <pagination :noPage="''" :pageInfo="pageInfo" @change="pagechange"></pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import levelbar from '~components/levelbar';
  import filterBar from '~components/FilterBar';
  import pagination from '~components/pagination';
  import productList from '~components/productList';
  import axios from '~plugins/axios';
  export default {
    name: 'productType',
    head() {
      return {
        title: 'Takstar ' + this.$route.query.categoryUnifyMark + ' Product list',
        meta: [
          { name: 'description', content: 'Takstar ' + this.$route.query.categoryUnifyMark + ' Product list' }
        ]
      }
    },
    data() {
      return {
        prefixImg: process.env.prefixImg,
        query: {
          categoryId: this.$route.query.categoryId || '',
          proCategoryAttrItemIds: Array.prototype.concat(this.$route.query.proCategoryAttrItemIds || [])
        }
      }
    },
    components: {
      levelbar,
      filterBar,
      pagination,
      productList
    },
    fetch({ store, query, isServer }) {
      let option = {
        state: 1,
        pageNo: query.page ? query.page : 1,
        pageSize: 12,
        categoryId: query.categoryId || '',
        proCategoryAttrItemIds: Array.prototype.concat(query.proCategoryAttrItemIds || []),
        categoryUnifyMark: query.categoryUnifyMark || ''
      }
      return store.dispatch('fetchProductFilter', option).then(response => {

      })


    },
    asyncData({ query, store }) {
      return {
        checkList: [].concat(query.proCategoryAttrItemIds || [])
      }
    },
    created() {
    },
    computed: {
      filterList() {
        return this.$store.state.product.FilterList
      },
      customRouter() {
        let filterList = this.$store.state.product.FilterList;
        let CurCategory = filterList.proCategoryList.filter((e, i) => {
          return e.selected
        });

        return [
          {
            name: 'Home',
            path: '/'
          },
          {
            name: 'Product',
            path: '/product'
          },
          {
            name: CurCategory.length ? CurCategory[0].name : '',
            path: this.$route.fullPath
          }
        ]

      },
      isLoad() {
        return this.$store.state.product.isLoad
      },
      pageInfo() {
        return this.$store.state.product.pageInfo
      }
    },
    watch: {
      '$route': function (value) {
        Object.assign(this.query, value.query);
      }
    },
    methods: {
      pagechange: function (current) {

      },
      handleClickCategory(el) {
      },
      handleCheckChange(el, attrItemList) {
        let category = this.filterList.proCategoryList.filter((e, i) => {
          return e.selected
        });
        let opt = {
          pageNo: 1,
          pageSize: 12,
          categoryId: this.query.categoryId || category[0].id,
          proCategoryAttrItemIds: attrItemList
        }

        this.handleDispatch(opt)
      },
      handleDispatch(option) {

        return new Promise((resolve, reject) => {
          this.$store.dispatch('fetchProductFilter', option).then(response => {
            resolve(response)
          }).catch(err => {
            reject(err)
            console.log(err)
          })
        })
      }
    }
  }

</script>

<style lang="less">
  @Red_color: #e71018;

  .productTypeList {
    margin: 30px 0;
  }

  @media (max-width: 768px) {
    /*.page-top {
      margin-top:59px;
    }*/
    .mobileContainer {
      padding: 0;
    }
    .cancelPadding {
      padding: 0;
    }
    .productTypeList {
      margin: 0 0 30px 0;
    }
  }
</style>
