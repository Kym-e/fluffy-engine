const danceAppDAO = require('../models/danceAppModel');
const db = new danceAppDAO('./data/danceApp.db');
const DateFormatter = require('../utils/dateFormatter');

// db.init();

exports.landing_page = function(req, res) {
    res.render('landing',
        {'title': 'Dance App'}
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
                    'success':success
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
