import i18n from "../../includes/i18n";

export default {
  state: {
    languageBoxOpen: false,
    locale: "en",
  },
  mutations: {
    toggleLanguageBox(state) {
      state.languageBoxOpen = !state.languageBoxOpen;
    },
    setLocale(state, locale) {
      state.locale = locale;
    },
    hideLanguageBox(state) {
      state.languageBoxOpen = false;
    },
  },
  actions: {
    toggleLanguageBox({ commit }) {
      commit("toggleLanguageBox");
    },
    changeLocale({ commit, state }, locale) {
      commit("setLocale", locale);

      i18n.global.locale = state.locale;
    },
    hideLanguageBox({ commit }) {
      commit("hideLanguageBox");
    },
  },
  getters: {},
};
