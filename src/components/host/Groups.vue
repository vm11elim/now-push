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

    <!-- 좌에서 우로.  -->
      <div class="inV" v-for="(list,i) in this.Group_DATA" :key="i">
        <div>{{this.Group_titles[i]}}</div>
        <avatar_viewer class="inV debug1" :list="list" />
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
    // listA_frm: Array
    G_txt:String,
    Group_titles:Array,
    Group_DATA:Array,
    // listB_frm:Array,
    // listC_frm:Array,
  },
  data() {
    return {
    };
  },
  created() {
  },
  methods: {
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
