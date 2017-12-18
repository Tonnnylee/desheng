export const state = function () {
  return {
    FilterList: [],
    List: [],
    CategoryAttrList: [],
    CategoryList: [],
    Product: {},
    ProductImgs: [],
    ProRelateds: [],
    isLoad: false,
    pageInfo: {},
    Headphone:[],
    Microphone:[],
    Portable:[]
  }
}

export const mutations = {
  FETCH_PRODUCT_FILTER_LIST(state, data) {
    state.FilterList = data
  },
  FETCH_PRODUCT_LIST(state, data) {
    state.List = data
  },
  FETCH_CATEGORY_ATTR_LIST(state, data) {
    state.CategoryAttrList = data
  },
  FETCH_CATEGORY_LIST(state, data) {
    state.CategoryList = data
  },
  FETCH_PRODUCT(state, data) {
    state.Product = data
  },
  FETCH_PRODUCTIMGS(state, data) {
    state.ProductImgs = data
  },
  FETCH_PRORELATED(state, data) {
    state.ProRelateds = data
  },
  FETCH_SETLOAD(state, data) {
    state.isLoad = data
  },
  FETCH_SETPAGINATION(state, data) {
    state.pageInfo = {
      total: Number(data.count),
      current: Number(data.pageNo),
      pagenum: Number(data.pageSize),
      pagegroup: 4
    }
  }
}
