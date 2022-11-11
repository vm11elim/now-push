<template>
  <!-- <div v-for="person in this.people" :key="person.id">
    <div>{{ person.name }}::: {{ person.vote_value }}</div>
  </div> -->
  <!-- <avatar_viewer :style="{height:'100px',backgroundColor:red, width:'100px'}" class="inV debug1" :list="this.listmaker(7)" /> -->
  
  <div :style="{ margin: '10px' }" >
    <div class="grid" >
    <!-- 그런데 dom 이후에 값이 바뀌면, css 재정렬을 해줘야함... 하 ㅅㅂ ..  -->
      
    <div>
      <div>매우나쁨 : {{Object.values(this.people).filter(p=>p.vote_value==1).length}}</div>
    </div>
    <div>
      <div>나쁨 : {{Object.values(this.people).filter(p=>p.vote_value==2).length}}</div>
    </div>
    <div>
      <div>중립 : {{Object.values(this.people).filter(p=>p.vote_value==3).length}}</div>
    </div>
    <div>
      <div>좋음 : {{Object.values(this.people).filter(p=>p.vote_value==4).length}}</div>
    </div>
    <div>
      <div>매우좋음 : {{Object.values(this.people).filter(p=>p.vote_value==5).length}}</div>
    </div>


    <div>
      <avatar_viewer class="inV debug1" :list="Object.values(this.people).filter(p=>p.vote_value==1)" />        
    </div>  
    <div>
      <avatar_viewer class="inV debug1" :list="Object.values(this.people).filter(p=>p.vote_value==2)" />        
    </div>  
    <div>
      <avatar_viewer class="inV debug1" :list="Object.values(this.people).filter(p=>p.vote_value==3)" />        
    </div>  
    <div>
      <avatar_viewer class="inV debug1" :list="Object.values(this.people).filter(p=>p.vote_value==4)" />        
    </div>  
    <div>
      <avatar_viewer class="inV debug1" :list="Object.values(this.people).filter(p=>p.vote_value==5)" />        
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
  grid-template-columns: repeat(5, 1fr);
	grid-template-rows: 20px 1fr;
}
div.grid > *{
  border: 1px solid gray;
}
</style>
  