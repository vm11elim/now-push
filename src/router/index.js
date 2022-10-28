import { createRouter, createWebHistory } from 'vue-router'

import Home from "src/components/Home.vue";
import Peer from "src/components/peer/Peer.vue";
// import About from "src/components/About.vue";

const routes = [
  {
    path: "/",
    // name: "",
    // component: Peer,
    component: Home,
    // params: {phone:"010-8542-9052"},

    // props: (route) => ({ phone: route.params.phone ||  })
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
