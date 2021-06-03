import { createStore } from "vuex";

export default createStore({
  state: {
    cartItems: [],
  },
  mutations: {
    addToCart(state, payload) {
      state.cartItems.push({ ...payload, amount: 0 });
    },
    increaseAmount(state, index) {
      state.cartItems[index].amount += 1;
    },
  },
  actions: {
    addItemToCart({ commit, state }, item) {
      let index = state.cartItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (index >= 0) {
        commit("increaseAmount", index);
      } else {
        commit("addToCart", item);
      }
    },
  },
  getters: {
    cartSize(state) {
      return state.cartItems.length;
    },
  },
  modules: {},
});
