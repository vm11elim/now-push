<template>
    <!-- <div @longclick="console.log('b')">asd</div> -->
    
    <!-- <longclicker @onlongclick="cnt--"> -->
      <div class="flexV debug0" style="justify-content:space-between;  height: 150px;" @pointerdown="mousedown" @pointerup="mouseup">
      <!-- <div class="flexV debug0" style="justify-content:space-between;  height: 150px;" @touchstart="mousedown" @touchend="mouseup" @mousedown="mousedown" @mouseup="mouseup"> -->
        <!-- <div class="flexV debug0" style="justify-content:space-between;  height: 150px;" @mousedown="mousedown" @mouseup="mouseup"> -->
      
        <img class="inV none_select" style="aspect-ratio:0.2;" src ="https://cdn4.iconfinder.com/data/icons/aami-web-internet/64/aami14-40-128.png" />
        
        <div class="inV flexH" >
          <div class="none_select">{{txt}}</div>
          <div class="none_select">{{txt}}</div>
          <div class="none_select">{{txt}}</div>
        </div>

        <div class="inV flexH debug1" style="justify-content: space-evenly; width: 100px;" >
          <!-- <div class="inH flexH debug2" >+</div> -->
          <div class="inH flexH debug2 none_select" style="flex-grow:3; font-size:2em;" >{{cnt}}</div>
          <!-- <div class="inH flexH debug2" >-</div> -->
        </div>
      </div>
  <!-- </longclicker> -->

</template>
  
<script>
// import longclicker from 'src/Tools/longclicker.vue'

export default {
  
  name: "App",
  props:{
    txt: String,
    cnt: Number,
  },
  data() {
    return {
      longclick_timeout : {},
    };
  },
  methods:{
    mousedown() {
      // console.log("a");
      if(!this.longTouchToggle)
      {
        this.longTouchToggle = true;
        this.longclick_timeout = setTimeout(() => {
          if (this.longTouchToggle) {
            // this.cnt=99;
            this.$emit('minus','myvalue')
            this.longTouchToggle = false;
          }
        }, 600);
      }
    },

    mouseup() {
      if(this.longTouchToggle)
      {
        if(this.longclick_timeout != null)
        clearTimeout(this.longclick_timeout);
        this.longTouchToggle = false;
        this.$emit('plus','myvalue')
      }
    },
  },
  // components: {longclicker},
};
</script>
  
<style>
@import 'src/vm11/css/myFlex.css';
@import 'src/vm11/css/tools.css';

</style>
  