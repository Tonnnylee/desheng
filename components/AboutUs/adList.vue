<template>
  <div class="adListContainter" :style="bg">
    <div class="adListTitle" v-if="title.state">
      <h1>{{title.text}}</h1>
    </div>
    <div class="adListControlTab" v-if="control">
      <button @click="handleTabClick($event,index)" :class="t.active" v-for="(t,index) in tab" :key="t">
        {{t.text}}
      </button>
    </div>

    <div class="swiperAdList adListBox" v-if="adListCategory.length">
      <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <div class="adList clearfix swiper-slide swiper-no-swiping" v-for="adc in adListCategory">
            <div class="col-xs-12 adListItem" :class="item.class" v-for="item in adc" :key="item">
              <div class="adListItemWrap">
                <a :href="item.href" class="adListImg">
                  <img :src="item.img" :alt="item.title" @click="handleAdClick(item)">
                </a>
                <h2 v-show="item.title">{{item.title}}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="adListBox">
      <div class="adList clearfix" v-if="!adListCategory.length">
        <div class="col-xs-12 adListItem" :class="ad.class" v-for="ad in adList" :key="ad" v-if="currentTab === (ad.tab || 1)">
          <div class="adListItemWrap">
            <a :href="ad.href" class="adListImg">
            <img :src="ad.img" :alt="ad.title" @click="handleAdClick(ad)">
          </a>
            <h2 v-show="ad.title">{{ad.title}}</h2>
          </div>
        </div>
      </div>
    </div>


    <div class="adListBigImg" v-show="showBigImg">
      <div class="BigImgWrap">
        <i class="iconfont icon-guanbi" @click="showBigImg = false"></i>
        <img :src="bigImg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'adList',
    head() {
      return {

      }
    },
    data() {
      return {
        currentTab: this.curTab || 1,
        bigImg: '',
        showBigImg: false,
        swiperOption: {
          spaceBetween: 30,
          loop: false
        }
      }
    },
    computed: {
      adListCategory() {
        var arr = [];
        this.adList.filter((e, i) => {
          if (e.tab === 1) {
            if (arr[0] === undefined) arr[0] = [];
            arr[0].push(e)
          } else if (e.tab === 2) {
            if (arr[1] === undefined) arr[1] = [];
            arr[1].push(e)
          } else if (e.tab === 3) {
            if (arr[2] === undefined) arr[2] = [];
            arr[2].push(e)
          }
        })
        return arr;
      }
    },
    methods: {
      handleTabClick(e, index) {
        $('.adListControlTab button').siblings().removeClass('activeBtn');
        e.target.setAttribute('class', 'activeBtn');
        this.currentTab = index + 1;
        this.mySwiper.slideTo(index, 500, false);
      },
      handleAdClick(ad) {
        this.showBigImg = true;
        this.bigImg = ad.img;
      }
    },
    props: {
      bg: {
        type: Object,
        default: function () {
          return {
            backgroundColor: '#ece3dc'
          }
        }
      },
      control: {
        type: Boolean,
        default: true
      },
      title: {
        type: Object,
        default: function () {
          return {
            state: true,
            text: 'PROFESSIONAL SOUND SYSTEM'
          }
        }
      },
      adList: {
        type: Array,
        default: function () {
          return []
        }
      },
      tab: {
        type: Array,
        default: function () {
          return []
        }
      },
      curTab: {
        type: Number,
        default: 1
      }
    }
  }

</script>

