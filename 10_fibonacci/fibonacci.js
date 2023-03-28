const fibonacci = function(num) {
    if (num > 0) {
        let result
        let a = 0;
        let b = 0;
        for (let i = 0; i < num; i++) {
            result = Number(a) + Number(b);
            a = b;
            if (result == 0) {
                result = 1
            }
            b = result;
        };
        return result;
    }
    else {
        return "OOPS";
    };    
};

// Do not edit below this line
module.exports = fibonacci;
