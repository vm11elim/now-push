<template>
  <div class="region_out" >
    <div ref="region" class="region">
      <div v-for="(p, i) in list" :key="p.id" >
        <!-- <div  :ref="(el) => {this.cards[i] = el }" class="card" ></div> -->
        <div  :ref="(el) => {this.cards[i] = el }" class="card" >
          <img  :src="p.img"  :style="{width:'70%',height:'70%'}"/>
          <div    :style="{fontSize:'1vmin'}"> {{p.name}} </div>
          <div    :style="{fontSize:'1vmin'}"> {{p.vote_value}} </div>
          <!-- <div    :style="{fontSize:'1vh'}"> {{p.name}} </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import vm11 from 'src/vm11/javascripts/vm11.js';


export default {
  name: 'App',
  props :{
    list: {
      type: Array,
      default:() =>
      {
        return [{}];
      }
    }
    // obj: String  
  },
  components: {
  },
  data() {
    return {
      img : String,
      //props//
      cards :[],
      listB :[],
      card_size : {},
    };
  },
  created() {
    
  },
  mounted() {
    // this.img = "https://cdn3.iconfinder.com/data/icons/web-and-mobile-colored-icons-vol-1/128/27-32.png";
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
        // this.card_size = vm11.gridMaker.getAvatar_byMatrix(w,h,list.length,300/300);
        this.card_size = vm11.gridMaker.getAvatar_byMatrix(w,h,this.list.length,300/300);
        
        this.cards.forEach(x=> x.style.width =  this.card_size.x+'px');
        this.cards.forEach(x=> x.style.height =  this.card_size.y+'px');
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
  width:100%;
  height: 100%; 
  display: flex;
  gap:1px;
  flex-wrap: wrap;
}
.card
{
  /* width: 100px;
  height: 100px; */
  /* background-color: black; */
}
.avatar
{
  width: 10px;
  height: 10px;
}

</style>
