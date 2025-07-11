const targetString = "numentica ui       internship";

const getCharacterCountWithoutSpaces = () => {
  const stringWithOutSpace = targetString.split("");
  // console.log(stringWithOutSpace)
  const filteredArray = stringWithOutSpace.filter(
    (data) => data !== " "
  ).length;
  console.log("Length of the data is :", filteredArray);
};
getCharacterCountWithoutSpaces();
