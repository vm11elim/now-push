<template>
  <h2>님 안녕하세요.{{ $route.params.phone }}</h2>
  <div>카운터 임.</div>
  <div v-for="p in list" :key="p.id">
    <div style="display: flex; flex-direction: row; justify-content:space-between; border: 1px solid gray; height: 150px;">
      <img style="height:100%;" src ="https://cdn4.iconfinder.com/data/icons/aami-web-internet/64/aami14-40-512.png"/>
      <div style="display: flex">
        <div style="justify-content: center;">{{ p }} 긴 문장입니다. </div>     
      </div>
      <div style="display: flex; flex-direction: column; width: 100px;">
        <div style="flex-grow: 1; height: 50%; border: 1px solid red">+</div>
        <div style="flex-grow: 1; height: 50%; border: 1px solid red">-</div>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "App",
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7],
      // isDebug: !true
    };
  },
  components: {},
};
</script>
  
  <style>
</style>
  