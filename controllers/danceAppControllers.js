const danceAppDAO = require('../models/danceAppModel');
const db = new danceAppDAO();

// db.init();

exports.landing_page = function(req, res) {
    res.render('landing',
        {'title': 'Dance App'}
    )
}
