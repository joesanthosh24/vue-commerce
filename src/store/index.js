import { createStore } from "vuex";
import { auth, usersCollection } from "@/includes/firebase";

export default createStore({
  state: {
    cartItems: [],
    userLoggedIn: false,
  },
  mutations: {
    // Shopping Cart
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
    // User Auth
    toggleAuthentication(state) {
      state.userLoggedIn = !state.userLoggedIn;
    },
  },
  actions: {
    // Shopping Cart
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
    // User Authentication
    async register({ commit }, payload) {
      const userCredentials = await auth.createUserWithEmailAndPassword(
        payload.email,
        payload.password
      );

      const { user } = userCredentials;

      // userCredentials.user.uid is the user id generated when createing the user with firebase
      await usersCollection.doc(user.uid).set({
        name: payload.name,
        email: payload.email,
      });

      await user.updateProfile({
        displayName: payload.name,
      });

      commit("toggleAuthentication");
    },
    async login({ commit }, payload) {
      await auth.signInWithEmailAndPassword(payload.email, payload.password);

      commit("toggleAuthentication");
    },
    initLogin({ commit }) {
      // Retrieve authentication status from firebase
      const user = auth.currentUser;

      // Check if they're logged in based on value retrieved
      if (user) {
        commit("toggleAuthentication");
      }
    },
    async signOut({ commit }) {
      await auth.signOut();

      commit("toggleAuthentication");
    },
  },
  getters: {
    // Shopping Cart
    cartSize(state) {
      return state.cartItems.length;
    },
    cartTotalPrice(state) {
      return state.cartItems.reduce(
        (acc, currItem) => acc + currItem.amount * currItem.price,
        0
      );
    },
  },
  modules: {},
});
