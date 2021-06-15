import { auth, usersCollection } from "@/includes/firebase";

export default {
  state: {
    userLoggedIn: false,
  },
  mutations: {
    toggleAuthentication(state) {
      state.userLoggedIn = !state.userLoggedIn;
    },
  },
  actions: {
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
    async signOut({ commit }) {
      await auth.signOut();

      commit("toggleAuthentication");
      commit("clearCart");
    },
    async initApp({ commit }) {
      // Retrieve authentication status from firebase
      const user = auth.currentUser;

      // Check if they're logged in based on value retrieved
      if (user) {
        commit("toggleAuthentication");
      }
    },
  },
  getters: {},
};
