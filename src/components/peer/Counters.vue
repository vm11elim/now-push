<template>
  <div class="m30">
    <h2>님 안녕하세요.{{ $route.params.phone }}</h2>
    <Toaster
      v-if="Toaster_vis"
      :txt="this.Toaster_msg"
      @dismiss="this.Toaster_vis = false"
    />
    <div v-for="(item, i) in list" :key="i">
      <!-- <div @longclick="console.log('b')">asd</div> -->
      <!-- <Counter_Card :txt=item.txt :cnt=item.cnt ></Counter_Card> -->
      <Counter_Card
        :txt="item.txt"
        :cnt="item.cnt"
        @plus="
          item.cnt++;
          this.do_toast(item.txt + '  + 1');
        "
        @minus="
          if (item.cnt != 0) {
            item.cnt--;
            this.do_toast(item.txt + '  - 1');
          }
        "
      ></Counter_Card>
    </div>
  </div>

  <!-- height, width는 개별 지정이 맞다. 일괄 지정하는 게 맞다.  -->
</template>
  
<script>
import Counter_Card from "./Counter_Card.vue";
import Toaster from "src/vm11/vue_comp/MyToaster.vue";
import vm11 from "src/vm11/javascripts/vm11.js";

export default {
  name: "App",
  data() {
    return {
      Toaster_vis: false,
      Toaster_msg: "this is toast msg..",
      list: [
        { txt: "abcd13", cnt: 5 },
        { txt: "ermer", cnt: 0 },
        { txt: "abcdfle", cnt: 3 },
        { txt: "rntjkabcd", cnt: 0 },
        { txt: "fvkmlabcd", cnt: 0 },
      ],
      // isDebug: !true
    };
  },
  methods: {
    do_toast(msg) {
      if (false) vm11.tools.vibrate(300);
      this.Toaster_vis = true;
      this.Toaster_msg = msg; //"-1!";
    },
  },
  components: { Counter_Card, Toaster },
};
</script>
  
<style>
@import "src/vm11/css/myFlex.css";
@import "src/vm11/css/tools.css";
</style>
  