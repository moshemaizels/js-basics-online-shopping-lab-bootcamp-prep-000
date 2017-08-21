var cart = [];


function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = Math.floor(Math.random() * 100)
 var newItem = {[item]: price}
 cart.push(newItem)
 console.log(`${item} has been added to your cart.`)
 return cart

}

function viewCart() {
  // write your code here
  var cartView = "In your cart, you have"
  if (cart.length == 0) {
    console.log("Your shopping cart is empty.")

  } if (cart.length == 1) {
    var obj = cart[0]
    var objKey = Object.keys(cart[0])
    console.log(cartView + ` ${objKey} at $${obj[objKey]}.`)

  } else {
    for (var i = 0; i < cart.length; i++) {
      var obj = cart[i]
      var objKey = Object.keys(cart[i])
      if (i + 1 === cart.length) {
        cartView = cartView + ` and ${objKey} at $${obj[objKey]}.`
        console.log(cartView)
      } if(cart.length != 2) {
        cartView = cartView + ` ${objKey} at $${obj[objKey]},`

      } else {
        cartView = cartView + ` ${objKey} at $${obj[objKey]}`
      }
    }
  }
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
