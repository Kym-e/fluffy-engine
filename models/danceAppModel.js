const nedb = require('gray-nedb');

class DanceApp {

    constructor(dbFilePath) {
        if (dbFilePath) {
            this.db = new nedb({ filename: dbFilePath, autoload: true });
            console.log('DB connected to ' + dbFilePath);
        } else {
            this.db = new nedb();
            console.log('DB created in memory');
        }
    }

    init() {
        this.db.insert(
            {
                course: 'Beginners Salsa',
                course_description: 'Salsa is a popular form of social dance that originated in the Caribbean. ' +
                    'This course is designed for beginners who want to learn the basics of salsa dancing.  ' +
                    'The course will cover basic steps, turns, and partner work. No prior dance experience is required.',
                course_duration: '6 weeks',
                course_start_date: new Date('2023-10-01'),
                course_end_date: new Date('2023-11-12'),
                course_time: '10:00 AM - 11:30 AM',
                course_fee: 100,
                course_schedule: 'Every Saturday',
                course_location: 'Dance Studio A',
                instructor: 'John Doe',
                instructor_bio: 'John Doe is a professional salsa dancer with over 10 years of experience.',
                isBeginner: true,
                isIntermediate: false,
                isAdvanced: false,
                entryType: 'course',
            }
        );
        console.log('DB initialized with sample data');

        this.db.insert(
            {
                course: 'Intermediate Salsa',
                course_description: 'This course is designed for those who have completed the Beginners Salsa course. ' +
                    'The course will cover more advanced steps, turns, and partner work.',
                course_duration: '6 weeks',
                course_start_date: new Date('2023-11-01'),
                course_end_date: new Date('2023-12-12'),
                course_time: '10:00 AM - 11:30 AM',
                course_fee: 120,
                course_schedule: 'Every Saturday',
                course_location: 'Dance Studio B',
                instructor: 'Jane Smith',
                instructor_bio: 'Jane Smith is a professional salsa dancer with over 5 years of experience.',
                isBeginner: false,
                isIntermediate: true,
                isAdvanced: false,
                entryType: 'course',
            }
        );

        this.db.insert(
            {
                course: 'Advanced Salsa',
                course_description: 'This course is designed for those who have completed the Intermediate Salsa course. ' +
                    'The course will cover advanced techniques and choreography.',
                course_duration: '6 weeks',
                course_start_date: new Date('2023-12-01'),
                course_end_date: new Date('2024-01-12'),
                course_time: '10:00 AM - 11:30 AM',
                course_fee: 150,
                course_schedule: 'Every Saturday',
                course_location: 'Dance Studio C',
                instructor: 'Emily Johnson',
                instructor_bio: 'Emily Johnson is a professional salsa dancer with over 8 years of experience.',
                isBeginner: false,
                isIntermediate: false,
                isAdvanced: true,
                entryType: 'course',
            }
        );

        this.db.insert(
            {
                course: 'Ballet for Beginners',
                course_description: 'This course is designed for beginners who want to learn the basics of ballet dancing. ' +
                    'The course will cover basic positions, movements, and techniques. No prior dance experience is required.',
                course_duration: '8 weeks',
                course_start_date: new Date('2023-10-01'),
                course_end_date: new Date('2023-11-26'),
                course_time: '2:00 PM - 3:30 PM',
                course_fee: 120,
                course_schedule: 'Every Sunday',
                course_location: 'Dance Studio D',
                instructor: 'Michael Brown',
                instructor_bio: 'Michael Brown is a professional ballet dancer with over 12 years of experience.',
                isBeginner: true,
                isIntermediate: false,
                isAdvanced: false,
                entryType: 'course',
            }
        );
    }

    //a function to return all entries from the database
    getAllEntries() {
        //return a Promise object, which can be resolved or rejected
        return new Promise((resolve, reject) => {
            //use the find() function of the database to get the data,
            //error first callback function, err for error, entries for data
            this.db.find({'entryType': 'course'}, function (err, entries) {
                //if error occurs reject Promise
                if (err) {
                    reject(err);
                    //if no error resolve the promise & return the data
                } else {
                    resolve(entries);
                    //to see what the returned data looks like
                    console.log('function all() returns: ', entries);
                }
            })
        })
    }

