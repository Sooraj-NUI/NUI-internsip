function sortingFunction(userData) {
  console.log(typeof userData);
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
function mergeFunction(userData1, userData2) {
  if (
    !Array.isArray(userData1) ||
    !Array.isArray(userData2) ||
    userData1.length < 1 ||
    userData2.length < 1
  ) {
    return "both values must be valid array";
  } else {
    return sortingFunction(userData1.concat(userData2));
  }
}
console.log(mergeFunction([1, 4, 6], [2, 5, 3]));
