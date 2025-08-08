function groupWithInitialChat(userData) {
  let groupWithInitialValues = [];
  let grpFullValues = [];
  let userDataValues = userData.sort();
  console.log(userDataValues);
  for (let i = 0; i < userDataValues.length - 1; i++) {
    console.log(userDataValues[i].charAt(0));
    for (let j = 0; j < userDataValues.length - 1; j++) {
      if (userDataValues[j].charAt(0) === userDataValues[j + 1].charAt(0)) {
        groupWithInitialValues.push(userDataValues[j]);
      }
       if(userDataValues[j].charAt(0)!==userDataValues[j+1].charAt(0)){
           groupWithInitialValues.push(userDataValues[j])
          grpFullValues.push(groupWithInitialValues)
        //   return grpFullValues
      }
    }
  }
  console.log(grpFullValues);
  return grpFullValues;
}
console.log(
  groupWithInitialChat([
    "arun",
    "balu",
    "cathy",
    "krish",
    "aadhir",
    "aariketh",
    "kamal",
  ])
);
// Input: ["arun", "balu", "cathy", "krish", "aadhir", "aariketh", "kamal"]
