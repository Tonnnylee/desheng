<template>
  <div class="about-page page-top">
    <!--<nav-fix :data="navs"></nav-fix>-->
    <common :data="content"></common>
    <div class="container">
      <news-middle :newsType="newsType" ></news-middle>
    </div>
    <ad-list :adList="adList" :tab="tab" :title="{state: false}"></ad-list>
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
    name: 'factoryTour',
    head() {
      return {
        title: 'factoryTour',
        meta: [
          { name: 'description', content: '' }
        ]
      }
    },
    asyncData() {
      return {
        tab: [
          {
            active: 'activeBtn',
            text: 'Office area'
          },
          {
            text: 'Production workshop'
          }
        ],
        adList: [
          {
            tab: 1,
            href: 'javascript:;',
            title: '',
            class: 'col-md-4 col-sm-4',
            img: '/images/factory-tour-big_09.jpg'
          },
          {
            tab: 1,
            href: 'javascript:;',
            title: '',
            class: 'col-md-4 col-sm-4',
            img: '/images/factory-tour-big_18.jpg'
          },
          {
            tab: 1,
            href: 'javascript:;',
            title: '',
            class: 'col-md-4 col-sm-4',
            img: '/images/factory-tour-big_11.jpg'
          },
          {
            tab: 1,
            href: 'javascript:;',
            title: '',
            class: 'col-md-4 col-sm-4',
            img: '/images/factory-tour-big_20.jpg'
          },
          {
            tab: 1,
            href: 'javascript:;',
            title: '',
            class: 'col-md-4 col-sm-4',
            img: '/images/factory-tour-big_13.jpg'
          },
          {
            tab: 1,
            href: 'javascript:;',
            title: '',
            class: 'col-md-4 col-sm-4',
            img: '/images/factory-tour-big_22.jpg'
          },
          {
            tab: 2,
            href: 'javascript:;',
            title: '',
            class: 'col-md-4 col-sm-4',
            img: '/images/factory-tour-big_23.jpg'
          },
          {
            tab: 2,
            href: 'javascript:;',
            title: '',
            class: 'col-md-4 col-sm-4',
            img: '/images/factory-tour-big_24.jpg'
          },
          {
            tab: 2,
            href: 'javascript:;',
            title: '',
            class: 'col-md-4 col-sm-4',
            img: '/images/factory-tour-big_25.jpg'
          },
          {
            tab: 2,
            href: 'javascript:;',
            title: '',
            class: 'col-md-4 col-sm-4',
            img: '/images/factory-tour-big_26.jpg'
          },
          {
            tab: 2,
            href: 'javascript:;',
            title: '',
            class: 'col-md-4 col-sm-4',
            img: '/images/factory-tour-big_27.jpg'
          },
          {
            tab: 2,
            href: 'javascript:;',
            title: '',
            class: 'col-md-4 col-sm-4',
            img: '/images/factory-tour-big_28.jpg'
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
								<h1>Location and office environment</h1>
								<p>Guangdong Victory Electronics Co., Ltd. was founded in 1995, is the world's leading electro-acoustic products manufacturing enterprises, located in Huizhou City, Guangdong Province, Boluo County, location, sitting on the ear, Hong Kong, deep one hour economic circle, adjacent to Hong Kong, Macau Special Administrative Region, convenient transportation. The company has invested hundreds of millions of dollars to build an area of more than 20 million square meters of modern new factories, the park has office buildings, manufacturing, finished products / accessories warehouse, staff quarters and other areas, the building can accommodate thousands of banquet hall, Basketball courts, multi-purpose entertainment centers and other recreational facilities.</p>
							`,
            type: 'newsText'
          },
          {
            html: `/images/factory-tour-big_03.jpg`,
            type: 'newsImg'
          },
          {
            html: `/images/factory-tour-big_06.jpg`,
            type: 'newsImg'
          },
          {
            html: `
								<h1>Equipment and production line scale</h1>
								<p>The company introduced foreign advanced equipment, more than 100 sets of equipment, configuration of modern ERP production efficiency and quality control system, real-time production site on the spot performance and production efficiency, to achieve automatic control and visual management; production covers all types of microphones, headphones, Audio equipment, integrated applications, sound system five product lines, with an annual output of 2 million microphones, 2 million sets of headphones, 1 million sets of loudspeakers, 300,000 sets of integrated applications and tens of thousands of sets of speaker amplifier production capacity, production base has (Professional) microphone, sound, audio, metal die-casting, printing and packaging workshop and one-stop processing, production and manufacturing capacity. B / K no room, SMT, wireless electronic,</p>
							`,
            type: 'newsText'
          }
        ],
        content: {
          title: 'FACTORY TOUR',
          summary: "Guangdong Victory Electronics Co., Ltd. was established in 1995, is the pioneer of China's electro-acoustic industry,  has been committed to the world's users to provide the best sound processing solutions!",
          pcSrc: pcHeader,
          mSrc: mHeader
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
              html: `/images/factory-tour-big_03.jpg`,
              type: 'newsImg'
            },
            {
              html: `
								<h1>Location and office environment</h1>
							<p>Guangdong Victory Electronics Co., Ltd. was founded in 1995, is the world's leading electro-acoustic products manufacturing enterprises, located in Huizhou City, Guangdong Province, Boluo County, location, sitting on the ear, Hong Kong, deep one hour economic circle, adjacent to Hong Kong, Macau Special Administrative Region, convenient transportation. The company has invested hundreds of millions of dollars to build an area of more than 20 million square meters of modern new factories, the park has office buildings, manufacturing, finished products / accessories warehouse, staff quarters and other areas, the building can accommodate thousands of banquet hall, Basketball courts, multi-purpose entertainment centers and other recreational facilities.</p>
							`,
              type: 'newsText'
            },
            {
              html: `/images/factory-tour-big_06.jpg`,
              type: 'newsImg'
            },
            {
              html: `
								<h1>Equipment and production line scale</h1>
								<p>The company introduced foreign advanced equipment, more than 100 sets of equipment, configuration of modern ERP production efficiency and quality control system, real-time production site on the spot performance and production efficiency, to achieve automatic control and visual management; production covers all types of microphones, headphones, Audio equipment, integrated applications, sound system five product lines, with an annual output of 2 million microphones, 2 million sets of headphones, 1 million sets of loudspeakers, 300,000 sets of integrated applications and tens of thousands of sets of speaker amplifier production capacity, production base has (Professional) microphone, sound, audio, metal die-casting, printing and packaging workshop and one-stop processing, production and manufacturing capacity. B / K no room, SMT, wireless electronic,</p>
							`,
              type: 'newsText'
            }
          ]
        } else {
          this.newsType = [
            {
              html: `
								<h1>Location and office environment</h1>
								<p>Guangdong Victory Electronics Co., Ltd. was founded in 1995, is the world's leading electro-acoustic products manufacturing enterprises, located in Huizhou City, Guangdong Province, Boluo County, location, sitting on the ear, Hong Kong, deep one hour economic circle, adjacent to Hong Kong, Macau Special Administrative Region, convenient transportation. The company has invested hundreds of millions of dollars to build an area of more than 20 million square meters of modern new factories, the park has office buildings, manufacturing, finished products / accessories warehouse, staff quarters and other areas, the building can accommodate thousands of banquet hall, Basketball courts, multi-purpose entertainment centers and other recreational facilities.</p>
							`,
              type: 'newsText'
            },
            {
              html: `/images/factory-tour-big_03.jpg`,
              type: 'newsImg'
            },
            {
              html: `/images/factory-tour-big_06.jpg`,
              type: 'newsImg'
            },
            {
              html: `
								<h1>Equipment and production line scale</h1>
								<p>The company introduced foreign advanced equipment, more than 100 sets of equipment, configuration of modern ERP production efficiency and quality control system, real-time production site on the spot performance and production efficiency, to achieve automatic control and visual management; production covers all types of microphones, headphones, Audio equipment, integrated applications, sound system five product lines, with an annual output of 2 million microphones, 2 million sets of headphones, 1 million sets of loudspeakers, 300,000 sets of integrated applications and tens of thousands of sets of speaker amplifier production capacity, production base has (Professional) microphone, sound, audio, metal die-casting, printing and packaging workshop and one-stop processing, production and manufacturing capacity. B / K no room, SMT, wireless electronic,</p>
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
