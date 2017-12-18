<template>
    <!-- Carousel-->
    <section class="htmleaf-container">
      <div class="landing-slider">
          <!--tabSlider-->
        <div class="tabSlider visible-lg-block visible-md-block">
          <div class="ts-items">
                <!-- Single item -->
              <div class="ts-item" :style='"background:url("+prefixImg + slideItem.imgUrl+") no-repeat; height:540px;background-position: center center; background-size:cover;"' v-for="slideItem in slideItems">
                <a :href="slideItem.link">
                    <div class="ts-banner">
                    </div>
                </a>
                  <div class="ts-container set-layout thumb-cont">
                    <div class="container ts-content-wrap">
                        <div class="ts-content">
                          <div class="ts-title" v-html="slideItem.title">
                        </div>
                        <a :href="slideItem.link" class="ts-btn pull-right set-icon to-right">
                            <span>DISCOVER MORE+</span>
                        </a>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
              <!-- 选项卡 -->
            <nav class="ts-control">
              <div class="ts-container control-wrap">
                <ul>
                  <li v-for="slideItem in slideItems" >
                    <a :href="slideItem.link">
                      <i class="ts-icon"></i><span>{{ slideItem.name }}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
        </div>

        <!-- swiper -->
        <div v-swiper:mySwiper="swiperOption" class="visible-sm-block visible-xs-block">
           <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="banner in banners">
                    <div class="swiper-content visible-sm-block visible-md-block visible-lg-block container">
                      <div class="swiper-title swiper-ipad-title" v-html="banner.title"></div>
                      <a :href="banner.link" class="swiper-btn">
                          <span>DISCOVER MORE+</span>
                      </a>
                    </div>
                  <img :src="prefixImg + banner.imgUrl">
                  <div class="visible-xs-block swiper-phone-content">
                    <div class="swiper-title swiper-phone-title" v-html="banner.title"></div>
                      <a :href="banner.link" class="swiper-btn">
                          <span>DISCOVER MORE+</span>
                      </a>
                  </div>
              </div>
           </div>
           <div class="swiper-pagination swiper-pagination-bullets"></div>
        </div>
      </div>
        <!--/tabSlider-->
    </section>
</template>

<script>
  export default {
     name: 'sliderComponent',
     props:{
        slideList : Array,
        bannerList: Array
     },
      mounted(){
          this.initSlide();
          this.detectIE9();
      },
      data(){
          return {
              prefixImg: process.env.prefixImg,
              isIE9: false,
              swiperOption: {
                autoplay: 3000,
                initialSlide: 0,
                direction : 'horizontal',
                loop: true,
                pagination: '.swiper-pagination',
                paginationElement: 'li',
                onSlideChangeEnd: swiper => {
                },
                onTap: swiper => {

                }
              }
          }
      },
      computed:{
        banners() {
            return this.bannerList
        },
        slideItems(){
            return this.slideList.slice(0,5);
        }
      },
      methods:{
         initSlide(){
           var hasTouch = 'ontouchstart' in window;
             var firstSlider = $(".ts-item")[0];
             $(firstSlider).addClass('is-active');
             var slideControls = $(".ts-control li");
             var slideLinks = $(".ts-control li a");
           $(".ts-control li:nth-child(1)").addClass("is-active");
           $(".ts-item:first-child .ts-btn").remove();
             slideLinks.on("click",function(e){
               if(hasTouch){
                 e.preventDefault();
                   return false;
               }
             });
           slideControls.on("mouseover", function(){
             var currentLi = $(this);
             var curIndex = currentLi.index();
             var sliders = $(".ts-items .ts-item");
             currentLi.addClass("is-active").siblings().removeClass('is-active')
             $(sliders[curIndex]).addClass('is-active').siblings().removeClass('is-active');
           })
         },
         detectIE9(){
           var isIE=!!window.ActiveXObject;
           var ieMode = document.documentMode;
           var isIE9= isIE && ieMode == 9;
           this.isIE9 = isIE9;
         }
      }
  }
</script>

<style lang="less" scoped>
.pull-right {
  float: right;
}

.pull-left {
  float: left;
}

