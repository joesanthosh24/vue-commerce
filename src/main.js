import { createApp } from "vue";

import App from "./App.vue";

import router from "./router";
import store from "./store";

import VeeValidatorPlugin from "./includes/validation";
import { auth } from "./includes/firebase";

import Icon from "./directives/icon";

import i18n from "./includes/i18n";

// set a variable which will be set to createApp() if app isn't initialized in onAuthStateChanged()
let app;

auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App).use(i18n);

    app.use(store);
    app.use(router);
    app.use(VeeValidatorPlugin);
    app.directive("icon", Icon);

    app.mount("#app");
  }
});
