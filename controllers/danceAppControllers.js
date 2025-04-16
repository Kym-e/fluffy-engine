const danceAppDAO = require('../models/danceAppModel');
const db = new danceAppDAO('./data/danceApp.db');
const DateFormatter = require('../utils/dateFormatter');
const userDao = require("../models/userModel.js");

// db.init();

// Static Pages
exports.landing_page = function(req, res) {
    res.render('landing',
        {'title': 'Dance App',}
    )
}

exports.about_page = function(req, res) {
    res.render('about',
        {
            'title': 'About Us',
            'GOOGLE_MAPS_API_KEY': process.env.GOOGLE_MAPS_API_KEY,
        }
    )
}

exports.contact_page = function(req, res) {
    res.render('contact_us',
        {
            'title': 'Contact Us',
            'GOOGLE_MAPS_API_KEY': process.env.GOOGLE_MAPS_API_KEY,
        }
    )
}

// Courses Pages
exports.courses_page = function(req, res) {
    const success = req.query.success === 'true';
    db.getAllEntries()
        .then((list) => {
            const formattedList = list.map(course => ({
                ...course,
                course_start_date: DateFormatter.format(course.course_start_date),
                course_end_date: DateFormatter.format(course.course_end_date),
            }));
            res.render('courses',
                {
                    'title': 'Courses',
                    'GOOGLE_MAPS_API_KEY': process.env.GOOGLE_MAPS_API_KEY,
                    'courses': formattedList,
                    'success':success,
                }
            );
        })
        .catch((err) => {
            console.log("promise rejected", err);
        });
}

exports.course_detail_page = function(req, res) {
    let course = req.params.course;
    db.getEntriesByCourse(course)
        .then((entries) => {
            const formattedEntries = entries.map(entry => ({
                ...entry,
                course_start_date: DateFormatter.format(entry.course_start_date),
                course_end_date: DateFormatter.format(entry.course_end_date),
            }));


            res.render('course_detail',
                {
                    'title': `${course}`,
                    'GOOGLE_MAPS_API_KEY': process.env.GOOGLE_MAPS_API_KEY,
                    'course': course,
                    'entries': formattedEntries,
                }
            );
        })
        .catch((err) => {
            console.log("Error: ");
            console.log(JSON.stringify(err));
        });
}

// Course Booking Page
exports.new_booking = function(req, res) {
    const course = req.params.course;
    res.render('newBooking', {
        'title': 'Book a Course',
        'course': course,
    });
}

exports.post_new_booking = function(req, res) {
    let name = req.body.name;
    let course_booked = req.body.course_booked;
    let isUnderEighteen = req.body.isUnderEighteen;
    let email = req.body.email;
    let additionalInfo = req.body.additionalInfo;

    db.addCourseBooking(name, course_booked, isUnderEighteen, email, additionalInfo);
    res.redirect('/courses?success=true');
};

// Login
exports.login_page = function (req, res) {
    res.render("user/login_page",
        {'title': 'Login','user': "user",}
    );
};

exports.post_login = function (req, res) {
    res.render("organiser/organiserView", {
        title: "Organiser View",
        user: "user"
    });
};

exports.loggedIn_landing = function(req, res) {
    res.render('landing',
        {
            'title': 'Dance App',
            'user': "user",
        }
    )
}

// Logout
exports.logout = function (req, res) {
    res.clearCookie("jwt").status(200).redirect("/");
    console.log("Logged out");
};

// Register
exports.register_page = function (req, res) {
    res.render("user/register_page.mustache",
        {
            'title': 'Register',
            'user': "user",
        }
    );
};

exports.post_register = function (req, res) {
    const user = req.body.username;
    const password = req.body.password;

    if (!user || !password) {
        res.send(401, "no user or no password");
        return;
    }
    userDao.lookup(user, function (err, u) {
        if (u) {
            res.send(401, "User exists:", user);
            return;
        }
        userDao.create(user, password);
        console.log("register user", user, "password", password);
        res.redirect('/organiser?success=true');
    });
};

// Organiser View
exports.organiser_page = function(req, res) {
    const success = req.query.success === 'true';
    res.render('organiser/organiserView',
        {
            'title': 'Organiser View',
            'user': "user",
            'success':success,
        }
    )
}

// Create Course
exports.create_course_page = function(req, res) {
    res.render('organiser/create_course',
        {
            'title': 'Create Course',
            'user': 'user',
        }
    )
}

exports.post_create_course = function(req, res) {
    let course = req.body.course;
    let youtube_embed = req.body.youtube_embed;
    let course_description = req.body.course_description;
    let course_duration = req.body.course_duration;
    let course_start_date = req.body.course_start_date;
    let course_end_date = req.body.course_end_date;
    let course_time = req.body.course_time;
    let course_fee = req.body.course_fee;
    let course_schedule = req.body.course_schedule;
    let course_location = req.body.course_location;
    let instructor = req.body.instructor;
    let instructor_bio = req.body.instructor_bio;
    let isBeginner = req.body.isBeginner;
    let isIntermediate = req.body.isIntermediate;
    let isAdvanced = req.body.isAdvanced;
    db.addCourse(course, youtube_embed, course_description, course_duration, course_start_date, course_end_date, course_time, course_fee, course_schedule, course_location, instructor, instructor_bio, isBeginner, isIntermediate, isAdvanced);
    res.redirect('/organiser?success=true');
};

