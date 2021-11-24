const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    googleId: {
        type: String,

    },
    imageUrl: {
        type: String
    },
    givenName: {
        type: String
    },
    name:{
        type: String
    },
    familyName: {
        type: String
    },
    email: {
        type: String
    }
})
module.exports = mongoose.model('users', userSchema)
