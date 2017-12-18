export const state = function () {
  return {
    ProductList: [],
    FileList: [],
    NewsList: [],
    allList: [],
    total: '',
    key: ''
  }
}

export const mutations = {
  FETCH_SEARCH_PRODUCT_LIST(state, data) {
    state.ProductList = data
  },
  FETCH_ALL_LIST(state, data) {
    state.allList = data
  },
  FETCH_SEARCH_FILE_LIST(state, data) {
    state.FileList = data
  },
  FETCH_SEARCH_NEWS_LIST(state, data) {
    state.NewsList = data
  },
  FETCH_SEARCH_KEY(state, data) {
    state.key = data
  },
  FETCH_SEARCH_TOTAL(state, data) {
    state.total = data
  },
}