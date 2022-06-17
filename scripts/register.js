const cell_number = document.getElementById("number").value;

console.log(cell_number);

document.getElementById("submit").onclick = () => {
  localStorage.setItem("sent_to", JSON.stringify(cell_number));
  window.location.href = "./otp.html";
};
