const getTheTitles = function(obj) {
    const result = [];
    obj.map(element => result.push(element.title))
    return result;
};

// Do not edit below this line
module.exports = getTheTitles;
