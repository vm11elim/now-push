<template>
  <h2>님 안녕하세요.{{ $route.params.phone }}</h2>
  <div v-for="(item, i) in list" :key="i">
    <!-- <div @longclick="console.log('b')">asd</div> -->

    <!-- <Counter_Card :txt=item.txt :cnt=item.cnt ></Counter_Card> -->
    <Counter_Card
      :txt="item.txt"
      :cnt="item.cnt"
      @plus="item.cnt++; "
      @minus="item.cnt--; this.vibrate()"
    ></Counter_Card>
  </div>
  <!-- height, width는 개별 지정이 맞다. 일괄 지정하는 게 맞다.  -->
</template>
  
<script>
import Counter_Card from "./Counter_Card.vue";

navigator.vibrate =
  navigator.vibrate ||
  navigator.webkitVibrate ||
  navigator.mozVibrate ||
  navigator.msVibrate;

export default {
  name: "App",
  data() {
    return {
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
    vibrate() {
      // console.log("vibrate");
      if (navigator.vibrate) {
        navigator.vibrate(1000); // 진동을 울리게 한다. 1000ms = 1초
      } else {
        alert("진동을 지원하지 않는 기종 입니다.");
      }
    },
    // doplus() {
    //   console.log("plus");
    // },
    // dominus() {
    //   console.log("minus");
    //   this.vibrate();
    // },
  },
  components: { Counter_Card },
};
</script>
  
<style>
.flexH {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.flexV {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}
.inV {
  flex-grow: 1;
  height: 100%;
}
.inH {
  flex-grow: 1;
  width: 100%;
}

.debug0 {
  border: 1px solid gray;
}
.debug1 {
  border: 1px solid blue;
}
.debug2 {
  border: 1px solid red;
}
</style>
  