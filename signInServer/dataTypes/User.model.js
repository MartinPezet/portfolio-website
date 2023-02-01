const { Int32 } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    authType: {
        type: String,
        required: true
    },
    displayName: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    permissionLevel: {
        type: Number,
        required: true
    },
    pictureLink: {
        type: String,
        required: false
    }

});

const User = mongoose.model("user", userSchema);
module.exports = User;