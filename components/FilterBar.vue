<template>
  <div>
    <nav class="taks_filterbar">
      <h2 class="mobileT">PRODUCT TYPE <span class="visible-xs- iconfont"></span><i class="visible-xs-block iconfont"></i><span class="visible-xs-block filter-word">Filter</span></h2>
      <ul class="type-section">
        <li :class="{'active': (cl.id === $route.query.categoryId) || (cl.unifyMark === $route.query.categoryUnifyMark) }" v-for="(cl,index) in proCategoryLists" :key="cl">
          <a @click.prevent="handleCategory(cl)" :href="routerPrefix + cl.unifyMark">{{ cl.name }}</a>
        </li>
      </ul>
      <h2 v-show="filterList.proCategoryAttrList.length > 0" class="hidden-xs">FILTERS</h2>
      <ul class="filter-section">
        <li :class="{'active': at.selected }" v-for="(at,index) in filterList.proCategoryAttrList" :key="at">
          <a @click.stop="stretch" class="controlA" href="javascript:;">{{ at.name }} </a>
          <div class="childMenu" :class="{'childMenuClose': at.selected === false }">
            <div class="checkComb" v-for="(atItem,index) in at.items" :key="atItem">
              <div class="combWrap">
                <nuxt-link :to="atItem.selected ? (preUrl.replace('&proCategoryAttrItemIds='+atItem.id,'').split('&page')[0]) : (preUrl.split('&page')[0]+'&proCategoryAttrItemIds='+atItem.id)" class="filter_link">
                  <input type="checkbox" v-model="check" :value="atItem.id" :id="atItem.id" @change="handleCheckChange(atItem)" :checked="{'checked' : atItem.selected && at.selected}" />
                  <label class="iconfont" :for="atItem.id"><span class="atItemName">{{atItem.name}} </span><span style="color:#999">( {{atItem.count}} )</span></label>
                </nuxt-link>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isExtend: false,
        aHeight: '',
        check: this.checkList,
        preUrl: this.$route.fullPath
      }
    },
    computed: {
      routerPrefix() {
        return this.$route.path + '?categoryUnifyMark=';
      },
      proCategoryLists(){
        var arr = this.filterList.proCategoryList;
        var orderSorted = arr.sort(this.orderSorts);
        return orderSorted;
      }
    },
    props: ['filterList','checkList'],
    created() {
      // this.checkList = [].concat(this.$route.query.proCategoryAttrItemIds || []);
    },
    watch: {
      checkList(val) {
        this.check = val
      },
      "$route":"changeUrl"
    },
    methods: {
      changeUrl(){
          this.preUrl = this.$route.fullPath;
        },
      orderSorts(a,b){
         var prev = parseInt(a.orderSort);
         var next = parseInt(b.orderSort);
        return prev - next;
      },
      stretch(e) {
        e.target.parentNode.classList.toggle('active');
        let siblingEl = Array.prototype.filter.call(e.target.parentNode.children, (child) =>
          child !== e.target
        );
        siblingEl[0].classList.toggle('childMenuClose');
      },
      handleCategory(el) {
        this.$router.push(this.routerPrefix + el.unifyMark);
        this.$emit('handleClickCategory', el);
      },
      handleCheckChange(el) {
        this.$emit('checkChange', el, this.check);
      }
    }
  }

</script>

