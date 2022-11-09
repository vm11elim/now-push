<template>
  <div>
    <!-- @click="$emit('onlongclick','myvalue')" -->
    <!-- <div style="height: 150px;" > -->
    <div @mousedown="mousedown" @mouseup="mouseup">ads</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      longTouchToggle: false,
    };
  },
  methods: {
    mousedown() {
      // console.log("a");
      this.longTouchToggle = true;
      setTimeout(() => {
        if (this.longTouchToggle) {
          this.$emit('onlongclick','myvalue')
        }
      }, 1000);
    },

    mouseup() {
      this.longTouchToggle = false;
    },
  },
};
</script>

<style>
</style>
