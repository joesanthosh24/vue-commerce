import { createStore } from "vuex";

export default createStore({
  state: {
    cartItems: [],
  },
  mutations: {
    addToCart(state, payload) {
      state.cartItems.push({ ...payload, amount: 1 });
    },
    removeFromCart(state, id) {
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
    },
    increaseAmount(state, index) {
      state.cartItems[index].amount += 1;
    },
    decreaseAmount(state, index) {
      state.cartItems[index].amount -= 1;
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
    removeItemFromCart({ commit }, item) {
      commit("removeFromCart", item.id);
    },
    increaseAmount({ commit, state }, item) {
      let index = state.cartItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (index >= 0) {
        commit("increaseAmount", index);
      }
    },
    decreaseAmount({ commit, state }, item) {
      let index = state.cartItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (index >= 0) {
        if (state.cartItems[index].amount === 1) {
          commit("removeFromCart", item.id);
        } else {
          commit("decreaseAmount", index);
        }
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
