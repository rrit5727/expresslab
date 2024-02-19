//load express
const express = require('express');
const path = require('path');

//require the students 'database'
const todoDb = require('./data/students-db');
const studentsDb = require('./data/students-db');

//create our express app
const app = express();

//Configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Mount middleware (app.use)


//Mount routes


//Define a 'root' route directly on app
app.get('/students', function(req, res) {
    const students = studentsDb.getAll();
    res.render('students/index', { students });
})






