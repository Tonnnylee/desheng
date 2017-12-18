<template>
  <div class="fileCon">
    <div v-if="isLoad" class="loader"><span>Loading...</span></div>
    <div v-if="fileList.count === '0' && !isLoad && isText.status" class="notFound">
      <div class="notFound-wrap">
        <img src="../assets/images/notdisplay.jpg">
      </div>
    </div>
    <div class="fileList">
      <div class="row fileItem clearfix" v-for="file in fileList.list">
        <div class="col-md-3 col-sm-3 col-xs-3">{{file.proModel}}</div>
        <div class="col-md-4 col-sm-4 col-xs-4">{{file.name}}</div>
        <div class="col-md-5 col-sm-5 col-xs-5 downloadBtn"><a :href="prefixImg + file.downloadUrl" target="_blan">Downloads</a></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'fileList',
    data() {
      return {
        prefixImg: process.env.prefixImg
      }
    },
    props: {
      isLoad: {
        type: Boolean,
        default: false
      },
      fileList: {
        type: Object,
        default: function () {
          return {}
        }
      },
      isText: {
        type: Object,
        default: function () {
          return {
            message: 'No Result!',
            status: true
          }
        }
      }

    }

  }

</script>


<style lang="less" scoped>
  @Red_color: #e71018;
  .fileList {
    background-color: #fff;
    max-width: 1100px;
    margin: 0 auto;
    .fileItem {
      height: 65px;
      line-height: 65px;
      border-bottom: 1px solid #ededed;
      margin: 0 25px;
      div{
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
      }
      .downloadBtn {
        text-align: right;
        a {
          background-color: @Red_color;
          color: #fff;
          padding: 5px 10px;
          display:inline;
        }
      }
      &:last-child {
        border-bottom: 0;
      }
    }
  }
  .notFound-wrap{
    width:35%;
    margin:30px auto;
  }
</style>
