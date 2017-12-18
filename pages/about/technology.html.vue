<template>
  <div class="technology-page page-top">
    <common :data="content"></common>
    <div class="intro-bg">
      <div class="container">
        <h2>Innovation and sustainable management</h2>
        <p>Innovation is the life of an enterprise. TAKSTAR pursues sustainable management and emphasizes on R&D and innovation, who has rich experience on technical field like acoustics,wireless,human</p>
        <P>engineering and system integration. Most of these occupy the international leading level. Up to 2017, TAKSTAR has applied for more than 380 patents,</P>
        <p>over 100 of them are inventions and utility model patent applications.</p>
      </div>
    </div>
    <div class="container">
      <div class="intro-block">
        <div class="intro-img fl">
          <img src="../../assets/images/key_leftImg_01.jpg">
        </div>
        <div class="intro-content fr">
          <h3>
            Wireless Technology
          </h3>
          <p>
            With an excellent wireless electronics design team, the R&D center of TAKSTAR established scientific and reasonable researching plans which including wireless microphones, wireless transaudient systems and wireless audio systems. TAKSTAR has mastered the R&D technology of 2.4G、VHF、UHF and other multi-frequency，multi-channel，analog and digital products.
          </p>
        </div>
      </div>
      <div class="intro-block">
        <div class="intro-img fl">
          <img src="../../assets/images/key_leftImg_02.jpg">
        </div>
        <div class="intro-content fr">
          <h3>
            Acoustic Technology
          </h3>
          <p>
            Taking “Focus on Good Sound”as its core belief，TAKSTAR researches and analyses electro-acoustic technology applications emphatically. It sets up technical information base, provides technical information support to keep technology ahead of products and masters the R&D ability of professional recording microphones, meeting microphones , monitor headphones, multi-media headphones,  audio systems  and other types of electro-acoustic products.
          </p>
        </div>
      </div>
      <div class="intro-block">
        <div class="intro-img fl">
          <img src="../../assets/images/key_leftImg_03.jpg">
        </div>
        <div class="intro-content fr">
          <h3>
            Human Engineering Technology
          </h3>
          <p>
            Based on feature of human engineering, TAKSTAR’s industrial R&D team designs and draws the appearance of various products which is according to healthy working and living style. The team also simulates effect and analyses practical testing by 3D technology who integrating and using technology reasonably, to complete company’s development and design new products that satisfied special users in accordance with human engineering.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import common from '../../components/common.vue';
  import pcHeader from '../../static/images/key_banner1.jpg';
  import mHeader from '../../static/images/m_key-banner1.jpg';
  export default {
    name: 'technology',
    head() {
      return {
        title: 'Key Technology',
        meta: [
          { name: 'description', content: '' }
        ]
      }
    },
    components: {
      common
    },
    data() {
      return {
        content: {
          title: 'Key Technology',
          pcSrc: pcHeader,
          mSrc: mHeader,
          summary: 'Technology Leads the Future'
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .technology-page{
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
      margin:30px 0;
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
  @media (max-width:992px){
    .technology-page{
      .intro-block{
        .intro-img{
          width:100%;
        }
        .intro-content{
          position:static;
          transform: translateY(0);
          padding-top:80px;
          width:100%;
          height:auto;
          padding-bottom:70px;
          h3{
            font-size:35px;
          }
          p{
            font-size:20px;
          }
        }
      }
    }
  }

  //responsive
  @media (max-width:1025px) {
    .technology-page{
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
    .technology-page{
      .intro-bg{
        .container{
          padding:0;
        }
        padding:15px;
        padding-top:20px;
        padding-bottom:20px;
        h2 {
          font-size: 30px;
          padding:0;
        }
        p{
          padding:0;
          text-align: left;
        }
      }
      .intro-block{
        .intro-img{
          width:100%;
        }
        .intro-content{
          position:static;
          transform: translateY(0);
          padding-top:20px;
          width:100%;
          height:auto;
          padding-bottom:20px;
          h3{
            font-size:30px;
          }
          p{
            font-size:18px;
          }
        }
      }
    }
  }

  //phone
  @media (max-width:414px){
    .technology-page {
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
      .intro-block{
        .intro-content{
          padding:20px;
          padding-top:20px;
          padding-bottom:20px;
          height:auto;
          h3{
            font-size:25px;
          }
          p{
            font-size:16px;
            text-align: left;
          }
        }
      }
    }
  }

  //small phone
  @media (max-width:320px){
    .technology-page {
      .intro-block{
        .intro-content{
          padding-top:20px;
          height:520px;
          p{
            font-size:16px;
          }
        }
      }
    }
  }
</style>
