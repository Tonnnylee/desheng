<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-sm-3">
          <h3 class="footer-title">About us</h3>
          <p><a href="/about/company.html">Company Profile</a></p>
          <p><a href="/about/competence.html">Core Competence</a></p>
          <p><a href="/about/technology.html">Key Technology</a></p>
          <p><a href="/about/capacity.html">Production Capacity</a></p>
          <p><a href="/about/feedback.html">Contact Us</a></p>
        </div>
        <div class="col-md-3 col-sm-3">
          <h3 class="footer-title">Products and Solutions</h3>
          <p><a href="/product/type?categoryUnifyMark=Headphone">Headphone</a></p>
          <p><a href="/product/type?categoryUnifyMark=Microphone">Microphone</a></p>
          <p><a href="/product/type?categoryUnifyMark=Portable_amplifier">Portable Amplifier</a></p>
          <p><a href="/product/type?categoryUnifyMark=Audio_system">Audio System</a></p>
          <p><a href="/product/type?categoryUnifyMark=Integrated_application">Integrated Application</a></p>
          <p><a href="/product/type?categoryUnifyMark=Accessory">Accessory</a></p>
          <p><a href="/service/solutions.html">Solutions</a></p>
        </div>
        <div class="col-md-3 col-sm-3">
          <h3 class="footer-title">Service & Support</h3>
          <p><a href="/service/professional.html">Professional OEM</a></p>
          <p><a href="/service/solutions.html">Solutions</a></p>
          <p><a href="/service/distributors.html">International Distributors</a></p>
          <p><a href="/service/download">Download Center</a></p>
          <p><a href="http://english.t3315.com/">Anti-fake Check</a></p>
        </div>
        <div class="col-md-3 col-sm-3">
          <h3 class="footer-title">News</h3>
          <p><a href="/news?newsc=new">New Products</a></p>
          <p><a href="/news">Enterprise Press</a></p>
          <p><a href="/news?newsc=exhibition">Exhibitions</a></p>
          <p>Tel: 86-752-6383644</p>
        </div>
      </div>
      <div class="copyright">
        &copy; 1995-2017 Guangdong Takstar Electronic Co,Ltd.All Rights Reserved. Reproduction in whole or in part without permission
        is prohibited.
        <div class="wechatWrap" v-show="wechatVisibility" @click="hideWechat"></div>
        <div class="ContactUs">
          <div class="wechatImg" v-show="wechatVisibility" @mouseleave="wechatVisibility = false">
            <div class="imgbox">
              <img src="../assets/images/wechat.jpg" alt="">
              <h4>Open the WeChat and </br> search "takstar_gd" to follow us!</h4>
            </div>
          </div>
          <span class="ContactUs-wechat" @mouseover="wechatOver($event)" @mouseleave="wechatleave"><img src="../assets/images/weixin.png" alt="wechat" /></span>
          <a class="ContactUs-skype" @mouseover="skypeOver($event)" @mouseleave="skypeVisibility = false" href=" skype: zhanggc.china@gmail.com" @click="skypeCheck"><img src="../assets/images/s.png" style="border: none;" alt="Call me!" /></a>
          <div class="skypeImg" v-show="skypeVisibility" @mouseleave="skypeVisibility = false">
            <div class="imgbox">
              <h4>Skype account: </br> zhanggc.china@gmail.com</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'footer',
    data() {
      return {
        wechatVisibility: false,
        skypeVisibility: false
      }
    },
    mounted(){
    },
    methods: {
      wechatOver(e) {
        this.wechatVisibility = true;
      },
      skypeOver(e){
        this.skypeVisibility = true;
      },
      skypeCheck(){
          var yes = confirm("Have you installed skype?");
          if(yes){
            return true;
          }else{
            window.open("https://www.skype.com");
            return false;
          }
      },
      wechatleave(e) {
        if (e.toElement.getAttribute('class') !== 'wechatImg') {
          this.wechatVisibility = false;
        }
      },
      hideWechat() {
        this.wechatVisibility = false;
      }
    }
  }

</script>

<style>
  .footer {
    background: #1a1a1a;
    padding: 25px 0;
  }
  .footer-bottom{
    position:absolute;
    bottom:0;
    width:100%;
  }
  .footer .footer-title {
    color: #fff;
    font-size: 20px;
    margin: 15px 0;
  }

  .footer p {
    line-height: 2;
    color: #a6a6a6;
  }

  .footer p a {
    color: #a6a6a6;
    line-height: 1.3;
    text-decoration: none;
    transition: all 0.5s ease;
  }

  .footer p a:hover {
    color: #fff;
  }

  .footer .copyright {
    margin-top: 35px;
    padding: 35px 0;
    padding-bottom: 0;
    color: #a6a6a6;
    font-size: 13px;
    border-top: #484848 solid 1px;
    position: relative;
  }



  .footer .copyright .ContactUs {
    position: absolute;
    right: 15px;
    top: 18px;
    z-index: 999;
  }

  .wechatWrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
  }

  .footer .copyright .ContactUs a,
  .footer .copyright .ContactUs span {
    width: 35px;
    height: 35px;
    margin-right: 10px;
    display: inline-block;
    position: relative;
    z-index: 9;
  }

  .footer .copyright .ContactUs a {
    margin-right: 0;
  }

  .footer .copyright .ContactUs .wechatImg,
  .footer .copyright .ContactUs .skypeImg {
    position: absolute;
    top: -270px;
    left: -95px;
    width: 200px;
    padding-bottom: 15px;
    z-index: 999;
  }
  .footer .copyright .ContactUs .skypeImg {
    top: -87px;
    left: -105px;
  }
  .footer .copyright .ContactUs .wechatImg .imgbox,
  .footer .copyright .ContactUs .skypeImg .imgbox {
    background: #fff;
  }

  .footer .copyright .ContactUs .wechatImg h4,
  .footer .copyright .ContactUs .skypeImg h4 {
    color: #666;
    font-weight: normal;
    font-size: 14px;
    text-align: center;
    line-height: 24px;
    padding-bottom: 10px;
  }
  .footer .copyright .ContactUs .skypeImg h4{
    font-size:18px;
    padding:10px;
  }

  .footer .copyright .ContactUs .wechatImg img {
    width: 100%;
  }

  .footer .copyright .ContactUs img,
  .footer .copyright .ContactUs span img {
    width: 100%;
  }

  @media (max-width:768px){
    .footer .copyright{
      font-size:12px;
    }
  }

</style>
