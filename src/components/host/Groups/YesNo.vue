<template>
  <div>{{G1_length}}</div>
  <Groups :Group_titles="this.Group_title" :Group_DATA="this.Group_data" />
</template>

<script>
import Groups from "src/components/host/Groups.vue";

export default {
  name: "App",

  props:
  {
    people: Object,
    G1_length: Number,
  },
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
    // <h4>찬성 : {{}}</h4>


    this.Group_title = ["찬성", "반대"];

    
    var peoples = [
      Object.values(this.people).filter((p) => p.vote_value == 1),
      Object.values(this.people).filter((p) => p.vote_value != 1)
    ];
    this.Group_data = [this.listmaker2(peoples[0]),this.listmaker2(peoples[1])];

    // this.Group_data
    // console.log(this.Group_data[0]);
    // this.Group_data = [this.listmaker(18),this.listmaker(18)];
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
      }
      return list2;
    },
    listmaker2(arr) {
      var list2 = [];
      for (var i = 0; i < arr.length; i++) {
        var myObj = arr[i];
        myObj.name = arr[i].name;
        myObj["img"] =arr[i].avatar;// "https://cdn3.iconfinder.com/data/icons/web-and-mobile-colored-icons-vol-1/128/27-32.png";
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
