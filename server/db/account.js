const db = require('./database');
const Sequelize = require('sequelize');
const timezone = 'America/Chicago';
const moment = require('moment').tz.setDefault(timezone);

const Account = db.define('account', {
  last4: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  creditAmount: {
    type: Sequelize.INTEGER,
  },
  renewalFee: {
    type: Sequelize.INTEGER,
  },
  renewalDate: {
    type: Sequelize.DATEONLY,
    get: function () {
      return moment.utc(this.getDataValue('regDate')).format('YYYY-MM-DD');
    },
  },
});

module.exports = Account;
