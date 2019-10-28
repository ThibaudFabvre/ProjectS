/*
 * Require
 */
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 4000;

const Mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

Mongoose.connect('mongodb://localhost:27017/projectS');
const uri = process.env.ATLAS_URI;
Mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = Mongoose.connection;

connection.once('open', () => {
    console.log('Conntected to database successfuly');
});

const taskManagerRouter = require('api/routes/tasklist');
/*
 * Vars
 */
app.use('/management/task-manager', taskManagerRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
