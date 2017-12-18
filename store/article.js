export const state = function () {
  return {
    Elist: [],
    Tlist:[],
    detail:{},
    relatedList:[],
    Edata:{},
    Tdata:{},
    lastElist:[],
    lastTlist:[],
    lastNlist:[],
    lastEXlist:[],
    allList: [],
    serList:[],
    serCount:{}
  }
}

export const mutations = {
  FETCH_EARLIST(state, data) {
    state.Elist = data
  },
  FETCH_TARLIST(state, data) {
    state.Tlist = data
  },
  FETCH_EDATA(state, data) {
    state.Edata = data
  },
  FETCH_TDATA(state, data) {
    state.Tdata = data
  },
  FETCH_ARTICLE(state, data) {
    state.detail = data
  },
  FETCH_RELATED(state, data) {
    state.relatedList = data
  },
  FETCH_HEARLIST(state, data) {
    state.lastElist = data
  },
  FETCH_HTARLIST(state, data) {
    state.lastTlist = data
  },
  FETCH_HNARLIST(state, data) {
    state.lastNlist = data
  },
  FETCH_HEXARLIST(state, data) {
    state.lastEXlist = data
  },
  FETCH_LISTALL(state, data) {
    state.allList = data
  },
  FETCH_SERVICELIST(state, data) {
    state.serList = data
  },
  FETCH_SERVICECOUNT(state, data) {
    state.serCount = data;
  }
}
