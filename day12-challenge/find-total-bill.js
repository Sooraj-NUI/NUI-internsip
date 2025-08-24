/*The data is the available inventory in the store. In the store you have various products with their price and available quantity.
Based on this data, write a function to generate the total bill of a grocery list given by an user
getTotalAmount([
    { item: 'Jam - Apricot', quantity: 2 },
    { item: 'Creamers - 10%', quantity:1 },
  ]); // The result would be (94.11 * 2) + (1 * 49.54)
Please note if the user wants an quantity above what the store has. You should account for the quantity the store has. For example if the user wants 4 quantity but the store has only 2, then your calculation should only account for 2*/
const priceTable = [
  { item: "Jam - Apricot", price: 94.11, totalQuantity: 5 },
  { item: "Creamers - 10%", price: 49.54, totalQuantity: 3 },
  { item: "Apple", price: 94.11, totalQuantity: 3 },
  { item: "Orange", price: 94.11, totalQuantity: 2 },
];
let cart = [
  { item: "Jam - Apricot", quantity: 10 },
  { item: "Creamers - 10%", quantity: 3 },
];
function getTotalAmount(cart) {
  if (!Array.isArray(cart) || cart.length === 0) {
    console.error("empty cart");
    return false;
  }
  for (let cartItem of cart) {
    if (cartItem.quantity <= 0) {
      console.error("not a valid quandity");
      return false;
    }
  }
  let totalBill = {};
  for (let cartItem of cart) {
    for (let price of priceTable) {
      if (cartItem.item === price.item) {
        if (cartItem.quantity > price.totalQuantity) {
          cartItem.quantity = price.totalQuantity;
        }
        if (!totalBill[cartItem.item]) {
          totalBill[cartItem.item] = 0;
        }
        totalBill[cartItem.item] += cartItem.quantity * price.price;
      }
    }
  }
  console.log(totalBill);
}
getTotalAmount(cart);
