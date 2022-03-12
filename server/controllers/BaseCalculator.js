const calculateBase = require('../../addon');


class BaseCalculator {
  static get getDefaultBaseOptions() {
    return ([
      { value: '01', name: 'Binary' },
      { value: '01234567', name: 'Octal' },
      { value: '0123456789', name: 'Decimal' },
      { value: '0123456789ABCDEF', name: 'Hexadecimal' },
    ]);
  }
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
  getBase(req, res){
    const baseOptions = BaseCalculator.getDefaultBaseOptions;
    res.status(200).json(baseOptions);
  }
}

module.exports = new BaseCalculator();
