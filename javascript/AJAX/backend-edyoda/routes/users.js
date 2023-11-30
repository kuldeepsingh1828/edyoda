var express = require('express');
var router = express.Router();
let users = require('./users.json');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json(users)
});
router.post('/', function (req, res, next) {
  console.log(req.body);
  users.push({ id: users.length + 1, ...req.body });
  res.statusCode(500).json({ message: 'User added successfully' })
});

module.exports = router;
