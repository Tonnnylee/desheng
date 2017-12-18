<template>
  <div class="solutions-page page-top">
    <!--<nav-fix :data="navs"></nav-fix>-->
    <common :data="content"></common>
    <div class="intro-bg">
      <div class="container">
        <h2>One-stop Electro-acoustic Product Solutions</h2>
        <p>
          Having the most complete R&D, production, sale and service chain of products in electro-audio industry, the professional technology team and experienced market team of TAKSTAR can satisfy various customer's demands by proper products match and provide better experience and innovative applied solutions for global users. The affiliated products contain microphones, headphones, speakers, audio system, peripheral equipments and accessories etc. They are widely used in professional recording, Karaoke, conference engineering, outdoor performance and public broadcasting to meet customer's needs of one-stop select and match solutions.
        </p>
      </div>
    </div>
    <div class="intro-lis">
      <div class="container">
        <ul>
          <li>
            <a href="#Professional">
              <p>
                <img src="../../assets/images/solutions/solutions_icons_01.jpg" />
              </p>
              <p>Professional Recording</p>
            </a>
          </li>
          <li>
            <a href="#Karaoke">
              <p>
                <img src="../../assets/images/solutions/solutions_icons_02.jpg" />
              </p>
              <p>Karaoke</p>
            </a>
          </li>
          <li>
            <a href="#Conference">
              <p>
                <img src="../../assets/images/solutions/solutions_icons_03.jpg" />
              </p>
              <p>Conference Englneering</p>
            </a>
          </li>
          <li>
            <a href="#Outdoor">
              <p>
                <img src="../../assets/images/solutions/solutions_icons_04.jpg" />
              </p>
              <p>Outdoor Performance</p>
            </a>
          </li>
          <li>
            <a href="#Public">
              <p>
                <img src="../../assets/images/solutions/solutions_icons_05.jpg" />
              </p>
              <p>Public Broadcasting</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
      <div class="intro-block" id="Professional">
        <div class="container">
          <div class="intro-img fr">
            <img v-show="isMobile" src="../../assets/images/solutions/m_solutions_img_01.jpg">
          </div>
          <div class="intro-content fl" style="left:0;">
            <h3>
              Professional Recording
            </h3>
            <p>
              In professional recording field, TAKSTAR has researched and products a series of high quality products like human voice and musical instruments microphones, monitor headphones and consoles etc. which are hugely admired in customers. It also provides a series of great products for recording studio and other audio systems which are widely used in college recording studio, music recording, musical instruments recording.
            </p>
            <ul>
              <li><a href="/product/type?categoryUnifyMark=Microphone&proCategoryAttrItemIds=56" target="_blank">Recording Microphones ></a></li>
              <li><a href="/product/type?categoryUnifyMark=Headphone&proCategoryAttrItemIds=92" target="_blank">Monitor Headphones ></a></li>
              <li><a href="/product/type?categoryUnifyMark=Integrated_application&proCategoryAttrItemIds=159" target="_blank">Consoles ></a></li>
              <li><a href="/product/type?categoryUnifyMark=Integrated_application&proCategoryAttrItemIds=148" target="_blank">Microphone Amplifiers ></a></li>
              <li><a href="/product/type?categoryUnifyMark=Integrated_application&proCategoryAttrItemIds=158" target="_blank">Headphone Amplifiers ></a></li>
            </ul>
          </div>
          <div class="intro-img fr">
            <img v-show="!isMobile" src="../../assets/images/solutions/solutions_img_01.jpg">
          </div>
        </div>
      </div>
      <div class="intro-block" id="Karaoke">
        <div class="container">
          <div class="intro-img fl">
            <img v-show="!isMobile" src="../../assets/images/solutions/solutions_img_02.jpg">
            <img v-show="isMobile" src="../../assets/images/solutions/m_solutions_img_02.jpg">
          </div>
          <div class="intro-content fr">
            <h3>
              Karaoke
            </h3>
            <p>
              TAKSTAR has complete product line of Karaoke microphones, KTV microphones, speakers. The TAKSTAR engineer selected and used strictly every product of KTV audio system from circuit design, acoustic performance to spare parts who constantly improve for products manufacture. The design and production are tested by Guangdong Electro-acoustic Engineering Technology R&D Center and certificated by IS9001、CE、3C. The reliable quality and cost-effective of TAKSTAR Karaoke entertainment equipment are confidence guarantee for investors.
            </p>
            <ul>
              <li><a href="/product/type?categoryUnifyMark=Audio_system&proCategoryAttrItemIds=123" target="_blank">KTV speakers ></a></li>
              <li><a href="/product/type?categoryUnifyMark=Audio_system&proCategoryAttrItemIds=135" target="_blank">KTV Amplifiers ></a></li>
              <li><a href="/product/type?categoryUnifyMark=Microphone&proCategoryAttrItemIds=75" target="_blank">KTV Microphones ></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="intro-block" id="Conference">
        <div class="container">
          <div class="intro-img fr">
            <img v-show="isMobile" src="../../assets/images/solutions/m_solutions_img_03.jpg">
          </div>
          <div class="intro-content fl" style="left:0;">
            <h3>
              Conference Engineering
            </h3>
            <p>
              The conference engineering products of TAKSTAR contain linear array system, speakers, high-power amplifiers, mixers, processors, consoles, microphones.
