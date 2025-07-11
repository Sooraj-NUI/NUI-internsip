function capitalizeFirstLetter(nameToCap) {
  const firstCharectorOfUserName = nameToCap?.charAt(0).toLowerCase();
  const convertedName = nameToCap
    .toLowerCase()
    .replace(firstCharectorOfUserName, firstCharectorOfUserName.toUpperCase());
  return convertedName;
}

function addSuffixOrPrefix(nameOfPerson, prefixOfSuffix, keyword) {
  if (
    typeof nameOfPerson === "string" &&
    typeof prefixOfSuffix === "string" &&
    typeof keyword === "string"
  ) {
    let capitalizedFirstName = capitalizeFirstLetter(nameOfPerson);
    let capitalizedSuffixOrPreffix = capitalizeFirstLetter(prefixOfSuffix);

    if (keyword.toLowerCase() === "prefix") {
      return [capitalizedFirstName, capitalizedSuffixOrPreffix].join(" ");
    } else if (keyword.toLowerCase() === "suffix") {
      return [capitalizedSuffixOrPreffix, capitalizedFirstName].join(" ");
    } else {
      return "The keyword should be prefix or suffix";
    }
  } else {
    return "provided input is not a string";
  }
}
console.log(addSuffixOrPrefix("soRaj", "CR7", "prefix"));
console.log(addSuffixOrPrefix("ARun", "mR", "suffix"));
