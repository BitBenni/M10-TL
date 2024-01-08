document.addEventListener('DOMContentLoaded', function () {
    const productButtons = document.querySelectorAll('.product button');
    const checkoutButton = document.getElementById('checkout-btn');

    const cartItems = [];

    productButtons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });

    checkoutButton.addEventListener('click', checkout);

    function handleButtonClick() {
        const productName = this.parentElement.querySelector('h2').innerText;
        const productPrice = parseFloat(this.parentElement.querySelector('button').getAttribute('data-price'));

        addToCart(productName, productPrice);
    }

    function addToCart(productName, price) {
        // Überprüfen, ob das Produkt bereits im Warenkorb ist
        const existingItem = cartItems.find(item => item.name === productName);

        if (existingItem) {
            // Wenn das Produkt bereits im Warenkorb ist, erhöhe die Anzahl
            existingItem.quantity += 1;
        } else {
            // Wenn das Produkt nicht im Warenkorb ist, füge es hinzu
            cartItems.push({ name: productName, price: price, quantity: 1 });
        }

        updateCart();
    }

    function updateCart() {
        const cartList = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');
    
        // Vorherige Warenkorbartikel löschen
        cartList.innerHTML = '';
    
        // Warenkorbartikel anzeigen
        let total = 0;
        cartItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} ${item.quantity}x`;
            cartList.appendChild(listItem);
    
            total += item.price * item.quantity;
        });
    
        // Gesamtsumme aktualisieren
        cartTotal.textContent = `€${total.toFixed(2)}`;
    }
    

    function checkout() {
        // Fügen Sie hier Ihre Kassenlogik hinzu (z. B. Weiterleitung zu einer Bestätigungsseite)
        alert('Bezahlung abgeschlossen! Vielen Dank für Ihren Einkauf.');
        // Warenkorb nach dem Bezahlen leeren
        cartItems.length = 0;
        updateCart();
    }
});
