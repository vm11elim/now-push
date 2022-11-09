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
  background-color: rgba(0,0,0,0.1);
  border-radius: 5px;
  padding: 5px;
  padding-left: 15px;
  padding-right: 15px;
  
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);


  /* opacity: 0; */
  transition: all 3s;
  transition-delay: 1s; /* 시작 전 딜레이 */
  transition-duration: 0.5s; /* transition 작동 속도 */
  transition-property: opacity; /* 어떤 속성에 transition 입힐건지 */
  transition-timing-function: ease-in; /* 동작 속도 그래프조정 */


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