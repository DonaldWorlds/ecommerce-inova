// Retrieve cart items from local storage
let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
let totalCost = localStorage.getItem("totalCost");


// Update the cart display
function updateCartDisplay() {
    let cartItemsContainer = document.getElementById("cartItems");
    cartItemsContainer.innerHTML = ""; // Clear the existing content

    // Check if cartItems is not empty
    if (cartItems && cartItems.length > 0) {
        cartItems.forEach(item => {
            let row = document.createElement("tr");
            let productNameCell = document.createElement("td");
            let priceCell = document.createElement("td");
            let quantityCell = document.createElement("td");

            productNameCell.textContent = item.name;
            priceCell.textContent = item.price;
            quantityCell.textContent = item.quantity;

            row.appendChild(productNameCell);
            row.appendChild(priceCell);
            row.appendChild(quantityCell);

            cartItemsContainer.appendChild(row);
        });
    } else {
        // Cart is empty
        let emptyRow = document.createElement("tr");
        let emptyCell = document.createElement("td");
        emptyCell.textContent = "No items in the cart";

        emptyRow.appendChild(emptyCell);
        cartItemsContainer.appendChild(emptyRow);
    }

    let totalCost = localStorage.getItem("totalCost");
    if (totalCost) {
        document.querySelector("#totalCostElement").textContent = "Total Cost: $" + totalCost;
    } else {
        document.querySelector("#totalCostElement").textContent = "";
    }
}

// Call the updateCartDisplay function initially to display the cart
updateCartDisplay();

// Add event listener for "Add to Cart" button
// Add event listener for "Add to Cart" button
let addToCartButton = document.getElementById("checkoutBtn");
addToCartButton.addEventListener("click", function () {
    // ...

    // Add the item to the cart
    cartItems.push(cartItem);

    // Update the cart items in local storage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    // Update the cart display
    updateCartDisplay();

    // Retrieve the updated values from local storage
    cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    totalCost = localStorage.getItem("totalCost");
});

