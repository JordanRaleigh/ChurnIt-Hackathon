const db = require('./database');
const Sequelize = require('sequelize');

const Perk = db.define('perk', {
  creditCardId: {
    type: Sequelize.INTEGER,
  },
  categoryId: {
    type: Sequelize.INTEGER,
  },
  points: {
    type: Sequelize.DECIMAL,
  },
});

module.exports = Perk;
