<template>
  <div class="Breadcrumb container">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'Breadcrumb',
    props: {
      separator: {
        type: String,
        default: '>'
      }
    },
    mounted(){
      this.ifdisplayEvent();
    },
    watch:{
      $route() {
        this.ifdisplayEvent();
      }
    },
    methods:{
      ifdisplayEvent(){
        var breadcrumbItem = $(".breadcrumbItem:last-child")
        if(breadcrumbItem.find(".breadcrumbItemInner").text() == ''){
          $(".breadcrumbItem:last-child").prev().find(".iconfont").hide();
        }
      }
    }
  }
</script>

<style lang="" scoped>
  .Breadcrumb {
    padding: 18px 14px;
    margin: 0 auto;
  }

  @media (max-width:992px) and (min-width:768px){
    .Breadcrumb{
      padding:10px 17px;
    }
  }

  @media (max-width: 767px) {
    .Breadcrumb {
      background-color: #fff;
      padding:10px 10px;
      border-bottom:1px solid #e4e4e4;
    }
  }


</style>
