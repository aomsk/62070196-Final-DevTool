const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
global.course = require('./api/models/courseModel')
global.round = require('./api/models/roundModel')
const routes = require('./api/routes/allRoutes')

// mongoose.connect(
//     'mongodb://localhost:27017/course_kmitl',
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     }

// );

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

mongoose.connect('mongodb+srv://root:12345@cluster0.n01um.mongodb.net/course_kmitl?retryWrites=true&w=majority', options);

const port = process.env.PORT || 3000;
if (port == null || port == "") {
    port = 3000
}

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

routes(app)
app.listen(port)

app.get('/', (req, res) => {
    res.send({
        status: 'OK'
    })
})

app.get('/health', (req, res) => {
    res.send();
})

console.log(`Server started on port ${port}`);