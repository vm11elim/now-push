<template>
    <!-- <div @longclick="console.log('b')">asd</div> -->
    
    <!-- <longclicker @onlongclick="cnt--"> -->
      <div class="flexV debug0" style="justify-content:space-between;  height: 150px;" @touchstart="mousedown" @touchend="mouseup" @mousedown="mousedown" @mouseup="mouseup">
        <!-- <div class="flexV debug0" style="justify-content:space-between;  height: 150px;" @mousedown="mousedown" @mouseup="mouseup"> -->
      
        <img class="inV" src ="https://cdn4.iconfinder.com/data/icons/aami-web-internet/64/aami14-40-512.png" />
        
        <div class="inV flexH" >
          <div>{{txt}}</div>
          <div>{{txt}}</div>
          <div>{{txt}}</div>
        </div>

        <div class="inV flexH debug1" style="justify-content: space-evenly; width: 100px;" >
          <div class="inH flexH debug2" >+</div>
          <div class="inH flexH debug2" style="flex-grow:3; font-size:2em;" >{{cnt}}</div>
          <div class="inH flexH debug2" >-</div>
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
    };
  },
  methods:{
    mousedown() {
      // console.log("a");
      this.longTouchToggle = true;
      setTimeout(() => {
        if (this.longTouchToggle) {
          // this.cnt=99;
          this.longTouchToggle = false;
          this.$emit('minus','myvalue')
        }
      }, 1000);
    },

    mouseup() {
      if(this.longTouchToggle)
      {
        this.longTouchToggle = false;
        this.$emit('plus','myvalue')
      }
    },
  },
  // components: {longclicker},
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
  