const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    _id: mongoose.Schema.type.ObjectId,
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    rollno: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    roomno: {
        type: Number,
        default: null
    }
});
module.exports = mongoose.model('user',userschema);