import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dark: false
  },
  mutations: {
    changeThemeApp: state => (state.dark = !state.dark)
  },
  actions: {
    changeTheme: ({ commit }) => commit("changeThemeApp")
  },
  modules: {}
});