// Delete Course
exports.delete_course_page = function(req, res) {
    db.getAllEntries()
        .then((list) => {
            const formattedList = list.map(course => ({
                ...course,
                course_start_date: DateFormatter.format(course.course_start_date),
                course_end_date: DateFormatter.format(course.course_end_date),
            }));
            res.render('organiser/delete_course',
                {
                    'title': 'Delete Course',
                    'courses': formattedList,
                    'user': "user",
                }
            );
        })
        .catch((err) => {
            console.log("promise rejected", err);
        });

}

exports.post_delete_course = function(req, res) {
    let course = req.body.course;
    db.deleteCourse(course);
    res.redirect('/organiser?success=true');
};

// Delete User
exports.delete_user_page = function(req, res) {
    userDao.getAllUsers()
        .then((list) => {
            res.render('user/delete_user',
                {
                    'title': 'Delete User',
                    'users': list,
                    'user': "user",
                }
            );
        })
        .catch((err) => {
            console.log("promise rejected", err);
        });
}

exports.post_delete_user = function(req, res) {
    let user = req.body.user;
    userDao.delete(user);
    res.redirect('/organiser?success=true');
};

// Update Course
exports.update_course_page = function(req, res) {
    db.getAllEntries()
        .then((list) => {
            const formattedList = list.map(course => ({
                ...course,
                course_start_date: DateFormatter.format(course.course_start_date),
                course_end_date: DateFormatter.format(course.course_end_date),
            }));
            res.render('organiser/update_course',
                {
                    'title': 'Update Course',
                    'courses': formattedList,
                    'user': "user",
                }
            );
        })
        .catch((err) => {
            console.log("promise rejected", err);
        });
}

exports.update_course_detail_page = function(req, res) {
    let course = req.params.course;
    db.getEntriesByCourse(course)
        .then((entries) => {
            const formattedEntries = entries.map(entry => ({
                ...entry,
                course_start_date: DateFormatter.format(entry.course_start_date),
                course_end_date: DateFormatter.format(entry.course_end_date),
            }));

            res.render('organiser/update_course_detail',
                {
                    'title': `${course}`,
                    'course': course,
                    'entries': formattedEntries,
                    'user': "user",
                }
            );
        })
        .catch((err) => {
            console.log("Error: ");
            console.log(JSON.stringify(err));
        });
}

exports.post_update_course = function(req, res) {
    let course = req.body.course;
    let youtube_embed = req.body.youtube_embed;
    let course_description = req.body.course_description;
    let course_duration = req.body.course_duration;
    let course_start_date = req.body.course_start_date;
    let course_end_date = req.body.course_end_date;
    let course_time = req.body.course_time;
    let course_fee = req.body.course_fee;
    let course_schedule = req.body.course_schedule;
    let course_location = req.body.course_location;
    let instructor = req.body.instructor;
    let instructor_bio = req.body.instructor_bio;
    let isBeginner = req.body.isBeginner;
    let isIntermediate = req.body.isIntermediate;
    let isAdvanced = req.body.isAdvanced;

    db.updateCourse(course, youtube_embed, course_description, course_duration, course_start_date, course_end_date, course_time, course_fee, course_schedule, course_location, instructor, instructor_bio, isBeginner, isIntermediate, isAdvanced);
    res.redirect('/organiser?success=true');
};

// Get Course list
exports.get_course_list_page = function(req, res) {
    db.getAllEntries()
        .then((list) => {
            const formattedList = list.map(course => ({
                ...course,
                course_start_date: DateFormatter.format(course.course_start_date),
                course_end_date: DateFormatter.format(course.course_end_date),
            }));
            res.render('organiser/view_course',
                {
                    'title': 'Get Course List',
                    'courses': formattedList,
                    'user': "user",
                }
            );
        })
        .catch((err) => {
            console.log("promise rejected", err);
        });
}

exports.get_course_list_detail_page = function(req, res) {
    let course = req.params.course;
    db.getEntriesByCourseAndBooking(course)
        .then((entries) => {
            const formattedEntries = entries.map(entry => ({
                ...entry,
                course_start_date: DateFormatter.format(entry.course_start_date),
                course_end_date: DateFormatter.format(entry.course_end_date),
            }));

            res.render('organiser/view_course_detail',
                {
                    'title': `${course}`,
                    'course': course,
                    'entries': formattedEntries,
                    'user': "user",
                }
            );
        })
        .catch((err) => {
            console.log("Error: ");
            console.log(JSON.stringify(err));
        });
}