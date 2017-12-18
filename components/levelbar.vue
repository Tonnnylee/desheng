<template>
  <Breadcrumb separator=">">
    <BreadcrumbItem v-for="(item,index)  in levelbarList" :key="item" :to="item.path">{{item.name !== 'id' ? item.name:''}}</BreadcrumbItem>
  </Breadcrumb>
</template>

<script>
  import { Breadcrumb, BreadcrumbItem } from './Breadcrumb/';
  export default {
    data() {
      return {
        levelbarList: ''
      }
    },
    props: {
      customRouter: {
        type: Array,
        default: function() {
          return []
        }
      }
    },
    methods: {
      getBreadcrumbList() {
        if(this.customRouter.length) return this.levelbarList = this.customRouter;
        let matched = this.$route.matched.filter(item => item.name);
        const breadcrumbList = [];
        let pathSplit = matched[0].name.split('-');
        if (matched[0] && (matched[0].name !== 'index' || matched[0].path !== '/')) {
          breadcrumbList.push({ name: 'Home', path: '/' });
        }
        breadcrumbList.push({ name: pathSplit[0], path: '/' + pathSplit[0] });
        if (pathSplit !== -1) {
          pathSplit.reduce((prev, next) => {
            var path = prev += '/' + next;
            var name = next;
            breadcrumbList.push({ name: name, path: '/' + path });
            return prev;
          });
        }
        this.levelbarList = breadcrumbList;
      }
    },
    watch: {
      $route() {
        this.getBreadcrumbList();
      }
    },
    created() {
      this.getBreadcrumbList();
    },
    components: {
      Breadcrumb,
      BreadcrumbItem
    }
  }

</script>

<style>

</style>
