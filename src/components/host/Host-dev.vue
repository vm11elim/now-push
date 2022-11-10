<template>
    <Groups :Group_titles=this.Group_title :Group_DATA=this.Group_data />
</template>

<script>
import Groups from "src/components/host/Groups.vue";

export default {
  name: "App",

  components: {
    Groups,
  },
  data() {
    return {
      Group_title: Array,
      Group_data: Array,
    };
  },
  created() {
    this.Group_title=['매우 좋음', '좋음', '중립', '나쁨', '매우 나쁨',];
    this.Group_data = [this.listmaker(18),this.listmaker(18),this.listmaker(18),this.listmaker(18),this.listmaker(18)];
  },
  methods: {
    listmaker(n) {
      var list2 = [];
      for (var i = 0; i < n; i++) {
        var myObj = new Object();
        myObj.name = "기름임" + i;
        myObj["img"] = "https://cdn3.iconfinder.com/data/icons/web-and-mobile-colored-icons-vol-1/128/27-32.png";
        list2.push(myObj);
      }
      return list2;
    },
  },
};
</script>

<style>
html,
body,
#app {
  /* height: 100%; */
  margin: 0px;
  padding: 0px;
}

@import "src/vm11/css/myFlex.css";
@import "src/vm11/css/tools.css";
</style>
