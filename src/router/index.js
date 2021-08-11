import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home";
import DetailStarShipItem from "../components/DetailStarShipItem"
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
      path: "/detailStarShipItem",
      name: "DetailStarShipItem",
      component: DetailStarShipItem
    },
  ]
});
