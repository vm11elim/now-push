<template>
  <userlist msg="유저목록임."/>
  <!-- <initialDB/> -->
</template>

<script>
import userlist from './user/userlist.vue'
import initialDB from './user/initialDB.vue'

export default {
  name: 'App',
  components: {
    initialDB,
    userlist
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
