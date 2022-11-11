<template>
  <div style="padding-left: 60px; padding-right: 60px">
    <!-- <div>{{this.fb_abc}}</div> -->
    <!-- <div>{{this.host.global_abc}}</div> -->
    <!-- <div>{{this.host.people.count}}</div> -->

    <div align="right">
      <button v-on:click="getview_type()" align="right">보기</button>
    </div>

    <div v-if="!this.host.finished">{{ this.host.loading_status() }}</div>
    <div v-if="this.host.finished">
      <!-- <div>{{this.host.global_abc}}</div> -->
      <Department :people="this.host.people" v-if="view_type == 0" />
      <!-- <YesNo :people="this.host.people" v-if="view_type==1" :G1_length=1 /> -->
      
      <Prefs :people="this.host.people" v-if="view_type == 1" />
      <YesNo2 :people="this.host.people" v-if="view_type == 2" />
      <Counters :people="this.host.people" v-if="view_type == 3" />
    </div>
    <!-- <div>{{this.people.count}}</div> -->
    <!-- 이 정도로 나누면 인터렉티브가 안됨... -->
    <!-- 모듈화는 js 안에서 인터렉티브 처리하기.  -->
    <!-- <Department :people="this.people2" v-if="view_type==0"/>
    <YesNo :people="this.people2" v-if="view_type==1"/>
    <Prefs :people="this.people2" v-if="view_type==2"/> -->

    <!-- <Department :people="this.people" v-if="view_type==0"/>
    <YesNo :people="this.people" v-if="view_type==1"/>
    <Prefs :people="this.people" v-if="view_type==2"/> -->
  </div>
</template>

<script>
import vm11 from "src/vm11/javascripts/vm11.js";

import Department from "@/components/host/Groups/Department.vue";
import YesNo from "@/components/host/Groups/YesNo.vue";
import Prefs from "@/components/host/Groups/Prefs.vue";
import YesNo2 from "@/components/host/Groups/YesNo2.vue";
import Counters from "@/components/host/Groups/Counters.vue";


export default {
  name: "userlist",
  props: {
    msg: String,
  },
  components: {
    Department,
    YesNo,
    Prefs,
    YesNo2,
    Counters,
  },
  data() {
    return {
      vm11: vm11,
      host: vm11.firebase.host,

      show: true,
      view_type: 3,
      count: {
        yes: 0,
        no: 0,
      },
      badge: {
        yes: "https://cdn3.iconfinder.com/data/icons/web-and-mobile-colored-icons-vol-1/128/27-64.png",
        no: "https://cdn4.iconfinder.com/data/icons/audio-video-gaming-controls/512/Audio_video_game_controls_Checkmark_no-64.png",
        bio: "https://cdn2.iconfinder.com/data/icons/flat-02-digital-design/91/Digital_Design_115-64.png",
      },
      txt: "dsasd",

      img_url: "",
      people: {},
      people2: {},
    };
  },
  created: function () {
    // this.host.gets2();
    // this.f();
    if (!false) this.host.gets2();

    // console.log(fixed_value.precepts);
    // this.get("01085429052","2022-10-23") //method1 will execute at pageload
  },

  mounted: function () {
    // this.gets();
    // console.log(fixed_value.precepts);
    // this.get("01085429052","2022-10-23") //method1 will execute at pageload
  },
  methods: {
    async f() {
      let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("완료!"), 3000);
      });
      let result = await promise; // 프라미스가 이행될 때까지 기다림 (*)
      alert(result); // "완료!"
    },

    getflexgrow(B) {
      if (B == "A") return "flex-grow : 1 !important";
      if (B == "B") return "flex-grow : 3 !important";

      // var a = Object.values(this.people).filter(p=>p.vote_value==1).length
      // var b = Object.values(this.people).filter(p=>p.vote_value!=1).length
    },
    getview_type() {
      this.view_type++;
      if (this.view_type > 3) this.view_type = 0;
    },
    // getImgUrl() {
    //     return this.img_url;
    // },
    log(str) {
      this.log_msg += str + "\n";
    },
  },
};
</script>

<style scoped>
/* ------------------------- animation ------------------------- */

.slide-fadeR-enter-active {
  transition: all 0.8s ease-out;
}

.slide-fadeR-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fadeR-enter-from {
  transform: translateX(-50px);
  opacity: 0;
}
.slide-fadeR-leave-to {
  /* transform: translateX(20px); */
  transform: translateX(-50px);
  opacity: 0;
}

.slide-fadeL-enter-active {
  transition: all 0.8s ease-out;
}

.slide-fadeL-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fadeL-enter-from {
  transform: translateX(50px);
  opacity: 0;
}
.slide-fadeL-leave-to {
  /* transform: translateX(20px); */
  transform: translateX(50px);
  opacity: 0;
}
</style>
