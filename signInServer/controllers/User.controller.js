const createError = require('http-errors');
const mongoose = require("mongoose");
const User = require("../dataTypes/User.model");

mongoose.set('strictQuery', false);

module.exports = {
    getAllUsers: async (req, res, next) => {
        try {
            const results = await User.find({}, { __v:0 });

            res.send(results);
        } catch (error) {
            console.log(error.message);
        }
    },

    createUser: async (req, res, next) => {
        try {
            // ADD THIS!!!!!! - Check if user already exists

            const user = new User(req.body);
            const result = await user.save();
            res.send(result);
        } catch (error) {
            console.log(error.message);
        }
    },

    findUserById: async (req, res, next) => {
        const id = req.params.id;
        try {
            const user = await User.findOne({ _id:id });
            if (!user) {
                throw createError(404, 'User does not exist.');
            }
            res.send(user);
        } catch (error) {
            console.log(error.message);
            if (error instanceof mongoose.CastError) {
                next(createError(400, 'Invalid User id'));
                return;
            }
            next(error);
        };
    },

    findUserByUsername: async (req, res, next) => {
        const userName = req.params.userName;
        try {
            const user = await User.find({ userName:userName });
            if (!user) {
                throw createError(404, 'User does not exist.');
            }
            res.send(user);
        } catch (error) {
            console.log(error.message);
            if (error instanceof mongoose.CastError) {
                next(createError(400, 'Invalid User id'));
                return;
            }
            next(error);
        };
    },

    findUserByEmail: async (req, res, next) => { // Finish this function

        res.send("Working")
    }

    // Get Number of Users
};