.tabSlider .ts-container{
  position: absolute;
  top:46%;
  left:0;
  z-index:101;
}

.tabSlider .ts-container .ts-content-wrap{
  pointer-events: none;
}

/* [ TabSlider ] */
.tabSlider .ts-container {
  width: 100%;
  margin: 0 auto;
}
@media (max-width: 950px) {
  .tabSlider .ts-container {
    width: 740px;
  }
}
@media (max-width: 750px) {
  .tabSlider .ts-container {
    width: 300px;
  }
}
.tabSlider .ts-container:after {
  content: "";
  display: table;
  clear: both;
}
.tabSlider .ts-container, .tabSlider .ts-container:before, .tabSlider .ts-container:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.tabSlider .ts-items {
  position: relative;
}
.tabSlider .ts-items .ts-item a{
  width:100%;
  height:100%;
}
@media (min-width:993px) and (max-width:1045px) {
  .tabSlider .ts-items {
    position: relative;
  }
}
.tabSlider .ts-items, .tabSlider .ts-items:before, .tabSlider .ts-items:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.tabSlider .ts-items .ts-item {
  display: none;
  /*height: 568px;*/
  /*padding: 25px 0;*/
  overflow: hidden;
  /*position: absolute;*/
  /*right: 0;*/
  /*top: 0;*/
  /*bottom: 0;*/
  /*left: 0;*/
  background-repeat: no-repeat;
  -moz-background-size: cover;
  -o-background-size: cover;
  -webkit-background-size: cover;
  background-size: cover;
  background-position: 0 300px;
  -moz-transition: background 1s linear;
  -o-transition: background 1s linear;
  -webkit-transition: background 1s linear;
  transition: background 1s linear;
}
.tabSlider .ts-items .ts-item, .tabSlider .ts-items .ts-item:before, .tabSlider .ts-items .ts-item:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.tabSlider .ts-items .ts-item .ts-banner{
  width:100%;
  /*position: absolute;*/
  /*top:0;*/
  /*left:0;*/
  /*z-index:100;*/
}
.tabSlider .ts-items .ts-item .ts-thumbnail {
  width: 25%;
}
.tabSlider .ts-items .ts-item .ts-thumbnail, .tabSlider .ts-items .ts-item .ts-thumbnail:before, .tabSlider .ts-items .ts-item .ts-thumbnail:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.tabSlider .ts-items .ts-item .ts-content, .tabSlider .ts-items .ts-item .ts-content:before, .tabSlider .ts-items .ts-item .ts-content:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
@media (max-width: 750px) {
  .ts-content {
    width: 100%;
    position: absolute;
    top:0;
    left:0;
    z-index:99;
  }
}
.ts-content {
  float: right;
}
.set-layout{
  pointer-events: none;
  cursor: pointer;
}
.tabSlider .ts-items .ts-item .set-layout.cont-thumb .ts-content {
  float: left;
}
.tabSlider .ts-items .ts-item .set-layout.cont-thumb .ts-thumbnail {
  float: right;
}
.tabSlider .ts-items .ts-item .ts-thumbnail {
  height: 515px;
  position: relative;
}
.tabSlider .ts-items .ts-item .ts-thumbnail, .tabSlider .ts-items .ts-item .ts-thumbnail:before, .tabSlider .ts-items .ts-item .ts-thumbnail:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.tabSlider .ts-items .ts-item .ts-thumbnail img {
  height: auto;
  margin: auto;
  max-width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  -webkit-animation-duration: 1s;
  -moz-animation-duration: 1s;
  -ms-animation-duration: 1s;
  -o-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  -moz-animation-fill-mode: both;
  -ms-animation-fill-mode: both;
  -o-animation-fill-mode: both;
  animation-fill-mode: both;
}
@media (max-width: 768px) {
  .tabSlider .ts-items .ts-item .ts-thumbnail {
    display: none;
  }
}
.tabSlider .ts-items .ts-item .ts-title {
  text-align: right;
  color: #000;
  padding: 10px 0;
  display: block;
  line-height: 50px;
  text-transform: uppercase;
  -webkit-animation-duration: 1s;
  -moz-animation-duration: 1s;
  -ms-animation-duration: 1s;
  -o-animation-duration: 1s;
  animation-duration: 1s;
  -moz-backface-visibility: visible;
  -webkit-backface-visibility: visible;
  backface-visibility: visible;
}
.ts-items .ts-item .ts-title h1{
  font-size:30px;
}
.ts-items .ts-item .ts-title h2{
  font-size:26px;
  font-weight:300;
}
.ts-subtitle{
  font-size: 30px;
  text-align: right;
  margin-bottom:20px;
}
.tabSlider .ts-items .ts-item .ts-title, .tabSlider .ts-items .ts-item .ts-title:before, .tabSlider .ts-items .ts-item .ts-title:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
@media (max-width: 950px) {
  .tabSlider .ts-items .ts-item .ts-title {
    font-size: 30px;
    padding: 30px;
  }
}
@media (max-width: 750px) {
  .tabSlider .ts-items .ts-item .ts-title {
    margin: 0 0 10px 0;
    font-size: 18px;
    padding: 20px;
    line-height: 1.5;
  }
}
.tabSlider .ts-items .ts-item .ts-btn {
  background: #e80f20;
  color: #fff;
  margin: 0;
  width:140px;
  box-sizing: border-box;
  text-align: center;
  font-weight: 600;
  padding:12px;
  text-transform: uppercase;
  font-size: 17px;
  text-decoration: none;
  display: block;
  position: relative;
  -webkit-animation-duration: 1s;
  -moz-animation-duration: 1s;
  -ms-animation-duration: 1s;
  -o-animation-duration: 1s;
  animation-duration: 1s;
  -moz-transition-timing-function: linear;
  -o-transition-timing-function: linear;
  -webkit-transition-timing-function: linear;
  transition-timing-function: linear;
}
.tabSlider .ts-items .ts-item .ts-btn, .tabSlider .ts-items .ts-item .ts-btn:before, .tabSlider .ts-items .ts-item .ts-btn:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.tabSlider .ts-items .ts-item .ts-btn span,
.tabSlider .ts-items .ts-item .ts-btn small {
  display: block;
}
.tabSlider .ts-items .ts-item .ts-btn span, .tabSlider .ts-items .ts-item .ts-btn span:before, .tabSlider .ts-items .ts-item .ts-btn span:after,
.tabSlider .ts-items .ts-item .ts-btn small,
.tabSlider .ts-items .ts-item .ts-btn small:before,
.tabSlider .ts-items .ts-item .ts-btn small:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.tabSlider .ts-items .ts-item .ts-btn small {
  font-weight: 300;
  font-size: 12px;
  line-height: 100%;
  padding-top: 7px;
}
@media (max-width: 750px) {
  .tabSlider .ts-items .ts-item .ts-btn {
    font-size: 16px;
    line-height: 200%;
    padding-right: 70px;
  }
  .tabSlider .ts-items .ts-item .ts-btn span {
    width: 200px;
  }
}
.tabSlider .ts-items .ts-item .ts-btn.set-icon i {
  position: absolute;
  height: 30px;
  top: 50%;
  margin-top: -15px;
}
.tabSlider .ts-items .ts-item .ts-btn.set-icon.to-right i {
  right: 26px;
}
.tabSlider .ts-items .ts-item .ts-btn.set-icon.to-left {
  padding-right: 0;
  padding-left: 109px;
}
.tabSlider .ts-items .ts-item .ts-btn.set-icon.to-left i {
  left: 26px;
}
.tabSlider .ts-items .ts-item.is-active {
  background-position: center center;
  display:block;
}
.tabSlider .ts-items .ts-item.is-active .ts-thumbnail img {
  -webkit-animation-name: vanishIn;
  -moz-animation-name: vanishIn;
  -ms-animation-name: vanishIn;
  -o-animation-name: vanishIn;
  animation-name: vanishIn;
}
.tabSlider .ts-items .ts-item.is-active .ts-title {
  -webkit-animation-name: presRIn;
  -moz-animation-name: presRIn;
  -ms-animation-name: presRIn;
  -o-animation-name: presRIn;
  animation-name: presRIn;
}
.tabSlider .ts-items .ts-item.is-active .ts-btn {
  -webkit-animation-name: button;
  -moz-animation-name: button;
  -ms-animation-name: button;
  -o-animation-name: button;
  animation-name: button;
}
.tabSlider .ts-control {
  background: #464646;
  display: block;
  position: relative;
  margin-top: -8px;
}

