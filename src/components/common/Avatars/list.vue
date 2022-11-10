<template>
  <!-- <div></div> -->
  <avatar_viewer :list='this.list'/>
</template>

<script>
import avatar_viewer from 'src/components/common/Avatars/avatar_viewer.vue'


export default {
  name: 'App',
  
  components: {
    avatar_viewer
  },
  data() {
    return {
      mytxt: "asdasd",
      list : Array,
    }
  },
  created() {
    this.list = this.listmaker(20);
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
