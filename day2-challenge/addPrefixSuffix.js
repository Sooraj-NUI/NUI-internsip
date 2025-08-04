function capitalizeFirstLetter(userName) {
  if (typeof userName !== "string") return "Name should be a string";

  nameAsArray = userName.split("");
  for (let i = 0; i < nameAsArray.length; i++) {
    if (i == 0 && nameAsArray[i] !== " ") {
      nameAsArray[i] = nameAsArray[i].toUpperCase();
    } else if (nameAsArray[i - 1] == " " && nameAsArray[i] !== " ") {
      nameAsArray[i] = nameAsArray[i].toUpperCase();
    } else {
      nameAsArray[i] = nameAsArray[i].toLowerCase();
    }
  }
  return nameAsArray.join("");
}

function addSuffixOrPrefix(nameOfPerson, textToAdd, position) {
  capitalizeFirstLetter(nameOfPerson);
  if (
    typeof nameOfPerson === "string" &&
    typeof textToAdd === "string" &&
    typeof position === "string"
  ) {
    let capitalizedFirstName = capitalizeFirstLetter(nameOfPerson);
    let capitalizedSuffixOrPreffix = capitalizeFirstLetter(textToAdd);

    if (position.toLowerCase() === "suffix") {
      return [capitalizedFirstName, capitalizedSuffixOrPreffix].join(" ");
    } else if (position.toLowerCase() === "prefix") {
      return [capitalizedSuffixOrPreffix, capitalizedFirstName].join(" ");
    } else {
      return `Allowed values are "prefix" or "suffix"`;
    }
  } else {
    return "Inputs must be string";
  }
}

console.log(addSuffixOrPrefix("soRaj", "cR", "prefix"));
console.log(addSuffixOrPrefix("ARun", "mR", "suffix"));
console.log(addSuffixOrPrefix("anand prasath nair", "CR7", "suffix"));
