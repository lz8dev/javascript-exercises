const repeatString = function(string, num) {
    let temp = string;
    if (num === 0){
        temp = '';
        return temp;
    } else if (num < 0){
        temp = 'ERROR';
        return temp;
    } else {    
        for (let i = 1; i < num; i++){
            temp += string;
        }
        return temp;
    };
};

// Do not edit below this line
module.exports = repeatString;
