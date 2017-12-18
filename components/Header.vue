<template>
  <div class="Header navbar-wrapper">
    <nav class="navbar navbar-inverse navbar-static-top">
      <div class="container nav-container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle visible-sm-block visible-xs-block collapsed">
              <span class="sr-only">Toggle navigation</span>
              <span class="iconfont icon-fenlei"></span>
            </button>
          <nuxt-link to="/search" class="search-icon visible-xs-block visible-sm-block collapsed" href="#">
            <span class="iconfont icon-sousuo-sousuo"></span>
          </nuxt-link>
          <nuxt-link class="navbar-brand" to="/">
            <img class="visible-lg-inline-block visible-md-inline-block" src="../assets/images/logo.png">
            <img class="visible-sm-inline-block visible-xs-inline-block m_logo" src="../assets/images/m_logo.png">
          </nuxt-link>
        </div>
        <div id="navbar" class="navbar-collapse visible-lg-block visible-md-block collapse">
          <ul class="nav navbar-nav">
            <li :class="{ active : activeTarget == '' }">
              <nuxt-link to="/">HOME</nuxt-link>
            </li>
            <li :class="{ active : activeTarget == 'product' }" data-index="0">
              <nuxt-link to="/product/">PRODUCT</nuxt-link>
            </li>
            <li :class="{ active : activeTarget == 'service' }" data-index="1">
              <nuxt-link to="/service/">SERVICE</nuxt-link>
            </li>
            <li :class="{ active : activeTarget == 'news' }" data-index="2">
              <nuxt-link to="/news/">NEWS</nuxt-link>
            </li>
            <li :class="{ active : activeTarget == 'about' }" data-index="3">
              <nuxt-link to="/about/">ABOUT US</nuxt-link>
            </li>
          </ul>
          <div class="navbar-form fr visible-lg-block visible-md-block">
            <div class="form-group search-wrap">
              <span class="iconfont icon-sousuo-sousuo"></span>
              <input type="text" placeholder="search" @keyup.stop.enter="globalSearch" v-model="globalSearchValue" class="search-input form-control">
            </div>
            <div class="btn-group">
              <button type="button" class="select-lan dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        English <span class="caret"></span>
              </button>
              <ul class="dropdown-menu">
                <li><a href="#"><img src="../assets/icon/gb.gif" />English</a></li>
                <li><a href="http://www.takstar.com/"><img src="../assets/icon/cn.gif" />简体中文</a></li>
              </ul>
            </div>
          </div>
        </div>
        <!--first-->
        <div style="display:none;" class="sub-navbar mdHide clearfix animated productSub">
          <div class="right-nav fl">
              <div class="nav-tab">
                <div class="acticle-nav">
                  <div v-for="item in NavProCategory" class="acticle-nav-tab col-lg-2 col-md-2 col-sm-2">
                    <a :href="item.link">
                      <img v-if="item.imgUrl" :src="prefixImg+item.imgUrl">
                      <img v-else src="../assets/images/newsPlaceholder.jpg">
                      <div class="nav-mask">
                        <div>
                          Discover more+
                        </div>
                      </div>
                      <p :title="item.title">{{ item.title }}</p>
                    </a>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <!-- second -->
        <div style="display:none;" class="sub-navbar animated mdHide">
          <div class="right-nav fl">
            <div class="nav-tab">
              <div class="acticle-nav col-five" >
                <div v-for="item in NavSerCategory" class="acticle-nav-tab col-lg-2 col-md-2 col-sm-2">
                  <a :href="item.link">
                    <img v-if="item.imgUrl" :src="prefixImg+item.imgUrl">
                    <img v-else src="../assets/images/newsPlaceholder.jpg">
                    <div class="nav-mask">
                      <div>
                        Discover more+
                      </div>
                    </div>
                    <p :title="item.title">{{ item.title }}</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- third -->
        <div style="display:none;" class="sub-navbar animated mdHide">
          <div class="right-nav fl">
            <div class="nav-tab">
              <div class="acticle-nav">
                <div v-for="item in NavNewsCategory" class="acticle-nav-tab col-lg-4 col-md-4 col-sm-4">
                  <a :href="item.link">
                    <img v-if="item.imgUrl" :src="prefixImg+item.imgUrl">
                    <img v-else src="../assets/images/newsPlaceholder.jpg">
                    <div class="nav-mask">
                      <div>
                        Discover more+
                      </div>
                    </div>
                    <p :title="item.title">{{ item.title }}</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- four -->
        <div style="display:none;" class="sub-navbar service-navbar animated mdHide">
          <div class="right-nav fl">
            <div class="nav-tab">
              <div class="acticle-nav col-five">
                <div v-for="item in NavAboutCategory" class="acticle-nav-tab col-lg-2 col-md-2 col-sm-2">
                  <a :href="item.link">
                    <img v-if="item.imgUrl" :src="prefixImg+item.imgUrl">
                    <img v-else src="../assets/images/newsPlaceholder.jpg">
                    <div class="nav-mask">
                      <div>
                        Discover more+
                      </div>
                    </div>
                    <p :title="item.title">{{ item.title }}</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <Tmenu id="navMenu" class="visible-sm-block visible-ms-block visible-xs-block"></Tmenu>
  </div>
