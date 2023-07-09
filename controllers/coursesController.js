const Course = require('../models/Course');

const getCourses = async (req, res) => {
  try {
    const courses = await Course.findAll({
      where: {
        isAvailable: true
      }
    });
    res.json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

const addCourse = async (req, res) => {
  try {
    const { name, isAvailable } = req.body;
    const course = await Course.create({ name, isAvailable });
    res.json(course);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

module.exports = { getCourses, addCourse };
