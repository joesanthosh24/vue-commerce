import { createRouter, createWebHistory } from "vue-router";

import store from "@/store";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/items",
    name: "Items",
    component: () => import("../views/Items.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () => import("../views/SignUp.vue"),
  },
  {
    path: "/cart",
    name: "CartItems",
    component: () => import("../views/CartItems.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/items/:id",
    name: "Item",
    component: () => import("../views/Item.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/:catchAll(.*)*",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (!to.matched.some((record) => record.meta.requiresAuth)) {
    next();

    return;
  }

  store.dispatch("hideLanguageBox");

  if (store.state.auth.userLoggedIn) {
    next();
  } else {
    next({ name: "Home" });
  }
});

export default router;
