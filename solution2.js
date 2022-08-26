const Course = require('./course');

async function getCourses()
{
  return await Course
    .find({ isPublished: true, tags: { $in: ['backend', 'frontend']}})
    //.or([{ tags: 'backend'}, { tags: 'frontend'}])
    .sort({price: -1})
    .select({name: 1, author: 1, price: 1});
}

async function run()
{
  const courses = await getCourses();
  console.log('courses', courses);
}

run();