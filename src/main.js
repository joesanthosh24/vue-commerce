import { createApp } from "vue";

import App from "./App.vue";

import router from "./router";
import store from "./store";

import VeeValidatorPlugin from "./includes/validation";
import { auth } from "./includes/firebase";
import ProgressBar from "./includes/progress_bar";
import i18n from "./includes/i18n";

import Icon from "./directives/icon";

import "./registerServiceWorker";
import "nprogress/nprogress.css";

ProgressBar(router);

// set a variable which will be set to createApp() if app isn't initialized in onAuthStateChanged()
let app;

auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);

    app.use(i18n);
    app.use(store);
    app.use(router);
    app.use(VeeValidatorPlugin);
    app.directive("icon", Icon);

    app.mount("#app");
  }
});
