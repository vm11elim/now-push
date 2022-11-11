<template>
  <!-- <div>vm11:timer_n:: [{{this.vm11.timer.timer_n}}] </div> -->
  <!-- <div>vm11:timer_n:: [{{this.vm11.firebase.people.length}}] </div> -->


  <div v-for="person in this.vm11.firebase.people" :key="person.id">
    <div>{{person.name}}::: {{person.vote_value}}</div>
  </div>
</template>

<script>
import vm11 from 'src/vm11/javascripts/vm11.js';
export default {
  name: 'App',
  components: {
    
  },
  data() {
    return {
      vm11:vm11,
    };
  },
  
  methods: {
  },

  created () {
    // this.vm11.timer.up();
    this.vm11.firebase.gets();
  }
}
</script>

<style></style>
