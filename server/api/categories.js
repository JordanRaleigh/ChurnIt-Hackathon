const router = require('express').Router();
const { Category, Perk, CreditCard } = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (error) {
    next(error);
  }
});

router.get('/:categoryId', async (req, res, next) => {
  try {
    const { categoryId } = req.params;
    // const category = await Category.findByPk(categoryId);
    const perk = await Perk.findAll({
      where: {
        categoryId,
      },
      include: [CreditCard, Category],
    });
    res.json(perk);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
