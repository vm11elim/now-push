<template>
  <div>{{this.mytxt}}</div>
  <div>{{this.arr[0]}}</div>
</template>

<script>
// import XY_xy from './TestDebug/XY_xy.vue'
// import comp from './XY_xy2.vue'
// import list from 'src/components/common/Avatars/list.vue'

export default {
  props:
  {
    txt:String,
    arr:Array,
  },
  created() {
    this.mytxt = this.txt;
    console.log(this.arr);
  },
  name: 'App',
  components: {
  },
  data() {
    return {
      mytxt: String,
    };
  }
}
</script>

<style></style>
