const calculateBase = require('../../addon');

class BaseCalculator {
  index(req, res) {
    const { nbr, baseFrom, baseTo } = req.body;
    if (nbr && baseFrom && baseTo) {
      const value = calculateBase(nbr, baseFrom, baseTo);
      res.status(200).json({
        result: value,
      });
    } else {
      res.status(400).json({
        message: 'Bad Request',
      });
    }
  }
}

module.exports = new BaseCalculator();
