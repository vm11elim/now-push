<template>
  <!-- A -->
  <!-- <div class="flexV" :style="{height:'40vh', justifyContent:start, alignContent:start, alignItems:start}">
  <avatar_viewer class="inV debug1" :list="this.listA" :style="{width:a+'vw',height:'40vh'}"/>
  <avatar_viewer class="inV debug2" :list="this.listB" :style="{width:b+'vw',height:'40vh'}"/>
</div> -->

  <!-- B -->
  <!-- <div class="flexV" :style="{height:'40vh', justifyContent:start, alignContent:start, alignItems:start}">
  <avatar_viewer class="inV debug1" :list="this.listA"/>
  <avatar_viewer class="inV debug2" :list="this.listB"/>
</div> -->

  <!-- C -->
  <!-- <div>asd</div> -->
  <div>
    {{G_txt}}
  </div>
  <div :style="{ margin: '10px' }">
    <div
      class="flexV"
      :style="{
        height: '80vh',
        justifyContent: start,
        alignContent: start,
        alignItems: start,
      }"
    >
      <div class="inV">
        <div>A군</div>
        <avatar_viewer class="inV debug1" :list="this.listA" />
      </div>
      <div class="inV">
        <div>B군</div>
        <avatar_viewer class="inV debug1" :list="this.listB" />
      </div>
      <div class="inV">
        <div>C군</div>
        <avatar_viewer class="inV debug1" :list="this.listC" />
      </div>
      
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
  props:{
    listA_frm: Array
    //  {
    // 	type: Array,
    //     default: ()=> {
    //     	return this.listmaker(7)
    //     }
    // },
    ,
    G_txt:String,
    Group_DATA:Array,
    listB_frm:Array,
    listC_frm:Array,
  },
  data() {
    return {
      // a: 70,
      // b: 30,
      // mytxt: "asdasd",
      listA: Array,
      listB: Array,
      listC: Array,
    };
  },
  created() {
    
    // this.listA = this.listA_frm;
    // this.listB = this.listB_frm;
    // this.listC = this.listC_frm;
    // this.listA = this.listmaker(20);


    // console.log(this.Group_DATA[1]);
    this.listA = this.Group_DATA[0];
    this.listB = this.Group_DATA[1];
    this.listC = this.Group_DATA[2];
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
