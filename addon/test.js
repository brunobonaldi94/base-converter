const ftConvertBase = require('./build/Release/base_calculator_api.node');

const { calculateBase } = ftConvertBase;

console.log(calculateBase('22A', '0123456789ABCDEF', '01'), calculateBase('22A', '0123456789ABCDEF', '01').length);
