const router = require('express').Router();

let TaskList = require('api/models/tasklist.model');

router.route('/tasklist').get((req, res) => {
    taskList
        .find()
        .then((tasklists) => res.json(tasklists))
        .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/tasklist/add').post((req, res) => {
    const taskListName = req.body.tasklist.name;
    const newTaskList = new TaskList({ taskListName });
    newTaskList
        .save()
        .then(() => res.json('Task List added !'))
        .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
