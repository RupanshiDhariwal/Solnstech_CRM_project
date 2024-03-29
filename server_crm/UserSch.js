const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    adminemail: {
        type:String,
        required:true,
    }, 
    type: {
        type: String,
        default: "user",
    },
    date: {
        type: Date,
        default: Date.now
    }
})

mongoose.model("User",UserSchema);