import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/aspect_ratios",
    name: "aspect_ratios",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AspectRatios.vue")
  },
  {
    path: "/slot_test",
    name: "slot_test",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SlotTest.vue")
  },
  {
    path: "/dialog_test",
    name: "dialog_test",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DialogTest.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
