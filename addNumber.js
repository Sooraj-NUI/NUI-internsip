const number = 9647211111;
const addFunciton = () => {
  const numberArray = number.toString().split("");
  // console.log(numberArray);
  let sum = 0;

  for (i = 0; i < numberArray.length; i++) {
    sum += parseInt(numberArray[i]);
  }
  console.log("Sum is :", sum);
};
addFunciton();
