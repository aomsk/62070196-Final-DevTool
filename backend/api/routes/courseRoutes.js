const courseBuilder = require('../controllers/courseController');
module.exports = app => {
    app
        .route('/course')
        .get(courseBuilder.list_all_tasks)
}