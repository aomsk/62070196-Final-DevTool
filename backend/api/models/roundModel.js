const mongoose = require('mongoose')

const roundSchema = new mongoose.Schema(
    {
        roundName: {
            type: String,
        },
    },
    { timestamps: true, versionKey: false },
    { collation: 'task' }
)

module.exports = mongoose.model('round', roundSchema);