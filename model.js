// Update the cart display
function updateCartDisplay() {
    let cartItemsContainer = document.getElementById("cartItems");
    cartItemsContainer.innerHTML = ""; // Clear the existing content
  
    // Retrieve the cart items from localStorage
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  
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
  window.addEventListener("DOMContentLoaded", updateCartDisplay);
  
  // Update the cart display when the cart button is clicked
  let cartButton = document.getElementById("checkoutBtn");
  cartButton.addEventListener("click", updateCartDisplay);
  