let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wish = JSON.parse(localStorage.getItem("wishlist")) || [];

let btn_cart = document.getElementById("cart");
let btn_wish = document.getElementById("wish");
let btn_check = document.getElementById("check");

btn_check.onclick = () => {
  const pin = document.getElementById("pin").value;
  if (pin.length === 6) {
    alert("Hurray! Your Order can be dellivered.");
  } else {
    alert("Sorry! Your Order can't be dellivered.");
  }
};

// Clicking the Bag Icon
let bag = document.querySelector(".fa-bag-shopping");

console.log(bag);
bag.onclick = () => {
  location.href = "./payment.html";
};
