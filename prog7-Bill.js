let p_name = 'Notebook';
let p_price = 10.99;
let p_qty = 5;
let total = p_price * p_qty;
let discount = total * 0.1;
let netTotal = total - discount;

console.log(`Product Name is: ${p_name}`);
console.log(`Product Price is: ${p_price}`);
console.log(`Product Quantity is: ${p_qty}`);
console.log(`Product Total is: ${total}`);
console.log(`Product Discount is: ${discount}`);
console.log(`Product NetTotal is: ${netTotal}`);