<template>

  <h2>{{person.name}}님 안녕하세요.{{$route.params.phone}}</h2>
    <div style="width:100%; " align="center">
      <div  id="columns" >
        <figure>
          <div class="avatars">
            <img class="badge" :src="badge.bio" v-if="person.bio" align="left"/>
            <img :class='person.appinstall? "avatar" : "avatar_grey"' :src="person.avatar" />
          </div>
          <figtitle>{{person.team}}</figtitle>
          <figname >{{person.name}}</figname>     
        </figure>
      </div>   
    </div>
      


</template>

<script>
import {db} from 'src/main.js'
import { doc, getDoc, collection, query, where, getDocs, onSnapshot } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import tools from 'src/vm11_javascripts/vm11.js';
// import router from '@/router';




export default {
  name: 'Peer',
  props: {
    msg: String
  },
  data() {

    return {
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
      
      person:{},
    };
  },
  mounted:function(){

    this.$cookies.set("phone", this.$route.params.phone);   
    
    this.get(this.$route.params.phone+"");
    // this.get("010-8542-9052");
  },
  methods: {
    getview_type()
    {
      this.view_type++;
      if(this.view_type==3)
        this.view_type=0;
    },
    // getImgUrl() {
    //     return this.img_url;
    // },
    log(str)
    {
      this.log_msg +=str+"\n";
    },
    async get(phone) {
      
      // const querySnapshot = await getDocs(collection(db, "users"));

      // const citiesRef = db.collection('users');
      // const citiesRef = collection(db, "users");//db.collection('users');
      const q = query(collection(db, "users"), where("phone", "==", phone));
      const snapshot = await getDocs(q);

      // const snapshot = await db.collection('users').where('phone', '==', phone).get();
// const snapshot = await citiesRef.where('phone', '==', phone).get();

snapshot.forEach(doc => {

            var id = doc.id;
            {
              var user = doc.data();
              
              // this.person= this.people[phone];
            // return;
              const storage = getStorage();
              var file = tools.formatted_phone(user.phone)+'.png';
              
              
              getDownloadURL(ref(storage, file))//이미지까지 추가. 
              // getDownloadURL(ref(storage, user.phone+'.png'))//이미지까지 추가. 
              .then((url) => {
                console.log(url);
                this.person = user;
                this.person.avatar = url;
              })
              .catch((error) => {
                this.person = user;
                this.person.avatar = "https://cdn4.iconfinder.com/data/icons/eon-ecommerce-i-1/32/user_profile_man-256.png";
              });
            }
          });

          
    },
  }
}
</script>

<style scoped>
h4{
  text-align: left;
  /* display: block; */
  overflow: hidden;
  width: 200px;
  /* border: 1px solid red; */
}
 #columns{
  
  width: 200px;
        /* column-width:240px; */
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
