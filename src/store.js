import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		loggedIn: false,
		user: {}
	},
	mutations: {
		register(state, user) {
			state.loggedIn = true
			state.user = user
		},
	},
	actions: {
		register({ commit }, user) {

			fetch('https://jsonplaceholder.typicode.com/posts', {
				method: 'POST',
				body: JSON.stringify({}),
				headers: {
					"Content-type": "application/json; charset=UTF-8"
				}
			})
				.then(response => {
					console.log(response.json())
					commit('register', user)
				})
		}
	},
	getters: {
		loggedIn: state => state.loggedIn,
	}
})
