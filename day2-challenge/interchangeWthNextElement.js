// function interchangeAdjacentElements(providedItems, targetIndex) {
//   console.log(typeof targetIndex);
//   if (Array.isArray(providedItems) && typeof targetIndex === "number") {
//     let targetElement = targetIndex - 1;

//     if (targetIndex > providedItems.length) {
//       return "The provided index is larger than the entered number :";
//     } else if (targetIndex === providedItems.length) {
//       let valueToStore = providedItems[targetElement];
//       providedItems[targetElement] = providedItems[0];
//       providedItems[0] = valueToStore;
//     } else {
//       let valueToStore = providedItems[targetElement];
//       providedItems[targetElement] = providedItems[targetElement + 1];
//       providedItems[targetElement + 1] = valueToStore;
//     }

//     return providedItems;
//   } else {
//     return "Invalid input. Please provide a number as input";
//   }
// }
// console.log(interchangeAdjacentElements([10, 20, 30, 40, 50],4));

function interchangeAdjacentElements(providedItems, targetIndex) {
  console.log(typeof targetIndex);
  if (Array.isArray(providedItems) && typeof targetIndex === "number") {
    let valueContainer = 0;
    if (targetIndex === providedItems.length) {
      valueContainer = providedItems[targetIndex - 1];
      providedItems[targetIndex - 1] = providedItems[0];
      providedItems[0] = valueContainer;
      return providedItems;
    } else if (targetIndex < providedItems.length && targetIndex > 0) {
      let inputAfterTargetValue = providedItems.splice(targetIndex - 1);
      valueContainer = inputAfterTargetValue[0];
      inputAfterTargetValue[0] = inputAfterTargetValue[1];
      inputAfterTargetValue[1] = valueContainer;
      return providedItems.concat(inputAfterTargetValue);
    } else {
      return "Invalid targetIndex: must be between 1 and one less than the array length to swap adjacent elements.";
    }
  } else if (targetIndex < 0) {
    return "Invalid input. Please provide a number as input";
  }
}
console.log(interchangeAdjacentElements([10, 20, 30, 40, 50], 1));

// let name = "345678456";
// let nameSplit = name.split("");
// // console.log(nameSplit)
// let valuesAfterTarget = nameSplit.splice(5)

// console.log(valuesAfterTarget)
// const variableContainer  = valuesAfterTarget[0];
// valuesAfterTarget[0] = valuesAfterTarget[1];
// valuesAfterTarget[1] = variableContainer;
// console.log(valuesAfterTarget)

// console.log(nameSplit.slice(1))
