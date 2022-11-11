import vm11 from 'src/vm11/javascripts/vm11.js';
import { db } from 'src/main.js'
import { doc, getDoc, collection, query, where, getDocs, onSnapshot } from "firebase/firestore";
import { setDoc, updateDoc,addDoc } from "firebase/firestore";




import { getStorage, ref, getDownloadURL } from "firebase/storage";

var timer_n = 0;
var person = {};

// var people_cnt = 3;

function loading_status() {

  return Object.keys(this.people).length + '/' + this.people_cnt;

}
var finished = false;


// async function get(phone, date) {

async function do_vote(vote_value) {
  const ref_id = doc(db, "users", this.person.id);
  await updateDoc(ref_id, {
    vote_value: vote_value,
  });
}

// ------------------------------------------------------------------------------------------------------------------------------------ //

async function counters_init(vote_value) {
  var date = '2022-11-11';
  var counter_value = { p0: 1, p1: 0, p2: 3, p4: 2 };

  const mydoc = doc(db, 'users', this.person.id, 'counters', date);
  await setDoc(mydoc, counter_value)
  .then(() => {
      console.log("success");
    })
    .catch((error) => {
      console.log("error");
    });

}
async function counters_set_value(date,p,value) {

  // var date = 'abcd';
  // var date = '2022-11-11';
  // var p = 'p0';
  // var value = 76;

  const mydoc = doc(db, 'users', this.person.id, 'counters', date);

  await updateDoc(mydoc, {
    [p]: value,
  });
}


// ------------------------------------------------------------------------------------------------------------------------------------ //

async function get(phone) {

  const q = query(collection(db, "users"), where("phone", "==", phone));
  const snapshot = await getDocs(q);
  var user = {};
  snapshot.forEach(doc => {

    user = doc.data();
    user.id = doc.id;
  });

  const storage = getStorage();
  var file = vm11.tools.formatted_phone(user.phone) + '.png';

  await getDownloadURL(ref(storage, file))//이미지까지 추가. 
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


export default {
  get,
  do_vote, 
  counters_init,counters_set_value,
  person,//어떤 경우에 등록해야만 넘어갈까..?
  loading_status,
}  
