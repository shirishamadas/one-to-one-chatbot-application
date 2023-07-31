const Users = require('../model/user');
const jwt_decode = require("jwt-decode");

const addUser = async (req,res) => {
    console.log(req, 'reqqqqqqqqqqqqqqq', res, 'resssssssssss')
    try{
        let existingUser = await Users.findOne({googleId: req.body.googleId})
        if(existingUser){
            res.status(200).json("user already exists")
            return
        }
        var token = req.body.credential;
        var decoded = jwt_decode(token);
        console.log(decoded);
        console.log(new Users())
        const newUser = await new Users({
            googleId: req.body.clientId,
            imageUrl: decoded.picture,
            email: decoded.email,
            name: decoded.name,
            givenName: decoded.given_name,
            familyName: decoded.family_name,
        })
         await newUser.save(function(error) {
           if(error) console.log(error)
        });
        res.send({status: 200, data: newUser})
    }catch(error){
        res.status(500).json(error)
    }
}

const getUsers = async (req,res) => {
    try{
        const users = await Users.find({});
        res.status(200).send(users);
    } catch(error){
        res.status(500).send(error);
    }
}

module.exports = {
    addUser,
    getUsers
}