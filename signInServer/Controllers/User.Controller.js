const mongoose = require("mongoose");
const User = require("../dataTypes/User.model");

module.exports = {
    getAllUsers: async (req, res, next) => {
        try {
            const results = await User.find({}, { __v:0 });

            res.send(results);
        } catch (error) {
            console.log(error.message);
        }
    }
}