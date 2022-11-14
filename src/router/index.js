import { createRouter, createWebHistory } from 'vue-router'

import Home from "src/components/Home.vue";
// import Host from "src/components/host/userlist.vue";// 관리자 web.
import Admin from "src/components/host/Admin/Admin.vue";// 관리자 web.

import Host from "src/components/host/Host.vue";// 관리자 web.
import Peer from "src/components/peer/Peer.vue";// 구성원 pc.
import Counters from "src/components/peer/Counters.vue";
import TestDebug from "src/components/TestDebug/TestDebug.vue";
import TestDebug2 from "src/components/TestDebug/TestDebug2.vue";
// import About from "src/components/About.vue";

const routes = [

  {
    path: "/",
    // name: "",
    // component: Home,
    component: Host,
    // component: TestDebug2,
    // params: {phone:"010-8542-9052"},
    // props: (route) => ({ phone: route.params.phone ||  })
  },
  { path: "/admin", component: Admin, },
  {path: "/debug",component: TestDebug,},
  {path: "/home",component: Host,},
  // {path: "/Host",component: Host,},
  {path: "/Host/:view_type",component: Host,},

  {path: "/peer/:phone",component: Peer,},
  {path: "/peer/:phone/counter",component: Counters,}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
