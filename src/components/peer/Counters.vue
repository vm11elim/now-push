<template>
  <h2>님 안녕하세요.{{ $route.params.phone }}</h2>
  <div v-for="(item, i) in list" :key="i">
    <!-- <div @longclick="console.log('b')">asd</div> -->
    
    
    <!-- <Counter_Card :txt=item.txt :cnt=item.cnt ></Counter_Card> -->
    <Counter_Card :txt=item.txt :cnt=item.cnt @plus="item.cnt++"  @minus="item.cnt--"></Counter_Card>
    
  </div>
  <!-- height, width는 개별 지정이 맞다. 일괄 지정하는 게 맞다.  -->
</template>
  
<script>
import Counter_Card from './Counter_Card.vue';

export default {
  
  name: "App",
  data() {
    return {
      list: 
      [
        {txt:"abcd13",cnt:5,},
        {txt:"ermer",cnt:0,},
        {txt:"abcdfle",cnt:3,},
        {txt:"rntjkabcd",cnt:0,},
        {txt:"fvkmlabcd",cnt:0,},
      ]
      // isDebug: !true
    };
  },
  methods:{
    doplus()
    {
      console.log('plus');
    },
    dominus()
    {
      console.log('plus');
    }

  },
  components: {Counter_Card},
};
</script>
  
<style>

.flexH
{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.flexV
{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}
.inV
{
  flex-grow: 1;
  height: 100%;
}
.inH
{
  flex-grow: 1;
  width: 100%;
}

.debug0
{
  border: 1px solid gray;
}
.debug1
{
  border: 1px solid blue;
}
.debug2
{
  border: 1px solid red;
}

</style>
  