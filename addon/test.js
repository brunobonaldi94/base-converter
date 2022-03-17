const ftConvertBase = require('./build/Release/base_calculator_api.node');

const { calculateBase } = ftConvertBase;

const testValue = calculateBase('2147483649', '0123456789', '0123456789ABCDEF');

console.log(testValue, testValue.length);
