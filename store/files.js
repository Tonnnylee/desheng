export const state = function (){
	return {
		list:[],
		data:{},
		cateList:[]
	}
}

export const mutations = {
	FETCH_FILELIST(state, data) {
		state.list = data
	},
	FETCH_FILECOUNT(state, data) {
		state.data = data
	},
	FETCH_FILECATE(state, data) {
		state.cateList = data
	}
}