</template>

<script>
  import Tmenu from './menu.vue';
  import bgimg from '../assets/images/placeholder.jpg';
  import microphone from '../assets/images/microphone-1.0.1.png';
  import headphone from '../assets/images/headphone-1.0.1.png';
  import audio from '../assets/images/speaker-1.0.1.png';
  import portable from '../assets/images/portable-1.0.1.png';
  import integrated from '../assets/images/integrated-10.1.png';
  import accessary from '../assets/images/accessary-1.0.1.png';
  import NuxtLink from '../.nuxt/components/nuxt-link'

  export default {
    data() {
      return {
        bgimg: bgimg,
        globalSearchValue: '',
        activeTarget: '',
        prefixImg: process.env.prefixImg,
        productNav: [
          {title:'Microphone', src: microphone},
          {title:'Headphone', src: headphone},
          {title:'Audio System', src: audio},
          {title:'Portable Amplifier', src: portable},
          {title:'Integrated Application', src: integrated},
          {title:'Accessary', src: accessary}].map((item, index) => {
          return item = {
            index: index,
            status: index === 0 ? false : true,
            src: item.src,
            title:item.title
          }
        }),
        layout: [
          {
            ColClass: 'col-md-12'
          },
          {
            ColClass: 'col-md-6',
          },
          {
            ColClass: 'col-md-4'
          },
          {
            ColClass: 'col-md-6',
            height: '50%'
          }
        ]
      }
    },
    watch: {
      '$route': 'changeActive'
    },
    mounted() {
      this.initNavEvent();
      this.scrollHeader(function(direction) {
          if(direction == 'down'){
            $(".Header").css("top","-61px");
          }else if(direction == 'up'){
            $(".Header").css("top","0px");
          }
      });
    },
    created() {
      this.changeActive();
      this.fetchHeadData();
      this.fetchUnifymark();
    },
    components: {
      NuxtLink, Tmenu
    },
    methods: {
      globalSearch() {
        this.$router.push({ path: '/search', query: { kw: this.globalSearchValue } });
        this.globalSearchValue = '';
      },
      fetchUnifymark() {
        this.$store.dispatch('fetchAdList', {
          categoryUnifyMark: 'PRODUCT_NAVIGATION_MENU_1',
          unifyMark: true,
          state: 1,
          sort: 'orderSort'
        })
      },
      fetchUnifymark6() {
        this.$store.dispatch('fetchAdList', {
          categoryUnifyMark: 'PRODUCT_NAVIGATION_MENU_6',
          unifyMark: true,
          state: 1,
          sort: 'orderSort'
        })
      },
      initNavEvent() {
        let self = this;
        $(".subnav-lis").on("mouseover", function () {
          var currentLi = $(this);
          currentLi.siblings().removeClass("nav-active");
          currentLi.addClass('nav-active');
        });
        $(".sub-navbar").on("mouseleave", function () {
          $(this).addClass("fadeOut").css("pointer-events","none").removeClass("fadeInDown");
          setTimeout(function(){
            $(".sub-navbar").hide();
          },500)
        });
        $(".navbar-nav li").on("mouseover", function () {
          var currentLi = $(this);
          var curIndex = parseInt(currentLi.attr("data-index"));
          var subNavbar = $(".sub-navbar");
          subNavbar.hide();
          $(subNavbar[curIndex]).show()
            .removeClass("fadeOut")
            .css("pointer-events","all")
            .addClass("fadeInDown")
        });
        $(".Header").on("mouseleave", function () {
          $(".sub-navbar").addClass("fadeOut")
            .css("pointer-events","none")
            .removeClass("fadeInDown")

        })
        $(".navbar-nav li").on("click", function () {
          var currentLi = $(this);
          if(currentLi.attr('data-index') == 2 || currentLi.attr('data-index') == 3){
            return false;
          }
          $(".navbar-nav li").removeClass('active');
          currentLi.addClass("active");
        });
        $(".navbar-toggle").on("click", function () {
          $("#navMenu").css({ "opacity": "1", "transform": "translate3d(0,0,0)" });
          $("body,html").css({
            height: "100%",
            overflow: "hidden"
          });
        });
        $(".Header a").on("click", function () {
          var currentA = $(this).attr('data-none');
          if(currentA == 'none'){
            return false;
          }
          $(".sub-navbar").hide();
        })
        $(".sub-navbar a").on("click", function(){
          $(".sub-navbar").hide();
        })
      },
      scrollHeader( fn ){
        var beforeScrollTop = document.body.scrollTop || document.documentElement.scrollTop,
          fn = fn || function() {};
        window.addEventListener("scroll", function() {
          var afterScrollTop = document.body.scrollTop || document.documentElement.scrollTop,
            delta = afterScrollTop - beforeScrollTop;
          if( delta === 0 ) return false;
          fn( delta > 0 ? "down" : "up" );
          beforeScrollTop = afterScrollTop;
        }, false);
      },
      changeActive() {
        var routeArr = this.$route.path.split("/");
        this.activeTarget = routeArr[1];
      },
      fetchHeadData() {
        this.$store.dispatch('fetchHEArList', {
          pageNo: 1,
          pageSize: 10,
          categoryUnifyMarks: ['ENTERPRISE_PRESS']
        });
        this.$store.dispatch('fetchHNArList', {
          pageNo: 1,
          pageSize: 10,
          categoryUnifyMarks: ['NEW_PRODUCTS']
        });
        this.$store.dispatch('fetchHEXArList', {
          pageNo: 1,
          pageSize: 10,
          categoryUnifyMarks: ['EXHIBITION_FOCUS']
        });
        this.$store.dispatch('fetchNavProCategory', {
          pageSize:6,
          pageNo:1,
          state: 1,
          categoryUnifyMark: 'NAV_PRODUCT_CATEGORY'
        });
        this.$store.dispatch('fetchNavSerCategory', {
          pageSize:6,
          pageNo:1,
          state: 1,
          categoryUnifyMark: 'NAV_SERVICE_CATEGORY'
        });
        this.$store.dispatch('fetchNavNewsCategory', {
          pageSize:6,
          pageNo:1,
          state:1,
          categoryUnifyMark: 'NAV_NEWS_CATEGORY'
        })
        this.$store.dispatch('fetchNavAboutCategory', {
          pageSize:6,
          pageNo:1,
          state:1,
          categoryUnifyMark: 'NAV_ABOUT_CATEGORY'
        })
      }
    },
    computed: {
      Eitems() {
        return this.$store.state.article.lastElist.slice(0, 3);
      },
      Nitems() {
        return this.$store.state.article.lastNlist.slice(0, 3);
      },
      EXitems() {
        return this.$store.state.article.lastEXlist.slice(0, 3);
      },
      oneEitems() {
        return this.$store.state.article.lastElist.slice(0, 1).reverse();
      },
      oneNitems() {
        return this.$store.state.article.lastNlist.slice(0, 1).reverse();
      },
      oneEXitems() {
        return this.$store.state.article.lastEXlist.slice(0, 1).reverse();
      },
      FetchAdUnifymark() {
        return this.$store.state.advertisement.FetchAdUnifymark.slice(0, 4);
      },
      NavProCategory() {
        return this.$store.state.advertisement.NavProCate;
      },
      NavSerCategory() {
          return this.$store.state.advertisement.NavSerCate;
      },
      NavNewsCategory() {
        return this.$store.state.advertisement.NavNewsCate;
      },
      NavAboutCategory() {
        return this.$store.state.advertisement.NavAboutCate;
      }
    }
  }

