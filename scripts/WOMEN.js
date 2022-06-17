const getData = async () => {
  let url = "http://localhost:4000/women";

  let res = await fetch(url);
  let data = await res.json();

  console.log("change hua");
  // // console.log(data);
  // console.log("_________________________________");
  // console.log("_________________________________");
  // console.log("_________________________________");
  // console.log("_________________________________");
  // console.log("_________________________________");
  // console.log("_________________________________");
  // console.log("_________________________________");
  // data.sort(
  //   (a, b) => a["product-ratingsContainer"] - b["product-ratingsContainer"]
  // );

  let val = document.querySelector(".arrange");
  let ans = val.value;

  if (ans === "asc-p") {
    data.sort(
      (a, b) => a["product-ratingsContainer"] - b["product-ratingsContainer"]
    );
    // append(data);
  } else if (ans === "dsc-p") {
    data.sort(
      (a, b) => b["product-ratingsContainer"] - a["product-ratingsContainer"]
    );
    // append(data);
  } else if (ans === "str-i") {
    data.sort((a, b) => a["product-product"] > b["product-product"]);
    // append(data);
  } else if (ans === "str-d") {
    data.sort((a, b) => a["product-product"] < b["product-product"]);
    // append(data);
  }
  append(data);

  // return data;
};
getData();

const show = document.getElementById("show");

// Append
const append = (data) => {
  show.innerHTML = null;
  console.log("yaha bhi");
  data.map((el) => {
    if (el["img-responsive src"] !== "") {
      let div = document.createElement("div");
      div.setAttribute("class", "box");

      let img = document.createElement("img");
      img.src = el["img-responsive src"];

      let name = document.createElement("h5");
      name.setAttribute("class", "n");
      name.textContent = el["product-product"];

      let price = document.createElement("p");
      price.setAttribute("class", "cost");
      price.innerText = el["product-discountedPrice"];

      let rating = document.createElement("p");
      rating.innerText = `Rating: ${el["product-ratingsContainer"]}`;

      // Small div
      let small_div = document.createElement("div");
      small_div.setAttribute("class", "small_div");

      // discounted price
      let dis_price = document.createElement("p");
      dis_price.setAttribute("class", "dis_cost");
      dis_price.style.textDecoration = "line-through";
      dis_price.innerText = `${el["product-strike"]}`;

      // Discount
      let discount = document.createElement("p");
      discount.setAttribute("class", "discount");
      discount.innerText = `${el["product-discountPercentage"]}`;

      // Star
      let star = document.createElement("span");
      star.setAttribute("class", "fa-solid fa-star");

      // Reviews
      let reviews = document.createElement("div");
      reviews.setAttribute("class", "reviews");
      //  ${el["product-ratingsCount"]}  ${el["product-separator"]}
      reviews.innerText = `${el["product-ratingsContainer"]}`;
      reviews.append(star);

      let btn = document.createElement("button");

      btn.innerHTML = `<i class="fa-regular fa-heart"></i><p> WISHLIST </p> `;
      btn.setAttribute("class", "btn");
      btn.style.display = "none";

      // div.append(img, name, price, btn);
      // show.append(div);
      small_div.append(reviews, price, dis_price, discount);
      div.append(img, name, small_div, btn);
      show.append(div);

      // Handling events
      div.onmouseover = () => {
        btn.style.display = "block";
        reviews.style.display = "none";
      };

      div.onmouseout = () => {
        btn.style.display = "none";
        reviews.style.display = "block";
      };
    }
  });
};

// const sort = async (data) => {
//   let val = document.querySelector(".arrange");
//   let ans = val.value;

//   console.log(ans);
//   if (ans === "asc-p") {
//     data.sort(
//       (a, b) => a["product-ratingsContainer"] - b["product-ratingsContainer"]
//     );
//     append(data);
//   } else if (ans === "dsc-p") {
//     data.sort(
//       (a, b) => b["product-ratingsContainer"] - a["product-ratingsContainer"]
//     );
//     append(data);
//   } else if (ans === "str-i") {
//     data.sort((a, b) => a["product-product"] > b["product-product"]);
//     append(data);
//   } else if (ans === "str-d") {
//     data.sort((a, b) => a["product-product"] < b["product-product"]);
//     append(data);
//   }
//   append(data);
// };

// Clicking the Bag Icon
let bag = document.querySelector(".fa-bag-shopping");

console.log(bag);
bag.onclick = () => {
  location.href = "./payment.html";
};
