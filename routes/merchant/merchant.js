const express = require('express');
const { merchant_landing_page } = require('../../controllers/merchant/merchant_controller');

const router = express.Router();

router.get('/merchant', merchant_landing_page)

module.exports = router;