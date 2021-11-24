const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config()


const user = process.env.MONGO_USERNAME;
const pass = process.env.MONGO_PASSWORD;


// console.log("user",user);
// console.log("pass",pass)
const connection = async () => {
    const URL = `mongodb+srv://${user}:${pass}@chatapp.v8yab.mongodb.net/WHATSAPPCLONE?retryWrites=true&w=majority`;
    try{
        console.log("started")
        mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true }).then(() => {
            console.log("database connected successfully")
        }).catch(err => {
            console.log(err)
        })
        // console.log("database connected successfully")
        
    }catch(err){
        console.error(err)
    }
}
connection();

// module.exports = connection;