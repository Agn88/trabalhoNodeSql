const express = require('express');
const router = express.Router();
const { getCourses, addCourse } = require('../controllers/coursesController');

router.get('/', getCourses);
router.post('/', addCourse);

module.exports = router;
