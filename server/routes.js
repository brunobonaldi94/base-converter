const { Router } = require('express');
const path = require('path');
const BaseCalculator = require('./controllers/BaseCalculator');

const router = Router();

router.post('/', BaseCalculator.index);
router.get('/get-base', BaseCalculator.getBase);
router.get('*', (req, res) => {
  res.sendFile(
    path.join(__dirname, '../fe/build/index.html'),
  );
});
module.exports = router;
