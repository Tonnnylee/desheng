<template>
  <div class="row productListBody">
    <div v-if="isLoad" class="loader"><span>Loading...</span></div>
    <div v-if="productList.count === '0' && !isLoad && isText.status" class="notFound">
      <div class="notFound-wrap">
        <img src="../assets/images/notdisplay.jpg">
      </div>
    </div>
    <div v-show="!isLoad" :class="gridClass" class="productList" v-for="(pl,index) in productList.list" :key="pl">
      <div class="productListWrap">
        <nuxt-link :to="{ name:'product-type-id', params: { id: pl.id+'.html' } }" class="productImg">
          <img v-if="pl.defaultImgUrl" :src="prefixImg + pl.defaultImgUrl" :alt="pl.name">
          <img v-else src="../assets/images/proPlaceholder-1.0.0.jpg">
        </nuxt-link>
        <h2>{{ pl.name }}</h2>
        <nuxt-link class="productMore" :to="{ name:'product-type-id', params: { id: pl.id + '.html' } }">View Details</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'productList',
    data() {
      return {
        prefixImg: process.env.prefixImg
      }
    },
    props: {
      isLoad: {
        type: Boolean,
        default: false
      },
      productList: {
        type: Object,
        default: function () {
          return {}
        }
      },
      gridClass: {
        type: String,
        default: 'col-md-4 col-sm-6 col-xs-6'
      },
      isText: {
        type: Object,
        default: function () {
          return {
            message: 'It is empty!',
            status: true
          }
        }
      }
    }
  }

</script>

<style lang="less" scoped>
  @Red_color: #e71018;
  .productList {
    margin-bottom: 20px;
    .productListWrap {
      padding: 15px;
      background-color: #fff;
      > a{
        width:100%;
      }
    }
    h2 {
      color: #333;
      font-size: 20px;
      margin: 15px 0;
      height:25px;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }
    .productImg {
      img {
        max-width: 100%;
        height:auto !important;
      }
    }
    .productMore {
      padding: 10px;
      background-color: @Red_color;
      display: block;
      color: #fff;
      text-align: center;
    }
  }
  .productList:nth-child(2n-1){
    padding-right:7px;
    padding-left:10px;
  }
  .productList:nth-child(2n){
    padding-left:7px;
    padding-right:10px;
  }
  .notFound-wrap{
    width:35%;
    margin:30px auto;
  }
</style>
