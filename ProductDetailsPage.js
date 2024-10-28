// Function to decrease the quantity
document.getElementById("decrease-quantity").onclick = function() {
    let quantityDiv = document.getElementById("quantity");
    let currentQuantity = parseInt(quantityDiv.textContent.trim());
    if (currentQuantity > 0) {
        quantityDiv.textContent = currentQuantity - 1;
    }
};

// Function to increase the quantity
document.getElementById("increase-quantity").onclick = function() {
    let quantityDiv = document.getElementById("quantity");
    let currentQuantity = parseInt(quantityDiv.textContent.trim());
    quantityDiv.textContent = currentQuantity + 1;
};
