const danceAppDAO = require('../models/danceAppModel');
const db = new danceAppDAO();
const DateFormatter = require('../utils/dateFormatter');

db.init();

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
};
