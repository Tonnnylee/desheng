<template>
  <div class="index-page page-top">
    <Slider :bannerList="bannerList" :slideList="slideList"></Slider>
    <div class="middle-content">
      <div class="container index_content">
        <div class="index_service_news">
          <div class="service_block">
            <div class="service_small">
              <nuxt-link class="service_link" to="about/competence.html">
                <div class="block_tab_word">
                  <h2>Core Competence</h2>
                </div>
                <img src="../static/images/index_competence-1.0.0.jpg" alt="Core Competence" />
              </nuxt-link>
            </div>
            <div class="service_small service_small_two">
              <nuxt-link class="service_link" to="about/technology.html">
                <div class="block_tab_word">
                  <h2>Key Technology</h2>
                </div>
                <img src="../static/images/index_key-1.0.0.jpg" alt="Key Technology" />
              </nuxt-link>
            </div>
          </div>
          <!-- Optional: clear the XS cols if their content doesn't match in height -->
          <div class="small_news_block visible-lg-block visible-md-block">
            <div class="news_small" v-for="el in AdNewlist">
              <a class="news_link" :href="el.link">
                <p class="block_title">{{ el.name }}</p>
                <span class="bg"></span>
                <img v-if="el.imgUrl" :src="prefixImg + el.imgUrl" :alt="el.name">
                <img v-else src="../assets/images/newsPlaceholder.jpg">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <h2 class="category-title">BROWSE OUR PRODUCTS</h2>
      <div class="cut-off-line"></div>
      <div class="row category-content">
        <div v-for="item in adList" class="col-lg-4 col-md-4 col-sm-6 col-xs-12 category-item">
          <a :href="item.link">
            <div class="category-img">
              <img :src="prefixImg + item.imgUrl" :alt="item.name">
            </div>
          </a>
          <p class="category-text">{{ item.name }}</p>
        </div>
      </div>
    </div>
    <Aboutus :data="articles"></Aboutus>
  </div>
</template>

<script>
  import Logo from '~components/Logo.vue';
  import Slider from '~components/bannerSlider.vue';
  import Aboutus from '~components/Aboutus.vue';

  export default {
    name:'takstarIndex',
    components: {
      Logo,
      Slider,
      Aboutus
    },
    data() {
      return {
        prefixImg: process.env.prefixImg
      }
    },
    async fetch({ store, params }) {
      var list = await store.dispatch('fetchAdList', {
        state: 1,
        pageNo: 1,
        pageSize: 6,
        categoryUnifyMark: 'HOME_SLIDE'
      });
      var Mlist = await store.dispatch('fetchMAdList', {
        state: 1,
        pageNo: 1,
        pageSize: 6,
        categoryUnifyMark: 'MOBILE_HOME_SLIDE'
      });
      var adlist = await store.dispatch('fetchHAdlist', {
        state: 1,
        pageNo: 1,
        pageSize: 6,
        categoryUnifyMark: 'HOME_PRODUCT_CATEGORY'
      });
      var articles = await store.dispatch('fetchEArList', {
        state: 1,
        pageNo: 1,
        pageSize: 4,
        categoryUnifyMarks: ["ENTERPRISE_PRESS"]
      });
      var adNewList = await store.dispatch('fetchAdNewList', {
        state: 1,
        pageNo: 1,
        pageSize: 6,
        categoryUnifyMark: 'HOME_ADNEWS'
      })
    },
    computed: {
      slideList() {
        return this.$store.state.advertisement.list
      },
      bannerList() {
        return this.$store.state.advertisement.Mlist
      },
      adList() {
        return this.$store.state.advertisement.Hlist
      },
      AdNewlist() {
        return this.$store.state.advertisement.Adnewlist.slice(0,2)
      },
      articles() {
        return this.$store.state.article.Elist.slice(0, 4)
      },
      lastElist() {
        return this.$store.state.article.lastElist.slice(0, 1)
      },
      twoElist() {
        return this.$store.state.article.Elist.slice(0, 2)
      },
      lastTlist() {
        return this.$store.state.article.lastTlist.slice(0, 1)
      }
    },
    methods: {
      handleClick(id) {
        this.$router.push({ path: '/product/type', query: { categoryId: id } })
      }
    }
  }

</script>

