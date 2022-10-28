<template>
  <!-- <div :style="{display : flex,  overflow:hidden}"> -->
     <div class="flex-container">
      <!-- <div class="box A" style="flex-grow : {{Object.values(this.people).filter(p=>p.vote_value==1).length}} !important"> -->
        <h4>{{listA.length}}</h4>
        <div class="region" :style="{flexGrow:listA.length, backgroundColor: 'red'}">
          <div v-for="p in listA" :key="p.id">
            <div class="card"></div>
          </div>
        </div>


        <h4>{{listB.length}}</h4>
        <div class="region" :style="{flexGrow:listB.length, backgroundColor: 'blue'}">
          <div v-for="p in listB" :key="p.id">
            <div class="card"></div>
          </div>
        </div>
      </div>
    <!-- </div> -->
</template>

<script>

export default {
  name: 'userlist',
  props: {
    
  },
  data() {
    return {
      // listA:[1],
      // listB:[1],
      listA :[],
      listB :[],
      // flag:"A",
      flag:"A",
      num: 0,
      styleObject: {
        background: 'red',
        color: 'red',
        fontSize: '13px'
      }
    };
  },
  computed : {
    info: function(abc){
      return { cant1: true };
      // if(abc)
      // // if(this.num >=1 && this.num <=10)
      //   return { cant1: true };
      // else
      //   return { cant2: true };
    },
  },
  created() {
    this.listA = this.listmaker(31);
    this.listB = this.listmaker(90);    
  },
  mounted(){//}:function(){
    


    //vue 원칙에 어긋남. 개발자가 되도록 dom에 접근하면 안됨. 
    this.$refs.boxA.style = styleObject;
    this.$refs.boxB.style = styleObject;

    this.$refs.boxA.style.background = 'green';
    this.$refs.boxB.style.background = 'green';

    this.$refs.boxA.style.border = '1px solid #66bb6a';

  },
  methods: {
    Point(x, y) {
      this.x = x;
      this.y = y;
    },

    listmaker(n){
      
      var list = [];
      for(var i=0;i<n;i++)
        list.push(i);
      return list;
    },
    getflexgrow(B)
    {
      if(B=="A")
        return "flex-grow : 1 !important";
      if(B=="B")
        return "flex-grow : 3 !important";

      // var a = Object.values(this.people).filter(p=>p.vote_value==1).length
      // var b = Object.values(this.people).filter(p=>p.vote_value!=1).length
    },
  }
}
</script>

<style scoped>

.option-first {background-color: red}
.option-second {background-color: blue}


/* ------------------------- flex container ------------------------- */
.flex-container {
  display : flex; 
  height: 80vh;
}
.region {
  height : 100%; 
  /* margin : 5px; */
  padding: 5px;
  /* flex-grow : 1;  */
  /* flex-shrink: 1; */
  overflow: hidden;
  /* max-width: 50%; */
  max-width: 100%;
  display : flex; 
  flex-wrap: wrap;
  flex-direction: row;
  /* width: 100%; */
}
.A{
  
  /* background :rgba(243, 163, 181, 0.501); */
}
.B
{
  /* background :rgba(208, 227, 248, 0.422); */
}

.card
{
  margin: 5px;
  width: 60px;
  height: 70px;
  background: black;
}

</style>
