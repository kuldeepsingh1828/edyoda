var express = require('express');
var router = express.Router();
var tasks = [
    {
        id: 1,
        title: 'Learn JavaScript',
        description: 'Learn JavaScript basics',
        isCompleted: false,
        createDate: new Date(),
    },
];
/* GET home page. */
router.get('/', function (req, res, next) {
    res.json(tasks);
});

// POST request to add a new task
router.post('/', function (req, res, next) {
    tasks.push({ id: tasks.length + 1, createDate: new Date(), isCompleted: false, ...req.body });
    res.json({ message: 'Task added successfully' })
});

module.exports = router;
