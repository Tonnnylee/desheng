<template>
  <div>
    <T-Header></T-Header>
    <nuxt/>
    <V-Menu
      :iconImgArr="iconImgArr"
      :startAngle="-180"
      :endAngle="-90"
      :itemNum="4"
      class="menu-right-corner-wrapper visible-xs-block"
    ></V-Menu>
    <Footer-phone v-if="isMobile" class="visible-xs-block"></Footer-phone>
    <T-Footer v-if="!isMobile" class="visible-lg-block visible-md-block visible-sm-block"></T-Footer>
  </div>
</template>
<script>
  import THeader from '~components/Header.vue';
  import TFooter from '~components/footer.vue';
  import FooterPhone from '~components/footerPhone.vue';
  import VMenu from '~components/shortcutMenu/menu.vue';
  import house from '~components/shortcutMenu/common/icon/house.svg';
  import datas from '~components/shortcutMenu/common/icon/data.svg';
  import info from '~components/shortcutMenu/common/icon/info.svg';
  import money from '~components/shortcutMenu/common/icon/money.svg';

  export default {
      components: {
          THeader,
          TFooter,
          FooterPhone,
          VMenu
      },
      data(){
          return{
            isMobile:false,
          }
      },
      computed: {
        iconImgArr (){
          let tmp = []
          tmp.push(this.genarateIconObj('/about',house, 'house', '50'))
          tmp.push(this.genarateIconObj('/news' ,datas, 'datas', '50'))
          tmp.push(this.genarateIconObj('/product',info, 'info', '50'))
          tmp.push(this.genarateIconObj('/service',money, 'money', '50'))
          return tmp
        }
      },
    mounted(){
      this.handleResize();
      window.addEventListener('resize', this.handleResize);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.handleResize);
    },
    beforeDestroy() {
    },
    methods: {
      handleResize(e) {
        this.isMobile = document.documentElement.clientWidth <= 767;
      },
      genarateIconObj (url,imgUrl, name, size) {
        let tmp = {}
        tmp.url = url
        tmp.iconUrl = imgUrl
        tmp.iconName = name
        tmp.iconSize = size
        return tmp
      }
    }
  }
</script>
<style lang="stylus">
@import "../components/shortcutMenu/common/stylus/menuConfig.styl"
html
{
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*, *:before, *:after
{
  box-sizing: border-box;
  margin: 0;
}
.button--green
{
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}
.button--green:hover
{
  color: #fff;
  background-color: #3b8070;
}
.button--grey
{
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}
.button--grey:hover
{
  color: #fff;
  background-color: #35495e;
}
</style>
