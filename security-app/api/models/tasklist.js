const mongoose = require('mongoose');

const tasklistSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    tasklist_id: Number,
    name: String,
});

module.exports = mongoose.model('TaskList', tasklistSchema);
