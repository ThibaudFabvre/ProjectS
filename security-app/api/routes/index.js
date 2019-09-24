/*
 * Require
 */
const express = require('express');
const app = express();
const mongo = require('mongodb');
const assert = require('assert');
const Mongoose = require('mongoose');

const TaskCategory = require('api/models/tasklist');

Mongoose.connect('mongodb://localhost:27017/projectS');

/*
 * Vars
 */
app.post('/taskcategory', async (req, res, next) => {
    try {
        const category = new TaskCategory(req.body);
        const result = await category.save();
        res.send(result);
    } catch (e) {
        res.status(500).send(error);
    }
});

app.get('/taskcategory', (req, res, next) => {
    let result = [];
    Mongoose.connect(url, (err, db) => {
        assert.equal(null, err);
        const cursor = db.collection('categories').find();
        cursor.forEach(
            (doc, err) => {
                assert.equal(null, err);
                result.push(doc);
            },
            () => {
                db.close();
                res.render('index', { items: result });
            },
        );
    });
});

app.put('/taskcategory', (req, res, next) => {
    Mongoose.connect(url, (err, db) => {
        assert.equal(null, err);
        db.collection('categories')
            .put(req.body.name, req.body.newName)
            .then((err, results) => {
                assert.equal(null, err);
                console.log('Category updated successfully');
                db.close();
            });
    });
});

app.delete('/taskcategory', (req, res, next) => {
    Mongoose.connect(url, (err, db) => {
        assert.equal(null, err);
        db.collection('categories').delete(req.body.name, (err, results) => {
            assert.equal(null, err);
            console.log('Category deleted from database');
            db.close();
        });
    });
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
