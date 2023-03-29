const caesar = function (string, number) {
    let arr = string.split('');
    let newString = '';
    for (let j = 0; j < arr.length; j++) {
      if (arr[j].match(/[^\w\s]|_/g) || arr[j].match(' ')) {
        newString += arr[j];
      } else if (arr[j] === arr[j].toUpperCase()) {
        let charCode = arr[j].charCodeAt();
        if (number > 0) {
          for (let i = 0; i < number; i++) {
            charCode++;
            if (charCode > 90) {
              charCode = 65;
            }
          }
          newString += String.fromCharCode(charCode);
        } else if (number < 0) {
          for (let i = 0; i > number; i--) {
            charCode--;
            if (charCode < 65) {
              charCode = 90;
            }
          }
          newString += String.fromCharCode(charCode);
        }
      } else if (arr[j] === arr[j].toLowerCase()) {
        let charCode = arr[j].charCodeAt();
        if (number > 0) {
          for (let i = 0; i < number; i++) {
            charCode++;
            if (charCode > 122) {
              charCode = 97;
            }
          }
          newString += String.fromCharCode(charCode);
        } else if (number < 0) {
          for (let i = 0; i > number; i--) {
            charCode--;
            if (charCode < 97) {
              charCode = 122;
            }
          }
          newString += String.fromCharCode(charCode);
        }
      }
    }
    return newString;
  };
  
 
// Do not edit below this line
module.exports = caesar;
