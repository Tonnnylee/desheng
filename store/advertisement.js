
export const state = function () {
  return {
    list: [],
    Mlist: [],
    Hlist:[],
    FetchAdUnifymark:[],
    NavProCate:[],
    NavSerCate:[],
    NavAboutCate:[],
    NavNewsCate:[],
    Adnewlist:[]
  }
}

export const mutations = {
  FETCH_ADLIST(state, data) {
    state.list = data
  },
  FETCH_NAVPROCATE(state, data) {
    state.NavProCate = data
  },
  FETCH_NAVSERVICE(state, data) {
    state.NavSerCate = data
  },
  FETCH_NAVABOUT(state, data){
    state.NavAboutCate = data
  },
  FETCH_NAVNEWS(state, data){
    state.NavNewsCate = data
  },
  FETCH_MADLIST(state, data) {
  	state.Mlist = data
  },
  FETCH_HADLIST(state, data) {
    state.Hlist = data
  },
  FETCH_AD_UNIFYMARK(state, data) {
    state.FetchAdUnifymark = data
  },
  FETCH_ADNEWLIST(state, data) {
    state.Adnewlist = data
  }
}
