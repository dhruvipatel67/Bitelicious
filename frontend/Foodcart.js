// document.addEventListener('DOMContentLoaded', function() {
//     const dialog = document.querySelector('#DialogOne');
//     const openDialog = document.querySelector('#openDiaOne');
//     const closeDialog = document.querySelector('#closeDiaOne');

//     openDialog.addEventListener('click', function() { dialog.showModal(); });
//     closeDialog.addEventListener('click', function() { dialog.closest(); });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     const dialog = document.querySelector('#DialogTwo');
//     const openDialog = document.querySelector('#openDiaTwo');
//     const closeDialog = document.querySelector('#closeDiaTwo');

//     openDialog.addEventListener('click', function() { dialog.showModal(); });
//     closeDialog.addEventListener('click', function() { dialog.closest(); });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     const dialog = document.querySelector('#DialogThree');
//     const openDialog = document.querySelector('#openDiaThree');
//     const closeDialog = document.querySelector('#closeDiaThree');

//     openDialog.addEventListener('click', function() { dialog.showModal(); });
//     closeDialog.addEventListener('click', function() { dialog.closest(); });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     const dialog = document.querySelector('#DialogFour');
//     const openDialog = document.querySelector('#openDiaFour');
//     const closeDialog = document.querySelector('#closeDiaFour');

//     openDialog.addEventListener('click', function() { dialog.showModal(); });
//     closeDialog.addEventListener('click', function() { dialog.closest(); });
// });

document.addEventListener('DOMContentLoaded', function() {
    const dialogs = [
        { dialog: '#DialogOne', openButton: '#openDiaOne', closeButton: '#closeDiaOne' },
        { dialog: '#DialogTwo', openButton: '#openDiaTwo', closeButton: '#closeDiaTwo' },
        { dialog: '#DialogThree', openButton: '#openDiaThree', closeButton: '#closeDiaThree' },
        { dialog: '#DialogFour', openButton: '#openDiaFour', closeButton: '#closeDiaFour' },
    ];

    dialogs.forEach(({ dialog, openButton, closeButton }) => {
        const dlg = document.querySelector(dialog);
        const openDlg = document.querySelector(openButton);
        const closeDlg = document.querySelector(closeButton);

        openDlg.addEventListener('click', () => { dlg.showModal(); });
        closeDlg.addEventListener('click', () => { dlg.close(); });
    });
});

// ---------------------------------------------------------------------------------------------------------------------------------------

const cart = [];

function addToCart(itemName, itemPrice) {
    const existingItem = cart.find(item => item.name === itemName);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ name: itemName, price: itemPrice, quantity: 1 });
    }
    updateCart();
}

function updateCart() {
    const cartElement = document.getElementById('cart');
    cartElement.innerHTML = '';
    let cartTotal = 0;
    cart.forEach(item => {
        const totalPrice = item.price * item.quantity;
        cartTotal += totalPrice;
        cartElement.innerHTML += `
            <div class="food-item">
                <span class="description">${item.name}</span>
                <span class="price">${item.price} Rs.</span>
                <div class="quantity">
                    <button class="btn btn-sm btn-secondary" onclick="changeQuantity('${item.name}', -1)">-</button>
                    <input type="number" value="${item.quantity}" readonly>
                    <button class="btn btn-sm btn-secondary" onclick="changeQuantity('${item.name}', 1)">+</button>
                </div>
                <span class="total-price">Total: ${totalPrice} Rs.</span>
            </div>
        `;
    });
    document.getElementById('cart-total').textContent = `Cart Total: ${cartTotal} Rs.`;
}

function changeQuantity(itemName, delta) {
    const item = cart.find(item => item.name === itemName);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            const index = cart.indexOf(item);
            cart.splice(index, 1);
        }
        updateCart();
    }
}