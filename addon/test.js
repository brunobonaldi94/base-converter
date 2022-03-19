const ftConvertBase = require('./build/Release/base_calculator_api.node');

const { calculateBase } = ftConvertBase;

// const testValue = calculateBase('2147483649', '0123456789', '0123456789ABCDEF');

const tests = ['0', '1', '-0', '-1', '+0', '+1'];
// eslint-disable-next-line no-restricted-syntax
for (const test of tests) {
  const testValue = calculateBase(test, '0123456789', '0123456789ABCDEF');
  console.log({
    value: testValue,
    len: testValue.length,
  });
  console.log('--------------------');
}