According to different scale and strict occasions of meeting rooms, banquet halls, lecture halls, TAKSTAR provide one-stop audio equipment and system solutions.
            </p>
            <ul>
              <li><a href="/product/type?categoryUnifyMark=Audio_system&proCategoryAttrItemIds=125&proCategoryAttrItemIds=127" target="_blank">Speakers ></a></li>
              <li><a href="/product/type?categoryUnifyMark=Audio_system&proCategoryAttrItemIds=125&proCategoryAttrItemIds=128" target="_blank">Amplifiers ></a></li>
              <li><a href="/product/type?categoryUnifyMark=Microphone&proCategoryAttrItemIds=80" target="_blank">Microphones ></a></li>
              <li><a href="/product/type?categoryUnifyMark=Integrated_application&proCategoryAttrItemIds=159" target="_blank">Consoles ></a></li>
              <li><a href="/product/type?categoryUnifyMark=Integrated_application&proCategoryAttrItemIds=154" target="_blank">Mixers ></a></li>
              <li><a href="/product/type?categoryUnifyMark=Audio_system&proCategoryAttrItemIds=129" target="_blank">Processors ></a></li>
            </ul>
          </div>
          <div class="intro-img fr">
            <img v-show="!isMobile" src="../../assets/images/solutions/solutions_img_03.jpg">
          </div>
        </div>
      </div>
      <div class="intro-block" id="Outdoor">
        <div class="container">
          <div class="intro-img fl">
            <img v-show="!isMobile" src="../../assets/images/solutions/solutions_img_04.jpg">
            <img v-show="isMobile" src="../../assets/images/solutions/m_solutions_img_04.jpg">
          </div>
          <div class="intro-content fr">
            <h3>
              Outdoor Performance
            </h3>
            <p>
              With professional products including outdoor microphones, linear array loudspeakers, performance speakers, TAKSTAR provides one-stop solutions of audio system including of outdoor performance. The audio system attaches importance to sound definition, sound transmission gain, music replaying timbre, convenience of operation, flexibility of function etc. It can be used for multiple purposes like performance, small and medium recreational activities. The human voice is clear and natural and the singing performance is infectious.
            </p>
            <ul>
              <li><a href="/product/type?categoryUnifyMark=Integrated_application" target="_blank">Speakers ></a></li>
              <li><a href="/product/type?categoryUnifyMark=Protable_amplifier" target="_blank">Amplifiers ></a></li>
              <li><a href="/product/type?categoryUnifyMark=Microphone" target="_blank">Microphones ></a></li>
              <li><a href="/product/type?categoryUnifyMark=Integrated_application&proCategoryAttrItemIds=159" target="_blank">Consoles ></a></li>
              <li><a href="/product/type?categoryUnifyMark=Integrated_application" target="_blank">Mixers ></a></li>
              <li><a href="/product/type?categoryUnifyMark=Integrated_application" target="_blank">Processors ></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="intro-block" id="Public">
        <div class="container">
          <div class="intro-img fr">
            <img v-show="isMobile" src="../../assets/images/solutions/m_solutions_img_05.jpg">
          </div>
          <div class="intro-content fl" style="left:0;">
            <h3>
              Public Broadcasting
            </h3>
            <p>
              The public broadcasting audio system of TAKSTAR includes power timing devices, digital PLC, pre-amplifiers, broadcasting integration, broadcasting amplifiers, hanging speaker, ceiling speakers, broadcasting frets etc. All of these sets can be matched arbitrarily according to actual application occasions to set up a convenient, expanded, intelligent and high quality public broadcasting audio system.
            </p>
            <ul>
              <li><a href="/product/type?categoryUnifyMark=Audio_system&proCategoryAttrItemIds=124&proCategoryAttrItemIds=127" target="_blank">Speakers ></a></li>
              <li><a href="/product/type?categoryUnifyMark=Audio_system&proCategoryAttrItemIds=124&proCategoryAttrItemIds=128" target="_blank">Amplifiers ></a></li>
              <li><a href="/product/type?categoryUnifyMark=Microphone&proCategoryAttrItemIds=76" target="_blank">Microphones ></a></li>
              <li><a href="/product/type?categoryUnifyMark=Integrated_application&proCategoryAttrItemIds=159" target="_blank">Consoles ></a></li>
              <li><a href="/product/type/524" target="_blank">Power Sequencer ></a></li>
              <li><a href="/product/type/522" target="_blank">Digital Central Controller ></a></li>
            </ul>
          </div>
          <div class="intro-img fr">
            <img v-show="!isMobile" src="../../assets/images/solutions/solutions_img_05.jpg">
          </div>
        </div>
      </div>
    <!--<ad-list :adList="adList" :control="false"></ad-list>
    <ad-list :adList="adList2" :tab="tab" :bg="{backgroundColor:'#fff'}"></ad-list>-->
  </div>
