const fibonacci = function(num) {
    let arr = [1, 1];
    if (num < 0) { 
        return 'OOPS';
    };
    if (num === 0 || num === 1) {
        return 1;
    };
    for (let i = 2; i < num; i++) {
        arr [i] = arr[i -1] + arr[i - 2];
    };
    return arr[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
