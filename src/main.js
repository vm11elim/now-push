import { createApp } from 'vue'
import App from './App.vue'






// ----------------  파이어스토어  ----------------
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var firebaseConfig = {
//   apiKey: "AIzaSyD4Jbqd9RgZd_AHeLNX-n",
  authDomain: "now-push-5e29e.firebaseapp.com",
  projectId: "now-push-5e29e",
  storageBucket: "now-push-5e29e.appspot.com",
};
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();





createApp(App).mount('#app')//초기화 끝난후 마운트 시켜야함. 