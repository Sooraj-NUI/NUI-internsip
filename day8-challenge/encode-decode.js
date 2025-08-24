function encode(inputString, shift) {
   if (!inputString || !shift || typeof inputString !== "string" || !Number.isInteger(shift) || shift < 0) {
        return "Invalid input,please give the proper input";
    }
  const lowerCase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const upperCase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let result = "";
  for (let i = 0; i < inputString.length; i++) {
    let char = inputString[i];
    for (let j = 0; j < 26; j++) {
      if (char === lowerCase[j]) {
        console.log("char lower ", char);
        let position = (j + shift) % 26;
        console.log("position", position);
        if (position < 0) {
          position = position + 26;
        }
        result += lowerCase[position];
      }
      if (char === upperCase[j]) {
        console.log("UpperCase char", char);
        let position = (j + shift) % 26;
        console.log("posiiton", position);
        if (position < 0) {
          position = position + 26;
        }
        result += upperCase[position];
      }
    }
  }
  console.log(result);
}
encode("aBc", 2);
