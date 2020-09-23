let products = [
  "Sony Xperia",
  "Samsung Galaxy",
  "Nokia 6",
  "Xiaomi Redmi Note 4",
  "Apple iPhone 6S",
  "Xiaomi Mi 5s Plus",
  "Apple iPhone 8 Plus",
  "Fujitsu F-04E",
  "Oppo A71",
];
var table = "";

function showProduct() {
  var tbody = document.getElementById("productList");
  var trs = "";
  products.forEach(function (v, i) {
    trs += `<tr>
        <td>${v}</td>
        <td>
          <button class="btn" href="#">Edit</button>
          <button class="btn" href="#">Remove</button>
        </td>
      </tr>`;
  });
  tbody.innerHTML = trs;
}

function create() {
  var name = document.getElementById("inputProduct").value;
  if (!existProduct(name)) {
    products.push(name);
    window.alert(`Product: ${name} has been added successfully `);
    showProduct();
    numberProduct();
    document.getElementById("inputProduct").value = "";
  } else {
    window.alert(`Product: ${name.trim()} is existed `);
  }
}
function numberProduct() {
  let soluong = document.getElementById("numberProduct");
  soluong.innerHTML = `${products.length} Products `;
}

function existProduct(productName) {
  for (var p of products) {
    if (format(p) == format(productName)) {
      return true;
    }
  }
  return false;
}
function format(name) {
  let result = "";
  let chars = [];
  name = name.trim();
  name = name.toLocaleLowerCase();
  chars = name.split("");

  for (let i = 0; i < chars.length - 1; i++) {
    if (chars[i] == " " && chars[i + 1] == " ") {
      continue;
    }
    result += chars[i];
  }
  result += chars[chars.length - 1];
  return result;
}

function ready() {
  showProduct();
}
ready();
document.getElementById(
  "numberProduct"
).innerHTML = `${products.length} Products `;
