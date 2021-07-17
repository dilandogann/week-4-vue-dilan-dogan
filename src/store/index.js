import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    starship:{}
  },
  mutations: {
    setItem(state, payload)  {
      state.starship = payload;
    },
  },
  actions: {
    setItem({commit}, payload) {
      commit('setItem', payload);
    }
  },
  getters: {
    getStarship: (state) => state.starship,
  }
});
