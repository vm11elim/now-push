<template>
  
  <!-- <Test_Comp :txt="this.txt" /> -->
  <Test_Comp :txt=this.txt :arr=this.arr />
   <!-- arr=this"[1,2,3,4,]"/> -->
</template>

<script>
// import XY_xy from './TestDebug/XY_xy.vue'
// import comp from './XY_xy2.vue'
// import list from 'src/components/common/Avatars/list.vue'
import Test_Comp from './Test_Comp.vue'

export default {
  name: 'App',
  components: {
    Test_Comp
    // list
  },
  data() {
    return {
      txt:"내욥임.",
      arr:[1,2,3,4,5],
    };
  }
}
</script>

<style></style>
