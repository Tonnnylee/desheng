<template>
  <div class="NewsMiddle row">
    <div :class="[layout, news.type]" class="NewsMiddleItem" v-for="news in newsType">
      <!--<div v-if="news.type === 'newsImg'" v-html="news.html" style="display:inline-block; vertical-align:middle;"></div>-->
      <img :src="`${news.html}`" alt="" v-if="news.type === 'newsImg'">
      <vue-scrollbar v-if="news.type === 'newsText'" :styles="scrollbar" class="my-scrollbar vueScrollbar" ref="Scrollbar">
        <div class="textConten" v-html="news.html">
        </div>
      </vue-scrollbar>
    </div>
  </div>
</template>

<script>
  import VueScrollbar from '~components/vueScrollBar/vue-scrollbar.vue';
  import '~assets/css/vue-scrollbar.css';
  export default {
    data() {
      return {
        scrollbar: {
          maxHeight: "100%"
        }
      }
    },
    components: {
      VueScrollbar
    },
    created() {

    },
    mounted() {

    },
    props: {
      layout: {
        type: String,
        default: 'col-md-6 col-sm-6 col-xs-12'
      },
      newsType: {
        type: Array,
        default: function () {
          return []
        }
      }
    }
  }

</script>

<style lang="less">
  body {
    background-color: #fff;
  }

  .vueScrollbar {
    height: 100%;
  }

  .NewsMiddle {
    margin: 35px 0;
    overflow: hidden;
    font-size: 20px;
    .newsText {
      height: 405px;
      padding: 30px;
      overflow: hidden;
      h1 {
        font-size: 1.6em;
        margin-bottom: 10px;
      }
      p {
        line-height: 30px;
        font-size: 0.85em;
        font-weight: 300;
        padding-right:0.6em;
        text-align: left;
      }
    }
    .newsImg {
      height: 417px;
      /*background: #000;*/
      padding: 0;
      img {
        /*width: 100%;
        height: 100%;*/
        vertical-align: middle;
      }
      &::before {
        content: '';
        line-height: 100%;
        height: 100%;
        width: 0;
        vertical-align: middle;
        display: inline-block;
      }
    }
  }

  @media (min-width:993px) and (max-width:1200px) {
    .NewsMiddle .newsImg,
    .NewsMiddle .newsText {
      height: 360px;
    }
  }

  @media (min-width:768px) and (max-width:992px) {
    .NewsMiddle .newsImg,
    .NewsMiddle .newsText {
      height: 280px;
    }
    .NewsMiddle {
      font-size: 18px;
    }
  }

  @media (max-width:767px) {
    .NewsMiddle .newsImg,
    .NewsMiddle .newsText {
      height: auto;
    }
    .NewsMiddle {
      font-size: 16px;
    }
    .NewsMiddle .newsText {
      height: auto;
      padding:30px 10px;
      p{
        font-size: 1em;
      }
    }
  }
</style>
