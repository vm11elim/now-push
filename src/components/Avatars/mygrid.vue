<template>
  <!-- 절반 -->
  <div class="region_out" :style="{width:'50vw',height:'20vh', backgroundColor: 'red'}">
    <div ref="region" class="region">
      
      <div v-for="(p, i) in listA" :key="p.id" >
        <div  :ref="(el) => {this.cards[i] = el }" class="card" ></div>
      </div>
    </div>
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
    this.listA = this.listmaker(81);//생성은 돔 그리기 전에 해야함. 
  },
  mounted() {
    this.handleResize();
        window.addEventListener('resize', this.handleResize);
	},
  beforeDestroy() {
      window.removeEventListener('resize', this.handleResize);
  },

  methods: {
    handleResize(event) {
        var h = this.$refs.region.clientHeight;
        var w = this.$refs.region.clientWidth;
        this.card_size = vm11.gridMaker.getAvatar_byMatrix(w,h,this.listA.length,300/300);
        
        this.cards.forEach(x=> x.style.width =  this.card_size.x+'px');
        this.cards.forEach(x=> x.style.height =  this.card_size.y+'px');
        },
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
.region_out
{
  padding: 5px;
  /* padding-bottom: 30px; */
}
.region
{
  height: 100%; 
  display: flex;
  gap:1px;
  flex-wrap: wrap;
}
.card
{
  background-color: black;
}

</style>
