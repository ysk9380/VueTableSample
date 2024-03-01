import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    customers: [],
  },
  mutations: {
    setCustomers(state, customers) {
      state.customers = customers;
    },
  },
  actions: {
    fetchCustomers({ commit }) {
      // Fetch customers from API or other sources
      // Then commit the mutation
      commit("setCustomers", []);
    },
  },
  getters: {
    customers: (state) => state.customers,
  },
});
