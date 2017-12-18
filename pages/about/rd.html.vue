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
    name: 'rd',
    head() {
      return {
        title: 'rd',
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
            img: '/images/factory-tour-big_35.jpg'
          },
          {

            href: 'javascript:;',
            class: 'col-md-4 col-sm-4',
            title: 'the description of this picture',
            img: '/images/factory-tour-big_36.jpg'
          },
          {

            href: 'javascript:;',
            class: 'col-md-4 col-sm-4',
            title: 'the description of this picture',
            img: '/images/factory-tour-big_37.jpg'
          },
          {

            href: 'javascript:;',
            class: 'col-md-4 col-sm-4',
            title: 'the description of this picture',
            img: '/images/factory-tour-big_38.jpg'
          },
          {

            href: 'javascript:;',
            class: 'col-md-4 col-sm-4',
            title: 'the description of this picture',
            img: '/images/factory-tour-big_39.jpg'
          },
          {

            href: 'javascript:;',
            class: 'col-md-4 col-sm-4',
            title: 'the description of this picture',
            img: '/images/factory-tour-big_40.jpg'
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
								<h1>Technology research and development concept</h1>
								<p>Company to "people-oriented" design concept, "to meet customer needs" for the purpose of the design to "design a core competitiveness of the product" as the goal, in accordance with the "innovative, efficient, respect, responsible" principle, integrated electro-acoustic products Research and development areas of the advantages of resources, to carry out further technical research and development, to maintain the lead in the electro-acoustic industry.</p>
							`,
            type: 'newsText'
          },
          {
            html: `/images/Research-and-development-big_03.jpg`,
            type: 'newsImg'
          },
          {
            html: `/images/Research-and-development-big_06.jpg`,
            type: 'newsImg'
          },
          {
            html: `
								<h1>R & D strength</h1>
								<p>In 2007, the Guangdong Provincial Science and Technology Department, the Provincial Development and Reform Commission, the Provincial Economic and Trade Commission approved the company successfully established Guangdong Province Engineering Technology Research and Development Center, R & D center is responsible for the company's new product design and research and development, at any time with domestic and foreign electro-acoustic research institutions and Institutions to maintain a high degree of cooperation, to provide advanced technical support and testing, testing equipment for the company to provide technical support projects. Research and development center under the industrial design, wireless electronic research and development, electro-acoustic product development and development of three departments, including industrial design led the design of a variety of product appearance and parts, assembly and other engineering drawings, and the application of three-dimensional technology simulation and design The wireless electronic R & D department through the establishment of scientific and rational electronic R & D planning, research and development areas covering wireless microphones, wireless systems, wireless audio systems, etc., to provide a fast and accurate service for the company to develop new products and meet specific user design requirements, With the 2.4G, VHF, UHF and other multi-frequency, multi-channel analog and digital wireless product research and development capabilities; electro-acoustic product research and development focus on the analysis of electro-acoustic technology applications, the establishment of technical information base for the product to maintain the leading technology to provide technical information Support, with professional recording microphone, conference microphone, monitor headphones, multimedia headphones, professional audio systems, and other types of electro-acoustic product development capabilities.</p>
							`,
            type: 'newsText'
          }
        ],
        content: {
          title: 'Technology R&D',
          pcSrc: pcHeader,
          mSrc: mHeader,
          summary: 'Company to "people-oriented" design concept, "to meet customer needs" for the purpose of the design to "design a core competitiveness of the product" as the goal'
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
              html: `/images/Research-and-development-big_03.jpg`,
              type: 'newsImg'
            },
            {
              html: `
								<h1>Technology research and development concept</h1>
							<p>Company to "people-oriented" design concept, "to meet customer needs" for the purpose of the design to "design a core competitiveness of the product" as the goal, in accordance with the "innovative, efficient, respect, responsible" principle, integrated electro-acoustic products Research and development areas of the advantages of resources, to carry out further technical research and development, to maintain the lead in the electro-acoustic industry.</p>
							`,
              type: 'newsText'
            },
            {
              html: `/images/Research-and-development-big_06.jpg`,
              type: 'newsImg'
            },
            {
              html: `
								<h1>R & D strength</h1>
								<p>In 2007, the Guangdong Provincial Science and Technology Department, the Provincial Development and Reform Commission, the Provincial Economic and Trade Commission approved the company successfully established Guangdong Province Engineering Technology Research and Development Center, R & D center is responsible for the company's new product design and research and development, at any time with domestic and foreign electro-acoustic research institutions and Institutions to maintain a high degree of cooperation, to provide advanced technical support and testing, testing equipment for the company to provide technical support projects. Research and development center under the industrial design, wireless electronic research and development, electro-acoustic product development and development of three departments, including industrial design led the design of a variety of product appearance and parts, assembly and other engineering drawings, and the application of three-dimensional technology simulation and design The wireless electronic R & D department through the establishment of scientific and rational electronic R & D planning, research and development areas covering wireless microphones, wireless systems, wireless audio systems, etc., to provide a fast and accurate service for the company to develop new products and meet specific user design requirements, With the 2.4G, VHF, UHF and other multi-frequency, multi-channel analog and digital wireless product research and development capabilities; electro-acoustic product research and development focus on the analysis of electro-acoustic technology applications, the establishment of technical information base for the product to maintain the leading technology to provide technical information Support, with professional recording microphone, conference microphone, monitor headphones, multimedia headphones, professional audio systems, and other types of electro-acoustic product development capabilities.</p>
							`,
              type: 'newsText'
            }
          ]
        } else {
          this.newsType = [
            {
              html: `
								<h1>Technology research and development concept</h1>
								<p>Company to "people-oriented" design concept, "to meet customer needs" for the purpose of the design to "design a core competitiveness of the product" as the goal, in accordance with the "innovative, efficient, respect, responsible" principle, integrated electro-acoustic products Research and development areas of the advantages of resources, to carry out further technical research and development, to maintain the lead in the electro-acoustic industry.</p>
							`,
              type: 'newsText'
            },
            {
              html: `/images/Research-and-development-big_03.jpg`,
              type: 'newsImg'
            },
            {
              html: `/images/Research-and-development-big_06.jpg`,
              type: 'newsImg'
            },
            {
              html: `
								<h1>R & D strength</h1>
								<p>In 2007, the Guangdong Provincial Science and Technology Department, the Provincial Development and Reform Commission, the Provincial Economic and Trade Commission approved the company successfully established Guangdong Province Engineering Technology Research and Development Center, R & D center is responsible for the company's new product design and research and development, at any time with domestic and foreign electro-acoustic research institutions and Institutions to maintain a high degree of cooperation, to provide advanced technical support and testing, testing equipment for the company to provide technical support projects. Research and development center under the industrial design, wireless electronic research and development, electro-acoustic product development and development of three departments, including industrial design led the design of a variety of product appearance and parts, assembly and other engineering drawings, and the application of three-dimensional technology simulation and design The wireless electronic R & D department through the establishment of scientific and rational electronic R & D planning, research and development areas covering wireless microphones, wireless systems, wireless audio systems, etc., to provide a fast and accurate service for the company to develop new products and meet specific user design requirements, With the 2.4G, VHF, UHF and other multi-frequency, multi-channel analog and digital wireless product research and development capabilities; electro-acoustic product research and development focus on the analysis of electro-acoustic technology applications, the establishment of technical information base for the product to maintain the leading technology to provide technical information Support, with professional recording microphone, conference microphone, monitor headphones, multimedia headphones, professional audio systems, and other types of electro-acoustic product development capabilities.</p>
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
