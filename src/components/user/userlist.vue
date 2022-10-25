<template>
  <div style="padding-left:60px; padding-right:60px;">
    <div align="right" >
      <button v-on:click="getview_type()" align="right"> 보기</button> 
    </div>
    <!-- <button v-on=""></button>
    <label><input type="checkbox" name="color" value="blue" v-on=""> Blue</label> -->

    <div id="columns"  v-if="view_type==0">
      <figure v-for="person in people" :key="person.id">
        
        <div class="avatars">
          <img class="badge" :src="badge.bio" v-if="person.bio" align="left"/><!-- 생체 인증있을때만.  -->
          <!-- <img class="avatar" :src="person.avatar" /> -->
          <img :class='person.appinstall? "avatar" : "avatar_grey"' :src="person.avatar" />
          <img class="badge" :src="person.vote_value==1 ? badge.yes: badge.no" align="right"/>
        </div>
        <figtitle>{{person.team}}</figtitle>
        <figname >{{person.name}}</figname>           
        
      </figure>    
    </div>

    

    <div v-if="view_type==1">
      <div  id="columns" >
        <h4>UC서비스팀</h4>
        <div v-for="person in people" :key="person.id">
          <figure v-if="(person.team ==='UC서비스팀')">
            <img :class='person.appinstall? "avatar" : "avatar_grey"' :src="person.avatar" />
            <figtitle>{{person.team}}</figtitle>
            <figname >{{person.name}}</figname>     
          </figure>
        </div> 
      </div>

      <div  id="columns" >
        <h4>경영지원팀</h4>
        <div v-for="person in people" :key="person.id">
          <figure v-if="(person.team ==='경영지원팀')">
            <img :class='person.appinstall? "avatar" : "avatar_grey"' :src="person.avatar" />
            <figtitle>{{person.team}}</figtitle>
            <figname >{{person.name}}</figname>     
          </figure>
        </div> 
      </div>

      <div  id="columns" >
        <h4>정보보안사업팀</h4>
        <div v-for="person in people" :key="person.id">
          <figure v-if="(person.team ==='정보보안사업팀')">
            <img :class='person.appinstall? "avatar" : "avatar_grey"' :src="person.avatar" />
            <figtitle>{{person.team}}</figtitle>
            <figname >{{person.name}}</figname>     
          </figure>
        </div> 
      </div>

      <div  id="columns" >
      <h4>개발팀</h4>
        <div v-for="person in people" :key="person.id">
          <figure v-if="(person.team ==='개발팀')">
            <img :class='person.appinstall? "avatar" : "avatar_grey"' :src="person.avatar" />
            <figtitle>{{person.team}}</figtitle>
            <figname >{{person.name}}</figname>     
          </figure>
        </div>    
      </div>

      <div  id="columns" >
        <h4>UC솔루션팀</h4>
        <div v-for="person in people" :key="person.id">
          <figure v-if="(person.team ==='UC솔루션팀')">
            <img :class='person.appinstall? "avatar" : "avatar_grey"' :src="person.avatar" />
            <figtitle>{{person.team}}</figtitle>
            <figname >{{person.name}}</figname>     
          </figure>
        </div> 
      </div>

      <div  id="columns" >
        <h4>서베이팀</h4>
        <div v-for="person in people" :key="person.id">
          <figure v-if="(person.team ==='서베이팀')">
            <img :class='person.appinstall? "avatar" : "avatar_grey"' :src="person.avatar" />
            <figtitle>{{person.team}}</figtitle>
            <figname >{{person.name}}</figname>     
          </figure>
        </div> 
      </div>

    
    </div>


    



    <div v-if="view_type==2">
      <h4>찬성 : {{Object.values(this.people).filter(p=>p.vote_value==1).length}}</h4>
      <div  id="columns">
      <div v-for="person in people" :key="person.id">
        <figure v-if="person.vote_value==1">
          <div class="avatars">
            <img class="badge" :src="badge.bio" v-if="person.bio" align="left"/><!-- 생체 인증있을때만.  -->
            <img :class='person.appinstall? "avatar" : "avatar_grey"' :src="person.avatar" />
          </div>
          <figtitle>{{person.team}}</figtitle>
          <figname >{{person.name}}</figname>     
        </figure>
      </div>    
    </div>



      <h4>반대 : {{Object.values(this.people).filter(p=>p.vote_value!=1).length}}</h4>
      <div  id="columns">
      <div v-for="person in people" :key="person.id">
        <figure v-if="person.vote_value!=1"  >
          <!-- v-on="this.count.no++"  -->
          <div class="avatars">
            <img class="badge" :src="badge.bio" v-if="person.bio" align="left"/><!-- 생체 인증있을때만.  -->
            <img :class='person.appinstall? "avatar" : "avatar_grey"' :src="person.avatar" />
          </div>
          <figtitle>{{person.team}}</figtitle>
          <figname >{{person.name}}</figname>     
        </figure>
      </div>    
    </div>  

    </div>

  </div>
</template>

<script>
import {db} from 'src/main.js'
import { doc, getDoc, collection, query, where, getDocs, onSnapshot } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import tools from 'src/vm11.js';




export default {
  name: 'userlist',
  props: {
    msg: String
  },
  data() {

    return {
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
  mounted:function(){

    this.gets();
    // console.log(fixed_value.precepts);
    // this.get("01085429052","2022-10-23") //method1 will execute at pageload
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
    async gets() {
      
      //1회 불러오기. people에 추가됨.. 
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
            var id = doc.id;
            var user = doc.data();

            console.log(user);
            
            // return;
            const storage = getStorage();
            var file = tools.formatted_phone(user.phone)+'.png';
            
            
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


      // 변경될 때 people에 수정됨. 

      
      const q = query(collection(db, "users"));//, where("true", "==", "true"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          var person = this.people[doc.id];
          var edited = doc.data();
          person.agree = edited.agree;
          person.vote_value = edited.vote_value;
          person.bio = edited.bio;
          person.appinstall = edited.appinstall;
          
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
        filter: grayscale(70%);
      }
      #columns figure img.avatar_grey{
        width:100%;
        filter: grayscale(100%);
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
