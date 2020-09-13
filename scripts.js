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

function removeItem(id, quantity) {
  let object = document.getElementById(id);
  total -=
    parseInt(
      object
        .getElementsByClassName("shop-item-price")[0]
        .textContent.match(/(\d+)/)
    ) * quantity.value;
  changeTotal();
  document.getElementById(id).remove();
}

function quantityChange(item, quantity, uniqueId, r_value) {
  if (r_value) removeItem(uniqueId, quantity);
  else {
    console.log("quantityChjange");
    console.log("get Attribute: " + quantity.getAttribute("value"));
    console.log("value: " + quantity.value);
    difference = quantity.value - quantity.getAttribute("value");
    console.log(difference);
    total +=
      parseInt(
        item
          .getElementsByClassName("shop-item-price")[0]
          .textContent.match(/(\d+)/)
      ) * difference;
    // if (quantity.value == 0) removeItem(uniqueId, quantity);
    changeTotal();
    quantity.setAttribute("value", quantity.value);
  }
}

function addToCart(id) {
  let uniqueId = "cart-item-" + id;
  let item = document.getElementById(id);
  let object = document.createElement("div");
  let pic = document.createElement("img");
  let name = document.createElement("span");
  let price = document.createElement("span");
  let quantity = document.createElement("INPUT");
  let removeButton = document.createElement("button");

  console.log(document.getElementById("hello"));
  console.log(item);
  if (document.getElementById(uniqueId) != null) {
    // console.log("hello there: " + document.getElementById(uniqueId).getElementsByClassName("input-box")[0].value);
    let box = document
      .getElementById(uniqueId)
      .getElementsByClassName("input-box")[0];
    box.value = parseInt(box.value) + 1;
    quantityChange(item, box, uniqueId, false);
  } else {
    console.log("2");
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

    // name.classList.add("shop-item-title");

    price.textContent = item.getElementsByClassName(
      "shop-item-price"
    )[0].textContent;

    total += parseInt(
      item
        .getElementsByClassName("shop-item-price")[0]
        .textContent.match(/(\d+)/)
    );

    quantity.setAttribute("value", 1);
    quantity.classList.add("input-box");
    quantity.oninput = function () {
      if (quantity.value < 0) {
        alert("No Negative Numbers allowed.");
        quantity.setAttribute("value", 1);
      } else quantityChange(item, quantity, uniqueId, false);
    };

    removeButton.innerHTML = "REMOVE";

    removeButton.onclick = function () {
      quantityChange(item, quantity, uniqueId, true);
    };

    price.classList.add("shop-item-price");

    object.appendChild(pic);
    object.appendChild(name);
    object.appendChild(price);
    object.appendChild(quantity);
    object.appendChild(removeButton);

    object.classList.add("shop-row-item");
    document.getElementById("shop-container").appendChild(object);
    console.log(total);
    changeTotal();
  }
}

function purchase() {
  while (document.getElementById("shop-container").childElementCount > 3) {
    document.getElementById("shop-container").children[3].remove();
  }

  total = 0;
  changeTotal();
  alert("Thanks for your purchase uwu");
}
