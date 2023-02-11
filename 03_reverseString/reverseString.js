const reverseString = function(string) {
    let inverted = '';
    for (i = string.length - 1;  i >= 0; i--) {
        inverted = inverted.concat('', string[i]);
    }
    return inverted;
};

// Do not edit below this line
module.exports = reverseString;
