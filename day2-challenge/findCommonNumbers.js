function findCommonElements(firstInput, secondInput) {
  if (Array.isArray(firstInput) && Array.isArray(secondInput)) {
    const combinedInput = firstInput.concat(secondInput);
    console.log(combinedInput);
    let uniqueValues = [];
    let duplicateValues = [];

    for (let i = 0; i < combinedInput.length; i++) {
      if (uniqueValues.includes(combinedInput[i])) {
        duplicateValues.push(combinedInput[i]);
      } else {
        uniqueValues.push(combinedInput[i]);
      }
    }
    if (duplicateValues.length === 0) {
      return "There is no duplicate values";
    }
    return duplicateValues;
  } else {
    return "Please provide array as input";
  }
}

console.log(findCommonElements([37], [76, 8, 13, 54]));
