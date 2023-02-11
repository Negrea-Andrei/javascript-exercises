const sumAll = function(firsNumber, secondNumber) {
    let sumAll = 0;
    if (firsNumber < 1 || secondNumber < 1) {
        return "ERROR";
    }
    else if (typeof firsNumber != "number" || typeof secondNumber != "number") {
        return "ERROR"
    }
    else {
        if ( firsNumber < secondNumber) {
            for (i = firsNumber; i <= secondNumber; i++) {
                sumAll = sumAll + i;
            }
        }
        else if (firsNumber > secondNumber) {
            for (i = firsNumber; i >= secondNumber; i--) {
                sumAll = sumAll + i;
            }
        }
    }
    return sumAll;
};

// Do not edit below this line
module.exports = sumAll;
