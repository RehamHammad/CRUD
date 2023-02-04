var productNameInput=document.getElementById('productName');
var productPriceInput=document.getElementById('productPrice');
var productCategoryInput=document.getElementById('productCategory');
var productDascInput=document.getElementById('productDesc');
var addBtn=document.getElementById('addBtn');
var products=[];
var inputs=document.getElementsByClassName('form-control');
var currentIndex=0;


if(JSON.parse(localStorage.getItem('ProductsList'))!=null){
products=JSON.parse(localStorage.getItem('ProductsList'));
display()
}
addBtn.onclick=function(){
 if (addBtn.innerHTML=='Add Product') {
 addProduct();
 }
 else{
 updateProduct();
 }
 display();
 resetForm();

}
function addProduct(){
  var product = {
    name:productNameInput.value,
    price:productPriceInput.value,
    desc:productDascInput.value,
    category:productCategoryInput.value
   }
   products.push(product);
   localStorage.setItem('ProductsList',JSON.stringify(products))
   

}
function display(){
  var box='';
  for(var i=0;i<products.length;i++){
    box+=
    `
    <tr>
    <td>${products[i].name}</td>
    <td>${products[i].price}</td>
    <td>${products[i].category}</td>
    <td>${products[i].desc}</td>
    <td><button onclick='getProductInfo(${i})' class='btn btn-outline-success mx-2'><i class="fa-solid fa-pen-to-square mx-2"></i></button>
    <button onclick='deleteProduct(${i})' class='btn btn-outline-danger'><i class="fa-solid fa-trash mx-2"></i></button></td>
    </tr>
    `
  }
  document.getElementById('Body').innerHTML=box
}

function resetForm(){
  for(var i=0;i<inputs.length;i++){
    inputs[i].value=''
  }
}

function deleteProduct(index){
 products.splice(index,1)
  display()
  localStorage.setItem('ProductsList',JSON.stringify(products))
}


function search(searchTxt){
  var box='';
  for(var i=0;i<products.length;i++){
    if(products[i].name.toLowerCase().includes(searchTxt.toLowerCase()))
    box+=
    `
    <tr>
    <td>${products[i].name}</td>
    <td>${products[i].price}</td>
    <td>${products[i].category}</td>
    <td>${products[i].desc}</td>
    <td><button class='btn btn-outline-success mx-2'>update</button>
    <button onclick='deleteProduct(${i})' class='btn btn-outline-danger'>delete</button></td>
    </tr>
    `
  }
  document.getElementById('Body').innerHTML=box
}
function getProductInfo(index){
  currentIndex=index;
 var currentProduct=products[index];
 productNameInput.value=currentProduct.name;
 productPriceInput.value=currentProduct.price;
 productDascInput.value=currentProduct.desc;
 productCategoryInput.value=currentProduct.category;
 addBtn.innerHTML='Update Product'

}


function updateProduct(){
  var product = {
    name:productNameInput.value,
    price:productPriceInput.value,
    desc:productDascInput.value,
    category:productCategoryInput.value
   }
   products[currentIndex]=product;
   localStorage.setItem('ProductsList',JSON.stringify(products))
   addBtn.innerHTML='Add Product';

}
productName.onkeyup=function()
{
    var regexName=/^[A-Z][a-z]{3,10}$/
    if(regexName.test(productName.value))
    {
        addBtn.removeAttribute('disabled');
        productName.classList.add('is-valid')
        productName.classList.remove('is-invalid')
        nameDenger.classList.add('d-none')
        namesuccess.classList.remove('d-none')
    }
    else{
       addBtn.disabled='true';
       productName.classList.remove('is-valid')
       productName.classList.add('is-invalid')
       nameDenger.classList.remove('d-none')
       namesuccess.classList.add('d-none')
    }
  
}


productCategory.onkeyup=function()
{
    var regexName=/^[A-Z][a-z]{5,10}$/
    if(regexName.test(productCategory.value))
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

productPrice.onkeyup=function()
{
    var regexName=/^([0-9]{3,4}|100|10000)$/
    if(regexName.test(productPrice.value))
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

productDesc.onkeyup=function()
{
    var regexName=/^[A-Z][a-z]{2,}$/
    if(regexName.test(productDesc.value))
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