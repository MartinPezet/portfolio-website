const createError = require('http-errors');
const mongoose = require("mongoose");
const NewsletterUser = require("../dataTypes/Newsletter.model");
const User = require("../dataTypes/User.model");

mongoose.set('strictQuery', false);

module.exports = {
    newsletterSignUp: async (req, res) => {
        try {
            console.log(req.body)
            // Validate email address
            if (req.body.email === "" || !req.body.email) {
                res.status(400).send({ "message": "Invalid email address" });
                return;
            }

            // Is a Users email but is not logged in
            const sameResult = User.findOne({ email: req.body.email}).select('email');
            if(!!sameResult && req.body.email !== req.user?.email && !req.user?.email) {
                res.status(403).send({ "message": "Please login to sign up" });
                return;
            }

            let findOptions = {
                query: {
                    email: req.body.email
                },
                update: req.body,
                options: {
                    upsert: true
                }
            };
            const result = await NewsletterUser.findOneAndUpdate(findOptions.query, findOptions.update, findOptions.options);

            res.status(200).send({ message: "Successfully updated" });

        } catch (error) {
            res.status(500).send({ message: "failure", error: error });
        }
    },
    
    countAllEmailSignUps: async (req, res) => {
        try {
            // Get total in email list
            NewsletterUser.count({}).then(count => {
                if (count) {
                    res.status(200).json({count: count.toString()});
                    return
                }
                console.log("Failed ", count)
                res.status(400).json({message: "Could not find a count"})
            });
        } catch (error) {
            console.error(error);
        }
    },

    getEmailPictures: async (req, res) => {
        try {
            // Get up to 5 people's pictures from newsletter table
            NewsletterUser.find({ acceptedPictureUse: true }).limit(5).select('email').then(result => {
                const emailList = result.map(doc => doc.email);
                User.find({ email: { $in: emailList } }).select('pictureLink').then(result => {
                    res.status(200).send({pictures: result.map(doc => doc.pictureLink)});
                })
            })
        } catch (error) {
            console.error(error);
            res.status
        }
    },

    // DEV ONLY!!!!!
    
    getAllNewsletterSignUps: async (req, res) => {
        try {
            NewsletterUser.find().then(result => {
                res.status(200).json(result);
            })
            
        } catch (error) {
            res.status(500).send(error, { message: "failure"});
        }
    },

    clearNewsletterSignUps: async (req, res) => {
        try {
            NewsletterUser.deleteMany().then(() => {
                res.status(200).send({"message": "Success!"});
            });
        } catch (error) {
            console.error(error);
        }
    }
}