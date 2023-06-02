const removeFromArray = function(array1, ...last) {
    for (const item1 of array1) {
        for (const item2 of last) {
            if (item1 === item2) {
                tempArray1 = array1.slice(0, array1.indexOf(item2));
                tempArray2 = array1.slice(array1.indexOf(item2) + 1);
                array1 = tempArray1.concat(tempArray2); 
            };
        };
    };
    return array1;
};



// Do not edit below this line
module.exports = removeFromArray;


