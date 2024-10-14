// models/Person.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Assuming your Sequelize instance is in config/db.js

const Person = sequelize.define('Person', {
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  mobile_number: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Person;
