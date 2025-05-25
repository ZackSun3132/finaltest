// Question #6: Calculating Total Price in User's Cart

function filterInStockProducts(product) {
  // เริ่มเขียนโค้ดตรงนี้
  return product.filter(product => product.quantity !== 0);
}
const product = 
[
  {name: "apple", quantity: 2 },
  {name: "banana", quantity: 0 },
  {name: "orange", quantity: 5 },
];
console.log(filterInStockProducts(product));
// ตัวอย่างการใช้งาน
const products = [
  { name: "apple", quantity: 2 },
 { name: "banana", quantity: 0 },
  { name: "orange", quantity: 5 },];

console.log(filterInStockProducts(products));
// ผลลัพธ์ที่ได้จากการ Execute Function คือ [{ name: "apple", quantity: 2 }, { name: "orange", quantity: 5 }]