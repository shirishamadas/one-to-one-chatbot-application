const Users = require('../model/user');

const addUser = async (req,res) => {
    try{
        let existingUser = await Users.findOne({googleId: req.body.googleId})
        if(existingUser){
            res.status(200).json("user already exists")
            return
        }
        console.log(req.body);
        console.log(new Users())
        const newUser = await new Users({
            googleId: req.body.googleId,
            imageUrl: req.body.imageUrl,
            email:req.body.email,
            name:req.body.name,
            givenName:req.body.givenName,
            familyName:req.body.familyName
        })
        await newUser.save(function(error) {
           if(error) console.log(error)
        });
        // res.status(200).json("user sucessfully added")
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