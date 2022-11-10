<template>
  <div style="padding-left:60px; padding-right:60px;">
    
    

    <div>{{this.FB}}</div>

    <div align="right" >
      <button v-on:click="getview_type()" align="right"> 보기</button> 
    </div>
    

    <Department v-if="view_type==0"/>
    <YesNo v-if="view_type==1"/>
    <Prefs v-if="view_type==2"/>

  </div>
    
</template>

<script>
import {db} from 'src/main.js'
import { doc, getDoc, collection, query, where, getDocs, onSnapshot } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import vm11 from 'src/vm11/javascripts/vm11.js';


import Department from "@/components/host/Groups/Department.vue";
import YesNo from "@/components/host/Groups/YesNo.vue";
import Prefs from "@/components/host/Groups/Prefs.vue";
  



export default {
  name: 'userlist',
  props: {
    msg: String
  },
  components: {
    Department,YesNo,Prefs,
  },
  data() {

    return {
      FB:"0",
      show: true,
      myvalue:"Asdasdad",
      view_type:0,
      count:{
        yes:0,
        no:0,
      },
      badge:{
        yes: "https://cdn3.iconfinder.com/data/icons/web-and-mobile-colored-icons-vol-1/128/27-64.png",
        no:"https://cdn4.iconfinder.com/data/icons/audio-video-gaming-controls/512/Audio_video_game_controls_Checkmark_no-64.png",
        bio:"https://cdn2.iconfinder.com/data/icons/flat-02-digital-design/91/Digital_Design_115-64.png"
      },
      txt:"dsasd",
      
      img_url:"",
      people:{},
    };
  },
  created:function(){
    this.FB = vm11.firebase.abc();

  this.gets();
  // console.log(fixed_value.precepts);
  // this.get("01085429052","2022-10-23") //method1 will execute at pageload
  },

  mounted:function(){

    // this.gets();
    // console.log(fixed_value.precepts);
    // this.get("01085429052","2022-10-23") //method1 will execute at pageload
  },
  methods: {
    getflexgrow(B)
    {
      if(B=="A")
        return "flex-grow : 1 !important";
      if(B=="B")
        return "flex-grow : 3 !important";

      // var a = Object.values(this.people).filter(p=>p.vote_value==1).length
      // var b = Object.values(this.people).filter(p=>p.vote_value!=1).length
    },
    getview_type()
    {
      this.view_type++;
      if(this.view_type>4)
        this.view_type=0;
    },
    // getImgUrl() {
    //     return this.img_url;
    // },
    log(str)
    {
      this.log_msg +=str+"\n";
    },
    async gets() {
      //1회 불러오기. people에 추가됨.. 
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
            var id = doc.id;
            var user = doc.data();
            console.log(user);
            const storage = getStorage();
            var file = vm11.tools.formatted_phone(user.phone)+'.png';
            
            getDownloadURL(ref(storage, file))//이미지까지 추가. 
            // getDownloadURL(ref(storage, user.phone+'.png'))//이미지까지 추가. 
            .then((url) => {
              console.log(url);
              user.avatar = url;
              this.people[id] = user;
            })
            .catch((error) => {
              user.avatar = "https://cdn4.iconfinder.com/data/icons/eon-ecommerce-i-1/32/user_profile_man-256.png";
              this.people[id] = user;
            });
          });

      const q = query(collection(db, "users"));//, where("true", "==", "true"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          var person = this.people[doc.id];
          var edited = doc.data();
          person.agree = edited.agree;
          person.vote_value = edited.vote_value;
          person.bio = edited.bio;
          person.appinstall = edited.appinstall;
          person.count = edited.count;
          //1) 1회불러오기  => 업데이트event] + avatar 이미지 로딩 + 값 갱신. 
          //2) 1회불러오기+ avatar 이미지 로딩 => 업데이트event] 값 갱신.  2번 방식임.             
        });
      });      

    },

    async get(phone,date) {
      
      const docRef = doc(db, "users", phone);
      const unsub = onSnapshot(docRef, (doc) => {//값 변경시 이것을 한번더 수행함. 
        var user = doc.data();
        this.log(user.name);
        this.log(user.phone);
        this.log(user.title);
        console.log("Current data: ", doc.data());
      });
    },
  }
}
</script>

<style scoped>


/* ------------------------- flex container ------------------------- */
.flex-container {
  display : flex; 
  height: 100%;
}
.box {
  height : 100%; 
  /* margin : 5px; */
  padding: 5px;
  /* flex-grow : 27;  */
  /* max-width: 50%; */
  max-width: 90%;
  /* width: 100%; */
}
.A{
  
  background :rgba(243, 163, 181, 0.501);
}
.B
{
  background :rgba(208, 227, 248, 0.422);
}

/* ------------------------- animation ------------------------- */

.slide-fadeR-enter-active {
  transition: all 0.8s ease-out;
}

.slide-fadeR-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fadeR-enter-from 
{
  transform: translateX(-50px);
  opacity: 0;
}
.slide-fadeR-leave-to {
  /* transform: translateX(20px); */
  transform: translateX(-50px);
  opacity: 0;
}

.slide-fadeL-enter-active {
  transition: all 0.8s ease-out;
}

.slide-fadeL-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fadeL-enter-from 
{
  transform: translateX(50px);
  opacity: 0;
}
.slide-fadeL-leave-to {
  /* transform: translateX(20px); */
  transform: translateX(50px);
  opacity: 0;
}

/* ------------------------- figure ------------------------- */

h4{
  text-align: left;
  /* display: block; */
  overflow: hidden;
  width: 200px;
  /* border: 1px solid red; */
}
 #columns{
        column-width:80px;
        /* column-width:350px; */
        /* column-gap: 15px; */
      }
      #columns figure{
        display: inline-block;
        /* border:1px solid rgba(0,0,0,0.2); */
        margin:0;
        margin-bottom: 15px;
        padding:10px;
        
      }
      #columns figure div.avatars{
        position:relative; 
        
        filter: drop-shadow(2px 2px 5px rgba(0,0,0,0.5));
      }
      #columns figure img.badge{
        align-content: flex-end;
        align-items: flex-end;
        align-self:flex-end;
        width:20%;
        position:absolute; 
        bottom: 0px;
        right: 0px;
      }

      #columns figure img.avatar {
        width:100%;
        
        filter: grayscale(20%);
        
      }
      #columns figure img.avatar_grey{
        width:100%;

        
        filter: 
            grayscale(70%)
            /* drop-shadow(2px 2px 5px rgba(243, 122, 29, 0.904)) */
            ;
        
        
        /* filter: grayscale(100%); */


        /* filter: sepia(40%);
        filter: opacity(70%); */
      }
      
      

      
      
      #columns figure figtitle{
        display: block;
        font-size:xx-small;
        text-overflow: none;
        
        display: inline-block;
        /* white-space: pre; */
        overflow: hidden;

        /* border: 1px solid blue; */
        
        height:min-content;
        padding:0px !important;
        margin: 0px !important;
      }
      #columns figure figname{
        font-size:small;
        
        display:block;
        text-overflow: none;

        /* border: 1px solid red; */

        height:min-content;
        padding:0px !important;
        margin: 0px !important;
      }
      
</style>
