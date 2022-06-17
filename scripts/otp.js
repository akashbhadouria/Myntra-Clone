var obj = document.getElementById("partitioned");
obj.addEventListener("keydown", stopCarret);
obj.addEventListener("keyup", stopCarret);

function stopCarret() {
  if (obj.value.length > 3) {
    setCaretPosition(obj, 3);
  }
}

function setCaretPosition(elem, caretPos) {
  if (elem != null) {
    if (elem.createTextRange) {
      var range = elem.createTextRange();
      range.move("character", caretPos);
      range.select();
    } else {
      if (elem.selectionStart) {
        elem.focus();
        elem.setSelectionRange(caretPos, caretPos);
      } else elem.focus();
    }
  }
}
let j = 0;
const sentTo = document.getElementById("sent2");

let num = JSON.parse(localStorage.getItem("sent_to")) || 9876543201;
sentTo.innerHTML = null;
sentTo.innerHTML += ` ${num}`;

const resend = document.getElementById("sp");

let i = 30;

const val = document.getElementById("partitioned").value;

if (val == 1234) {
  alert("Complete your Payment");
  window.location.href = "./payment.html";

  console.log(val);
}
const set = () => {
  setInterval(function () {
    if (i === 0) {
      i = 30;
    }
    i--;
    resend.innerHTML = null;
    resend.innerText += `${i}`;
  }, 1000);
};

set();

// Clicking the Bag Icon
let bag = document.querySelector(".fa-bag-shopping");

console.log(bag);
bag.onclick = () => {
  location.href = "./payment.html";
};
