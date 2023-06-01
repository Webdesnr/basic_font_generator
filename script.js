function changeFontColor() {
  const color = document.getElementById("changeFontColor").value;
  document.getElementById("userInput").style.color = color;
}

function changeFontSize() {
  const size = document.getElementById("changeFontSize").value;
  document.getElementById("userInput").style.fontSize = size + "px";
}

function changeFontFamily() {
  const family = document.getElementById("changeFontFamily").value;
  document.getElementById("userInput").style.fontFamily = family;
}

function changeFontWeight() {
  const weight = document.getElementById("changeFontWeight").value;
  document.getElementById("userInput").style.fontWeight = weight;
}
