<template>
	<div class="about-page page-top">
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
      <div v-for="item in items2" class="item col-lg-4 col-md-4 col-sm-12 col-xs-12">
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
      <div class="item col-lg-4 col-md-4 col-sm-12 col-xs-12">
        <a href="/about/feedback.html" target="_blank">
          <div class="item-img">
            <img src="../../static/images/aboutus5.jpg">
            <div class="mask"></div>
          </div>
          <div class="item-info">
            <h2>Contact Us</h2>
            <p>Address: No.2 Fu Kang Yi Rd.,Longxi Boluo Huizhou,Guangdong 516121 China Tel: 86-752-6383644 <br/> E-mail: sales@takstar.com.</p>
          </div>
        </a>
      </div>
    </div>
	</div>
</template>

<script>
  import levelbar from '../../components/levelbar';
	import navFix from '../../components/navFix.vue';
	import cover1 from '../../static/images/aboutus1.jpg';
  import cover2 from '../../static/images/aboutus2.jpg';
  import cover3 from '../../static/images/aboutus3.jpg';
  import cover4 from '../../static/images/aboutus4.jpg';
  import cover5 from '../../static/images/aboutus5.jpg';
	export default {
		components:{
      levelbar,
			navFix
		},
		head() {
			return {
		        title: 'About',
		        meta: [
		          { name: 'description', content: '' }
		        ]
		    }
		},
		data(){
			return {
			  items1:[
          {
            cover: cover1,
            link:'/about/competence.html',
            title: 'Core Competence',
            summary: "TAKSTAR has invested much resources into ID design,products R&D,solutions,system integration and all-in-one service,setup a creative and productive supply platform about integrated R&D，production and service."
          },
          {
            cover: cover2,
            link:'/about/technology.html',
            title: "Key Technology",
            summary: "TAKSTAR pursues sustainable management and emphasizes on R&D and innovation,who has rich experience on technical field like acoustics,wireless,human engineering and system integration.Most of these occupy the international leading level."
          },
        ],
        items2: [
          {
            cover: cover3,
            link: '/about/capacity.html',
            title: 'Production Capacity',
            summary: "With factory covering an area of 225,000㎡, more than 1,800 professional technicists servicing in various work scopes，TAKSTAR equips with almost 10,000 advanced automated manufacture machines."
          },
          {
            cover: cover4,
            link:'/about/company.html',
            title: 'Company Profile',
            summary: "Guangdong Takstar Electronic Co., Ltd is the leader in electro-acoustic industry in China. As an enterprise of Chinese national brand, TAKSTAR enjoys good fame at home and abroad and is always dedicated to providing best solutions."
          }
        ]
			}
		}
	}
</script>
<style lang="less" scoped>
  .about-page{
    padding-bottom:25px;
    .item{
      margin-bottom:35px;
      a{
        width:100%;
        background:#000;
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
        padding-right:10px;
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
    .about-page{
      .items-container{
        padding-left:0;
      }
    }
  }

  @media (min-width:1410px){
    .about-page{
      .item {
        .item-info{
          p{
            height:75px;
          }
        }
      }
    }
  }

  @media (max-width:992px){
    .about-page{
      .item {
        .item-info{
          p{
            height:55px;
          }
        }
      }
    }
  }

  @media (max-width:767px){
    .about-page{
      .items-container{
        margin-top:25px;
      }
    }
  }
</style>
