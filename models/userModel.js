const Datastore = require("gray-nedb");
const bcrypt = require('bcrypt');
const saltRounds = 10;

class UserDAO {
    constructor(dbFilePath) {
        if (dbFilePath) {
            //embedded
            this.db = new Datastore({ filename: dbFilePath,
                autoload: true });
        } else {
            //in memory
            this.db = new Datastore();
        }
    }

    create(username, password) {
        const that = this;
        bcrypt.hash(password, saltRounds).then(function(hash) {
            const entry = {
                user: username,
                password: hash,
            };
            that.db.insert(entry, function (err) {
                if (err) {
                    console.log("Can't insert user: ", username);
                }
            });
        });
    }
    lookup(user, cb) {
        this.db.find({'user': user}, function (err, entries) {
            if (err) {
                return cb(null, null);
            } else {
                if (entries.length === 0) {
                    return cb(null, null);
                }
                return cb(null, entries[0]);
            }
        });
    }
    delete(user, cb) {
        this.db.remove({'user': user}, {}, function (err, numRemoved) {
            if (err) {
                console.log('Error deleting document', err);
            } else {
                console.log(numRemoved + ' document(s) deleted');
            }
        });
    }
    getAllUsers() {
        return new Promise((resolve, reject) => {
            this.db.find({}, function (err, entries) {
                if (err) {
                    reject(err);
                } else {
                    resolve(entries);
                }
            });
        });
    }
}
const dao = new UserDAO("./data/users.db");
// dao.init();

module.exports = dao;