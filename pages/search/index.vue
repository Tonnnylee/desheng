<template>
  <div class="serach-page page-top">
    <levelbar></levelbar>
    <div class="container">
      <h1 class="searchTitle">{{result.count}} result for <strong>“{{result.ky}}”</strong> </h1>
      <div class="TSearch">
        <div class="searchGroup">
          <i class="iconfont icon-sousuo-sousuo"></i>
          <input placeholder="input the model No" @keyup.enter="searchData" v-model="keywords" type="text">
        </div>
      </div>
      <div class="searchBody">
        <ul class="searchFilter clearfix">
          <li @click="handleTab('product')" :class="{'active': Tabstatus === 'product'}">Product<span>({{ProductList.count}})</span></li>
          <li @click="handleTab('file')" :class="{'active': Tabstatus === 'file'}">Downloads<span>({{FileList.count}})</span></li>
          <li @click="handleTab('article')" :class="{'active': Tabstatus === 'article'}">News<span>({{NewsList.count}})</span></li>
        </ul>
        <div v-if="isLoad" class="loader"><span>Loading...</span></div>
        <div class="searchContent" v-show="!isLoad">
          <product-list v-if="Tabstatus === 'product'" :gridClass="grid" :productList="ProductList"></product-list>
          <file-list v-if="Tabstatus === 'file'" :fileList="FileList"></file-list>
          <div class="articleList clearfix" v-if="Tabstatus === 'article'">
            <div v-if="NewsList.count === '0' && !isLoad" class="notFound">
              <div class="notFound-wrap">
                <img src="../../assets/images/notdisplay.jpg">
              </div>
            </div>
            <article-Item v-for="list in NewsList.list" :key="list" :data="list"></article-Item>
          </div>
        </div>
      </div>
    </div>
    <div class="paginWrap">
      <pagination :pageInfo="pageInfo" @change="pagechange"></pagination>
    </div>
  </div>
  </div>
</template>

