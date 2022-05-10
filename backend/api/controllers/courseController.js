const mongoose = require('mongoose');
const task = mongoose.model('course');

exports.list_all_tasks = (req, res) => {

    course.find({}).then((course) => res.json({course: course}))
    .catch((error) => {
        res.status(400).json({ message: 'something wrong!!' })
        console.log(error);
    })
}