const express = require('express');
const router = express.Router();
const controller = require('../controllers/danceAppControllers.js');
const {login} = require('../auth/auth')
const {verify} = require('../auth/auth')

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
router.post("/login", login, controller.post_login);
router.get("/loggedIn",verify, controller.loggedIn_landing);

// Logout
router.get("/logout", controller.logout);

// Register
router.get("/register", controller.register_page);
router.post("/register", verify, controller.post_register);

// Organiser View
router.get("/organiser", verify, controller.organiser_page);

// Create Course
router.get("/createCourse", verify, controller.create_course_page);
router.post("/createCourse", verify, controller.post_create_course);

// Delete Course
router.get("/deleteCourse", verify, controller.delete_course_page);
router.post("/deleteCourse", verify, controller.post_delete_course);

// Delete User
router.get("/deleteUser", verify, controller.delete_user_page);
router.post("/deleteUser", verify, controller.post_delete_user);

// Update Course
router.get("/updateCourse", verify, controller.update_course_page);
router.get("/updateCourse/:course", verify, controller.update_course_detail_page);
router.post("/updateCourse/:course", verify, controller.post_update_course);

// Get Course list
router.get("/getCourseList", verify, controller.get_course_list_page);
router.get("/getCourseList/:course", verify, controller.get_course_list_detail_page);


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