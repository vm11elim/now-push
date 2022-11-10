<template>
  <!-- <div></div> -->

  <div class="flexV">
    <div class="inV">
      <div>반대:</div>
      <avatar_viewer
        :list="this.list"
        :style="{ width: '50vw', height: '50vh' }"
      />
    </div>

    <div class="inV">
      <div>반대:</div>
      <avatar_viewer
        class="inV"
        :list="this.list"
        :style="{ width: '50vw', height: '50vh' }"
      />
    </div>
  </div>
</template>

<script>
import avatar_viewer from "src/components/common/Avatars/avatar_viewer.vue";

export default {
  name: "App",

  components: {
    avatar_viewer,
  },
  data() {
    return {
      mytxt: "asdasd",
      list: Array,
    };
  },
  created() {
    this.list = this.listmaker(20);
  },
  methods: {
    listmaker(n) {
      var list2 = [];
      for (var i = 0; i < n; i++) {
        var myObj = new Object();
        myObj.name = "기름임" + i;
        myObj["img"] =
          "https://cdn3.iconfinder.com/data/icons/web-and-mobile-colored-icons-vol-1/128/27-32.png";
        list2.push(myObj);
        // console.log(list2[i].name);
      }
      return list2;
    },
  },
};
</script>

<style>
@import "src/vm11/css/myFlex.css";
@import "src/vm11/css/tools.css";
</style>
