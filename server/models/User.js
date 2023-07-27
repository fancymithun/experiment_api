const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    id : {
        type: Number,
    },
    username : {
        required: true,
        unique: true,
        type : String
    },
    phone : {
        required: true,
        unique : true,
        type : Number
    },
    password: {
        required : true,
        type: String
    }
})


module.exports = mongoose.model('User',userSchema)