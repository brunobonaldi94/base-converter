const { Router } = require('express');
const BaseCalculator = require('./controllers/BaseCalculator');

const router = Router();

router.post('/', BaseCalculator.index);
router.get('/get-base', BaseCalculator.getBase)
module.exports = router;
