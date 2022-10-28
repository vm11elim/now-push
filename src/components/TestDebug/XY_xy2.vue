<template>
  <!-- 절반 -->
  <div ref="region" class="region" :style="{width:'50vw',height:'50vh', backgroundColor: 'red'}">
    
    <div v-for="(p, i) in listA" :key="p.id" >
      <div  :ref="(el) => {this.cards[i] = el }" class="card" ></div>
    </div>

    <!-- <div v-for="(p, i) in list" :key="p.id" >
      <div  :ref="(el) => { }" class="card" ></div>
    </div> -->
    
    
  </div>
</template>

<script>

import vm11 from 'src/vm11_javascripts/vm11.js';


export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      cards :[],
      listA :[],
      listB :[],
      card_size : {},
    };
  },
  created() {
    this.listA = this.listmaker(100);//생성은 돔 그리기 전에 해야함. 
  },
  mounted(){
    
    // this.listB = this.listmaker(90);    


    var h = this.$refs.region.clientHeight;
    var w = this.$refs.region.clientWidth;

    this.card_size = vm11.gridMaker.getAvatar_byMatrix(w,h,this.listA.length);


    // this.cards.forEach(x=> x.style.width =  '30px')
    // this.cards.forEach(x=> x.style.height =  '30px')
    this.cards.forEach(x=> x.style.width =  this.card_size.x+'px')
    this.cards.forEach(x=> x.style.height =  this.card_size.y+'px')

  },
  methods: {
    listmaker(n){
      var list = [];
      for(var i=0;i<n;i++)
        list.push(i);
      return list;
    },
  }
}
</script>

<style>
.region
{
  display: flex;
  flex-direction:column;
  flex-wrap: wrap;
}
.card
{
  /* width:50px;
  height: 50px; */

  padding: 1px;
  margin: 1px;
  
  overflow: hidden;

  background-color: black;
}
</style>
