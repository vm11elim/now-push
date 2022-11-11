<template>
  <!-- <div v-for="person in this.people" :key="person.id">
    <div>{{ person.name }}::: {{ person.vote_value }}</div>
  </div> -->
  <!-- <avatar_viewer :style="{height:'100px',backgroundColor:red, width:'100px'}" class="inV debug1" :list="this.listmaker(7)" /> -->
  
  <div :style="{ margin: '10px', height:'70vh' }" >
    <div class="grid" >
    <!-- 그런데 dom 이후에 값이 바뀌면, css 재정렬을 해줘야함... 하 ㅅㅂ ..  -->
      
    
    <div class="header">Header</div>
    <div class="sidebar">Sidebar</div>
    <div class="content">Content</div>
    <div class="footer">Footer</div>

    
    <!-- <div>
      <avatar_viewer class="inV debug1" :list="Object.values(this.people).filter(p=>p.vote_value==1)" />        
    </div>  
    <div>
      <avatar_viewer class="inV debug1" :list="Object.values(this.people).filter(p=>p.vote_value!=1)" />
    </div>   -->

        
      
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
  
<style scoped>
@import "src/vm11/css/myFlex.css";
@import "src/vm11/css/tools.css";

.grid
{
  height: 100%;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
    grid-auto-rows: minmax(100px, auto);
    /* grid-gap: 10px; */
    grid-template-areas:
      "hd hd hd hd   hd   hd   hd   hd   hd"
      "sd sd sd main main main main main main"
      "ft ft ft ft   ft   ft   ft   ft   ft";

}
.header {
    grid-area: hd;
}
.footer {
    grid-area: ft;
    background-color: wheat;
}
.content {
    grid-area: main;
    background-color: honeydew;
}
.sidebar {
    grid-area: sd;
    background-color: gold;  
}
/* .header
{
  
}
.sidebar{
  
}
.content{
  
}
.footer{
 background-color: aqua; 
} */


div.grid > *{
  border: 1px solid gray;
}


</style>
  