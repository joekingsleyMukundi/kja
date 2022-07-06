const express = require('express');
const { host_landin_page, host_pricing_page } = require('../../controllers/host/host_controller');

const router = express.Router();

router.get('/host', host_landin_page)
router.get('/host_price', host_pricing_page)
module.exports = router;