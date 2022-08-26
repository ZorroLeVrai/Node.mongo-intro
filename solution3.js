const Course = require('./course');

async function getCourses()
{
  return await Course
    .find({ isPublished: true})
    .or([{ price: { $gte: 15 }}, { name: /.*by.*/i}]);
}

async function run()
{
  const courses = await getCourses();
  console.log('courses', courses);
}

run();