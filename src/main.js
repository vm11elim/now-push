import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js' // <---






// ----------------  파이어스토어  ----------------
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

//fcm
import './registerServiceWorker'
import vueCookies from "vue-cookies";


import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// import {getMessaging, getToken} from 'firebase/messaging';


var firebaseConfig = {
  apiKey: "AIzaSyDOsrHoBqkPXEOaK3qARf_GEPb4Xq2yOaQ",
  authDomain: "now-push-5e29e.firebaseapp.com",
  projectId: "now-push-5e29e",
  storageBucket: "now-push-5e29e.appspot.com",
  // messagingSenderId: "484417358729",
  // appId: "1:484417358729:web:3ea1c8fcffd31363cfaf58",
  // measurementId: "G-TSYZ6K5S00"

};
const fb_app = initializeApp(firebaseConfig);
export const db = getFirestore(fb_app);

// ----------------- 웹 fcm하지마. 애플정책 바뀔때까지. ----------------- //
// const messaging = getMessaging(fb_app);
// function requestPermission() {
//   console.log('Requesting permission...');
//   Notification.requestPermission().then((permission) => {
//     if (permission === 'granted') {
//       console.log('Notification permission granted.123');
//       // const app = initializeApp(firebaseConfig);
//       // const messaging = getMessaging(app);

//       // getToken(messaging, {vapidKey: 'BGuXhz-5U-7o6uUwCRIQf5AYyqUxOfOhA_T7CgmLACZnmefUe3kiDXaHJDK35Ea_BnzTj9WrB7pG6g8UYe4Mg9s'})
//       // .then((currentToken) => {
//       //   if(currentToken){
//       //     console.log('ct : '+currentToken);
//       //   }
//       //   else{
//       //     console.log('can : ');
//       //   }
//       // });
//     }
//     else{
//       console.log('do not have permission!123123');
//     }
//   });
// }
    
 
// requestPermission();
// ------------------------------------------------------- //


import { longClickDirective } from 'vue-long-click'
const longClickInstance = longClickDirective({delay: 400, interval: 50})



// export const db = firebase.firestore();
// export const db = firestore();
// createApp(App).use(vueCookies).use(router).mount('#app');
createApp(App).directive('longclick', longClickInstance).use(vueCookies).use(router).mount('#app');

// createApp(App).directive('longclick', longClickInstance).use(vueCookies).use(router).mount('#app');


// createApp(App).mount('#app')//초기화 끝난후 마운트 시켜야함. 