<template>
  <!-- <div></div> -->
  <all :list='this.list'/>
</template>

<script>
import all from 'src/components/Avatars/all.vue'


export default {
  name: 'App',
  
  components: {
    all
  },
  data() {
    return {
      mytxt: "asdasd",
      list : Array,
    }
  },
  created() {
    this.list = this.listmaker(7);
  },
  methods:
  {
    listmaker(n){
        var list2 = [];
        for(var i=0;i<n;i++)
        {
          var myObj = new Object();
          myObj.name = "기름임"+i;
          myObj['img'] =  "https://cdn3.iconfinder.com/data/icons/web-and-mobile-colored-icons-vol-1/128/27-32.png";
          list2.push(myObj);


          // console.log(list2[i].name);
        };
        return list2;  
      },
  }
}
</script>

<style></style>
