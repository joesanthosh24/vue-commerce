import { createStore } from "vuex";

import cart from "./modules/cart";
import auth from "./modules/auth";
import localizations from "./modules/localizations";

export default createStore({
  modules: {
    cart,
    auth,
    localizations,
  },
});