</script>
<style lang='less' scoped>
  .Header {
    height: 60px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 200;
    width: 100%;
    transition:all 0.2s ease;
    #navbar {
      height: 60px;
    }
    .navbar {
      transition: all 0.5s ease;
      border:none;
    }
    .icon-fenlei {
      color: #fff;
      font-size: 25px;
    }
    .dropdown-menu {
      left: -30px;
      img{
        margin-right:10px;
        vertical-align: middle;
        margin-top:-2px;
      }
    }
  }

  .navbar-brand {
    margin-top: 0px;
    height: 60px;
    padding: 10px 15px;
    padding-top:13px;
  }

  .navbar-nav li {
    margin: 0 15px;
  }

  .navbar-nav li a {
    color: #d4d4d4;
    height: 100%;
    padding: 15px 0;
    line-height: 30px;
    &:after {
      position: absolute;
      content: "";
      bottom: 14px;
      width: 0%;
      height: 1px;
      background: #e71018;
      left: 0;
      transition: all 0.3s ease;
    }
    &:hover {
      &:after {
        width: 100%;
      }
    }
  }

  .navbar-nav .active a {
    position: relative;
    background: transparent !important;
    &:after {
      position: absolute;
      content: "";
      bottom: 14px;
      width: 100%;
      height: 1px;
      background: #e71018;
      left: 0;
    }
  }

  .navbar-nav .noActive a {
    &:after {
      position: absolute;
      content: "";
      bottom: 14px;
      width: 100%;
      height: 1px;
      background: transparent !important;
      left: 0;
    }
  }

  .Header {
    .search-wrap {
      background: #e8e8e8;
      border-radius: 999em;
      padding: 0 10px;
      line-height: 2;
      span {
        padding-top: 5px;
        display: line-block;
        cursor: pointer;
        color: #888;
      }
    }
  }

  .Header .search-input {
    border: none;
    height: 28px;
    background: #e8e8e8;
    padding-left: 5px;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
    font-size: 16px;
    padding-top: 2px;
    width: 188px;
    padding-bottom: 9px;
    box-shadow: none;
    color: #666666;
    &:focus {
      outline: none;
      border: none;
      box-shadow: none;
      width: 220px;
    }
  }

  .Header .navbar-form {
    margin-top: 14px;
    padding: 0px 0;
  }

  .Header .select-lan {
    margin-left: 20px;
    background: transparent;
    outline: none;
    border: none;
    color: #858585;
  }

  .Header .nav-container {
    position: relative;
    height: 60px;
  }

  .Header .navbar {
    margin-bottom: 0;
    height: 100%;
    .sub-navbar {
      width: 100%;
      background: #e7dcd3;
      padding-top:10px;
      padding-bottom:75px;
      position: absolute;
      top: 60px;
      z-index: 100;
      left: 0;
      .acticle-nav-tab{
        padding-left:8px;
        padding-right:10px;
        position: relative;
        .nav-mask{
          position: absolute;
          top:0;
          left:0;
          width:100%;
          height:100%;
          z-index:100;
          background:rgba(0,0,0,0.6);
          opacity: 0;
          transition: all 0.5s ease;
          div{
            color:#fff;
            height:40px;
            line-height: 36px;
            width:55%;
            text-align: center;
            border:1px solid #fff;
            position: absolute;
            top:0;
            bottom:0;
            left:0;
            right:0;
            margin:auto;
          }
        }
        &:hover{
          .nav-mask{
            opacity: 1;
          }
        }
      }
      .subnav-lis {
        width: 100%;
        box-sizing: border-box;
        text-align: left;
        color: #333333;
        font-size: 17px;
        padding: 15px 10px;
        border-bottom:1px solid #d0c4ba;
        cursor: pointer;
        position: relative;
        &:after {
          content: "";
          position: absolute;
          left: 92%;
          top: 18px;
          width: 0;
          height: 0;
          border-top: 12px solid transparent;
          border-left: 12px solid #e7dcd3;
          border-bottom: 12px solid transparent;
          transition: all 0.15s ease-in;
        }
        &:last-child {
          margin-bottom: 10px;
        }
      }
      .nav-active {
        color: #e70f20;
        &:after {
          left: 100%;
        }
      }
    }
  }

  @media (min-width:993px) {
    .Header .navbar {
      .sub-navbar {}
    }
  }

  @media (min-width:1400px) {
    .Header .navbar {
      .sub-navbar {}
    }
  }

  @media (min-width:1650px) {
    .Header .navbar {
      .sub-navbar {}
    }
  }

  @media (min-width:1900px) {
    .Header .navbar {
      .sub-navbar {}
    }
  }

  @media (min-width:1024px) {
    .Header {
      .navbar {
        .m_logo{
          width:60%;
        }
        .sub-navbar {
          width: 100%;
          .right-nav {
            width: 100%;
          }
        }
      }
    }
  }

  @media (min-width:1200px) {
    .Header {
      .navbar {
        .sub-navbar {
          width: 100%;
          .right-nav {
            width: 100%;
          }
        }
      }
    }
  }

  @media (min-width:1370px) {
    .Header {
      .navbar {
        .sub-navbar {
          width: 100%;
          .right-nav {
            width: 100%;
          }
        }
      }
    }
  }

  @media (min-width:1410px) {
    .Header {
      .navbar {
        .sub-navbar {
          width: 100%;
          .right-nav {
            width: 100%;
          }
        }
      }
    }
  }

  .sub-navbar .right-nav {
    padding: 10px;
    padding-top:10px;
    padding-bottom: 5px;
    background: #e7dcd3;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    .discover_more{
      position: absolute;
      bottom: 20px;
      right: 20px;
      a{
        font-size:18px;
      }
    }
    .col-five{
      .acticle-nav-tab{
        width:20%;
      }
    }
    .nav-titles {
      width: 30%;
      overflow: hidden;
      h2 {
        padding-bottom: 15px;
        border-bottom: 1px solid #000;
        margin-bottom: 10px;
        font-size: 20px;
      }
    }
    .acticle-nav {
      width: 100%;
    }
    li {
      a {
        line-height: 2;
        color: #333;
        font-size: 15px;
        font-weight:300;
        transition: all 0.5s ease;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        width: 100%;
      }
    }
    a.nav-link {
      color: #e70f20;
      display: inline-block;
      margin-top: 15px;
    }
  }

  .acticle-nav-tab {
    a {
      width: 100%;
      position: relative;
      &:hover{
        color:#fff;
        p {
          background: #e70f20;
        }
      }
    }
    img {
      width: 100%;
    }
    p {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      margin-top: 15px;
      position: absolute;
      bottom: -56px;
      padding: 20px;
      width: 100%;
      background: #fff;
    }
  }

  @media (max-width:1199px) and (min-width:993px) {
    .Header {
      .sub-navbar {
        .right-nav {
          width: 100%;
        }
      }
    }
  }

  @media (max-width:1199px) and (min-width:1025px) {
    .Header .nav-container {
      padding-right: 0;
      width: 990px;
    }
    .Header .navbar-form {
      .search-input {
        width: 120px;
      }
    }
  } // for productSub
  @media (max-width:1199px) and (min-width:993px) {
    .Header .navbar .sub-navbar .subnav-lis {
      font-size: 15px;
    }
  }

  @media (max-width:1024px) {
    .Header .navbar-brand {
      padding-left: 15px;
    }
    #navbar {
      width: 78%;
      float: left;
      padding-right: 0;
      padding-left: 0;
    }
    .navbar-toggle {
      margin: 8px 0;
    }
    .Header .navbar-form {
      width: 268px;
      float: left !important;
      .search-input {
        width: 110px;
      }
    }
    .search-icon {
      color: #fff;
      float: right;
      line-height: 2.5;
      margin-right: 25px;
      span {
        font-size: 25px;
      }
    }
  } // ipad
  @media (max-width:992px) {
    .Header{
      top:0 !important;
    }
    .navbar-header{
      .navbar-brand{
        width:70%;
        img{
          width: 36%;
        }
      }
    }
    .mdHide {
      display: none !important;
    }
  }

  @media (min-width: 992px) {
    .navbar-header {
      float: left;
    }
  }
  // phone
  @media (min-width:0px) and (max-width:767px) {
    .navbar-header{
      .navbar-brand{
        width:65%;
        img{
          width: 180px;
        }
      }
    }
    .search-icon {
      line-height: 2.5;
      margin-right: 10px
    }
    .navbar-header{
      padding:0 5px;
    }
  }

  .Header .navbar .productSub {
    overflow: hidden;
    .nav-tab {
      height: 100%;
      .staticPost {
        height: 100%;
        padding: 0px 5px 0 15px;
        overflow: hidden;
        h1 {
          font-size: 20px;
          padding-bottom: 15px;
          border-bottom: 1px solid #333;
        }
        p {
          padding-top: 15px;
          font-size: 14px;
          color: #666;
          line-height: 20px;
          font-weight: 300;
          height: 138px;
          overflow: hidden;
        }
        .imgWrpa {
          padding: 10px;
          overflow: hidden;
          img {
            width: 100%;
          }
        }
      }
      .gridImg {
        height: 100%;
        .gridImgItemWrap {
          height: 100%;
          padding: 3px;
          .gridImgItem {
            background:#000;
            overflow: hidden;
            transition:opacity 0.3s ease;
            &:hover{
                opacity: 0.7;
            }
            a {
              display: block;
              height: 100%;
              overflow: hidden;
              position: relative;
              img {
                width: 100%;
                max-width:110%;
                transition:all 0.3s ease-out;
              }
              span.bg{
                position: absolute;
                z-index: 2;
                left: 0;
                right: 0;
                bottom: 0;
                height: 60px;
                background-image: -webkit-gradient(linear,left top,left bottom,from(transparent),to(#000));
                background-image: -o-linear-gradient(transparent,#000);
                background-image: linear-gradient(transparent,#000);
                background-size: auto 100%;
              }
              p{
                color:#fff;
                font-size:20px;
                padding:15px;
                position:absolute;
                bottom:0;
                left:0;width: 100%;
                font-weight: 400;
                z-index:3;
              }
            }
            background: #000;
            height: 100%;
          }
        }
      }
    }
  }

  @-webkit-keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }

  //animate
  .animated {
    -webkit-animation-duration: 0.5s;
    animation-duration: 0.5s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  .fadeOut {
    -webkit-animation-name: fadeOut;
    animation-name: fadeOut;
  }

  @-webkit-keyframes fadeOutDown {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      -webkit-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
    }
  }

  @-webkit-keyframes fadeInDown {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  @-webkit-keyframes fadeInDown
  {
    0% { opacity: 0; -webkit-transform: translate3d(0,0px,0); filter:alpha(opacity=0);   }
    100% { opacity: 1; -webkit-transform: translate3d(0,0,0); filter:alpha(opacity=100);  }
  }
  @-moz-keyframes fadeInDown
  {
    0% { opacity: 0; -moz-transform: translate3d(0,0px,0); filter:alpha(opacity=0);  }
    100% { opacity: 1; -moz-transform: translate3d(0,0,0); filter:alpha(opacity=100);  }
  }
  @-ms-keyframes fadeInDown
  {
    0% { opacity: 0; -ms-transform: translate3d(0,0px,0); filter:alpha(opacity=0);  }
    100% { opacity: 1; -ms-transform: translate3d(0,0,0); filter:alpha(opacity=100);  }
  }
  @keyframes fadeInDown
  {
    0% { opacity: 0; transform: translate3d(0,0px,0); filter:alpha(opacity=0);  }
    100% { opacity: 1; transform: translate3d(0,0,0); filter:alpha(opacity=100);  }
  }

  .fadeInDown {
    -webkit-animation-name: fadeInDown;
    animation-name: fadeInDown;
  }

  @media (max-width:1024px){
    .sub-navbar{
      display:none !important;
    }
  }
</style>
