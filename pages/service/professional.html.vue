<template>
  <div class="professional-page page-top">
    <common :data="content"></common>
    <div class="intro-bg">
      <div class="container">
        <h2>Diverse Cooperation Modes of Products</h2>
        <p>
          TAKSTAR is a high-tech enterprise with integration of R&D,production,processing and service. It provides customers with solutions and cooperation modes such as whole equipments purchase,OEM,ODM,accessories purchase,which has realized cooperation mode of products  diversification. Since 1998,TAKSTAR has provided OEM/ODM service for high-end audio brands which covering 55 countries. Its products range is consist of microphone, headphone, speaker, integrated application and audio systems such as the five mainly products lines which have annual output of 2 million microphones, 2 million headphones, 1 million speakers, 0.3 million integrated application productions and tens of thousands of amplifier production.
        </p>
      </div>
    </div>
    <div class="intro-lis">
      <div class="container">
        <ul>
          <li>
            <a href="#Equipments">
              <h3>Equipments Purchase</h3>
              <p>Chinese National Brand</p>
            </a>
          </li>
          <li>
            <a href="#OEM">
              <h3>OEM</h3>
              <p>Guarantee for Quality and Capacity</p>
            </a>
          </li>
          <li>
            <a href="#ODM">
              <h3>ODM</h3>
              <p>Providing Customized Product Solutions</p>
            </a>
          </li>
          <li>
            <a href="#Accessories">
              <h3>Accessories Purchase</h3>
              <p>Comprehensive Cooperation of Accessories</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="container intro-block-container">
      <div class="intro-block" id="Equipments">
        <div v-if="isMobile" class="intro-img fr">
          <img src="../../assets/images/professional/Professional_img_01.jpg">
        </div>
        <div class="intro-content fl" style="left:0;">
          <h3>
            Equipments Purchase
          </h3>
          <p>
            Owning its technology R&D center, electro-acoustic  technology  team over 100 people,factory covering area 225000㎡, TAKSTAR has headphone,audio,wire and wireless workshops,and equips  professional technicists and automatic machines. There are product types including microphones,headphones,speakers,audio system, applied engineering and accessories，they are all sold well all over the world.
          </p>
        </div>
        <div v-if="!isMobile" class="intro-img fr">
          <img src="../../assets/images/professional/Professional_img_01.jpg">
        </div>
      </div>
      <div class="intro-block" id="OEM">
        <div class="intro-img fl">
          <img src="../../assets/images/professional/Professional_img_02.jpg">
        </div>
        <div class="intro-content fr">
          <h3>
            OEM
          </h3>
          <p>
            Having a number of successful OEM cooperation cases,TAKSTAR also provides one-stop solutions including design and manufacture plans of ID design, structure, acoustics, electronic and system integration. We have strong ability to customize and develop products for customers，fully meeting the market demands of new products’ R&D and production.  Such as  we customize,develop and sell phone microphones for the phone karaoke platform.
          </p>
        </div>
      </div>
      <div class="intro-block" id="ODM">
        <div v-if="isMobile" class="intro-img fr">
          <img src="../../assets/images/professional/Professional_img_03.jpg">
        </div>
        <div class="intro-content fl" style="left:0;">
          <h3>
            ODM
          </h3>
          <p>
            TAKSTAR has been offered ODM service for high-end audio brands over years，whose products start controlling and testing from raw material to promise perfect quality，to ensure capacity supply entirety. We provide strong quality support for customers' market and become a trusted partner.
          </p>
        </div>
        <div v-if="!isMobile" class="intro-img fr">
          <img src="../../assets/images/professional/Professional_img_03.jpg">
        </div>
      </div>
      <div class="intro-block" id="Accessories">
        <div class="intro-img fl">
          <img src="../../assets/images/professional/Professional_img_04.jpg">
        </div>
        <div class="intro-content fr">
          <h3>
            Accessories Purchase
          </h3>
          <p>
            TAKSATR provides lots of industry with abundant and high quality electronic parts which can be integrated into equipment and accessories. We are also able to customize targeted products solutions according to customers’ demands，such as providing headphone accessories for major phone brands at home and abroad.
          </p>
        </div>
      </div>
    </div>
    <footer-banner :showText="false"></footer-banner>
  </div>
</template>

