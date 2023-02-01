const createError = require('http-errors');
const mongoose = require("mongoose");
const User = require("../dataTypes/User.model");

mongoose.set('strictQuery', false);

module.exports = {

    createUser: async ({body:body}, res) => {
        try {
            // ADD THIS!!!!!! - Check if user already exists
            const user = new User(body);
            const result = await user.save();
            res.send(result);
        } catch (error) {
            console.log(error.message);
        }
    },

    updateUser: async (body, id, res) => {
        try {
            // ADD THIS!!!!!! - Check if user already exists
            //const user = new User(body);
            //const _id = id.split('"')[1]
            console.log(body);
            const result = await User.updateOne({_id: id.id}, {$set: {
                displayName: body.body.displayName,
                name: body.body.name,
                pictureLink: body.body.pictureLink,
                email: body.body.email
            }}).then(result => {
                res.send("Updated successfully");
            });
        } catch (error) {
            console.log(error.message);
        }
    },





    getAllUsers: async (req, res, next) => {
        try {
            const results = await User.find({}, { __v:0 });

            res.send(results);
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
    },

    deleteUser: async (req, res, next) => {
        res.send("Working")
    },

    // Get Number of Users
};