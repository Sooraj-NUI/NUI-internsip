function findCommonElements(firstInput, secondInput) {
  if (Array.isArray(firstInput) && Array.isArray(secondInput)) {
    let common = [];

    for (let i = 0; i < firstInput.length; i++) {
      for (let j = 0; j < secondInput.length; j++) {
        if (firstInput[i] == secondInput[j]) {
          common.push(firstInput[i]);
        }
      }
    }
    return [...new Set(common)];
  } else {
    return "Both inputs must be a string";
  }
}

console.log(findCommonElements([7, 7, 1, 8, 1], [7, 8, 8, 1, , 3, 4]));