</template>

<script>
  import common from '../../components/common.vue';
  import pcHeader from '../../assets/images/solutions/solution_header.jpg';
  import mHeader from '../../assets/images/solutions/m_solution_header.jpg';

  export default {
    name: 'solution',
    head() {
      return {
        title: 'Solutions',
        meta: [
          { name: 'description', content: 'Owning the most complete production，sale and service chain of products  in audio industry，TAKSTAR’s professional technology team and experienced market team will provide integrated audio product solutions for customers.' }
        ]
      }
    },
    data() {
      return {
          isMobile: false,
          content: {
            title: 'Solutions',
            pcSrc: pcHeader,
            mSrc: mHeader,
            summary: "All For Good Sound"
        }
      }
    },
    components: {
      common
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
        this.isMobile = document.documentElement.clientWidth <= 1024;
      }
    }
  }

</script>

<style lang="less" scoped>
   .solutions-page{
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
         width:20%;
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
       width:100%;
       &:nth-child(even){
         background:#fff;
       }
       &:nth-child(odd){
         background:#ededed;
       }
       .container{
         position:relative;
       }
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
         ul{
           margin-top:40px;
           li{
             float:left;
             margin-right:15px;
             margin-bottom:15px;
             a{
               display: inline-block;
               width:170px;
               background:#e6dcd3;
               color:#e70f20;
               font-size:16px;
               text-align: center;
               padding:15px 0;
             }
           }
         }
       }
     }
   }

   @media (max-width:1410px){
     .solutions-page{
       .intro-lis{
         li{
           width:33.33%;
           margin-bottom:25px;
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
         .intro-img{
           width:50%;
           img{
             margin-top:70px;

           }
         }
         .intro-content{
           position:static;
           transform: translateY(0);
           padding-top:80px;
           width:50%;
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

  @media (max-width:1024px){
    .solutions-page{
      .intro-lis{
        li{
          width:33.33%;
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
        .intro-img{
          width:100%;
          img{
            display: block;
            margin:0 auto;
            margin-top:15px;
          }
        }
        .intro-content{
          position:static;
          transform: translateY(0);
          padding-top:10px;
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

   //phone
  @media (max-width:768px){
    .solutions-page {
      .intro-bg {
        padding-top: 20px;
        padding-bottom: 20px;
        h2 {
          font-size: 1.6em;
          padding:0px 10px;
        }
        p {
          font-size: 18px;
          color: #333333;
          line-height: 32px;
          font-weight:300;
          padding: 0 10px;
          text-align: left;
        }
      }
        .intro-lis {
          li {
            width: 33.33%;
            margin-bottom: 25px;
            &:nth-child(even) {
              border-right: none;
            }
          }
        }
      .intro-block{
        .intro-img img{
          margin: 0 auto;
          margin-top:15px;
          display: block;
        }
        .intro-content{
          padding:0 10px;
          padding-top:10px;
          padding-bottom:20px;
          p{
            text-align: left;
            font-size:15px;
            line-height: 22px;
          }
          h3{
            font-size:1.6em;
          }
        }
      }
    }
  }

  @media (max-width:414px){
    .solutions-page {
      .intro-lis {
        li {
          width: 50%;
          margin-bottom: 25px;
          &:nth-child(even) {
            border-right: none;
          }
        }
      }
      .intro-block{
        .intro-img img{
          width:100%;
        }
        .intro-content{
          ul li{
            &:nth-child(even){
              margin-right:0;
            }
            a{
              width:172px;
              font-size:15px;
            }
          }
        }
      }
    }
  }

  @media (max-width:375px){
    .solutions-page {
      .intro-block{
        .intro-img img{
        }
        .intro-content{
          ul li{
            a{
              width:155px;
            }
          }
        }
      }
    }
  }
</style>
