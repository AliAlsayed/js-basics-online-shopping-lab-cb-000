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
    return view + `${cart[0].itemName} at $${cart[0].itemPrice}.`
  }

  for(var i = 0; i < cart.length; i++){
    if (i == cart.length - 1){
      view += `and ${cart[i].itemName} at $${cart[i].itemPrice}, `
    } else {
      view += `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
  }
  return view.slice(0, -2) + '.';
}

function total() {
  var total_price = 0

  for(var i = 0; i < cart.length; i++){
    total_price += cart[i].itemPrice
  }
  return total_price;
}

function removeFromCart(item) {
  for(var i = 0; i < cart.length; i++){
    if(cart[i].itemName == item){
      cart.splice(i, 1);
      return cart;
    }
  }
  return "That item is not in your cart."
}

function placeOrder(cardNumber) {
  total = 0
  if(!cardNumber) {
    return "Sorry, we don't have a credit card on file for you."
  }

  for(var i = 0; i < cart.length; i++){
    total += cart[i].itemPrice
  }
  cart = []
  return `Your total cost is $${total}, which will be charged to the card ${cardNumber}`
}
