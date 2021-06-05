import { createApp } from "vue";

import App from "./App.vue";

import router from "./router";
import store from "./store";
import VeeValidatorPlugin from "./includes/validation";
import "./includes/firebase";

const app = createApp(App);

app.use(store);
app.use(router);
app.use(VeeValidatorPlugin);

app.mount("#app");