    getEntriesByCourse(course) {
        return new Promise((resolve, reject) => {
            this.db.find({ 'course': course, 'entryType': 'course' }, function (err, entries) {
                if (err) {
                    reject(err);
                } else {
                    resolve(entries);
                    console.log('getEntriesByCourse returns: ', entries);
                }
            })
        })
    }

    getEntriesByCourseAndBooking(course) {
        return new Promise((resolve, reject) => {
            this.db.find({ 'course_booked': course, 'entryType': 'booking' }, function (err, entries) {
                if (err) {
                    reject(err);
                } else {
                    resolve(entries);
                    console.log('getEntriesByCourseAndBooking returns: ', entries);
                }
            })
        })
    }

    addCourseBooking(name, course, isUnderEighteen, email, additionalInfo) {
        var entry = {
            name: name,
            course_booked: course,
            isUnderEighteen: isUnderEighteen,
            email: email,
            additionalInfo: additionalInfo,
            entryType: 'booking',
        }
        console.log('entry created', entry);
        this.db.insert(entry, function (err, doc) {
            if (err) {
                console.log('Error inserting document', subject);
            } else {
                console.log('document inserted into the database', doc);
            }
        })
    }

    addCourse(course, youtube_embed, course_description, course_duration, course_start_date, course_end_date, course_time, course_fee, course_schedule, course_location, instructor, instructor_bio, isBeginner, isIntermediate, isAdvanced) {
        var entry = {
            course: course,
            youtube_embed: youtube_embed,
            course_description: course_description,
            course_duration: course_duration,
            course_start_date: new Date(course_start_date),
            course_end_date: new Date(course_end_date),
            course_time: course_time,
            course_fee: course_fee,
            course_schedule: course_schedule,
            course_location: course_location,
            instructor: instructor,
            instructor_bio: instructor_bio,
            isBeginner: isBeginner,
            isIntermediate: isIntermediate,
            isAdvanced: isAdvanced,
            entryType: 'course',
        }
        console.log('entry created', entry);
        this.db.insert(entry, function (err, doc) {
            if (err) {
                console.log('Error inserting document', subject);
            } else {
                console.log('document inserted into the database', doc);
            }
        })
    }

    deleteCourse(course) {
        this.db.remove({ course: course }, {}, function (err, numRemoved) {
            if (err) {
                console.log('Error deleting document', err);
            } else {
                console.log(numRemoved + ' course document(s) deleted');
            }
        })
        this.db.remove({ course_booked: course }, {multi:true}, function (err, numRemoved) {
            if (err) {
                console.log('Error deleting document', err);
            } else {
                console.log(numRemoved + ' booking document(s) deleted');
            }
        })
    }

    updateCourse(course, youtube_embed, course_description, course_duration, course_start_date, course_end_date, course_time, course_fee, course_schedule, course_location, instructor, instructor_bio, isBeginner, isIntermediate, isAdvanced){
        var entry = {
            course: course,
            youtube_embed: youtube_embed,
            course_description: course_description,
            course_duration: course_duration,
            course_start_date: new Date(course_start_date),
            course_end_date: new Date(course_end_date),
            course_time: course_time,
            course_fee: course_fee,
            course_schedule: course_schedule,
            course_location: course_location,
            instructor: instructor,
            instructor_bio: instructor_bio,
            isBeginner: isBeginner,
            isIntermediate: isIntermediate,
            isAdvanced: isAdvanced,
            entryType: 'course',

        }

        this.db.update({course: course}, {$set:entry}, {}, function (err, numUpdated){
            if (err) {
                console.log('Error updating document', err);
            } else {
                console.log(numUpdated + ' document(s) updated');
            }}

        )
    }
}

//make the module visible outside
module.exports = DanceApp;

