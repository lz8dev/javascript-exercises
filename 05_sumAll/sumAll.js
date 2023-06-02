const sumAll = function(num1, num2) {
    if (typeof(num1) != 'number' || typeof(num2) != 'number'
        || num1 < 0 || num2 < 0) {
            return 'ERROR';
        } else {
            let min, max;
            if (num1 > num2) {
                max = num1;
                min = num2;
            } else {
                max = num2;
                min = num1;
            };
            let length = max - min + 1;
            let sum = 0;
            for (let i = min; i <= length; i++) {
                sum += i
            };
            return sum;
        };
};

// Do not edit below this line
module.exports = sumAll;
