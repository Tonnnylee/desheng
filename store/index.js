import axios from '~plugins/axios';

export const actions = {
  async nuxtServerInit(store, { params, route, isServer, req, res }) {
    // 检查设备类型
    const userAgent = isServer ? req.headers['user-agent'] : navigator.userAgent
    const isMobile = /(iPhone|iPod|Opera Mini|Android.*Mobile|NetFront|PSP|BlackBerry|Windows Phone)/ig.test(userAgent);
    // console.log('类型检查')
    // console.log(isMobile)
    // console.log(userAgent)
  },

  // 获取广告列表
  fetchAdList({ dispatch, commit }, params = {}) {
    return new Promise((resolve, reject) => {
      axios.get('/advertisement/list', { params }).then(response => {
        if (response.data.errorInfo.errorCode === 200) {
          resolve(response)
          if (params.unifyMark) {
            commit('advertisement/FETCH_AD_UNIFYMARK', response.data.data.list);
            return
          }
          commit('advertisement/FETCH_ADLIST', response.data.data.list)
        } else {
          reject(response)
        }
      })
    })
  },

  fetchNavProCategory({ dispatch, commit }, params = {}) {
    return new Promise((resolve, reject) => {
      axios.get('/advertisement/list', { params }).then(response => {
        if(response.data.errorInfo.errorCode === 200){
          commit('advertisement/FETCH_NAVPROCATE', response.data.data.list)
          resolve(response)
        }
      })
    })
  },

  //获取服务二级导航数据
  fetchNavSerCategory({ dispatch, commit }, params = {}) {
    return new Promise((resolve, reject) => {
      axios.get('/advertisement/list', { params }).then(response => {
        if(response.data.errorInfo.errorCode === 200){
          commit('advertisement/FETCH_NAVSERVICE', response.data.data.list)
          resolve(response)
        }
      })
    })
  },

  //获取关于二级导航数据
  fetchNavAboutCategory({ dispatch, commit }, params = {}) {
    return new Promise((resolve, reject) => {
      axios.get('/advertisement/list', { params }).then(response => {
        if(response.data.errorInfo.errorCode === 200){
          commit('advertisement/FETCH_NAVABOUT', response.data.data.list)
          resolve(response)
        }
      })
    })
  },

  //获取新闻二级导航数据
  fetchNavNewsCategory({ dispatch, commit }, params = {}) {
    return new Promise((resolve, reject) => {
      axios.get('/advertisement/list', { params }).then(response => {
        if(response.data.errorInfo.errorCode === 200){
          commit('advertisement/FETCH_NAVNEWS', response.data.data.list)
          resolve(response)
        }
      })
    })
  },
  fetchAdNewList({ dispatch, commit }, params = {}){
    return new Promise((resolve, reject) => {
      axios.get('/advertisement/list', { params }).then(response => {
        if(response.data.errorInfo.errorCode === 200){
          commit('advertisement/FETCH_ADNEWLIST', response.data.data.list)
          resolve(response)
        }
      })
    })
  },

  // 获取产品筛选列表
  fetchProductFilter({ commit }, params = {}) {
    return new Promise((resolve, reject) => {
      commit('product/FETCH_SETLOAD', true);
      axios.get('/product/filter', { params }).then(response => {
        if (response.data.errorInfo.errorCode === 200) {
          commit('product/FETCH_PRODUCT_FILTER_LIST', response.data.data)
          commit('product/FETCH_PRODUCT_LIST', response.data.data.list)
          commit('product/FETCH_CATEGORY_ATTR_LIST', response.data.data.proCategoryAttrList)
          commit('product/FETCH_CATEGORY_LIST', response.data.data.proCategoryList)
          commit('product/FETCH_SETLOAD', false);
          commit('product/FETCH_SETPAGINATION', response.data.data);
          resolve(response.data)
        } else {
          commit('product/FETCH_SETLOAD', false);
          reject(response.data.errorInfo)
        }
      })
    })
  },
  //获取相关产品列表
  fetchProductRelated({ commit }, params = {}) {
    return new Promise((resolve, reject) => {
      axios.get('/product/listRelatedProduct', { params }).then(response => {
        if (response.data.errorInfo.errorCode === 200) {
          commit('product/FETCH_PRORELATED', response.data.data.list)
          resolve(response.data.data.list)
        }
      })
    })
  },

  // 获取搜索页面列表
  fetchSearchResult({ commit }, params = { state: true, model: '', query: {} }) {
    if (params.state || params.model === 'product') {
      var productList = new Promise((resolve, reject) => {
        let poption = Object.assign({}, params.query);
        poption.pageSize = 12;
        axios.get('/product/list', { params: poption }).then(response => {
          if (response.data.errorInfo.errorCode === 200) {
            commit('search/FETCH_SEARCH_PRODUCT_LIST', response.data.data);
            resolve(response.data);
          } else {
            reject(response.data.errorInfo)
          }
        })
      });
    }

    if (params.state || params.model === 'file') {
      var fileList = new Promise((resolve, reject) => {
        let foption = Object.assign({}, params.query);
        foption.pageSize = 10;
        axios.get('/downloadFile/list', { params: foption }).then(response => {
          if (response.data.errorInfo.errorCode === 200) {
            commit('search/FETCH_SEARCH_FILE_LIST', response.data.data);
            resolve(response.data);
          } else {
            reject(response.data.errorInfo)
          }
        })
      });
    }

    if (params.state || params.model === 'article') {
      var newsList = new Promise((resolve, reject) => {
        let aoption = Object.assign({}, params.query);
        aoption.pageSize = 9;
        axios.get('/article/list', { params: aoption }).then(response => {
          if (response.data.errorInfo.errorCode === 200) {
            commit('search/FETCH_SEARCH_NEWS_LIST', response.data.data);
            resolve(response.data);
          } else {
            reject(response.data.errorInfo)
          }
        })
      });
    }
    return Promise.all([productList, fileList, newsList])
  },

  //获取产品详情
  fetchProduct({ commit }, params = {}) {
    return new Promise((resolve, reject) => {
      axios.get('/product/get', { params }).then(response => {
        if (response.data.errorInfo.errorCode === 200) {
          if (!response.data.data.id) {
            return reject(response);
          }
          commit('product/FETCH_PRODUCT', response.data.data)
          resolve(response.data.data)
        } else {
          reject(response.data.errorInfo)
        }
      }).catch(err => {
        reject(err);
      })
    })
  },
  //获取产品图片列表
  fetchProductImgs({ commit }, params = {}) {
    return new Promise((resolve, reject) => {
      axios.get('/product/listImg', { params }).then(response => {
        if (response.data.errorInfo.errorCode === 200) {
          commit('product/FETCH_PRODUCTIMGS', response.data.data.list)
          resolve(response.data.data.list)
        } else {
          reject(response.data.errorInfo)
        }
      })
    })
  },

  //获取移动端广告列表
  fetchMAdList({ commit }, params = {}) {
    return axios.get('/advertisement/list', { params }).then(response => {
      if (response.data.errorInfo.errorCode === 200) {
        commit('advertisement/FETCH_MADLIST', response.data.data.list)
      }
    })
  },
  //获取首页广告分类
  fetchHAdlist({ commit }, params = {}) {
    return axios.get('/advertisement/list', { params }).then(response => {
      if (response.data.errorInfo.errorCode === 200) {
        commit('advertisement/FETCH_HADLIST', response.data.data.list)
      }
    })
  },

  //获取文章列表
  fetchEArList({ commit }, params = {}) {
    return axios.get('/article/list', { params }).then(response => {
      if (response.data.errorInfo.errorCode === 200) {
        commit('article/FETCH_EARLIST', response.data.data.list)
        commit('article/FETCH_EDATA', response.data.data)
      }
    })
  },

  fetchTArList({ commit }, params = {}) {
    return axios.get('/article/list', { params }).then(response => {
      if (response.data.errorInfo.errorCode === 200) {
        commit('article/FETCH_TARLIST', response.data.data.list)
        commit('article/FETCH_TDATA', response.data.data)
      }
    })
  },

  fetchHEArList({ commit }, params = {}) {
    return axios.get('/article/list', { params }).then(response => {
      if (response.data.errorInfo.errorCode === 200) {
        commit('article/FETCH_HEARLIST', response.data.data.list)
      }
    })
  },

  fetchHTArList({ commit }, params = {}) {
    return axios.get('/article/list', { params }).then(response => {
      if (response.data.errorInfo.errorCode === 200) {
        commit('article/FETCH_HTARLIST', response.data.data.list)
      }
    })
  },
  fetchHNArList({ commit }, params = {}) {
    return axios.get('/article/list', { params }).then(response => {
      if (response.data.errorInfo.errorCode === 200) {
        commit('article/FETCH_HNARLIST', response.data.data.list)
      }
    })
  },
  fetchHEXArList({ commit }, params = {}) {
    return axios.get('/article/list', { params }).then(response => {
      if (response.data.errorInfo.errorCode === 200) {
        commit('article/FETCH_HEXARLIST', response.data.data.list)
      }
    })
  },
  fetchListAll({ commit }, params = {}) {
    return new Promise((resolve, reject) => {
      axios.get('/article/list', { params }).then(response => {
        if (response.data.errorInfo.errorCode === 200) {
          commit('article/FETCH_LISTALL', response.data.data)
          resolve(response.data)
        } else {
          reject(response.data)
        }
      })
    })
  },

  fetchServiceList({ commit }, params = {}) {
    return axios.get('/article/list', { params }).then(response => {
      if (response.data.errorInfo.errorCode === 200) {
        commit('article/FETCH_SERVICELIST', response.data.data.list);
        commit('article/FETCH_SERVICECOUNT', response.data.data.count);
      }
    })
  },

  //获取文章
  fetchArticle({ commit }, params = {}) {
    return new Promise((resolve, reject) => {
      axios.get('/article/get', { params }).then(response => {
        if (response.data.errorInfo.errorCode === 200) {
          if (!response.data.data.id) {
            return reject(response);
          }
          resolve(response.data.data);
          commit('article/FETCH_ARTICLE', response.data.data);
        }
      }).catch(err => {
        reject(err);
      })
    })
  },

  //获取相关文章
  fetchRelatedList({ commit }, params = {}) {
    return axios.get('/article/listRelatedArticle', { params }).then(response => {
      if (response.data.errorInfo.errorCode === 200) {
        commit('article/FETCH_RELATED', response.data.data.list);
      }
    })
  },

  //发送反馈
  postFeedback({ commit }, params = {}) {
    return axios.post('/feedback/add', params).then(response => {
      if (response.data.errorInfo.errorCode === 200) {
        commit('feedback/FETCH_RESULT', response.data.errorInfo.errorMsg);
      } else {
        alert("something error!");
      }
    })
  },
  //fetchFiles
  fetchFileList({ commit }, params = {}) {
    return axios.get('/downloadFile/list', { params }).then(response => {
      if (response.data.errorInfo.errorCode === 200) {
        commit('files/FETCH_FILELIST', response.data.data.list);
        commit('files/FETCH_FILECOUNT', response.data.data);
      }
    })
  },

  fetchFileCategory({ commit }, params = {}) {
    return axios.get('/fileCategory/list', { params }).then(response => {
      if (response.data.errorInfo.errorCode === 200) {
        commit('files/FETCH_FILECATE', response.data.data.list);
      }
    })
  }
}

