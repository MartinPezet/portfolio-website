const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsletterSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    pictureLink: {
        type: String,
        required: false
    },
    acceptedPictureUse: {
        type: Boolean,
        required: true
    }

});

const NewsletterUser = mongoose.model("newsletter", newsletterSchema);
module.exports = NewsletterUser;