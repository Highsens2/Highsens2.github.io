let cart = [];
let cartCount = 0;
function addToCart(foodName) {
cart.push(foodName);
cartCount++;
updateCartCount();
}
function showCart() {
const cartModal = document.getElementById('cartModal');
const cartItemsList = document.getElementById('cartItems');
cartItemsList.innerHTML = '';
cart.forEach(item => {
const listItem = document.createElement('li');
listItem.textContent = item;
cartItemsList.appendChild(listItem);
});
cartModal.style.display = 'block';
}
function closeCart() {
const cartModal = document.getElementById('cartModal');
cartModal.style.display = 'none';
}
function checkout() {
alert('Proceed to payment!');
cart = []; // Reset the cart
cartCount = 0;
updateCartCount();
closeCart(); // Close the cart modal
}
function updateCartCount() {

const cartCountElement = document.getElementById('cartCount');
cartCountElement.textContent = cartCount > 0 ? cartCount : '';
}