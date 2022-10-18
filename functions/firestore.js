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
        const query = request.query;  //queryString을 Json형태로 가져온다.  { dfdf: 'aaa' }
        const body = request.body;   //post로 받은 내용을 Json으로 가져온다.  { dfdf: 'aaa',ㅠㅠㅠㅠ: 'aaa', }
        
        const data = {
            phoneNum: query.phoneNum,
            fcmToken: query.fcmToken
            // country: 'USA'
          };
          // Add a new document in collection "cities" with ID 'LA'
          const res = await db.collection('cities').doc().set(data)
          .then(() => {
            response.send("Added order"+query.phoneNum+"    "+query.fcmToken);
            // response.send("Added order"+body.phoneNum+"    "+body.fcmToken);
          }, (error) => {
            response.send("Fail");
          });
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

