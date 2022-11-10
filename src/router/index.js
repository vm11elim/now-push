import { createRouter, createWebHistory } from 'vue-router'

import Home from "src/components/Home.vue";
// import Host from "src/components/host/userlist.vue";// 관리자 web.
import Host from "src/components/host/Host.vue";// 관리자 web.
import Peer from "src/components/peer/Peer.vue";// 구성원 pc.
import Counters from "src/components/peer/Counters.vue";
import TestDebug from "src/components/TestDebug/TestDebug.vue";
// import About from "src/components/About.vue";

const routes = [
  {
    path: "/",
    // name: "",
    // component: Home,
    component: Host,
    // params: {phone:"010-8542-9052"},
    // props: (route) => ({ phone: route.params.phone ||  })
  },
  {
    path: "/debug",
    // name: "Home",
    component: TestDebug,
  },
  {
    path: "/home",
    component: Host,
  },
  {
    path: "/host",
    component: Host,
  },
  {
    path: "/peer/:phone",
    component: Peer,
  },

  {
    path: "/peer/:phone/counter",
    component: Counters,
  },
  // {
  //   path: "/counter/:phone",
  //   component: Counter,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
