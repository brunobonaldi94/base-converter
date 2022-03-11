const { Router } = require('express');
const BaseCalculator = require('./controllers/BaseCalculator');

const router = Router();

router.post('/', BaseCalculator.index);

module.exports = router;
