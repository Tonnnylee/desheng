<template type="text/template" id="template_pagination">
  <section class="pages-wrap" v-show="pageInfo.total > 0">
    <ul class="Pagination clearfix">
      <!--<li :class="{'disabled': pageInfo.current == 1}"><a href="javascript:;" @click="clickCurrent(1)"> 首页 </a></li>-->
      <li :class="{'disabled': pageInfo.current == 1}"><a :href=" noPage || fullpath + (pageInfo.current !==1 ? pageInfo.current - 1 : 1)" class="iconfont icon-left" @click.prevent="clickCurrent(pageInfo.current - 1)">  </a></li>
      <li v-for="p in setList" :class="{'active': pageInfo.current == p.val}">
        <a :href="noPage || fullpath + p.val" v-if="pageInfo.current == p.val" @click.prevent="clickCurrent(p.val)"> {{ p.text }} </a>
        <a :href="noPage || fullpath + p.val" v-else @click.prevent="clickCurrent(p.val)"> {{ p.text }} </a>
      </li>
      <li :class="{'disabled': pageInfo.current === page}"><a :href="noPage || fullpath + (pageInfo.current + 1)" class="iconfont icon-right" @click.prevent="clickCurrent(pageInfo.current + 1)"> </a></li>
      <!--<li :class="{'disabled': pageInfo.current == pageInfo.page}"><a href="javascript:;" @click="clickCurrent(pageInfo.page)"> 尾页 </a></li>-->
    </ul>
  </section>
</template>

<script>
  export default {
    props: {
      pageInfo: {
        type: Object,
        default: {}
      },
      noPage: {
        type: String,
        default: 'javascript:;'
      }
    },
    computed: {
      page: function () {
        return Math.ceil(this.pageInfo.total / this.pageInfo.pagenum);
      },
      setList: function () {
        var len = this.page, temp = [], list = [], count = Math.floor(this.pageInfo.pagegroup / 2), center = this.pageInfo.current;
        if (len <= this.pageInfo.pagegroup) {
          while (len--) { temp.push({ text: this.page - len, val: this.page - len }); };
          return temp;
        }
        while (len--) { temp.push(this.page - len); };
        var idx = temp.indexOf(center);
        (idx < count) && (center = center + count - idx);
        (this.pageInfo.current > this.page - count) && (center = this.page - count);
        temp = temp.splice(center - count - 1, this.pageInfo.pagegroup);
        do {
          var t = temp.shift();
          list.push({
            text: t,
            val: t
          });
        } while (temp.length);
        if (this.page > this.pageInfo.pagegroup) {
          (this.pageInfo.current > count + 1) && list.unshift({ text: '...', val: list[0].val - 1 });
          (this.pageInfo.current < this.page - count) && list.push({ text: '...', val: list[list.length - 1].val + 1 });
        }
        return list;
      },
      fullpath() {
        let route = this.$route.fullPath;
        return route.indexOf('?') !== -1 ? route + '&page=' : route + '?page=';
      }
    },
    created: function (argument) {
    },
    methods: {
      clickCurrent: function (idx) {
        if (this.pageInfo.current != idx && idx > 0 && idx < this.page + 1) {
          if (this.noPage === '') {
            let query = Object.assign({}, this.$route.query, {
              page: idx
            });
            this.$router.push({ query: query });
          }
          this.pageInfo.current = idx;
          this.$emit('change', this.pageInfo.current);
        }
      }
    }
  }

</script>
<style lang="less" scoped>
  .pages-wrap {
    text-align: center;
    margin: 35px 0;
    margin-bottom:40px;
  }

  .Pagination {
    display: inline-block;
    li {
      float: left;
      margin-right: 10px;
      a {
        display: block;
        padding: 10px 18px;
        background-color: #fff;
        text-decoration: none;
      }
      .icon-right,.icon-left{
        font-weight:600;
        color:#666666;
        padding:10px 14px;
      }
      &:hover {
        a {
          color: #fff;
          background-color: #e71018;
        }
      }
    }

    .active {
      a {
        color: #fff;
        background-color: #e71018;
      }
    }
    .disabled a:hover {
      color: #000;
      cursor: not-allowed;
      background-color: #fff;
    }
  }

  //phone
  @media (max-width:767px) {
    .Pagination {
      li {
        a {
          padding: 10px 10px;
        }
        .icon-right,.icon-left{
          padding:10px 5px;
        }
        .icon-right{
          margin-right:0;
        }
      }
    }
  }
</style>
