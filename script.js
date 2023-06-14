document.addEventListener("DOMContentLoaded", function(){
  if (typeof Storage !== "undefined") {
    console.log("localStorage is supported");
  } else {
    console.log("localStorage is not supported");
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
  let parsedProductNumber = parseInt(productNumber);

  if (isNaN(parsedProductNumber)) {
    // Set the initial cart number to 0 if it's not set or not a valid number
    parsedProductNumber = 0;
  }

  let newProductNumber = parsedProductNumber + 1;
  localStorage.setItem("cartNumbers", newProductNumber);
  document.querySelector(".countedItems").textContent = newProductNumber;

  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  cartItems.push(product);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

  

  function calculateTotalPrice(product) {
    let totalCost = localStorage.getItem("totalCost");
    totalCost = parseInt(totalCost) || 0;
    localStorage.setItem("totalCost", totalCost + product.price);
    document.querySelector(".totalCost").textContent = localStorage.getItem("totalCost");
  }
  
  function clearAll() {
    localStorage.removeItem("cartNumbers");
    localStorage.removeItem("totalCost");
    document.querySelector(".countedItems").textContent = 0;
    document.querySelector(".totalCost").textContent = 0;
    localStorage.removeItem("cartItems");
    clearButton.style.display = "none";
  }
  
  if (clearButton) {
    clearButton.addEventListener("click", clearAll);
  }
  
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

  retrieveCartData();
  
});