<style lang="less" scoped>
  .index-page {
    background: #fff;
  }

  .middle-content {
    padding: 30px 0px;
    background: #ededed;
    padding-top: 110px;
  }

  .index_service_news img {
    width: 100%;
  }

  .index_service_news>div {
    float: left;
  }

  .service_block div:nth-child(1) {
    margin-left: 0;
  }


  .block_tab_word {
    position: absolute;
    bottom: 25px;
    left: 15px;
    z-index: 100;
    color: #fff;
    h2 {
      font-size: 25px;
    }
    p {
      font-weight: 300;
    }
  }

  .service_link,
  .news_link {
    position: relative;
    height: 100%;
    width: 100%;
    &:hover {
      .block_tab {
        padding-left: 25px;
      }
    }
  }

  .block_tab {
    position: absolute;
    top: -8px;
    left: 0;
    background: #e80f20;
    color: #fff;
    padding: 8px 15px;
    transition: all 0.3s ease;
  }

  .block_title {
    position: absolute;
    bottom: 15px;
    left: 15px;
    color: #fff;
    z-index:3;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    height:20px;
    width:95%;
  }

  .category-content {
    padding-bottom: 50px;
  }

  .category-item {
    cursor: pointer;
    a {
      width: 100%;
    }
  }

  .category-img {
    img {
      width: 100%;
      transform: scale(0.7);
      transition: all 0.5s ease;
    }
    &:hover {
      img {
        transform:  translateZ(0) scale(0.8);
      }
    }
  }

  .category-title {
    margin-top: 54px;
    text-align: center;
    font-size: 30px;
    color: #666666;
  }

  .cut-off-line {
    height: 1px;
    width: 100px;
    margin: 26px auto;
    margin-bottom: 0px;
    background: #b2b2b2;
  }

  .category-text {
    text-align: center;
    color: #666666;
    font-size: 20px;
    margin-top: -55px;
  }

  @media (min-width:1200px) {
    .index_service_news .service_block {
      width: 829px;
    }
    .service_small {
      float: left;
      width: 380px;
    }
    .small_news_block {
      width: 260px;
    }
    .news_small {
      width: 250px;
      float: right;
      span.bg{
        position: absolute;
        z-index: 2;
        left: 0;
        right: 0;
        bottom: 0;
        height: 60px;
        background-image: linear-gradient(transparent,#000);
        background-size: auto 100%;
      }
    }
    .service_small_two {
      margin-left: 40px;
    }
    .news_small:first-child {
      margin-bottom: 30px;
    }
  }
  @media (min-width:1200px) and (max-width:1409px){
    .index-page {
      .middle-content{
        .index_content{
          padding-left:30px;
        }
      }
    }
  }
  @media (min-width:1410px) {
    .index-page {
      .middle-content{
        .index_content{
          padding-left:41px;
        }
      }
    }
    .index_service_news .service_block {
      width: 950px;
    }
    .service_small {
      float: left;
      width: 440px;
    }
    .small_news_block {
      width: 360px;
    }
    .news_small {
      width: 290px;
      float: right;
    }
    .service_small_two {
      margin-left: 70px;
    }
    .news_small:first-child {
      margin-bottom: 35px;
    }
  }

  @media (min-width:993px) and (max-width:1199px) {
    .service_small {
      float: left;
      width: 48%;
    }
    .service_small_two {
      margin-left: 30px;
    }
  } //ipad
  @media (min-width:768px) and (max-width:992px) {
    .index-page {
      .middle-content {
        width: 100%;
        padding: 45px 0;
        .index_content {
          padding: 0;
          margin: 0;
          width: 100%;
        }
        .service_small {
          width: 48%;
          float: left;
        }
        .service_small_two {
          margin-left: 30px;
        }
      }
      .index_service_news {
        .service_block {
          width: 100%;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;
        }
      }
    }
  }
  //for phone
  @media (max-width:767px) and (min-width:0px) {
    .index-page {
      .acticle-link {
        width: 100%;
      }
      .index_content {
        padding: 12px;
        padding-top: 0;
        padding-bottom: 0;
        .block_tab_word{
          bottom:-5px;
        }
      }
      .middle-content {
        padding: 0px;
        padding-top: 15px;
        padding-bottom:15px;
        .service_block div:first-child{
          margin-bottom:20px;
        }
      }
      .service_small_two {
        margin-left: 0;
      }
      .index_service_news>div {
        float: initial;
      }
    }
  } //pc-responsive
  @media (max-width:1199px) and (min-width:1025px) {
    .middle-content {
      .index_content {
        width: 960px;
        .service_block {
          width: 75%;
        }
        .small_news_block{
          margin-left:10px;
        }
      }
      .service_small {
        width: 45%;
        float: left;
      }
      .news_small {
        width:213px;
      }
      .news_small:first-child{
        margin-bottom:15px;
      }
      .service_small_two {
        margin-left: 40px;
      }
    }
  }
  @media (max-width:1024px) and (min-width:993px){
    .middle-content{
        .index_content{
           width:940px;
        }
    }
    .small_news_block{
      display:none !important;
    }
  }
</style>
