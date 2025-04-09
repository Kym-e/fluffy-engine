const nedb = require('gray-nedb');

class DanceApp {
    constructor(dbFilePath) {
        if (dbFilePath) {
            this.db = new nedb({ filename: dbFilePath, autoload: true });
            console.log('DB connected to ' + dbFilePath);
        } else {
            this.db = new nedb();
        }
    }

    // init() { /* TODO document why this method 'init' is empty */ }
}

//make the module visible outside
module.exports = DanceApp;