const { Int32 } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    permissionLevel: {
        type: Int32,
        required: true
    }

});

const User = mongoose.model("user", userSchema);
module.exports = User;