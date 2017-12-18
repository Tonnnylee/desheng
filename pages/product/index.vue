<template>
  <div class="product-page page-top">
    <levelbar></levelbar>
    <div class="container">
      <div class="row productList">
        <div class="col-md-4 col-sm-6 col-xs-6 productListItem " v-for="(item,index) in adList" :key="item">
          <nuxt-link :to="item.link">
            <div class="productListItemWrap">
              <h2>{{ item.name }}</h2>
              <span>DISVOVER MORE+</span>
              <img :src="prefixImg + item.imgUrl" :alt="item.name" />
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import levelbar from '~components/levelbar';

  export default {
    name: 'productIndex',
    head() {
      return {
        title: 'Takstar Product List',
        meta: [
          { name: 'description', content: 'Takstar Product List' }
        ]
      }
    },
    data() {
      return {
        prefixImg: process.env.prefixImg
      }
    },
    mounted(){
      this.setFooterClass();
    },
    watch:{
      '$route':'setFooterClass'
    },
    components: {
      levelbar
    },
    fetch({ store, params }) {
      return store.dispatch('fetchAdList', {
        state: 1,
        pageNo: 1,
        pageSize: 6,
        categoryUnifyMark: 'PRODUCT_NAVIGATION_PRODUCT_CATEGORY'
      })
    },
    methods: {
        setFooterClass(){
          $(".product-page").removeClass("pageHeight");
          var contentHeight = document.body.scrollHeight,
            winHeight = window.innerHeight;
          if(!(contentHeight > winHeight)){
            $(".product-page").addClass("pageHeight");
          }
        }
    },
    computed: {
      adList() {
        return this.$store.state.advertisement.list
      }
    }
  }

</script>

<style lang="less" scoped>
  .pageHeight{
    min-height:1150px;
  }
  .productListItem {
    margin-bottom: 25px;
    a {
      width: 100%;
      border-bottom:2px solid #ccc;
    }
  }

  .productListItem .productListItemWrap {
    background-color: #fff;
    /*margin-right: 5px;*/
    padding: 10px;
    min-height: 280px;
    position: relative;
    overflow: hidden;
  }

  .productListItem .productListItemWrap span {
    background-color: red;
    color: #fff;
    padding: 5px;
    font-size: 12px;
    cursor: pointer;
  }

  .productListItem .productListItemWrap h2,
  .productListItem .productListItemWrap span {
    margin-left: 15px;
    position: relative;
    z-index: 2;
  }

  .productListItem .productListItemWrap h2 {
    margin: 15px 15px 15px 15px;
    font-size: 25px;
    font-weight: bold
  }

  .productListItem .productListItemWrap img {
    position: absolute;
    max-width: 100%;
    bottom: 0;
    right: 0;
  }

  //ipad
  @media (min-width:768px) and (max-width:992px){
    .productListItem .productListItemWrap img {
      position: absolute;
      max-width: 80%;
      bottom: 0;
      right: 0;
    }
  }

  //phone
  @media (min-width:0px) and (max-width:767px){
    .productListItem:nth-child(2n+1){
       padding-right:7px;
       padding-left:10px;
    }
    .productListItem:nth-child(2n){
      padding-left:7px;
      padding-right:10px;
    }
    .productListItem .productListItemWrap img{
      max-width: 95%;
    }
    .productListItem .productListItemWrap {
      min-height: 200px;
    }
    .productListItem .productListItemWrap h2 {
      font-size: 18px;
      margin:0;
    }
    .productListItem .productListItemWrap span{
      margin-top: 10px;
      display: inline-block;
      width: 95px;
      text-align: center;
      margin-left: 0px;
    }
    .productList{
      margin-top:15px;
    }
  }
</style>
