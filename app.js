var express = require('express');
var logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const mainRoutes = require('./routes/index');
const admin = require('firebase-admin');

dotenv.config();
var app = express();
const dbUrl = process.env.MONGODB_URI;

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
})

mongoose.connect(dbUrl, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Database connected successfully")).catch(() => "Error connecting to database.");

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', mainRoutes);

module.exports = app;
