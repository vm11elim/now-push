<template>
  <div id="out">
    <div id="in">
    {{txt}}  
  </div>
  </div>

</template>

<script>
export default {
data() {
  return {
  };
},
mounted() {
  // setTimeout(() => {
      
  //   }, 400);
  setTimeout(() => {
      this.$emit('dismiss')
    }, 600);
},
props:
{
  txt:String
},
methods: {
},
};
</script>
<style>
#out
{
  position: absolute;
  top: 30px;
  left: 0; 
  right: 0; 
  

  display: flex;
  justify-content: center;
  align-items: center;
}
#in
{
  background-color: rgba(255,255,255,0.9);
  border-radius: 5px;
  padding: 5px;
  padding-left: 15px;
  padding-right: 15px;
  
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);


  /* opacity: 0.8; */
  transition: opacity 1s;
}
/* .start
{

} */

/* .out{
  
  top: auto;
  left: auto;
  bottom: auto;
  right: auto;
}
h1{
  border: 1px solid red;
} */

</style>