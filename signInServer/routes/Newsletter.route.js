const express = require('express');
const router = express.Router();

const NewsletterController = require('../controllers/Newsletter.controller');

router.get("", NewsletterController.countAllEmailSignUps);
router.post("", NewsletterController.newsletterSignUp);
router.get("/pictures", NewsletterController.getEmailPictures);

//DEV ONLY
// router.post("/clear", NewsletterController.clearNewsletterSignUps);
// router.get("/sign-ups", NewsletterController.getAllNewsletterSignUps);

module.exports = router;