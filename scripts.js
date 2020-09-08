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
