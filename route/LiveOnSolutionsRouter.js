const express = require('express');
const router = express.Router();
const controller = require('../controllers/LiveOnSolutionsController')

router.get('/order-by-status', controller.orderByStatus);
router.get('/order-total/:status', controller.orderTotal);
router.get('/order-major-values', controller.orderMajorValue);
router.get('/group-by-country', controller.groupByCountry);

module.exports = router;