<template>
  <nuxt-link :to="to" class="breadcrumbItem">
    <span  class="breadcrumbItemInner" ref="link">
      <slot></slot>
    </span>
    <span class="breadcrumbSeparator iconfont icon-right"></span>
  </nuxt-link>
</template>

<script>
  export default {
    name: 'BreadcrumbItem',
    props: {
      to: {},
      replace: Boolean
    },
    data() {
      return {
        separator: ''
      }
    },

    mounted() {

      // this.separator = this.$parent.separator;
      // var self = this;
      // if(this.to) {
      //   let link = this.$refs.link;
      //   link.addEventListener('click', _ => {
      //     let to = this.to;
      //     console.log()
      //     self.replace ? self.$router.replace(to) : self.$router.push(to);
      //   });
      // }
    }

  }
</script>

<style lang="" scoped>
  .breadcrumbItem {color: #666;font-size: 14px;cursor: pointer;text-transform: capitalize;}
  .breadcrumbItem .breadcrumbItemInner{}
  .breadcrumbItem .breadcrumbSeparator{margin: 0 4px; font-size:12px;}
  .breadcrumbItem .breadcrumbItemInner:hover{
    color: #000;
  }
  .breadcrumbItem:last-child .breadcrumbSeparator{display: none;}
</style>
