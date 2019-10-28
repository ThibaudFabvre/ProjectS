const mongoose = require('mongoose');

const taskcategorySchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: { type: String, required: true },
});

module.exports = mongoose.model('TaskCategory', taskcategorySchema);
