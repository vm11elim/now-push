<template>
  <!-- <div v-for="person in this.people" :key="person.id">
    <div>{{ person.name }}::: {{ person.vote_value }}</div>
  </div> -->
  <!-- <avatar_viewer :style="{height:'100px',backgroundColor:red, width:'100px'}" class="inV debug1" :list="this.listmaker(7)" /> -->
  
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
    <!-- 그런데 dom 이후에 값이 바뀌면, css 재정렬을 해줘야함... 하 ㅅㅂ ..  -->
      <div class="inV">
        <h4>찬성 : {{Object.values(this.people).filter(p=>p.vote_value==1).length}}</h4>
        <avatar_viewer class="inV debug1" :list="Object.values(this.people).filter(p=>p.vote_value==1)" />
      </div>


      <div class="inV">
        <h4>반대 : {{Object.values(this.people).filter(p=>p.vote_value!=1).length}}</h4>
        <avatar_viewer class="inV debug1" :list="Object.values(this.people).filter(p=>p.vote_value!=1)" />
      </div>
      
    </div>
  </div>

</template>
  
  <script>
  import avatar_viewer from "src/components/common/Avatars/avatar_viewer.vue";

export default {
  name: "App",
  props: {
    people: Object,
  },
  components: {
    avatar_viewer,
  },
  data() {},

  methods: {
  },

  created() {},
};
</script>
  
<style>
@import "src/vm11/css/myFlex.css";
@import "src/vm11/css/tools.css";
</style>
  