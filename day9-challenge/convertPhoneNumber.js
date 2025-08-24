function convertPhoneNumber(inputNumber) {
  if (typeof inputNumber !== "number") {
    console.error("input should be a number");
    return false;
  }
  
  let convertedString = inputNumber.toString();
  if (convertedString.length !== 10) {
    console.error("input should be of 10 digits");
    return false;
  }
  if(convertedString[0]==="-"){
    console.error("phone number cannot be negetive")
    return false
  }
  console.log(typeof convertedString);
  let convertedNumber = [];
  for (let i = 0; i < convertedString.length; i++) {
    console.log(convertedString);
    if (i === 0) {
      convertedNumber.push("(");
    }
    if (i === 3) {
      convertedNumber.push(")");
    }
    if (i === 6) {
      convertedNumber.push("-");
    } else {
      convertedNumber.push(convertedString[i]);
    }
  }
  return convertedNumber.join("");
}
console.log(convertPhoneNumber(7510944677));
