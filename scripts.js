// const splash = document.querySelector(".splash");

// document.addEventListener("DOMContentLoaded", (e) => {
//   setTimeout(() => {
//     splash.classList.add("display-none");
//   }, 4000);
// });

function bgChange(bg) {
  document.body.style.background = bg;
}

function opacityChange(id, opNum) {
  console.log(id);
  document.getElementById(id).style.opacity = opNum;
}

function hlBgChange(id, bg) {
  document.getElementById(id).style.background = bg;
}

// function toggleAnimation(id) {
//   var element = document.getElementById(id);
//   element.className = "shake";
//   console.log("hello");
// }
