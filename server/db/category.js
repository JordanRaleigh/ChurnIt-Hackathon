const db = require('./database');
const Sequelize = require('sequelize');

const Category = db.define('category', {
  category: {
    type: Sequelize.STRING,
  },
});

module.exports = Category;
