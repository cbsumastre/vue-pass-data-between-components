import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    storeMessage: ""
  },
  mutations: {
    setStoreMessage(state, payload) {
      state.storeMessage = payload;
    }
  },
  actions: {
    storeMessage(state, payload) {
      state.commit("setStoreMessage", payload);
    }
  },
  getters: {
    getStoreMessage(state) {
      return state.storeMessage;
    }
  },
  modules: {}
});
