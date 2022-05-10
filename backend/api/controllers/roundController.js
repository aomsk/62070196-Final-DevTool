const mongoose = require('mongoose');
const round = mongoose.model('round');

exports.list_all_round = (req, res) => {

    round.find({}).then((round) => res.json({rounds: round}))
    .catch((error) => {
        res.status(400).json({ message: 'something wrong!!' })
        console.log(error);
    })
}