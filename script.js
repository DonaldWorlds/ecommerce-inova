if (typeof Storage !== "undefined") {
  console.log("it works");
} else {
  console.log("it dont work");
}

let cart = document.querySelectorAll(".addTocart");
console.log(cart);

let clearButton = document.querySelector(".clear");

let products = [
  {
    name: "The user pack",
    price: 29,
  },
  {
    name: "The beginner pack",
    price: 39,
  },
  {
    name: "The Jelly pack ",
    price: 49,
  },
  {
    name: "The O'most there pack",
    price: 59,
  },
  {
    name: "The Go Getter pack",
    price: 69,
  },
  {
    name: "The Legend pack",
    price: 79,
  },
  {
    name: "The awesome pack",
    price: 89,
  },
  {
    name: "The lengendary pack",
    price: 99,
  },
];

for (let i = 0; i < cart.length; i++) {
  cart[i].addEventListener("click", () => {
    cartNumber(products[i]); //calling the cartNumber method
    calculateTotalPrice(products[i]);
    showClearButton();
  });
}

function cartNumber(product) {
  let productNumber = localStorage.getItem("cartNumbers");
  productNumber = parseInt(productNumber);

  /*The cartNumber function takes a (product parameter.)
    It retrieves the value stored in the 'cartNumbers' key from the Local Storage using localStorage.getItem('cartNumbers').
    The value is initially stored as a string.
    The parseInt function is used to convert the retrieved string value to an integer and assign it to the productNumbers variable. **/

  if (productNumber) {
    localStorage.setItem("cartNumbers", productNumber + 1);
    document.querySelector(".countedItems").textContent = productNumber + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".countedItems").textContent = 1;
  }

  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  cartItems.push(product);

  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

/**
   * The if statement checks if the productNumber variable is truthy. This condition is used to determine if there are already products in the cart.

  If there are products in the cart (the condition is true), the productNumbers value is incremented by 1 and stored back in the 'cartNumbers' key in the Local Storage using localStorage.setItem('cartNumbers', productNumbers + 1).

  Additionally, the total count of items is updated on the webpage by setting the textContent of an element with the class '.countedNumbers' to productNumbers + 1.

  If there are no products in the cart (the condition is false), the 'cartNumbers' key is set to 1, indicating the first item is added to the cart.

  The count of items is updated on the webpage by setting the textContent of an element with the class '.countedItem' to 1.
  */

function calculateTotalPrice(product) {
  let totalCost = localStorage.getItem("totalCost");
  if (totalCost) {
    totalCost = parseInt(totalCost);
    localStorage.setItem("totalCost", totalCost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
  //update tht total cost value on the webpage
  document.querySelector(".totalCost").textContent =
    localStorage.getItem("totalCost");
}

function clearAll() {
  localStorage.setItem("cartNumbers", 0);
  localStorage.setItem("totalCost", 0);
  document.querySelector(".countedItems").textContent = 0;
  document.querySelector(".totalCost").textContent = 0;
  localStorage.clear();
  clearButton.style.display = "none";
}

document.querySelector(".clear").addEventListener("click", clearAll);

function showClearButton() {
  clearButton.style.display = "inline-block";
}

function retrieveCartData() {
  let productNumber = localStorage.getItem("cartNumbers");
  let totalCost = localStorage.getItem("totalCost");

  if (productNumber) {
    document.querySelector(".countedItems").textContent = productNumber;
  }

  if (totalCost) {
    document.querySelector(".totalCost").textContent = totalCost;
  }
}

// Add event listener to the Checkout button
document.getElementById("checkoutBtn").addEventListener("click", function () {
  // Redirect to the checkout page
  window.location.href = "./checkout.html";
});

retrieveCartData();
