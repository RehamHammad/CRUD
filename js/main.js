var ProductNameInput = document.getElementById("productName");
var productPriceInput = document.getElementById("productPrice");
var productCategoryInput = document.getElementById("productCategory");
var productDescriptionInput = document.getElementById("productDesc");
var addBtn = document.getElementById("addBtn");
var products = [];
var currentIndex = 0;

if (JSON.parse(localStorage.getItem("productsList")) != null) {
  products = JSON.parse(localStorage.getItem("productsList"));
  displayData();
}

var inputs = document.getElementsByClassName("form-control");
addBtn.onclick = function () {
  if (addBtn.innerHTML == "Add Product") {
    addProduct();
  } else {
    updateProduct();
  }

  displayData();
  resetData();
};
function addProduct() {
  var product = {
    name: ProductNameInput.value,
    price: productPriceInput.value,
    category: productCategoryInput.value,
    desc: productDescriptionInput.value,
  };
  products.push(product);
  localStorage.setItem("productsList", JSON.stringify(products));
}

function displayData() {
  var box = "";
  for (var i = 0; i < products.length; i++) {
    box += `
   <tr>
   <td>${products[i].name}</td>
   <td>${products[i].price}</td>
   <td>${products[i].category}</td>
   <td>${products[i].desc}</td>
   <td><button onclick="deleteData(${i})" class="btn btn-outline-danger mx-2" ><i class="fa-solid fa-trash"></i> Delete </button>
   <button  onclick="getProductInfo(${i})" class="btn btn-outline-success" ><i class="fa-solid fa-pen-to-square"></i> Update </button></td>
   </tr>
   
   
   `;
  }
  document.getElementById("Body").innerHTML = box;
}

function resetData() {
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
}

function deleteData(index) {
  products.splice(index, 1);
  localStorage.setItem("productsList", JSON.stringify(products));
  displayData();
}

function search(searchTxt) {
  var box = "";
  for (var i = 0; i < products.length; i++) {
    if (products[i].name.toLowerCase().includes(searchTxt.toLowerCase())) {
      box += `
      <tr>
      <td>${products[i].name}</td>
      <td>${products[i].price}</td>
      <td>${products[i].category}</td>
      <td>${products[i].desc}</td>
      <td><button onclick="deleteData(${i})" class="btn btn-outline-danger mx-2" ><i class="fa-solid fa-trash"></i> </button>
      <button class="btn btn-outline-success" ><i class="fa-solid fa-pen-to-square"></i> </button></td>
      </tr>
      
      
      `;
    }
    document.getElementById("Body").innerHTML = box;
  }
}

function getProductInfo(index) {
  currentIndex = index;
  var currentProduct = products[index];
  ProductNameInput.value = currentProduct.name;
  productPriceInput.value = currentProduct.price;
  productCategoryInput.value = currentProduct.category;
  productDescriptionInput.value = currentProduct.desc;
  addBtn.innerHTML = "Update Product";
}

function updateProduct() {
  var product = {
    name: ProductNameInput.value,
    price: productPriceInput.value,
    category: productCategoryInput.value,
    desc: productDescriptionInput.value,
  };
  products[currentIndex] = product;
  localStorage.setItem("productsList", JSON.stringify(products));
}

// ProductNameInput.onkeyup=function(){
//   var nameRegex=/^[A-Z][a-z]{2,8}$/;
//   if(nameRegex.test(ProductNameInput.value)){
//     addBtn.removeAttribute('disabled')
//     ProductNameInput.classList.add('is-valid')
//     ProductNameInput.classList.remove('is-invalid')
//   }
//   addBtn.disabled='true';
//   ProductNameInput.classList.add('is-invalid')
//   ProductNameInput.classList.remove('is-valid')
// }
ProductNameInput.onkeyup=function()
{
    var regexName=/^[A-Z][a-z]{2,10}$/
    if(regexName.test(ProductNameInput.value))
    {
        addBtn.removeAttribute('disabled');
        ProductNameInput.classList.add('is-valid')
        ProductNameInput.classList.remove('is-invalid')
        nameDenger.classList.add('d-none')
        namesuccess.classList.remove('d-none')
    }
    else{
       addBtn.disabled='true';
       ProductNameInput.classList.remove('is-valid')
       ProductNameInput.classList.add('is-invalid')
       nameDenger.classList.remove('d-none')
       namesuccess.classList.add('d-none')
    }
  
}
productPriceInput.onkeyup=function()
{
    var regexName=/^([0-9]{3,4}|100|10000)$/
    if(regexName.test(productPriceInput.value))
    {
        addBtn.removeAttribute('disabled');
        productPrice.classList.add('is-valid')
        productPrice.classList.remove('is-invalid')
        priceDenger.classList.add('d-none')
        pricesuccess.classList.remove('d-none')
    }
    else{
       addBtn.disabled='true';
       productPrice.classList.remove('is-valid')
       productPrice.classList.add('is-invalid')
       priceDenger.classList.remove('d-none')
       pricesuccess.classList.add('d-none')
    }

}


productCategoryInput.onkeyup=function()
{
    var regexName=/^[A-Z][a-z]{3,10}$/
    if(regexName.test(productCategoryInput.value))
    {
        addBtn.removeAttribute('disabled');
        productCategory.classList.add('is-valid')
        productCategory.classList.remove('is-invalid')
        categoryDenger.classList.add('d-none')
        categorysuccess.classList.remove('d-none')
    }
    else{
       addBtn.disabled='true';
       productCategory.classList.remove('is-valid')
       productCategory.classList.add('is-invalid')
       categoryDenger.classList.remove('d-none')
       categorysuccess.classList.add('d-none')
    }
}
productDescriptionInput.onkeyup=function()
{
    var regexName=/^[A-Z][a-z]{2,}$/
    if(regexName.test(productDescriptionInput.value))
    {
        addBtn.removeAttribute('disabled');
        productDesc.classList.add('is-valid')
        productDesc.classList.remove('is-invalid')
        descDenger.classList.add('d-none')
        descsuccess.classList.remove('d-none')
    }
    else{
       addBtn.disabled='true';
       productDesc.classList.remove('is-valid')
       productDesc.classList.add('is-invalid')
       descDenger.classList.remove('d-none')
       descsuccess.classList.add('d-none')
    }
}