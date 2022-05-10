const courseBuilder = require('../controllers/courseController');
const roundBuilder = require('../controllers/roundController');
module.exports = app => {
    app
        .route('/course')
        .get(courseBuilder.list_all_course)

    app
        .route('/round')
        .get(roundBuilder.list_all_round)
}