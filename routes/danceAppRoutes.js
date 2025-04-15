const express = require('express');
const router = express.Router();
const controller = require('../controllers/danceAppControllers.js');

// Static Pages
router.get("/", controller.landing_page);
router.get("/about", controller.about_page);
router.get("/contact", controller.contact_page);

// Courses Pages
router.get("/courses", controller.courses_page);
router.get("/courses/:course", controller.course_detail_page);

// New Booking
router.get("/courses/:course/book", controller.new_booking);
router.post("/courses/:course/book", controller.post_new_booking);

// Login
router.get("/login", controller.login_page);
router.post("/login", controller.post_login);

// Logout
router.get("/logout", controller.logout);

// Register
router.get("/register", controller.register_page);
router.post("/register", controller.post_register);

// File Not Found
router.use(function(req, res) {
    res.status(404);
    res.type('text/plain');
    res.send('404 Not found.');
})

// Internal Server Error
router.use(function(err, req, res, next) {
    res.status(500);
    res.type('text/plain');
    res.send('Internal Server Error.');
})
module.exports = router;