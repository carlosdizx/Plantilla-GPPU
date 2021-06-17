import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		navigation: {
			type: Boolean,
			default: true,
		},
		form: {
			type: Number,
			default: 1,
		},
		rol: {
			type: Number,
			default: 2,
		},
	},
	mutations: {
		changeNavigationBar: (state) =>
			(state.navigation.default = !state.navigation.default),
		changeFormIndex: (state, payload) => (state.form.default = payload),
		changeRolIndex: (state, payload) => (state.rol.default = payload),
	},
	actions: {
		changeNavigation: ({ commit }) => commit('changeNavigationBar'),
		changeForm: ({ commit }, data) => commit('changeFormIndex', data),
		changeRol: ({ commit }, data) => commit('changeRolIndex'),
	},
	modules: {},
});
