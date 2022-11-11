<template>
  <!-- <div v-for="person in this.people" :key="person.id">
    <div>{{ person.name }}::: {{ person.vote_value }}</div>
  </div> -->
  <!-- <avatar_viewer :style="{height:'100px',backgroundColor:red, width:'100px'}" class="inV debug1" :list="this.listmaker(7)" /> -->
  
  <div :style="{ margin: '10px' }" >
    <div class="grid" >
    <!-- 그런데 dom 이후에 값이 바뀌면, css 재정렬을 해줘야함... 하 ㅅㅂ ..  -->
      

    <div>
      <div>개발팀 : {{Object.values(this.people).filter((p) => p.team === '개발팀').length}}</div>
    </div>
    <div>
      <avatar_viewer class="inV debug1" :list="Object.values(this.people).filter((p) => p.team === '개발팀')" />        
    </div>  
    <div>
      <div>서베이팀 : {{Object.values(this.people).filter((p) => p.team === '서베이팀').length}}</div>
    </div>
    <div>
      <avatar_viewer class="inV debug1" :list="Object.values(this.people).filter((p) => p.team === '서베이팀')" />        
    </div>  
    <div>
      <div>UC서비스팀 : {{Object.values(this.people).filter((p) => p.team === 'UC서비스팀').length}}</div>
    </div>
    <div>
      <avatar_viewer class="inV debug1" :list="Object.values(this.people).filter((p) => p.team === 'UC서비스팀')" />        
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
  
<style scoped>
@import "src/vm11/css/myFlex.css";
@import "src/vm11/css/tools.css";

.grid
{
  display: grid;
	grid-template-columns: 150px 1fr;
  grid-template-rows: repeat(3, 1fr);
}
div.grid > *{
  border: 1px solid gray;
}
</style>
  