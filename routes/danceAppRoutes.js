const express = require('express');
const router = express.Router();
const controller = require('../controllers/danceAppControllers.js');

// Add routes
router.get("/", controller.landing_page);
router.get("/about", controller.about_page);
router.get("/contact", controller.contact_page);
// Courses Pages
router.get("/courses", controller.courses_page);
router.get("/courses/:course", controller.course_detail_page);

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