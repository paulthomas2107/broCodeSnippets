/*
function Product(name, price) {
  this.name = name;
  this.price = price;

  this.displayProduct = function () {
    console.log(`Product: ${this.name}`);
    console.log(`Price: $${this.price.toFixed(2)}`);
  };

  this.calculateTotal = function (salesTax) {
    return this.price + this.price * salesTax;
  };
}

*/

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  displayProduct() {
    console.log(`Product: ${this.name}`);
    console.log(`Price: $${this.price.toFixed(2)}`);
  }
  calculateTotal(salesTax) {
    return this.price + this.price * salesTax;
  }
}

const salesTax = 0.05;

const prod1 = new Product('Shirt', 19.99);
const prod2 = new Product('Pants', 22.5);
const prod3 = new Product('Underwear', 100.0);

prod1.displayProduct();
console.log(prod1.calculateTotal(salesTax).toFixed(2));

prod2.displayProduct();
console.log(prod2.calculateTotal(salesTax).toFixed(2));

prod3.displayProduct();
console.log(prod3.calculateTotal(salesTax).toFixed(2));

const total = (
  prod1.calculateTotal(salesTax) +
  prod2.calculateTotal(salesTax) +
  prod3.calculateTotal(salesTax)
).toFixed(2);

console.log(`Total: $${total}`);
