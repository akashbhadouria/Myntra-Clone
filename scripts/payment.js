let cart = JSON.parse(localStorage.getItem("cart")) || [];

const show = document.getElementById("show");

let cost = document.getElementById("mrp");
let dis_cost = document.getElementById("smrp");
let cp1 = 0,
  sp1 = 0;

const append = () => {
  show.innerHTML = null;
  cost.innerHTML = null;
  dis_cost.innerHTML = null;

  cart.map((el, idx) => {
    console.log(el);
    let box = document.createElement("div");
    box.setAttribute("class", "box");

    let img = document.createElement("img");
    img.src = el.tshirt.img1;

    let container = document.createElement("div");
    container.setAttribute("class", "container");

    let price = document.createElement("h5");
    price.innerText = el.tshirt.price;

    let sp = document.createElement("p");
    sp.innerText = el.tshirt.sellPrice;
    sp.setAttribute("class", "sp");
    // sp.style.textDecoration = "dashed";

    let discount = document.createElement("p");
    discount.innerText = el.tshirt.discount;
    discount.setAttribute("class", "discount");

    let remove = document.createElement("btn");
    remove.setAttribute("class", "remove");
    remove.textContent = "REMOVE";

    remove.addEventListener("click", () => {
      Remove(cart, el, idx);
    });

    cp1 += el.tshirt.cost;
    sp1 += el.tshirt.selling_cost;

    // Appending
    container.append(img, price, sp, discount);
    box.append(container, remove);
    show.append(box);
  });
};

append();

// console.log(bag);

cost.innerText = cp1;
dis_cost.innerText = sp1;

console.log(sp1, cp1);

const Remove = (arr, el, idx) => {
  console.log("inside");
  cart.splice(idx, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
};

const order = document.getElementById("order");
order.onclick = () => {
  setTimeout(() => {
    alert("Order Placed");
  }, 1000);
  setTimeout(() => {
    alert("Order Dispatched");
  }, 4000);
  setTimeout(() => {
    alert("Order Reaching Soon");
  }, 6000);
  setTimeout(() => {
    alert("Thank-you, for ordering from us.");
  }, 8000);
};
