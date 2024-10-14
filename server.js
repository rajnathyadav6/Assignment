const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config(); // To use environment variables

const contactRoutes = require('./routes/contactRoutes'); // Importing the routes

// routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Route to insert 20 persons
router.post('/insertMultiplePersons', contactController.insertMultiplePersons);

module.exports = router;

const app = express();
app.use(bodyParser.json());

// Use the contact routes
app.use('/contact', contactRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
const Person = require('./models/Person');  // Importing the model from the correct path


// Importing the Person model
const Person = require('./models/Person');

// Function to insert 20 persons into MongoDB
exports.insertMultiplePersons = async (req, res) => {
  // Array of 20 person objects to be inserted into MongoDB
  const persons = [
    { first_name: 'John', last_name: 'Doe', email: 'john1@example.com', mobile_number: '1234567890' },
    { first_name: 'Jane', last_name: 'Doe', email: 'jane1@example.com', mobile_number: '1234567891' },
    { first_name: 'Bob', last_name: 'Smith', email: 'bob@example.com', mobile_number: '1234567892' },
    { first_name: 'Alice', last_name: 'Brown', email: 'alice@example.com', mobile_number: '1234567893' },
    { first_name: 'Charlie', last_name: 'Johnson', email: 'charlie@example.com', mobile_number: '1234567894' },
    { first_name: 'Emily', last_name: 'Davis', email: 'emily@example.com', mobile_number: '1234567895' },
    { first_name: 'David', last_name: 'Miller', email: 'david@example.com', mobile_number: '1234567896' },
    { first_name: 'Sophie', last_name: 'Wilson', email: 'sophie@example.com', mobile_number: '1234567897' },
    { first_name: 'Lucas', last_name: 'Taylor', email: 'lucas@example.com', mobile_number: '1234567898' },
    { first_name: 'Olivia', last_name: 'Anderson', email: 'olivia@example.com', mobile_number: '1234567899' },
    { first_name: 'Mason', last_name: 'Thomas', email: 'mason@example.com', mobile_number: '2234567890' },
    { first_name: 'Ella', last_name: 'Moore', email: 'ella@example.com', mobile_number: '2234567891' },
    { first_name: 'Noah', last_name: 'Martin', email: 'noah@example.com', mobile_number: '2234567892' },
    { first_name: 'Liam', last_name: 'Jackson', email: 'liam@example.com', mobile_number: '2234567893' },
    { first_name: 'Ava', last_name: 'White', email: 'ava@example.com', mobile_number: '2234567894' },
    { first_name: 'Ethan', last_name: 'Harris', email: 'ethan@example.com', mobile_number: '2234567895' },
    { first_name: 'Chloe', last_name: 'Clark', email: 'chloe@example.com', mobile_number: '2234567896' },
    { first_name: 'Benjamin', last_name: 'Lewis', email: 'benjamin@example.com', mobile_number: '2234567897' },
    { first_name: 'Mia', last_name: 'Robinson', email: 'mia@example.com', mobile_number: '2234567898' },
    { first_name: 'James', last_name: 'Walker', email: 'james@example.com', mobile_number: '2234567899' }
  ];

  try {
    // Use insertMany to insert multiple documents at once into MongoDB
    const insertedPersons = await Person.insertMany(persons);

    // Send success response
    res.status(201).json({
      message: '20 persons inserted successfully',
      insertedPersons
    });
  } catch (error) {
    // Handle any errors during insertion
    res.status(500).json({
      message: 'Error inserting persons',
      error: error.message
    });
  }
};
