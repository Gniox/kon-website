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
  }, 1950);
}

// function toggleAnimation(id) {
//   var element = document.getElementById(id);
//   element.className = "shake";
//   console.log("hello");
// }
