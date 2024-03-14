const express = require('express');
const {addStudent, getStudent} = require('../Controller/StudentInfoController');
const router = express.Router();

router.post('/addStudentData', addStudent)
      .get('/getStudent', getStudent);

module.exports = router;