const express = require ('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require ('dotenv')
const database = require('./config/database.js');
const Room  = require ('./routes/Room.js')
const Message = require ('./routes/Message.js');
const Pusher = require("pusher");
const mongoose = require('mongoose');

const pusher = new Pusher({
  appId: "1669288",
  key: "0fa92355187a5945338a",
  secret: "547f087bd51d00a258a3",
  cluster: "eu",
  useTLS: true
});

dotenv.config();

const app = express();
app.use(bodyParser.json({limit: '30mb', extended:true}))
app.use(bodyParser.urlencoded({limit: '30mb', extended:true}))
app.use(cors());
app.use('/', Room)
app.use('/', Message)

const PORT =5000;

database()
const db = mongoose.connection;
db.once ("open" , () => {
    console.log("artık baglanabilir misin?")
    const roomCollection = db.collection('rooms')
    const changeStream = roomCollection.watch ();

    changeStream.on('change', (change) => {
        if(change.operationType === "insert") {
            const roomDetails = change.fullDocument;
            pusher.trigger ('rooms', 'inserted' , roomDetails)

        } else {
            console.log ("trigger olayın gerçeklesmedi...")
        }
    })


const msgCollection = db.collection('messages');
const changeStream1 = msgCollection.watch();

changeStream1.on('change', (change) => {
    if(change.operationType === "insert") {
        const messageDetails = change.fullDocument;
        pusher.trigger ('messages', 'inserted' , messageDetails)

    } else {
        console.log ("trigger olayın gerçeklesmedi...")
    }
})
})


app.listen(PORT, () => {

    console.log("server is running port", PORT)
})