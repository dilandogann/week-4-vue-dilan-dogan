import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home";
import DetailCard from "../components/DetailCard"
Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/detailCard",
      name: "DetailCard",
      component: DetailCard
    },
  ]
});
