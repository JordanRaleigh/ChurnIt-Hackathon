// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require('./database');
const Account = require('./account');
const Category = require('./category');
const Perk = require('./perk');
const CreditCard = require('./creditCard');

// This is a great place to establish associations between your models
// (https://sequelize-guides.netlify.com/association-types/).

CreditCard.belongsToMany(Category, { through: Perk });
Category.belongsToMany(CreditCard, { through: Perk });
Account.belongsTo(CreditCard);
CreditCard.hasMany(Account);

module.exports = {
  // Include your models in this exports object as well!
  db,
  Account,
  Category,
  Perk,
  CreditCard,
};
