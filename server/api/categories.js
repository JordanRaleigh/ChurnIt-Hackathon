const router = require('express').Router();
const { Account, Category, Perk, CreditCard } = require('../db');

router.get('/', async (req, res, next) => {
  try {
    console.log('helloAPI:ghjk');
    const categories = await Category.findAll();
    res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
