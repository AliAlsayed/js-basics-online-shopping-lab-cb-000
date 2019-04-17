var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var obj = {itemName: item, itemPrice: Math.floor(Math.random() * 100)}
  cart.push(obj);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var view = 'In your cart, you have '
  if (cart.length == 0){
    return 'Your shopping cart is empty.'
  }

  if (cart.length == 1){
    return view + `${cart[i].itemName} at $${cart[i].itemPrice}.`
  }

  for(var i = 0; i < cart.length; i++){
    if (i == cart.length - 1){
      view += ` and ${cart[i].itemName} at $${cart[i].itemPrice}, `
    } else {
      view += `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
  }
  return view.slice(0, -2) + '.';
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
