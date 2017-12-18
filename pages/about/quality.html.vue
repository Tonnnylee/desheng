<template>
  <div class="about-page page-top">
    <!--<nav-fix :data="navs"></nav-fix>-->
    <common :data="content"></common>
    <div class="container">
      <news-middle :newsType="newsType" ></news-middle>
    </div>
    <ad-list :adList="adList"  :control="false" :title="{state: false}"></ad-list>
  </div>
</template>

<script>
  import navFix from '../../components/navFix.vue';
  import newsMiddle from '~components/AboutUs/news.vue';
  import common from '../../components/common.vue';
  import adList from '~components/AboutUs/adList.vue';
  import pcHeader from '../../assets/images/header_bg2.jpg';
  import mHeader from '../../assets/images/header_bg_phone2.jpg';

  export default {
    name: 'quality',
    head() {
      return {
        title: 'quality',
        meta: [
          { name: 'description', content: '' }
        ]
      }
    },
    asyncData() {
      return {
        adList: [
          {

            href: 'javascript:;',
            class: 'col-md-4 col-sm-4',
            title: 'the description of this picture',
            img: '/images/factory-tour-big_29.jpg'
          },
          {

            href: 'javascript:;',
            class: 'col-md-4 col-sm-4',
            title: 'the description of this picture',
            img: '/images/factory-tour-big_30.jpg'
          },
          {

            href: 'javascript:;',
            class: 'col-md-4 col-sm-4',
            title: 'the description of this picture',
            img: '/images/factory-tour-big_31.jpg'
          },
          {

            href: 'javascript:;',
            class: 'col-md-4 col-sm-4',
            title: 'the description of this picture',
            img: '/images/factory-tour-big_32.jpg'
          },
          {

            href: 'javascript:;',
            class: 'col-md-4 col-sm-4',
            title: 'the description of this picture',
            img: '/images/factory-tour-big_33.jpg'
          },
          {
            href: 'javascript:;',
            class: 'col-md-4 col-sm-4',
            title: 'the description of this picture',
            img: '/images/factory-tour-big_34.jpg'
          }
        ]
      }
    },
    data() {
      return {
        adList: [],
        navs: [
					{
						title: 'Company Profile',
						domain:'about',
						path: 'company'
					},
					{
						title: 'Factory Tour',
						domain:'about',
						path: 'factoryTour'
					},
					{
						title: 'R&D',
						domain:'about',
						path: 'rd'
					},
					{
						title: 'Quality Control',
						domain:'about',
						path: 'quality'
					},
					{
						title: 'Contact Us',
						domain:'about',
						path: 'feedback'
					}
				],
        newsType: [
          {
            html: `
								<h1>Management system protection</h1>
								<p>Companies in accordance with the ISO9001; 2008 quality management system requirements, the establishment of a sound quality management system as the company's quality activities of the criteria, and "full investment based on the pioneering and innovation-oriented; continuous im-provement as a way to customer satisfaction as the goal "The quality of the company to determine the purpose of quality management and development direction, the effective implementation of quality management system, and continuous improvement to improve product quality and service quality to meet more customers.<br/>
                 The company now has professional quality engineers, technicians and quality inspection staff of more than 70 people, advanced testing equipment more than 500 Taiwan, formed a high-quality, strict requirements of a strong quality assurance team, the use of the most scientific means of de-tection, the product strictly Inspection and monitoring.
                 Company Center laboratory building area of more than 400 square meters, the product from the beginning of the raw materials to carry out layers of testing control. The laboratory is equipped with electro-acoustic measurement, environmental testing, environmental measurement, reliability measurement, electromagnetic interference measurement, through layers of testing, experiments to ensure the perfect quality of the product. We have a "focus on good voice" as the goal, the company has a number of advanced sound muffler no room testing system, equipped with the world's advanced Danish B & K test system, the United States APX test system to ensure that the perfect sound quality products.
                 Our products from the procurement of raw materials, parts processing, production process and sto-rage and transportation, the factory of each link, must go through a strict quality inspection person-nel can only be qualified to release qualified, so as to ensure that every 100% qualified products manufactured. To ensure that "quality" is our company's sustainable development, the eternal theme of the same. We will continue to improve and innovate, strengthen the quality of control and assurance, the company's products become customers 100% satisfied with the product.</p>
							`,
            type: 'newsText'
          },
          {
            html: `/images/management1.jpg`,
            type: 'newsImg'
          },
          {
            html: `/images/management2.jpg`,
            type: 'newsImg'
          },
          {
            html: `
								<h1>Test excellence</h1>
								<p>Electroacoustic measurement: The company's central laboratory is equipped with Danish B & K electro-acoustic test system, the United States APX test system, and the whole muffler no room composed of electro-acoustic professional test analysis system. Environmental simulation test: the company has a number of environmental testing machine, to simulate the product in all weather conditions under different circumstances of the use of the effect. Environmental measurement: the laboratory is equipped with X-ray fluorescence tester, for each batch, each type of material are envi-ronmentally friendly to ensure that materials are in line with ROHS requirements. Reliability test: laboratory equipped with vibration testing machine, drop test machine, wire tensile testing machine, wire bending test machine, switch life testing machine, automatic plugging life testing machine, friction testing machine, headset telescopic fatigue testing machine, headphones Wire impact testing machine, headphone expansion of aging, headset stretching aging, the standard light source color machine, color difference and other advanced equipment to ensure the reliability of the use of the product. The company set up professional and technical personnel in accordance with national stan-dards and business / association standards, given the company's quality management system, as the basis for product quality identification standards for product development and production to provide electro-acoustic, mechanical, physical and other characteristics of the comprehensive measurement, And analysis.</p>
							`,
            type: 'newsText'
          }
        ],
        content: {
          title: 'Quality Assurance System',
          pcSrc: pcHeader,
          mSrc: mHeader,
          summary: "Companies in accordance with the ISO9001; 2008 quality management system requirements, the establishment of a sound quality management system as the company's quality activities of the criteria"
        }
      }
    },
    components: {
      navFix,
      newsMiddle,
      common,
      adList
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
        if (document.documentElement.clientWidth + 23 <= 768) {
          this.newsType = [
            {
              html: `/images/management1.jpg`,
              type: 'newsImg'
            },
            {
              html: `
								<h1>Management system protection</h1>
							<p>Companies in accordance with the ISO9001; 2008 quality management system requirements, the establishment of a sound quality management system as the company's quality activities of the criteria, and "full investment based on the pioneering and innovation-oriented; continuous im-provement as a way to customer satisfaction as the goal "The quality of the company to determine the purpose of quality management and development direction, the effective implementation of quality management system, and continuous improvement to improve product quality and service quality to meet more customers.<br/>
                 The company now has professional quality engineers, technicians and quality inspection staff of more than 70 people, advanced testing equipment more than 500 Taiwan, formed a high-quality, strict requirements of a strong quality assurance team, the use of the most scientific means of de-tection, the product strictly Inspection and monitoring.
                 Company Center laboratory building area of more than 400 square meters, the product from the beginning of the raw materials to carry out layers of testing control. The laboratory is equipped with electro-acoustic measurement, environmental testing, environmental measurement, reliability measurement, electromagnetic interference measurement, through layers of testing, experiments to ensure the perfect quality of the product. We have a "focus on good voice" as the goal, the company has a number of advanced sound muffler no room testing system, equipped with the world's advanced Danish B & K test system, the United States APX test system to ensure that the perfect sound quality products.
                 Our products from the procurement of raw materials, parts processing, production process and sto-rage and transportation, the factory of each link, must go through a strict quality inspection person-nel can only be qualified to release qualified, so as to ensure that every 100% qualified products manufactured. To ensure that "quality" is our company's sustainable development, the eternal theme of the same. We will continue to improve and innovate, strengthen the quality of control and assurance, the company's products become customers 100% satisfied with the product.</p>
							`,
              type: 'newsText'
            },
            {
              html: `/images/management2.jpg`,
              type: 'newsImg'
            },
            {
              html: `
								<h1>Test excellence</h1>
								<p>Electroacoustic measurement: The company's central laboratory is equipped with Danish B & K electro-acoustic test system, the United States APX test system, and the whole muffler no room composed of electro-acoustic professional test analysis system. Environmental simulation test: the company has a number of environmental testing machine, to simulate the product in all weather conditions under different circumstances of the use of the effect. Environmental measurement: the laboratory is equipped with X-ray fluorescence tester, for each batch, each type of material are envi-ronmentally friendly to ensure that materials are in line with ROHS requirements. Reliability test: laboratory equipped with vibration testing machine, drop test machine, wire tensile testing machine, wire bending test machine, switch life testing machine, automatic plugging life testing machine, friction testing machine, headset telescopic fatigue testing machine, headphones Wire impact testing machine, headphone expansion of aging, headset stretching aging, the standard light source color machine, color difference and other advanced equipment to ensure the reliability of the use of the product. The company set up professional and technical personnel in accordance with national stan-dards and business / association standards, given the company's quality management system, as the basis for product quality identification standards for product development and production to provide electro-acoustic, mechanical, physical and other characteristics of the comprehensive measurement, And analysis.</p>
							`,
              type: 'newsText'
            }
          ]
        } else {
          this.newsType = [
            {
              html: `
								<h1>Management system protection</h1>
								<p>Companies in accordance with the ISO9001; 2008 quality management system requirements, the establishment of a sound quality management system as the company's quality activities of the criteria, and "full investment based on the pioneering and innovation-oriented; continuous im-provement as a way to customer satisfaction as the goal "The quality of the company to determine the purpose of quality management and development direction, the effective implementation of quality management system, and continuous improvement to improve product quality and service quality to meet more customers.<br/>
                 The company now has professional quality engineers, technicians and quality inspection staff of more than 70 people, advanced testing equipment more than 500 Taiwan, formed a high-quality, strict requirements of a strong quality assurance team, the use of the most scientific means of de-tection, the product strictly Inspection and monitoring.
                 Company Center laboratory building area of more than 400 square meters, the product from the beginning of the raw materials to carry out layers of testing control. The laboratory is equipped with electro-acoustic measurement, environmental testing, environmental measurement, reliability measurement, electromagnetic interference measurement, through layers of testing, experiments to ensure the perfect quality of the product. We have a "focus on good voice" as the goal, the company has a number of advanced sound muffler no room testing system, equipped with the world's advanced Danish B & K test system, the United States APX test system to ensure that the perfect sound quality products.
                 Our products from the procurement of raw materials, parts processing, production process and sto-rage and transportation, the factory of each link, must go through a strict quality inspection person-nel can only be qualified to release qualified, so as to ensure that every 100% qualified products manufactured. To ensure that "quality" is our company's sustainable development, the eternal theme of the same. We will continue to improve and innovate, strengthen the quality of control and assurance, the company's products become customers 100% satisfied with the product.</p>
							`,
              type: 'newsText'
            },
            {
              html: `/images/management1.jpg`,
              type: 'newsImg'
            },
            {
              html: `/images/management2.jpg`,
              type: 'newsImg'
            },
            {
              html: `
								<h1>Test excellence</h1>
								<p>Electroacoustic measurement: The company's central laboratory is equipped with Danish B & K electro-acoustic test system, the United States APX test system, and the whole muffler no room composed of electro-acoustic professional test analysis system. Environmental simulation test: the company has a number of environmental testing machine, to simulate the product in all weather conditions under different circumstances of the use of the effect. Environmental measurement: the laboratory is equipped with X-ray fluorescence tester, for each batch, each type of material are envi-ronmentally friendly to ensure that materials are in line with ROHS requirements. Reliability test: laboratory equipped with vibration testing machine, drop test machine, wire tensile testing machine, wire bending test machine, switch life testing machine, automatic plugging life testing machine, friction testing machine, headset telescopic fatigue testing machine, headphones Wire impact testing machine, headphone expansion of aging, headset stretching aging, the standard light source color machine, color difference and other advanced equipment to ensure the reliability of the use of the product. The company set up professional and technical personnel in accordance with national stan-dards and business / association standards, given the company's quality management system, as the basis for product quality identification standards for product development and production to provide electro-acoustic, mechanical, physical and other characteristics of the comprehensive measurement, And analysis.</p>
							`,
              type: 'newsText'
            }
          ]
        }
      }
    }
  }

</script>

<style lang="less" scoped>
  //mobile
  @media (max-width:767px) {}

  // pad
  @media (min-width:768px) and (max-width:992px) {}

  // big pad
  @media (min-width:993px) and (max-width:1200px) {}
</style>
