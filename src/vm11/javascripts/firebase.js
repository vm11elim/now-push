
import vm11 from 'src/vm11/javascripts/vm11.js';
import {db} from 'src/main.js'
import { doc, getDoc, collection, query, where, getDocs, onSnapshot } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

var people = {};
var abc = function () {
  return "abc";
}

var gets = async function() {
      
  //1회 불러오기. people에 추가됨.. 
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
        var id = doc.id;
        var user = doc.data();

        console.log(user);
        
        // return;
        const storage = getStorage();
        var file = vm11.tools.formatted_phone(user.phone)+'.png';
        
        
        getDownloadURL(ref(storage, file))//이미지까지 추가. 
        // getDownloadURL(ref(storage, user.phone+'.png'))//이미지까지 추가. 
        .then((url) => {
          console.log(url);
          user.avatar = url;
          people[id] = user;
        })
        .catch((error) => {
          user.avatar = "https://cdn4.iconfinder.com/data/icons/eon-ecommerce-i-1/32/user_profile_man-256.png";
          people[id] = user;
        });
      });

  // 변경될 때 people에 수정됨. 

  
  const q = query(collection(db, "users"));//, where("true", "==", "true"));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      var person = people[doc.id];
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

  return people;

}

var get = async function(phone,date) {  
  const docRef = doc(db, "users", phone);
  const unsub = onSnapshot(docRef, (doc) => {//값 변경시 이것을 한번더 수행함. 
    var user = doc.data();
    this.log(user.name);
    this.log(user.phone);
    this.log(user.title);
    console.log("Current data: ", doc.data());
  });
}

const firebase = {
  abc : abc,
  gets : gets,
  people : people  
}  
export default firebase;
