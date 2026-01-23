//1
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}
//2
const products = [
  new Product(1, "Laptop", 1200, 10, "Electronics", true),
  new Product(2, "Smartphone", 30000001, 25, "Electronics", true),
  new Product(3, "Desk Chair", 150, 5, "Furniture", false),
  new Product(4, "Book", 20, 100, "Literature", true),
  new Product(5, "Headphones", 100, 15, "Electronics", true),
  new Product(6, "Coffee Maker", 75, 8, "Appliances", false),
  new Product(7, "Shoes", 200, 12, "Accessories", true),
];
console.log("Danh sách sản phẩm:", products);
//3
const productNP = products.map((product) => {
  return { name: product.name, price: product.price };
});
console.log("Danh sách mảng chỉ chứa tên và giá:", productNP);
//4
const productQT = products.filter((product) => product.quantity > 0);
console.log("Danh sách mảng còn hàng trong kho:", productQT);
//5
const productPrice = products.some((product) => product.price > 30000000);
console.log("Có sản phẩm nào có giá lớn hơn 30000000:", productPrice);
//6
const productCategory = products
  .filter((p) => p.category === "Accessories")
  .every((p) => p.isAvailable === true);
console.log(
  "Tất cả sản phẩm trong danh mục Accessories có đang bán kh:",
  productCategory,
);
//7
const productTotalValue = products.reduce((total, product) => {
  return total + product.price * product.quantity;
}, 0);
console.log("Tổng giá trị tất cả sản phẩm trong kho:", productTotalValue);
//8
for (const product of products) {
  console.log(
    `Sản phẩm ${product.name} - Danh mục  ${product.category} - Trạng thái ${product.isAvailable ? "Đang bán" : "Ngừng bán"}`,
  );
}
//9
for (const i in products) {
  console.log("Index:", i);
  console.log("Value:", products[i]);
}

//10
const productTrue = products
  .filter((product) => product.isAvailable && product.quantity > 0)
  .map((product) => product.name);
console.log("Tên các sản phẩm đang bán và còn hàng trong kho:", productTrue);