<script>

  import newsMiddle from '~components/AboutUs/news.vue';
  import common from '../../components/common.vue';
  import footerBanner from '~components/service/footerBanner';
  import pcHeader from '../../assets/images/professional/professional_banner-1.0.0.jpg';
  import mHeader from '../../assets/images/professional/m_professional_banner-1.0.0.jpg';

  export default {
    name: 'professional',
    head() {
      return {
        title: 'professional',
        meta: [
          { name: 'description', content: '' }
        ]
      }
    },
    data() {
      return {
        isMobile:false,
        content: {
          title: 'Professional OEM',
          pcSrc: pcHeader,
          mSrc: mHeader,
          summary: 'Double Guarantee to Quality and Capacity'
        }
      }
    },
    components: {
      common,
      footerBanner
    },
    mounted() {
        this.handleResize();
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.handleResize);
    },
    beforeDestroy() {
    },
    methods: {
      handleResize(e) {
        this.isMobile = document.documentElement.clientWidth <= 414;
      }
    }
  }

</script>

<style lang="less" scoped>
  .professional-page{
    background:#fff;
    .intro-bg{
      width:100%;
      padding-top:45px;
      padding-bottom:45px;
      background:#e6dcd3;
      h2{
        font-size:46px;
        color:#e70f20;
        margin-bottom:15px;
        padding:0 30px;
      }
      p{
        font-size:18px;
        color:#333333;
        line-height:32px;
        padding:0 30px;
      }
    }
    .intro-lis{
      background:#2f2f2f;
      padding:45px 0;
      overflow: hidden;
      li{
        float:left;
        width:25%;
        border-right:1px solid #7c7c7c;
        &:last-child{
          border-right:none;
        }
        a{
          width:100%;
          color:#fff;
          display: inline-block;
          text-align: center;
          h3{
            font-size:30px;
          }
          p{
            line-height: 40px;
            font-size:19px;
          }
        }
      }
    }
    .intro-block-container{
      margin-top:25px;
      margin-bottom:40px;
    }
    .intro-block{
      overflow: hidden;
      background:#f7f7f7;
      position:relative;
      .intro-img{
        width:50%;
      }
      .intro-content{
        position:absolute;
        top:50%;
        right:0px;
        transform: translateY(-50%);
        box-sizing: border-box;
        padding:0 30px;
        width:50%;
        color:#333333;
        h3{
          font-size:35px;
          margin-bottom:20px;
        }
        p{
          color:#666;
          font-size:18px;
          line-height:32px;
          font-weight:300;
        }
      }
    }
  }

  // for responsive
  @media (max-width:850px){
    .professional-page{
      .intro-block{
        .intro-content{
          h3{
            font-size:25px;
          }
          p{
            font-size:16px;
            line-height:30px;
          }
        }
      }
    }
  }

  //responsive
  @media (max-width:1025px) {
    .professional-page{
      .intro-block{
        .intro-content{
          p{
            font-size:15px;

          }
        }
      }
    }
  }

  //ipad
  @media (max-width:768px){
    .professional-page{
      .intro-bg{
        h2{
          font-size:25px;
          padding:0 5px;
          font-size:1.6em;
        }
        p{
          padding:0 5px;
          text-align: left;
          font-weight:300;
        }
      }
      .intro-lis{
        li{
          width:50%;
          margin-bottom:25px;
          &:nth-child(even){
            border-right:none;
          }
          a{
            h3{
              font-size:25px;
              margin-bottom:10px;
            }
            p{
              line-height: 25px;
              font-size:15px;
            }
          }
        }
      }
      .intro-block{
        margin:25px 0px;
        .intro-img{
          width:100%;
        }
        .intro-content{
          position:static;
          transform: translateY(0);
          padding:20px;
          padding-top:20px;
          width:100%;
          height:auto;
          padding-bottom:20px;
          h3{
            font-size:25px;
          }
          p{
            font-size:18px;
            text-align: left;
          }
        }
      }
    }
  }

  //mobile
  @media (max-width:767px) {
    .professional-page{
      .intro-bg{
        padding-top:20px;
        padding-bottom:20px;
        p{
          font-size:16px;
        }
      }
      .intro-lis{
        padding-bottom:10px;
        li{
          width:50%;
          margin-bottom:25px;
          &:nth-child(even){
            border-right:none;
          }
          a{
            h3{
              font-size:20px;
              margin-bottom:10px;
            }
            p{
              line-height: 16px;
              font-size:14px;
              font-weight:300;
            }
          }
        }
      }
    }
  }
  //small phone
  @media (max-width:320px){
    .professional-page {
      .intro-lis {
        li {
          a {
            h3 {
              font-size: 17px;
            }
          }
        }
      }
    }
  }
  // pad
  @media (min-width:768px) and (max-width:992px) {}
  // big pad
  @media (min-width:993px) and (max-width:1200px) {}
</style>
