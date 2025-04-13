const danceAppDAO = require('../models/danceAppModel');
const db = new danceAppDAO();

// db.init();

exports.landing_page = function(req, res) {
    res.render('landing',
        {'title': 'Dance App'}
    )
}

exports.about_page = function(req, res) {
    res.render('about',
        {'title': 'About Us'}
    )
}

exports.contact_page = function(req, res) {
    res.render('contact_us',
        {'title': 'Contact Us'}
    )
}
