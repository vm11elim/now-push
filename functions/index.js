const Fstore = require("./firestore");

// exports.get = Fstore;

exports.put = Fstore.put;
exports.get = Fstore.get;
// firebase.functions().useEmulator("localhost", 5001);

// --- //region("asia-northeast1");티어1 가격. region("asia-northeast3");티어3 가격.
const functions = require("firebase-functions").region("asia-northeast3");
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.json({
    "name": "식빵",
    "family": "웰시코기",
    "age": 1,
    "weight": 2.14,
  });
  response.send("Hello inside index.js");
  functions.logger.info("Hello logs!", {structuredData: true});
});
//
