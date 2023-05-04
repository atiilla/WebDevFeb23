let pincode = [4,3,5];

// Hints for cracking the pincode
let hints = [  [4,2,0], // One of the digits is correct and in the right place
  [6,5,3], // One of the digits is correct but in the wrong place
  [4,1,5], // Two of the digits are correct and both are in the right place
  [9,8,8]  // Nothing is correct
];

let possiblePincode = [];

hints.forEach(function(hint) {
    hint.forEach(function(number) {
        if (pincode.includes(number)) {
            possiblePincode.push(number);
        }
    })
});

function countCombinations(digits) {
    if (!Array.isArray(digits) || digits.length < 3) {
      throw new Error("Input must be an array of at least three digits");
    }
  
    // Use a Set to store unique combinations
    const combinations = new Set();
  
    // Loop through all possible combinations of three digits
    for (let i = 0; i < digits.length; i++) {
      for (let j = 0; j < digits.length; j++) {
        for (let k = 0; k < digits.length; k++) {
          if (i !== j && i !== k && j !== k) { // Make sure digits are distinct
            combinations.add(digits[i] * 100 + digits[j] * 10 + digits[k]);
          }
        }
      }
    }
  
    return combinations;
  }

  
let combinations = countCombinations(possiblePincode)

combinations.forEach(function(combination) {
    let combinationArray = combination.toString().split('')
    // console.log(combinationArray)
    if(combinationArray[0] == pincode[0] && combinationArray[1] == pincode[1] && combinationArray[2] == pincode[2]) {
        console.log(`The correct pincode is ${combination}`)
    }
})