// Initialize cart
let cart = [];
let cartCount = 0;
let totalAmount = 0;

// Add event listeners to product buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const price = parseFloat(button.getAttribute('data-price'));
        addToCart(name, price);
    });
});

function addToCart(name, price) {
    cart.push({ name, price });
    cartCount++;
    totalAmount += price;
    updateCart();
}

function updateCart() {
    // Update cart count
    document.getElementById('cart-count').textContent = cartCount;

    // Update cart items
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} <span>$${item.price.toFixed(2)}</span> <button onclick="removeFromCart(${index})">Remove</button>`;
        cartItems.appendChild(li);
    });

    // Update total amount
    document.getElementById('total').textContent = `Total: $${totalAmount.toFixed(2)}`;
}

function removeFromCart(index) {
    if (index > -1 && index < cart.length) {
        totalAmount -= cart[index].price;
        cart.splice(index, 1);
        cartCount--;
        updateCart();
    }
}

// Checkout button event listener
document.getElementById('checkout').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty.');
        return;
    }
    alert('Checkout process is not implemented yet.');
});
