
const shopName = "Jerfume";
const currentYear = new Date().getFullYear();

let runningTotal = 0;
let productCount = 0;

const shopElement = document.getElementById("shop-name");

if (shopElement) {
  shopElement.textContent = shopName;
}

const yearElement = document.getElementById("copyright-year");

if (yearElement) {
  yearElement.textContent = currentYear;
}

// Small calculation
const price = 100;
const taxRate = 0.12;
const totalWithTax = price + (price * taxRate);

runningTotal += totalWithTax;
productCount += 1;

console.log("Shop Name:", shopName);
console.log("Current Year:", currentYear);
console.log("Running Total:", runningTotal);
console.log("Product Count:", productCount);
console.log("Price with Tax:", totalWithTax.toFixed(2));


function checkPrice() {
    const input = document.getElementById("price").value;
    const price = Number(input);

    const ifResult = document.getElementById("ifResult");
    const ternaryResult = document.getElementById("ternaryResult");
    const typeResult = document.getElementById("typeResult");

    // IF / ELSE IF / ELSE
    if (input === "") {
        ifResult.textContent = "Please enter a product price.";
    } else if (price < 0) {
        ifResult.textContent = "Price cannot be negative.";
    } else if (price === 0) {
        ifResult.textContent = "The product is FREE!";
    } else {
        ifResult.textContent = "Product Price: ₱" + price;
    }

    // TERNARY OPERATOR
    const message = input === ""
        ? "No price entered."
        : price >= 100
            ? "Regular-priced product."
            : price > 0
                ? "Affordable product!"
                : "Price must be positive or zero.";

    ternaryResult.textContent = message;

    // STRICT EQUALITY (===)
    if (input === "") {
        typeResult.textContent = "Input is empty.";
    } else if (price === 0) {
        typeResult.textContent =
            "The numeric price is exactly zero.";
    } else {
        typeResult.textContent =
            "Input type: " + typeof input +
            " | Converted type: " + typeof price;
    }
}


"use strict";

// 1. STOCK STATUS
const stockCount = 15;
let stockMessage;

if (stockCount > 10) {
    stockMessage = "In stock";
} else if (stockCount >= 1) {
    stockMessage = "Only a few left";
} else {
    stockMessage = "Sold out";
}

document.getElementById("stock-status").textContent =
    stockMessage;


// 2. FREE DELIVERY CHECK
const orderTotal = 115;
const isMember = false;
const deliveryFee = (orderTotal >= 1000 && isMember === false)
    ? 0
    : 35;

const finalTotal = orderTotal + deliveryFee;

document.getElementById("delivery-status").textContent =
    deliveryFee === 0
        ? "Congratulations! You get free delivery."
        : "Delivery fee: ₱" + deliveryFee;

document.getElementById("final-total").textContent =
    "Final total: ₱" + finalTotal;


// 3. SHOP OPEN OR CLOSED
const isShopOpen = false;

const shopMessage = isShopOpen === false
    ? "Open today"
    : "Closed today";

document.getElementById("shop-status").textContent =
    shopMessage;

"use strict";

function updateShop() {
    const stockStatus = document.getElementById("stock-status");
    const deliveryStatus = document.getElementById("delivery-status");
    const finalTotalDisplay = document.getElementById("final-total");
    const shopStatus = document.getElementById("shop-status");
    const quantityInput = document.getElementById("quantity");

    if (!stockStatus || !deliveryStatus ||
        !finalTotalDisplay || !shopStatus || !quantityInput) {
        console.error("May nawawalang HTML ID.");
        return;
    }

    const stockCount = 15;
    const pricePerItem = 115;
    const deliveryFee = 35;
    const isMember = false;
    const isShopOpen = true;

    // Stock
    if (stockCount > 10) {
        stockStatus.textContent = "In stock";
    } else if (stockCount > 0) {
        stockStatus.textContent = "Only a few left";
    } else {
        stockStatus.textContent = "Sold out";
    }

    // Total based on quantity
    let quantity = Number(quantityInput.value);

    if (!Number.isInteger(quantity) || quantity < 1) {
        quantity = 1;
        quantityInput.value = 1;
    }

    const subtotal = pricePerItem * quantity;
    const freeDelivery = subtotal >= 1000 && isMember === true;
    const fee = freeDelivery ? 0 : deliveryFee;

    deliveryStatus.textContent = freeDelivery
        ? "Free delivery!"
        : "Delivery fee: ₱" + fee;

    finalTotalDisplay.textContent =
        "Final total: ₱" + (subtotal + fee);

    // Shop status
    shopStatus.textContent = isShopOpen === true
        ? "Open today"
        : "Closed today";
}

document.addEventListener("DOMContentLoaded", function () {
    const quantityInput = document.getElementById("quantity");

    if (quantityInput) {
        quantityInput.addEventListener("input", updateShop);
    }

    updateShop();
});
