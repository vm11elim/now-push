// const functions = require('firebase-functions')
const functions = require('firebase-functions').region("asia-northeast3")

const express = require("express")
const app = express();
const todosRouter = require('./api/controllers/todos_controller')
const peersRouter = require('./api/controllers/peers_controller')

app.use(express.json())
app.use('/todos', todosRouter)
app.use('/peers', peersRouter)

exports.api = functions.https.onRequest(app)

// To handle "Function Timeout" exception
exports.functionsTimeOut = functions.runWith({
    timeoutSeconds: 300
})

exports.setupdb = functions.https.onRequest(require('./setup_database'))
