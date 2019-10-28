const mongoose = require('mongoose');

const tasklistSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    tasklist_id: Number,
    name: String,
});

const TaskList = mongoose.model('TaskList', tasklistSchema);
module.exports = TaskList;
