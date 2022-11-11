import vm11 from 'src/vm11/javascripts/vm11.js';
import { db } from 'src/main.js'
import { doc, getDoc, collection, query, where, getDocs, onSnapshot } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

var timer_n = 0;
var people = {};
// var people_cnt = 3;

function loading_status() {
  //   console.log( _.size(obj.Data) );
  // or:
  // console.log( _.keys(obj.Data).length );
  // return ""+ObjectLength(people);
  return Object.keys(this.people).length + '/' + this.people_cnt;
}
var finished = false;

async function gets5() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() =>
      alert('3초지남')

      , 3000)
  });
  let result = await promise; // 프라미스가 이행될 때까지 기다림 (*)
  alert(result); // "완료!"
}


// 최초 렌더링에 한해서만 gets를 기다려줘야 할듯..
async function gets() {

  await gets2();
}
async function abc() {
  let promise = new Promise((resolve, reject) => {
    var people_ist = 'a';
    setTimeout(() => resolve(people_ist), 1000)
  });
  let result = await promise; // 프라미스가 이행될 때까지 기다림 (*)
  return result;
}

async function gets2() {

  // this.people_cnt = 9;
  const querySnapshot = await getDocs(collection(db, "users"));
  var array = [];
  this.people_cnt = querySnapshot.docs.length;
  querySnapshot.forEach((doc) => {

    var id = doc.id;
    var user = doc.data();
    user.id = id;
    // this.people[id] = user;
    array.push(user);
  });//어차피 await이니까 가능할듯..


  const storage = getStorage();

  for (const user of array) {
    // for (const user of this.people) {   
    console.log(user);
    var file = vm11.tools.formatted_phone(user.phone) + '.png';
    
    if (true) {
      getDownloadURL(ref(storage, file))//이미지까지 추가. 
      // await getDownloadURL(ref(storage, file))//이렇게하면 순차적이라 느려짐... 
        .then((url) => {
          console.log(url);
          user.avatar = url;
        })
        .catch((error) => {
          user.avatar = "https://cdn4.iconfinder.com/data/icons/eon-ecommerce-i-1/32/user_profile_man-256.png";
        })
        .finally(() => {
          user["img"] = user.avatar;//바인딩 키임. 
          this.people[user.id] = user;

          if(this.people_cnt == Object.keys(this.people).length)
            this.finished = true;
        });
    }
    else {
      user.avatar = "https://cdn4.iconfinder.com/data/icons/eon-ecommerce-i-1/32/user_profile_man-256.png";
      user["img"] = user.avatar;
      this.people[user.id] = user;
    }
  }


  //아... 결국 이것이 Binding의 Key 였구나...
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
      if (!false)
        person.avatar = edited.avatar;

      //1) 1회불러오기  => 업데이트event] + avatar 이미지 로딩 + 값 갱신. 
      //2) 1회불러오기+ avatar 이미지 로딩 => 업데이트event] 값 갱신.  2번 방식임. 

    });
  });

  
}

// DB가 변경될 때, dynamic하게 변화할 수 있게. lists가 변경되면 처리될 수 있도록. 다 같은 lists를 공유한다. //근데 이건 객체지향의 원칙에 어긋남.. //어떻게 처리하지? 


async function get(phone, date) {
  const docRef = doc(db, "users", phone);
  const unsub = onSnapshot(docRef, (doc) => {//값 변경시 이것을 한번더 수행함. 
    var user = doc.data();
    this.log(user.name);
    this.log(user.phone);
    this.log(user.title);
    console.log("Current data: ", doc.data());
  });
}



export default {
  gets,
  gets2,
  people,
  loading_status,
}  
