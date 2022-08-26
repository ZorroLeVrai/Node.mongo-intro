const Course = require('./course');

async function getCourses()
{
  return await Course
    .find({ isPublished: true, tags: 'backend'})
    .sort({name: 1})
    .select({name: 1, author: 1});
}

async function run()
{
  const courses = await getCourses();
  console.log('courses', courses);
}

run();