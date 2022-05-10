const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema(
    {
        coursName: {
            type: String,
        },
    },
    { timestamps: true, versionKey: false },
    { collation: 'task' }
)

module.exports = mongoose.model('course', courseSchema);