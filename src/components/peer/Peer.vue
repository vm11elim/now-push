<template>
  <h2>{{ peer.person.name }}님 안녕하세요.</h2>
  <!-- <h2>{{ $route.params.phone }}</h2> -->
  <div class="flexH">
    <div class="inH debug1">
      <img :src="peer.person.avatar" :style="{ width: '50%' }" />
    </div>
    <div class="inH debug1 flexV">
      <div class="inV debug2" v-on:click="doA()">버튼A</div>
      <div class="inV debug2" v-on:click="doB()">버튼B</div>
    </div>

    <div class="inH debug1 flexV" v-on:click="doINIT_COUNTER()">
       생성
    </div>
  </div>

  <div style="width: 100%" align="center">
    <div id="columns">
      <figure>
        <div class="avatars">
          <img class="badge" :src="badge.bio" v-if="person.bio" align="left" />
          <img
            :class="person.appinstall ? 'avatar' : 'avatar_grey'"
            :src="person.avatar"
          />
        </div>
        <figtitle>{{ person.team }}</figtitle>
        <figname>{{ person.name }}</figname>
      </figure>
    </div>
  </div>
</template>

<script>
import vm11 from "src/vm11/javascripts/vm11.js";
// import router from '@/router';
export default {
  name: "Peer",
  props: {
    msg: String,
  },
  data() {
    return {
      peer: vm11.firebase.peer,
      view_type: 0,
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

      person: {},
    };
  },
  mounted: function () {
    // if(false)
    //   this.$cookies.set("phone", this.$route.params.phone);
    this.peer.get(this.$route.params.phone + "");
  },
  methods: {
    doA() {
      this.peer.do_vote(1);
    },
    doB() {
      this.peer.do_vote(5);
    },

    doINIT_COUNTER() {
      this.peer.counters_init();
    },
    getview_type() {
      this.view_type++;
      if (this.view_type == 3) this.view_type = 0;
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
@import "src/vm11/css/myFlex.css";
@import "src/vm11/css/tools.css";
</style>
