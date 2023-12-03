// cart
let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");


const modeToggle = document.getElementById('modeToggle');
const modeText = document.getElementById('modeText');
const body = document.body;

modeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        modeText.innerText = 'Dark Mode';
    } else {
        modeText.innerText = 'Light Mode';
    }
});

// Optional: Check for user's preferred color scheme
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add('dark-mode');
    modeToggle.checked = true;


    modeText.innerText = 'Dark Mode';
}

document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-link');  
    burger.addEventListener('click', function () {
      navLinks.classList.toggle('.nav-link.show');
    });
});

// open cart
cartIcon.onclick = () =>{
    cart.classList.add('active');
};


// close art
closeCart.onclick = () =>{
    cart.classList.remove('active');
};

// cart working js
if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
}else {
    ready();
}
//making function

function ready(){
// remove items from cart
var removeCartButtons = document.querySelector('cart-remove');
console.log(removeCartButtons);
for (var i = 0; i < removeCartButtons.length; i++) {
    var button = removeCartButtons[i];
    button.addEventListener('click', removeCartItem);
    }
    // quantity changes
    var quantityInput = document.getElementById("cart-quantity");
    for (var i = 0; i < quantityInput.length; i++){
    var input = quantityInput[i];
    input.addEventListener("change", quantityChanged);
    }
}
// remove items from cart
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal();
}
function quantityChanged(event){
    var inut = event.target
    if (NaN(input.value) or input.value <= 0 {
        input.value = 1
    })

updateTotal();





}



// upate total
function updateTotal(){
    var cartContent = document.getElementsByClassName("cart-content")[0]
var cartBoxes = cartContent.getElementsByClassName("cart-box")
for (var i = 0; 1< cartBoxes.length; i++){
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.getElementsByClassName("cart-price")[0];
    var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
    var price = parseFloat(priceElement.innerText.replace("0$", " "));
    var quantity = quantityElement.ariaValueMax;
    total = total + (price + quantity);

    document.getElementsByClassName("total-price")[0].innerText = "$" + total;
}
}




  