.control-wrap{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 110;
    background: #464646;
}

.tabSlider .ts-control:after {
  content: "";
  display: table;
  clear: both;
}
.tabSlider .ts-control ul {
  margin: 0;
  padding: 0;
}
.tabSlider .ts-control ul li {
  color: #fff;
  float: left;
  cursor: pointer;
  text-align: center;
  padding: 27px 30px;
  width:20%;
  display: inline-block;
  font-family: 'Open Sans', sans-serif;
  font-size: 24px;
  /* light */
  box-shadow: 10px 0 10px #333333;;
  transition: all 0.2s ease-in;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.tabSlider .ts-control ul li a{
  color:#fff;
  width:100%;
  &:hover{
    color:#fff;
  }
}

.tabSlider .ts-control ul li, .tabSlider .ts-control ul li:before, .tabSlider .ts-control ul li:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.tabSlider .ts-control ul li.is-active {
  background: #e70f20;
  transform: scale(1,1.2);
  transform-origin: center bottom;
}
@media (max-width: 750px) {
  .tabSlider .ts-control ul li {
    padding-right: 20px;
    padding-left: 20px;
  }
  .tabSlider .ts-control ul li span {
    display: none;
  }
  .tabSlider .ts-control ul li i {
    margin-right: 0;
  }
}

.ts-icon.auto {
  background-position: -1px -3px;
  width: 23px;
  height: 11px;
}
.ts-icon.medical {
  background-position: -27px -2px;
  width: 15px;
  height: 13px;
}
.ts-icon.food {
  background-position: -46px -2px;
  width: 14px;
  height: 15px;
}

@-webkit-keyframes button {
  0% {
    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
    opacity: 0;
    left: -90px;
  }
  100% {
    filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);
    opacity: 1;
    left: 0;
  }
}
@-moz-keyframes button {
  0% {
    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
    opacity: 0;
    left: -90px;
  }
  100% {
    filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);
    opacity: 1;
    left: 0;
  }
}
@-ms-keyframes button {
  0% {
    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
    opacity: 0;
    left: -90px;
  }
  100% {
    filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);
    opacity: 1;
    left: 0;
  }
}
@keyframes button {
  0% {
    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
    opacity: 0;
    left: -90px;
  }
  100% {
    filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);
    opacity: 1;
    left: 0;
  }
}


