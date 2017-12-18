<template>
  <div class="footerBanner">
    <a href="/about/feedback.html" :class="btnStyle">CONTACT US</a>
    <p class="footerText" v-if="showText">if you more special customization requirements, pleace click the button to contact us!</p>
  </div>
</template>

<script>
  export default {
    name: 'footerBanner',
    data() {
      return {
        isMobile: false
      }
    },
    mounted() {
      this.handleResize();
      window.addEventListener('resize', this.handleResize);

    },
    beforeDestroy() {
      window.removeEventListener('resize', this.handleResize);
    },
    methods: {
      handleResize(e) {
        this.isMobile = document.documentElement.clientWidth + 18 <= 768;
      }
    },
    props: {
      btnStyle: {
        type: String,
        default: 'white'
      },
      showText: {
        type: Boolean,
        default: true
      }
    }
  }

</script>

<style lang="less" scoped>
  .footerBanner {
    width: 100%;
    font-size: 22px;
    text-align: center;
    background: #000;
    height:267px;
    background:url(../../assets/images/footer_bg.jpg) no-repeat top center;
    background-size:cover;
    position: relative;
    .footerBg {
      width: 100%;
      height: 100%;
    }
    .footerText {
      position: absolute;
      bottom: 18%;
      left: 50%;
      -webkit-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      color: rgba(255, 255, 255, .7);
      font-size: 0.8em;
      width: 100%;
      font-weight: 300;
    }
    .white,
    .red {
      position: relative;
      z-index: 2;
      vertical-align: middle;
      font-size: 1em;
      display: inline-block;
      padding: 0.8em 3em;
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
    }
    .white {
      background: #fff;
      color: #e70f20;
    }
    .red {
      background: #e70f20;
      color: #fff;
    }
  } //mobile
  @media (max-width:767px) {
    .footerBanner {
      font-size: 18px;
      .white,.red{
        width: 60%;
        font-size:1.8em;
        padding: 0.8em 2em;
      }
    }
  }

  @media (min-width:320px) and (max-width:520px) {
    .footerBanner {
      font-size: 12px;
      .footerText {
        bottom: 10%;
        font-size: 1em;
      }
      .white,
      .red {

      }
    }
  } // pad
  @media (min-width:768px) and (max-width:992px) {
    .footerBanner {
      font-size: 20px;
      .footerText {
        bottom: 28%;
      }
    }
  } // big pad
  @media (min-width:993px) and (max-width:1200px) {
    .footerBanner {
      font-size: 20px;
    }
  }
</style>
