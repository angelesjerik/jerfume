
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
