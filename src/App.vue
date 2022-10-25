<template>
  <userlist msg="유저목록임."/>
  <!-- <userlist2 msg="유저목록임."/> -->
  <!-- <initialDB/> -->
</template>

<script>
import userlist from './components/user/userlist.vue'
import userlist2 from './components/user/userlist2.vue'
import initialDB from './components/user/initialDB.vue'

export default {
  name: 'App',
  components: {
    initialDB,
    userlist,
    userlist2
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
