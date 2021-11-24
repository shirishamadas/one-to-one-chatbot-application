const express = require('express');
const cors = require('cors');
// const connection = require('./database/db');
const router = require('./routes/route');
const dbConnection = require('mongoose');
// const { connections } = require('mongoose');
const dbConfig = require('./config/dev')
const app = express();
// const mongoose = require('./database/db')
dbConnection.connect(dbConfig.mongoURI,{  useNewUrlParser: true });

// const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config()





// console.log("user",user);
// console.log("pass",pass)
// const connection = async () => {
//     try{
//         console.log("started")
//         mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true }).then(() => {
//             console.log("database connected successfully")
//         }).catch(err => {
//             console.log(err)
//         })
//         // console.log("database connected successfully")
//         return
//     }catch(err){
//         console.error(err)
//     }
// }

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors());

// connection()
// app.use(async (req,res,next) => {
//     req.user = process.env.MONGO_USERNAME;
//     req.pass = process.env.MONGO_PASSWORD;
// })
// app.use('/',connection)
app.use('/', router);

const PORT = 5000



app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})