// getput.js
//https://asia-northeast3-now-push-5e29e.cloudfunctions.net/get
//https://asia-northeast3-now-push-5e29e.cloudfunctions.net/put
const functions = require("firebase-functions");
const functionsRegion = require("firebase-functions").region("asia-northeast3");
// 아래는 fire store 관련
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
const db = admin.firestore();
module.exports = {

    put : functionsRegion.https.onRequest(async (request, response) => {

        const body =request.body;
        const data = {
            phoneNum: body.phoneNum,
            fcmToken: body.fcmToken
          };
          const res = await db.collection('cities').doc().set(data)
          .then(() => {
            // response.status(200);//성공 표시. 
            response.sendStatus(200);// 왜 200인데도 실패로 나올까. 
            // response.send("Added order"+body.phoneNum+"    "+body.fcmToken);//설마 이거때문에? 
            // response.send("Added order"+body.phoneNum+"    "+body.fcmToken);
          }, (error) => {
            response.send("Fail-2579");
          });
    }),

    vote : functionsRegion.https.onRequest(async (request, response) => {

      const body =request.body;
        const citiesRef = db.collection('users');
        const snapshot = await citiesRef.where('phone', '==', body.phoneNum).get();
        var doc = snapshot.docs[0];
        // ------------------------------------------------ //
        const cityRef = db.collection('users').doc(doc.id);
        const res = await cityRef.update({vote_value: body.vote})
        .then(() => {response.sendStatus(200);});     
  }),

  bio : functionsRegion.https.onRequest(async (request, response) => {

      const body =request.body;
      const citiesRef = db.collection('users');
      const snapshot = await citiesRef.where('phone', '==', body.phoneNum).get();
      var doc = snapshot.docs[0];
      // ------------------------------------------------ //
      const cityRef = db.collection('users').doc(doc.id);
      
      var value = body.bio=="true"? true: false;//bodyparser 미구현으로 무조건 문자열로만 날아온다. 

      const res = await cityRef.update({bio: value})
      .then(() => {response.sendStatus(200);});     
}),


    // get : functions.https.onRequest(async (request, response) => {
    //     const query = request.query;
    //     // var phoneNum = query.phoneNum;
    //     var str="";

    //     db.collection("cities").get().then((querySnapshot) => {

    //       querySnapshot.forEach((doc) => {
    //           str +=doc.id, " => ", doc.data();//doc.data().phoneNum+"  "+doc.data().fcmToken;
    //           // console.log();
    //       });
    //       response.send("onResult : "+str);
    //   });
    

    // })

    get : functionsRegion.https.onRequest(async (request, response) => {

      const res = await db.collection("cities").get().then((querySnapshot) => {

        let obj = {};//중요. 
        
        querySnapshot.forEach((doc) => {
          obj[doc.id]=doc.data();
        });

        response.json(JSON.stringify(obj));

          if(false)
          var docs = querySnapshot.docs.map(json.decode(json.encode(doc.data())));//여기서에러 발생. 
    });

    
      // var docRef = db.collection("cities").doc();
      // docRef.get().then((doc) => {
      //     if (doc.exists) {
      //         response.json(doc.data());
      //     } else {
      //       response.json({
      //         "result": "실패",
      //       });
      //     }
      // }).catch((error) => {
      //     console.log("Error getting document:", error);
      // });


      // const logCities = async () => {
      //   let citiesRef = db.collection('cities');
      //   let allCities = await citiesRef.get();
      //   var str ="";
      //   for(const doc of allCities.docs){
      //     str+= doc.id, '=>', doc.data();
      //   }
      //   response.send(str);
      // }

      // response.json({
      //   "name": "식빵",
      //   "family": "웰시코기",
      //   "age": 1,
      //   "weight": 2.14,
      // });
      

    })


//     get : functions.https.onRequest(async (request, response) => {
//         // const query = request.query;
//         // var phoneNum = query.phoneNum;
// //.where('tags.mytag', '==', true)
//         const snapshot = await db.collection('cities').doc().get().then(() => {
//           // var str="";
//           //   snapshot.forEach(doc => {
//           //     str +=doc.data();
//           //       //str +=doc.data().phoneNum+"\n";
//           //       // console.log(doc.id, '=>', doc.data());
//           //     });
//               // if(phoneNum!=null)

//             response.send("onResult : ");
//           }, (error) => {
//             console.error(error);
//             response.send("Fail");
//           });    
//     })

};

