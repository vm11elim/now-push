<template>
    <Groups :Group_DATA=this.Group_of_list />
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
      Group_of_list: Array,
      listA: Array,
      listB: Array,
      listC: Array,
    };
  },
  created() {
    this.listA = this.listmaker(68);
    this.listB = this.listmaker(71);
    this.listC = this.listmaker(35);

    this.Group_of_list = [this.listA, this.listB, this.listC];
    // this.Group_of_list.push(listA);
    // this.Group_of_list.push(listB);
    // this.Group_of_list.push(listC);
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
