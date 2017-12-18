<template>
  <div class="service-page page-top">
    <levelbar></levelbar>
    <!--<nav-fix :data="navs"></nav-fix>-->
    <div class="container items-container">
      <div v-for="item in items1" class="items1 item col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <nuxt-link :to="item.link">
          <div class="item-img">
            <img :src="item.cover">
            <div class="mask"></div>
          </div>
          <div class="item-info">
            <h2>{{ item.title }}</h2>
            <p>{{ item.summary }}</p>
          </div>
        </nuxt-link>
      </div>
      <div v-for="item in items" class="item col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <nuxt-link :to="item.link">
          <div class="item-img">
            <img :src="item.cover">
            <div class="mask"></div>
          </div>
          <div class="item-info">
            <h2>{{ item.title }}</h2>
            <p>{{ item.summary }}</p>
          </div>
        </nuxt-link>
      </div>
      <div class="item col-lg-4 col-md-4 col-sm-6 col-xs-12">
        <a href="http://englisht.3315.com/" target="_blank">
          <div class="item-img">
            <img src="../../static/images/service&support6.jpg">
            <div class="mask"></div>
          </div>
          <div class="item-info">
            <h2>Acti-fake Check</h2>
            <p>Please input the Anti-fake code of products and click on CHECK to verify authenticity.</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import levelbar from '../../components/levelbar';
  import navFix from '../../components/navFix.vue';
  import cover1 from '../../static/images/service&support1.jpg';
  import cover2 from '../../static/images/service&support2.jpg';
  import cover3 from '../../static/images/service&support3.jpg';
  import cover4 from '../../static/images/service&support5.jpg';
  export default {
    components:{
      levelbar,
      navFix
    },
    head() {
      return {
        title: 'Professional OEM',
        meta: [
          { name: 'description', content: 'TAKSTAR is a high-tech enterprise with integration of R&D，production，processing and service. It provides customers with solutions and cooperation modes such as whole equipments purchase，OEM，ODM and accessories purchase.' }
        ]
      }
    },
    data(){
      return {
        items1:[
          {
            cover: cover1,
            link: '/service/professional.html',
            title: 'Professional OEM',
            summary: 'TAKSTAR is a high-tech enterprise with integration of R&D，production，processing and service. It provides customers with solutions and cooperation modes such as whole equipments purchase，OEM，ODM and accessories purchase.'
          },
          {
            cover:cover2,
            link: '/service/solutions.html',
            title: 'Solutions',
            summary: "Owning the most complete production，sale and service chain of products  in audio industry，TAKSTAR’s professional technology team and experienced market team will provide integrated audio product solutions for customers."
          },
        ],
        items:[
          {
            cover: cover3,
            link: '/service/distributors.html',
            title: 'International Distributors',
            summary: 'Since having cooperative distributors in over 20 countries，TAKSTAR will continue to develop cooperation with more countries and regions.'
          },
          {
            cover: cover4,
            link: '/service/download',
            title: 'Download Center',
            summary: 'The product instructions，catalogues and software are in Download Center for your download and inquiry.'
          }
        ]
      }
    }
  }
</script>
<style lang="less" scoped>
  .service-page{
    padding-bottom:25px;
    .item{
      margin-bottom:35px;
      a{
        width:100%;
        background:#000;
        overflow: hidden;
      }
      &:hover{
        .item-info h2,.item-info p{
          color:#e70f20;
        }
        div.item-img{
          .mask{
            background:rgba(0,0,0,0);
          }
        }
      }
      div.item-img{
        position:relative;
        width:100%;
        height:auto;
        .mask{
          position:absolute;
          width:100%;
          height:100%;
          top:0;
          left:0;
          z-index:100;
          background:rgba(0,0,0,0.3);
          transition:all 0.5s ease;
        }
      }
      img{
        width:100%;
      }
      .item-info{
        box-sizing: border-box;
        padding:25px;
        background:#fff;
        box-shadow: 2px 3px 15px #e8e8e8;
        h2{
          font-size:26px;
          height:30px;
          color:#000;
          font-weight:600;
          margin-bottom:15px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          transition:color 0.3s ease;
        }
        p{
          line-height:25px;
          color:#999999;
          font-size:14px;
          font-weight:300;
          height:75px;
          overflow:hidden;
          transition:color 0.3s ease;
        }
      }
    }
  }
  @media (min-width:768px){
    .service-page{
      .items-container{
        padding-left:0;
      }
    }
  }

  @media (max-width:767px){
    .service-page{
      .items-container{
        margin-top:25px;
      }
    }
  }
</style>
