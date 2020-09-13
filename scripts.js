// const splash = document.querySelector(".splash");

// document.addEventListener("DOMContentLoaded", (e) => {
//   setTimeout(() => {
//     splash.classList.add("display-none");
//   }, 4000);
// });

// function bgChange(id, bg) {
//   console.log(document.getElementById(id));
//   document.getElementById(id).background = bg;
// }

let total = 0;
let num = 1;

function opacityChange(id, opNum) {
  console.log(id);
  document.getElementById(id).style.opacity = opNum;
}

function hlBgChange(id, bg) {
  document.getElementById(id).style.background = bg;
}

function transition(id, page) {
  console.log("hello");
  document.getElementById(id).classList.add("transition");

  setTimeout(() => {
    location.href = page;
  }, 1000);
}

function changeTotal() {
  document.getElementById("total").innerHTML = total + " headpats";
}

function remove(id) {
  let object = document.getElementById(id);
  total -= parseInt(object.getElementsByClassName("shop-item-price")[0].textContent.match(/(\d+)/));
  changeTotal();
  document.getElementById(id).remove();
}

function quantityChange(quantity) {
  total += parseInt(
    item.getElementsByClassName("shop-item-price")[0].textContent.match(/(\d+)/) * quantity
  );

}

function addToCart(id) {
  let uniqueId = "cart-item-" + num;
  let item = document.getElementById(id);
  let object = document.createElement("div");
  let pic = document.createElement("img");
  let name = document.createElement("span");
  let price = document.createElement("span");
  let quantity = document.createElement("INPUT");
  let removeButton = document.createElement("button");

  object.id = uniqueId;
  num++;
  console.log(
    item.getElementsByClassName("shop-item-image")[0].getAttribute("src")
  );
  pic.src = item
    .getElementsByClassName("shop-item-image")[0]
    .getAttribute("src");
  pic.classList.add("cart-image");
  name.textContent = item.getElementsByClassName(
    "shop-item-title"
  )[0].textContent;
  name.classList.add("shop-item-title");
  price.textContent = item.getElementsByClassName(
    "shop-item-price"
  )[0].textContent;
  total += parseInt(
    item.getElementsByClassName("shop-item-price")[0].textContent.match(/(\d+)/)
  );
  quantity.setAttribute("value", 1);
  quantity.onchange = function() {quantityChange(parseInt(quantity.getAttribute("value")))};
  removeButton.innerHTML = "REMOVE";
  removeButton.onclick = function() {remove(uniqueId)};
  price.classList.add("shop-item-price");
  object.appendChild(pic);
  object.appendChild(name);
  object.appendChild(price);
  object.appendChild(quantity);
  object.appendChild(removeButton);
  object.classList.add("shop-row");
  document.getElementById("shop-container").appendChild(object);
  console.log(total);
  changeTotal();
}
