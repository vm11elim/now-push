<template>
  <userlist msg="유저목록임."/>
</template>

<script>
import userlist from './components/user/userlist.vue'

export default {
  name: 'App',
  components: {
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