<script>
  import levelbar from '~components/levelbar';
  import pagination from '~components/pagination';
  import productList from '~components/productList';
  import articleItem from '~components/articleItem';
  import fileList from '~components/downloadList';

  export default {
    name: 'productIndex',
    head() {
      return {
        title: 'serach',
        meta: [
          { name: 'description', content: '' }
        ]
      }
    },
    data() {
      return {
        isLoad: false,
        prefixImg: process.env.prefixImg,
        Tabstatus: 'product',
        keywords: this.key,
        pageInfo: {
          total: Number(this.DefaultCount),
          current: 1,
          pagenum: 12,
          pagegroup: 4
        },
        result: {
          ky: this.key,
          count: this.total
        },
        grid: 'col-md-3 col-sm-6 col-xs-6'
      }
    },
    asyncData({ store }) {
      return {
        // pageInfo: {
        //   total: store.state.search.ProductList,
        //   current: 1,
        //   pagenum: 10,
        //   pagegroup: 5
        // },
        Tabstatus: 'product'
      }
    },
    components: {
      levelbar,
      pagination,
      productList,
      articleItem,
      fileList
    },
    fetch({ store, params, query }) {
      let kw = query.kw || '';
      return store.dispatch('fetchSearchResult', {
        state: true,
        query: {
          state: 1,
          pageNo: 1,
          pageSize: 12,
          kw: kw.replace(/(^\s*)|(\s*$)/g, '')
        }
      }).then(response => {
        store.commit('search/FETCH_ALL_LIST', response);
        let count = 0;
        response.forEach((item, index) => {
          count += Number(item.data.count)
        })
        store.commit('search/FETCH_SEARCH_TOTAL', count);
        store.commit('search/FETCH_SEARCH_KEY', query.kw);
      })
    },

    created() {
      this.pageInfo.total = Number(this.ProductList.count);
      this.result.count = this.total;
      this.result.ky = this.key == undefined ? '' : this.key;
      this.keywords = this.key == undefined ? '' : this.key;
    },
    computed: {
      ProductList() {
        return this.$store.state.search.ProductList
      },
      DefaultCount() {
        return this.$store.state.search.ProductList.count
      },
      FileList() {
        return this.$store.state.search.FileList
      },
      NewsList() {
        return this.$store.state.search.NewsList
      },
      allList() {
        return this.$store.state.search.allList
      },
      key() {
        return this.$store.state.search.key
      },
      total() {
        return this.$store.state.search.total
      }
    },
    methods: {
      restPagin(opt) {
        Object.assign(this.pageInfo, opt);
      },
      pagechange(current) {     // 页码改变传入新的页码，此处做回调
        this.pageInfo.current = current;
        let options = {
          model: this.Tabstatus,
          state: false,
          query: {
            state: 1,
            kw: this.trim(this.keywords),
            pageNo: Number(current),
            pageSize: 12
          }
        }
        this.pageChange(options)
      },
      handleTab(status) {
        this.Tabstatus = status;
        this.validTabStatus();
      },
      validTabStatus() {
        var opt = '';
        if (this.Tabstatus === 'product') {
          opt = {
            total: Number(this.ProductList.count),
            current: Number(this.ProductList.pageNo) || 1
          }
        } else if (this.Tabstatus === 'file') {
          opt = {
            total: Number(this.FileList.count),
            current: Number(this.FileList.pageNo) || 1
          }
        } else {
          opt = {
            total: Number(this.NewsList.count),
            current: Number(this.NewsList.pageNo) || 1
          }
        }
        this.restPagin(opt)
      },
      searchData() {
        this.isLoad = true;
        this.$store.dispatch('fetchSearchResult', {
          state: true,
          model: '',
          query: {
            state: 1,
            kw: this.trim(this.keywords),
            pageNo: 1
          }
        }).then(response => {
          this.result.count = 0;
          response.forEach((item, index) => {
            this.result.count += Number(item.data.count);
          })
          this.result.ky = this.keywords;
          this.validTabStatus();
          this.isLoad = false;
        })
      },
      trim(str) {
        return str.replace(/(^\s*)|(\s*$)/g, '');
      },
      pageChange(options) {
        this.isLoad = true;
        this.$store.dispatch('fetchSearchResult', options).then(response => {
          this.isLoad = false;
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  @Red_color: #e71018;
  @media (min-width:992px){
    .productList{
      padding-right: 0;
    }
  }
  .paginWrap {
    margin: 30px 0;
  }
  .searchTitle {
    margin-top: 20px;
    font-size: 20px;
    padding-left: 20px;
    font-weight: bold;
    strong {
      color: @Red_color
    }
  }

  .TSearch {
    margin: 35px 0;
    .searchGroup {
      width: 660px;
      margin: 0 auto;
      position: relative;
      input {
        outline: none;
        border: 1px solid #ccc;
        padding: 10px 50px;
        display: block;
        width: 100%;
      }
      i {
        font-style: normal;
        font-size: 15px;
        position: absolute;
        left: 20px;
        top: 15px;
        color: #999;
      }
    }
  }

  .searchBody {

    .searchFilter {
      border-bottom: 1px solid #333;
      text-align: center;
      margin-bottom: 30px;
      font-size: 24px;
      li {
        padding: 0.5em;
        color: #333;
        display: inline-block;
        margin: 0 20px;
        font-size: 1em;
        cursor: pointer;
        transform: translate(0,1px);
        span {
          color: #999;
        }
        &:hover {
          color: @Red_color;
          border-bottom: 3px solid @Red_color;
          span {
            color: @Red_color;
          }
        }
      }
      .active {
        color: @Red_color;
        border-bottom: 3px solid @Red_color;
        span {
          color: @Red_color;
        }
      }
    }

    .searchContent {
       .notFound-wrap{
         width:35%;
         margin:30px auto;
       }
    }
  }

  @media (max-width:768px) {
    .TSearch {
      margin: 20px 0;
      .searchGroup {
        width: 100%;
      }
    }
    .searchBody .searchFilter li{
      margin: 0 5px;
    }
  }

  @media (max-width: 768px) and (min-width: 450px) {
    .searchBody {
      .searchFilter {
        font-size: 20px;
      }
    }
  }

  @media (max-width: 450px) {
    .searchBody {
      .searchFilter {
        font-size: 15px;
      }
    }
  }

  @media (max-width: 370px) {
    .searchBody {
      .searchFilter {
        font-size: 12px;
        li {
          margin-right: 0.4em;
        }
      }
    }
  }
</style>
