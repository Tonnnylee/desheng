export const state = function(){
	return {
		message:''
	}
}

export const mutations = {
	FETCH_RESULT(state, data){
		state.message = data
	}
}