<style lang="less">
  @Red_color: #e71018;

  @media (min-width:993px){
    .cancelPadding{
      padding-left:0;
    }
  }
  .childMenuClose {
    display: none !important;
    /*height: 0px !important;*/
  }

  @media (min-width: 768px) {
    .taks_filterbar {
      /*width: 260px;*/
      margin-right: 20px;
    }

    .controlA::before {
      font-family: "iconfont" !important;
      font-size: 16px;
      font-style: normal;
      -webkit-font-smoothing: antialiased;
      content: "\e608";
      font-size: 20px;
      position: absolute;
      right: 10px;
      top: 13px;
    }

    .childMenu {
      padding-left: 22px;
      -webkit-transition: all 1s cubic-bezier(.215, .61, .355, 1) 0s, opacity 1s ease-in-out 0s;
      -moz-transition: all 1s cubic-bezier(.215, .61, .355, 1) 0s, opacity 1s ease-in-out 0s;
      transition: all 1s cubic-bezier(.215, .61, .355, 1) 0s, opacity 1s ease-in-out 0s;
      overflow: hidden;
      height: auto;
      display: block;
    }
    .checkComb {
      margin-bottom: 12px;

      label {
        font-size: 15px;
      }
    }
    .filter_link{
      cursor: pointer;
    }
    .taks_filterbar .type-section {
      li {
        &:hover {
          background-color: @Red_color;
          a {
            color: #fff;
          }
        }
      }
      .active {
        background-color: @Red_color;
         a {
          color: #fff;
        }
      }
    }


    .taks_filterbar .filter-section {
      li {
        > a {
          position: relative;
          span {
            font-size: 20px;
            position: absolute;
            right: 10px;
            top: 13px;
          }
        }
        &:hover {
          > a {
            color: @Red_color;
          }
        }
      }
      .active {
        > a {
          color: @Red_color;
        }
        .controlA::before {
          content: "\e609";
          font-size: 20px;
          position: absolute;
          right: 10px;
          top: 13px;
        }
      }
    }

    .taks_filterbar .type-section,
    .taks_filterbar .filter-section {
      margin-bottom: 25px;
      > li {
        border-top: 1px solid #e3e3e3;
        > a {
          color: #666;
          display: block;
          padding: 15px 0;
          padding-left: 20px;
          font-size: 16px;
        }
        &:last-child {
          border-bottom: 1px solid #e3e3e3;
        }
      }
    }

    .taks_filterbar h2 {
      font-size: 25px;
      margin: 0 0 10px 20px;
      font-weight: bold;
    }
  }
  /* mobile */

  @media (max-width: 767px) {
    .Breadcrumb {
      background-color: #fff;
    }
    .taks_filterbar {
      .mobileT {
        background-color: #e4e4e4;
        padding: 15px;
        color: #000;
        font-weight: bold;
        position: relative;
        border-bottom: 1px solid #bbb;
        span.iconfont::before {
          content: "\e601";
          font-size: 20px;
          position: absolute;
          left:115px;
          top: 14px;
          color:#000;
        }
        i {
          position: absolute;
          right: 46px;
          top: 16px;
          color: @Red_color;
        }
        span.filter-word{
          color:@Red_color;
          float:right;
        }

        i::before {
          content: "\e625";
          font-size: 14px;
          margin-right: 5px;
          vertical-align: middle;
        }
      }

      .type-section {
        background-color: #fff;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        padding: 10px 0;
        li {
          margin: 5px 0;
          border-radius: 3px;
          text-align: center;
          border: 1px solid #ccc;
          flex: 0 0 45%;
          a {
            padding: 8px 0;
            display: block;
          }
          &:active {
            background-color: @Red_color;
            border: 1px solid @Red_color;
            a {
              color: #fff;
            }
          }
        }
        .active {
          background-color: @Red_color;
          border: 1px solid @Red_color;
          a {
            color: #fff;
          }
        }
      }

      .filter-section {
        margin-bottom: 15px;

        li {
          border-bottom: 1px solid #ccc2b9;
          .childMenu {
            display: flex;
            justify-content: flex-start;
            flex-wrap: wrap;
            padding: 10px;
            background-color: #fff;
            .checkComb {
              flex: 0 0 50%;
              margin-bottom: 10px;
              /*margin-right: 20px;*/
              .combWrap {
                padding: 0 2%;
              }
              label {
                display: block;
                text-align: center;
                border: 1px solid #ccc;
                border-radius: 3px;
                .atItemName{
                  font-family: 'Oswald', Arial;
                }
                span {
                  color: #000;
                }
                padding: 10px;
                &::before {
                  display: none;
                }
              }

              input[type="checkbox"]:checked+label {
                background-color: @Red_color;
                color: #fff;
                border-color: @Red_color;
                span {
                  color: #fff !important;
                }
              }
            }
          }


          .controlA {
            display: block;
            padding: 15px;
            position: relative;
            background: #e6e2e0;
            &::before {
              font-family: "iconfont" !important;
              font-size: 16px;
              font-style: normal;
              -webkit-font-smoothing: antialiased;
              content: "\e646";
              font-size: 15px;
              position: absolute;
              right: 15px;
              top: 15px;
            }
          }
        }

        .active {
          .controlA::before {
            content: "\e727";
          }
        }
      }
    }
  }
</style>
