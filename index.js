const calculator = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
    multiply: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        return a / b;
    },
    power: function (a, b) {
        return a ** b;
    },
};

const plus = calculator.plus(2, 5);
const minus = calculator.minus(2, 5);
const multiply = calculator.multiply(2, 5);
const divide = calculator.divide(2, 5);
const power = calculator.power(2, 5);

console.log(
    `When a = 2, b = 5,
  (a + b) = ${plus}, (a - b) = ${minus}, (a x b) = ${multiply}, (a ÷ b) = ${divide}, (a power b) = ${power}`
);
