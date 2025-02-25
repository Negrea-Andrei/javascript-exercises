const findTheOldest = function (array) {
    return array.reduce((oldest, currentPerson) => {

        function getAge(birth, death) {
            if (!death) {
                death = new Date().getFullYear();
            }
            return death - birth;
        };

        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return oldestAge < currentAge ? currentPerson : oldest;
    });
};
  
  

// Do not edit below this line
module.exports = findTheOldest;
