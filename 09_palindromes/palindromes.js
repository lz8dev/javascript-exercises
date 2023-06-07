const palindromes = function (string) {
    let i = 0,
        punYspc = ['.', ',', '!', '?', ';',
                   ':', '-', '(', ')', ' ',],       //characters to be    eliminated in the string
        lowCase = string.toLowerCase(),     //to check both lower and upper char in string
        newStr = ''.
        res = '';

    for (let i = 0; i < lowCase.length; i++) {      //funtion to remove the punYspc characters
        let char = lowCase[i];
        if (punYspc.includes(lowCase[i]) === false) {
            newStr += lowCase[i]; 
        };
    };
    console.log(newStr); 

    while (i < newStr.length) {     //palindorme check function
        if (newStr [i] === newStr[newStr.length - i - 1]) {
            res = true;
        } else {
            res = false;
            return res;
        };
        i++;
    };
    return res;
};

// Do not edit below this line
module.exports = palindromes;
