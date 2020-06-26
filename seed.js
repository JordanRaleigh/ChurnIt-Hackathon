const { green, red } = require('chalk');
const { db, Account, Category, Perk, CreditCard } = require('./server/db');
const creditCard = require('./seedData/creditCard');
const account = require('./seedData/account');
const category = require('./seedData/category');
const perk = require('./seedData/perk');

const seed = async () => {
  try {
    await db.sync({ force: true });
    await CreditCard.bulkCreate(creditCard);
    await Category.bulkCreate(category);
    await Account.bulkCreate(account);
    await Perk.bulkCreate(perk);
  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green('Seeding success!'));
      db.close();
    })
    .catch((err) => {
      console.error(red('Oh noes! Something went wrong!'));
      console.error(err);
      db.close();
    });
}
