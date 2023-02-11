const repeatString = function(string, number) {
    
    let repeted = '';

    for( i = 0; i < number; i++) {
        repeted = repeted.concat('', string);      
    }

    if (number < 0) {
        return "ERROR";
    }
    else {
        return repeted;
    }

};

module.exports = repeatString;
