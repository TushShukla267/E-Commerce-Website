document.addEventListener("DOMContentLoaded", () => {

    // Function to update the subtotal when quantity changes for item 1
    function updateSubtotal() {
        const itemPriceElement = document.getElementById('item-price');
        const quantityElement = document.getElementById('Quantity');

        const itemPrice = parseFloat(itemPriceElement.textContent.replace('$', ''));
        let quantity = parseInt(quantityElement.textContent);

        quantity += 1;
        const subtotal = itemPrice * quantity;

        quantityElement.textContent = quantity;
        const subtotalElement = document.getElementById('subtotal');
        subtotalElement.textContent = `$${subtotal.toFixed(2)}`;

        console.log(subtotal); // Logs the subtotal value
        updateTotal();  // Call to update the total after subtotal update
    }

    // Function to update the subtotal when quantity changes for item 2
    function updateSubtotal1() {
        const itemPriceElement = document.getElementById('item-price1');
        const quantityElement = document.getElementById('Quantity1');

        const itemPrice = parseFloat(itemPriceElement.textContent.replace('$', ''));
        let quantity = parseInt(quantityElement.textContent);

        quantity += 1;
        const subtotal = itemPrice * quantity;

        quantityElement.textContent = quantity;
        const subtotalElement = document.getElementById('subtotal1');
        subtotalElement.textContent = `$${subtotal.toFixed(2)}`;

        console.log(subtotal); // Logs the subtotal value
        updateTotal();  // Call to update the total after subtotal update
    }

    // Function to calculate and display the final total
    function updateTotal() {
        const subtotal1 = parseFloat(document.getElementById('subtotal').textContent.replace('$', '')) || 0;
        const subtotal2 = parseFloat(document.getElementById('subtotal1').textContent.replace('$', '')) || 0;
        const total = subtotal1 + subtotal2;
        const total1 = subtotal1 + subtotal2;

        // Update the total in the HTML and log it
        const totalElement = document.getElementById('total');
        totalElement.textContent = `$${total.toFixed(2)}`;
        console.log(total); // Logs the total value
        
        // Update the total in the HTML and log it
        const totalElement1 = document.getElementById('total1');
        totalElement1.textContent = `$${total1.toFixed(2)}`;
        console.log(total1); // Logs the total value
    }

    // Add event listeners to the UpdateQuantity buttons
    const updateButton1 = document.getElementById('UpdateQuantity');
    const updateButton2 = document.getElementById('UpdateQuantity1');
    updateButton1.addEventListener('click', updateSubtotal);
    updateButton2.addEventListener('click', updateSubtotal1);
});
