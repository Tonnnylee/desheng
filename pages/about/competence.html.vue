<template>
  <div class="competence-page page-top">
    <common :data="content"></common>
    <div class="intro-bg">
      <div class="container">
        <h2>A creative and productive supply platform</h2>
        <p>TAKSTAR has invested much resources into ID design, products R&D, solutions, system integration，all-in-one service，automated production and precision manufacture，set up a creative and productive supply platform about integrated R&D，production and service.</p>
      </div>
    </div>
      <div class="intro-block">
        <div class="container">
          <div v-if="isMobile" class="intro-img col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <img src="../../assets/images/core_img_01.jpg">
          </div>
          <div class="intro-content col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div>
              <h3>ID Design</h3>
              <p>With professional design team and experienced market team,TAKSTAR provides comprehensive design service and customized design solutions for customers,to satisfy their diversified needs and unique.<br/>
                TAKSTAR keeps close communication with customers on market research, concept development, products design, materials use, mass production stage, etc. to ensure the efficiency and accuracy of products production and to create competitive products.</p>
            </div>
          </div>
          <div v-if="!isMobile" class="intro-img col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <img src="../../assets/images/core_img_01.jpg">
          </div>
        </div>
      </div>

      <div class="intro-block">
        <div class="container">
          <div class="intro-img col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <img src="../../assets/images/core_img_02.jpg">
          </div>
          <div class="intro-content col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div style="right:0px;">
              <h3>R&D Ability</h3>
              <p>TAKSTAR emphasizes on R&D, innovation and team construction who organized Guangdong Engineering Technology R&D Center in 2007. Having an experienced electro-acoustic technology R&D team, TAKSTAR has gathered over 100 top domestic researchers and applied for nearly 400 patents so far.
TAKSTAR keeps close cooperation with domestic and international electro-acoustic research institutions and builds up a R&D platform with international competitiveness. The electro-acoustic technology R&D and technical service are in full operation that makes the company’s products more systematic.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="intro-block">
        <div class="container">
          <div v-if="isMobile" class="intro-img col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <img src="../../assets/images/core_img_03.jpg">
          </div>
          <div class="intro-content col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div>
              <h3>Customized Solutions</h3>
              <p>TAKSTAR has rich experience on technical field like acoustics,wireless,electronic circuit and system integration, etc. With rich project experience, TAKSTAR can offer product solutions of ID design,acoustic design,wireless RF design and system integration.
With abundant high-quality electronic products,TAKSTAR provides solutions of whole equipments,accessories and parts for customers,to achieve diversified cooperation modes. TAKSTAR is also able to customize targeted solutions according to customers’demands.</p>
            </div>
          </div>
          <div v-if="!isMobile" class="intro-img col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <img src="../../assets/images/core_img_03.jpg">
          </div>
        </div>
      </div>

      <div class="intro-block">
        <div class="container">
          <div class="intro-img col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <img src="../../assets/images/core_img_04.jpg">
          </div>
          <div class="special-content intro-content col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div style="right:0px;">
              <h3>Precision Manufacture & Quality Control</h3>
              <p>TAKSTAR maintains the spirit of precision manufacture in production and provides precise accessory solutions of products. From injection, stamping, paint spraying, CNC metal processing, metal injection molding to metal surface anode treatment, all the processes are operated by advanced equipments precisely.
Having more than 100 professional QA Engineer , technicists,QC and over 500 advanced testing equipments presently, TAKSTAR has formed a high-quality and strong assurance team who inspecting and monitoring products strictly by scientific testing method. Meanwhile the laboratory is equipped with electro-acoustic measurement, environment testing, environmental protection measurement, reliability measurement, EMI measurement, etc. TAKSTAR tests and experiments at each link thereby promising the perfect quality of products.</p>
            </div>
          </div>

        </div>
      </div>

      <div class="intro-block">
        <div class="container">
          <div v-if="isMobile" class="intro-img col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <img src="../../assets/images/core_img_05.jpg">
          </div>
          <div class="intro-content col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div>
              <h3>Systematic Service</h3>
              <p>TAKSTAR is an integrated and modern high-tech enterprise with integration of design, processing, production, printing and packing. More than 1,800 employees service in various work scopes. Through in-depth market research and products design, based on high precision and productive capacity, supported by professional image design and printing service, TAKSTAR has achieved all-in-one service of products and kept ahead on production cycle, quality control,cost control in electro-acoustic.</p>
            </div>
          </div>
          <div v-if="!isMobile" class="intro-img col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <img src="../../assets/images/core_img_05.jpg">
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  import common from '../../components/common.vue';
  import pcHeader from '../../static/images/core_banner1.jpg';
  import mHeader from '../../static/images/m_core_banner1.jpg';
  export default {
    name: 'competence',
    head() {
      return {
        title: 'Core Competence',
        meta: [
          { name: 'description', content: '' }
        ]
      }
    },
    components: {
      common
    },
    mounted() {
      this.handleResize();
      window.addEventListener('resize', this.handleResize);
    },
    data() {
      return {
        isMobile:false,
        content: {
          title: 'Core Competence',
          pcSrc: pcHeader,
          mSrc: mHeader,
          summary: 'We Persist in Innovation'
        }
      }
    },
    methods: {
        handleResize(e){
          this.isMobile = document.documentElement.clientWidth <= 768;
        }
    }
  }
</script>

<style lang="less" scoped>
  .competence-page{
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
    .intro-block{
      .container{
        overflow: hidden;
      }
      &:nth-child(odd){
        background:#fff;
        .intro-content{
          > div{
            right:auto;
            left:0px;
          }
        }
      }
      &:nth-child(even){
        background:#ececec;
        .intro-img{
          img{
            right:auto;
            left:0px;
          }
        }
      }
      .intro-img{
        position:relative;
        height:570px;
        img{
          display: inline-block;
          position:absolute;
          top:15%;
          max-width:100%;
          right:0px;
        }
      }
      .intro-content{
        position:relative;
        height:570px;
        > div{
          position:absolute;
          top:50%;
          transform: translateY(-50%);
          box-sizing: border-box;
          width:89%;
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
  }
  //responsive
  @media (max-width:992px){
    .competence-page{
      .intro-bg{
        padding-top:20px;
        padding-bottom:20px;
        h2{
          font-size:30px;
        }
      }
      .intro-block{
        .container{
        }
        .intro-img{
          height:auto;
          img{
            position:static;
            margin:15px 0;
          }
        }
        .intro-content{
          position:relative;
          height:auto;
          > div{
            position: static;
            transform: translateY(0);
            padding: 15px 0;
            h3{
              font-size:30px;
              margin-bottom:10px;
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
    }
  }

  //ipad
  @media (max-width: 768px) {
    .competence-page{
      .intro-bg{
        h2{
          font-size:1.6em;
          padding:0 10px;
        }
        p{
          font-weight:300;
          padding:0 10px;
        }
      }
    }
  }

  //phone
  @media (max-width:375px){
    .competence-page{
      .intro-bg{
        h2{
          font-size:30px;
          padding:0;
        }
        p{
          padding:0;
          text-align: left;
        }
      }
      .intro-block{
        padding:10px 0;
        .intro-content{
          height:auto;
          padding:0;
          > div{
            position: static;
            transform: translateY(0);
            padding: 15px 0;
            width:100%;
            h3{
              font-size:28px;
            }
            p{
              text-align: left;
            }
          }
        }
        .intro-img{
          height:auto;
          padding:0;
          img{
            position:static;
            margin:15px 0;
          }
        }
      }
    }
  }

  //small phone
  @media (max-width:320px){
    .competence-page{
    }
  }
</style>
