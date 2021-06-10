import { createStore } from "vuex";
import { auth, usersCollection, itemsCollection } from "@/includes/firebase";

export default createStore({
  state: {
    cartItems: [],
    userLoggedIn: false,
    shopItems: {},
    languageBoxOpen: false,
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
    clearCart(state) {
      state.cartItems = [];
    },
    // Shopping Items
    initItems(state, items) {
      state.shopItems = items;
    },
    // User Auth
    toggleAuthentication(state) {
      state.userLoggedIn = !state.userLoggedIn;
    },
    toggleLanguageBox(state) {
      state.languageBoxOpen = !state.languageBoxOpen;
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
    // Shopping Items
    async initializeShopItems({ commit }) {
      const shopItems = [];

      await itemsCollection.onSnapshot((items) => {
        items.docs.forEach((doc) => {
          shopItems.push({ ...doc.data(), id: doc.id });
        });
      });

      commit("initItems", shopItems);
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
    async initApp({ commit }) {
      // Retrieve authentication status from firebase
      const user = auth.currentUser;

      // Check if they're logged in based on value retrieved
      if (user) {
        commit("toggleAuthentication");
      }

      await this.dispatch("initializeShopItems");
    },
    async signOut({ commit }) {
      await auth.signOut();

      commit("toggleAuthentication");
      commit("clearCart");
    },
    toggleLanguageBox({ commit }) {
      commit("toggleLanguageBox");
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
    shopItems(state) {
      const shopItems = {};

      state.shopItems.forEach(
        ({ category, description, imgUrl, name, price, id }) => {
          if (!shopItems[category]) {
            shopItems[category] = {};
            shopItems[category].category = category;
            shopItems[category].products = [];
          }

          shopItems[category].products.push({
            description,
            imgUrl,
            name,
            price,
            id,
          });
        }
      );

      return shopItems;
    },
  },
  modules: {},
});
