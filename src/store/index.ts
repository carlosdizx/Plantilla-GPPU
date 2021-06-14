import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navigation: {
      type:Boolean,
      default:true
    }
  },
  mutations: {
    changeNavigationBar: state => (state.navigation.default = !state.navigation.default)
  },
  actions: {
    changeNavigation: ({ commit }) => commit("changeNavigationBar")
  },
  modules: {}
});