//ipad
.landing-slider{
    position:relative;
}
.swiper-container-horizontal{
  overflow: hidden;
}
.swiper-pagination {
  > .swiper-pagination-bullet {
    background-color: red;
  }
  li.swiper-pagination-bullet-active{
    background:#e80f20;
    opacity: 0;
  }
}
.swiper-slide{
  img{
    width:100%;
  }
}
.swiper-content{
  position: absolute;
  bottom:90px;
  right:30px;
  z-index:100;
  text-align: right;
  .swiper-title{
      font-weight:600;
      color:#000;
      font-size:28px;
      margin-bottom:10px;
  }
  .swiper-subtitle{
      font-size:24px;
      margin-bottom:20px;
  }
  .swiper-btn{
     background:#e80f20;
     color:#fff;
     padding:10px;
     font-size:20px;
  }
}
//phone
  @media (max-width:768px){
     .swiper-phone-content{
      width:100%;
      background:#393939;
      color:#fff;
      text-align: left;
      padding:20px 10px;
       padding-bottom: 55px;
       margin-top: -1px;
      .swiper-title{
          font-weight:600;
          color:#fff;
          font-size:20px;
          margin-bottom:10px;
      }
      .swiper-subtitle{
          font-size:24px;
          margin-bottom:20px;
      }
      .swiper-btn{
         background:#e80f20;
         color:#fff;
         padding:8px;
         font-size:15px;
      }
     }
  }
</style>

