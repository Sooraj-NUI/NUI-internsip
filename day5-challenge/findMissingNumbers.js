function sortingFunction(userData) {
  if (!Array.isArray(userData) || userData.length < 1) {
    return "provide a valid array";
  }
  let valueContainer = 0;
  for (let i = 0; i < userData.length; i++) {
    for (let j = 0; j < userData.length; j++) {
      if (userData[j] > userData[j + 1]) {
        valueContainer = userData[j + 1];
        userData[j + 1] = userData[j];
        userData[j] = valueContainer;
      }
    }
  }
  return userData;
}

function findMissingNumbers(userData) {
  if (!Array.isArray(userData) || userData.length < 1) {
    return "provide a valid array";
  }
  let sortedValue = sortingFunction(userData);
  let missingValues = [];
  for (let i = sortedValue[0]; i <= sortedValue[sortedValue.length - 1]; i++) {
    if (!sortedValue.includes(i)) {
      missingValues.push(i);
    }
  }
  return `missing numbers in range [${sortedValue[0]} - ${
    sortedValue[sortedValue.length - 1]
  }] is ${missingValues}`;
}
console.log(findMissingNumbers([1, 2, 4, 9]));