<style lang="less" scoped>
  .clearfix:after {
    content: " ";
    /* Older browser do not support empty content */
    visibility: hidden;
    display: block;
    height: 0;
    clear: both;
  }

  .adListContainter {
    font-size: 24px;
    .adListTitle {
      text-align: center;
      padding-top: 30px;
      max-width: 85%;
      margin: 0 auto;
      h1 {
        font-size: 30px;
        margin: 0 0.2em;
        display: inline-block;
        width: 100%;
        font-weight: 400;
      }
      .Titleline {
        display: inline-block;
        height: 1px;
        width: 100%;
        vertical-align: middle;
        background-color: #ccc;
      }
    }
    .adListBigImg {
      display: table;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 999999999;
      width: 100%;
      height: 100%;
      text-align: center;
      background-color: rgba(0, 0, 0, .8);
      .BigImgWrap {
        display: table-cell;
        margin: 0 auto;
        vertical-align: middle;
        position: relative;
        img {
          max-width: 80%;
        }
        .icon-guanbi{
          position: absolute;
          z-index: 100;
          right:160px;
          top:80px;
          font-size:65px;
          color:#fff;
          cursor: pointer;
        }
      }
    }
    .adListBox {
      max-width: 80%;
      margin: 0 auto;
    }
    .adList {
      padding-top: 1.8em;
      padding-bottom: 1.8em;
      /*overflow: hidden;*/
      clear: both;
      .adListItem {
        padding: 10px;
        .adListItemWrap {
          width: 100%;
          display: block;
          position: relative;
          overflow: hidden;
          background: #000;
          h2 {
            width: 100%;
            position: absolute;
            bottom: 0;
            left: 0;
            background-color: rgba(0, 0, 0, .5);
            color: #fff;
            font-size: 20px;
            padding: 8px;
            font-weight: 300;
          }
          .adListImg {
            display: block;
            height: 100%;
            width: 100%;
            img {
              width: 100%;
              height: 100%;
            }
            -webkit-transition: all 400ms ease-out;
            &:hover {
              -webkit-transition: all 400ms ease-out;
              transition: all 400ms ease-out;
              background-color: rgba(0, 0, 0, 0.4);
              transform: scale(1.07);
              -webkit-transform: scale(1.07);
              opacity: 0.8;
            }
          }
        }
      }
    }
    .adListControlTab {
      text-align: center;
      padding: 1.8em 0 0 0;
      button {
        width: 220px;
        font-weight: 300;
        -webkit-transition: all 400ms ease-out;
        border: none;
        outline: none;
        font-size: 0.9em;
        text-align: center;
        background-color: #666666;
        color: #fff;
        padding: 1em 0;
        margin-right: 15px;
        &:hover {
          background-color: #e70f20;
        }
      }
      .activeBtn {
        -webkit-transition: all 400ms ease-out;
        background-color: #e70f20;
      }
    }
  }
  //mobile
  @media (max-width:767px) {
    .adListContainter {
      font-size: 16px;
      .adListBox {
        max-width: 98%;
      }
      .adListTitle{
        .Titleline{
          width:0%;
        }
      }
      .adList {
        padding-top: 1em;
        /*max-width: 100%;*/
        .adListItem {
          padding: 5px;
          .adListItemWrap {
            h2 {
              font-size: 18px;
            }
          }
        }
      }
      .adListTitle {
        max-width: 100%;
        h1 {
          width: 90%;
          max-width:90%;
          font-size:25px;
        }
      }
      .adListControlTab {
        padding-top: 1em;
        button {
          margin-bottom: 10px;
          width: auto;
          margin-right: 6px;
          font-size: 15px;
          padding: 10px 3px;
        }
      }
      .adListBigImg{
        .BigImgWrap{
          .icon-guanbi{
            top:120px;
            right:25px;
            font-size:50px;
          }
        }
      }
    }
  }

  @media (max-width:370px) {
    .adListContainter {
      .adListTitle {
        h1 {
          width: 50%;
        }
        .Titleline {
          width: 20%;
        }
      }
      .adListControlTab {
        button {
          width: auto;
          padding: 0.5em 0.3em;
          margin-right: 0.5em;
          font-size: 0.75em;
        }
      }
      .adListBigImg{
        .BigImgWrap{
          .icon-guanbi{
            top:90px;
            right:20px;
            font-size:50px;
          }
        }
      }
    }
  } // pad
  @media (min-width:768px) and (max-width:992px) {
    .adListContainter {
      font-size: 20px;
      .adListBox {
        max-width: 98%;
        /*margin: 0 auto;*/
      }

      .adList {
        /*max-width: 100%;*/
        .adListItem {
          padding: 5px;
          .adListItemWrap {
            h2 {
              font-size: 20px;
            }
          }
        }
      }
      .adListTitle {
        max-width: 100%;
        h1{
          width:50%;
        }
        .Titleline{
          width:20%;
        }
      }
      .adListBigImg{
        .BigImgWrap{
          .icon-guanbi{
            top:160px;
            right:70px;
            font-size:50px;
          }
        }
      }
    }
  } // big pad
  @media (min-width:993px) and (max-width:1200px) {}
</style>
