// Question #1: Inventory Management

const inventory = {
  apple: { price: 35, quantity: 100 },
  banana: { price: 10, quantity: 50 },
};

// เริ่มเขียนโค้ดตรงนี้
inventory.orange = {price: 20, quantity:200};
const itemTotals = [];
for (const fruits in inventory)
{
  const {price, quantity} = inventory[fruits];
  itemTotals.push(price * quantity);
}
let total = 0;
for (const fruitsPrice of itemTotals)
{
  total = total + fruitsPrice;
}
console.log(`Total inventory value: ${total} baht`);