const mongoose = require('mongoose');
const course = mongoose.model('course');

exports.list_all_course = (req, res) => {

    course.find({}).then((course) => res.json({courses: course}))
    .catch((error) => {
        res.status(400).json({ message: 'something wrong!!' })
        console.log(error);
    })
}