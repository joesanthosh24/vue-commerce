module.exports = {
  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableLegacy: true,
      runtimeOnly: false,
      compositionOnly: true,
      fullInstall: true,
    },
  },
  pwa: {
    name: "VueCommerce",
    themeColor: "rgba(39, 209, 82, 0.7)",
    manifestOptions: {
      short_name: "Commerce",
    },
  },
};
