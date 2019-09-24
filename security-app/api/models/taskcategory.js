const mongoose = require('mongoose');

const taskcategorySchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: String,
});

module.exports = mongoose.model('TaskCategory', taskcategorySchema);
