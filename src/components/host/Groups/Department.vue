<template>
  <Groups :Group_titles="this.Group_title" :Group_DATA="this.Group_data" />
</template>

<script>
import Groups from "src/components/host/Groups.vue";

export default {
  name: "App",

  props: {
    people: Object,
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

    this.Group_title=['개발팀','서베이팀','UC서비스팀','D부서','E부서',];

    

    var peoples = [
      Object.values(this.people).filter((p) => p.team === '개발팀'),
      Object.values(this.people).filter((p) => p.team === '서베이팀'),
      Object.values(this.people).filter((p) => p.team === 'UC서비스팀'),
    ];
    this.Group_data = [
      this.listmaker2(peoples[0]),
      this.listmaker2(peoples[1]),
      this.listmaker2(peoples[2]),
    ];

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
      // 이게 범인이었을 수도ㅓ.....
      var list2 = [];
      for (var i = 0; i < arr.length; i++) {
        var myObj = arr[i];
        // myObj.name = arr[i].name;
        myObj["img"] = arr[i].avatar; // "https://cdn3.iconfinder.com/data/icons/web-and-mobile-colored-icons-vol-1/128/27-32.png";
        list2.push(myObj);
      }
      return list2;
    },
    listmaker3(arr) {
      // 이게 범인이었을 수도ㅓ.....
      var list2 = [];
      for (var i = 0; i < arr.length; i++) {
        var myObj = new Object();
        myObj.name = arr[i].name;
        myObj["img"] = arr[i].avatar; // "https://cdn3.iconfinder.com/data/icons/web-and-mobile-colored-icons-vol-1/128/27-32.png";
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
