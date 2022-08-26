const mongoose = require('mongoose');

//Here is how to connect to the MongoDB database
const DB_CONNECTION_STRING = 'mongodb://localhost/';
const databaseName = 'mongo-exercises';
const databaseUri = DB_CONNECTION_STRING.concat(databaseName);
mongoose.connect(databaseUri)
  .then(() => console.log(`Connected to MongoDB (${databaseUri})...`))
  .catch(err => console.error('Could not connect to MongoDB (${databaseUri})...', err));

//define the shape of course documents in our MongoDB database
const courseSchema = new mongoose.Schema({
  //tags is an array of strings
  tags: [ String ],
  date: { type: Date, default: Date.now },
  name: String,
  author: String,
  isPublished: Boolean,
  price: Number
});

//Compile the schema into a model. This generates the 'Course' class
//The first parameter is the model name. It should be a singular name
const Course = mongoose.model('Course', courseSchema);

module.exports = Course;