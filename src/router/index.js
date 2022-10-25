import { createRouter, createWebHistory } from 'vue-router'

import Home from "src/components/Home.vue";
import Peer from "src/components/peer/Peer.vue";
// import About from "src/components/About.vue";

const routes = [
  {
    path: "/",
    // name: "",
    component: Home,
  },
  {
    path: "/home",
    // name: "Home",
    component: Home,
  },
  {
    path: "/peer/:phone",
    component: Peer,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
