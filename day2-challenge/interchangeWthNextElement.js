function interchangeAdjacentElements(providedItems, targetIndex) {
  console.log(typeof providedItems);
  if (Array.isArray(providedItems) && typeof targetIndex === "number") {
    let targetElement = targetIndex - 1;

    if (targetIndex > providedItems.length) {
      return "The provided index is larger than the entered number :";
    } else if (targetIndex === providedItems.length) {
      let valueToStore = providedItems[targetElement];
      providedItems[targetElement] = providedItems[0];
      providedItems[0] = valueToStore;
    } else {
      let valueToStore = providedItems[targetElement];
      providedItems[targetElement] = providedItems[targetElement + 1];
      providedItems[targetElement + 1] = valueToStore;
    }

    return "Result :", providedItems;
  } else {
    return "Please proide array of numbers as input";
  }
}
console.log(interchangeAdjacentElements([10, 20, 30, 40, 50], 2));
