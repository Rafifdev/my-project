const bodyColor = document.querySelector("body");
const buttonColor = document.querySelectorAll("button");
const h1Color = document.querySelector("h1");

let R = "";
let G = "";
let B = "";

function bodyChageColor() { //Ganti warna body
  R = Math.round(Math.random() * 256);
  G = Math.round(Math.random() * 256);
  B = Math.round(Math.random() * 256);

  const Rgb = `rgb(${R},${G},${B})`;

  bodyColor.style.background = Rgb;
  return;
}

function buttonChageColor() { //Ganti warna button
  R = Math.round(Math.random() * 256);
  G = Math.round(Math.random() * 256);
  B = Math.round(Math.random() * 256);

  const Rgb = `rgb(${R},${G},${B})`;

  buttonColor.forEach(button => {
    button.style.background = Rgb;
  })

  return;
}

function textChageColor() { //Ganti warna text
  R = Math.round(Math.random() * 256);
  G = Math.round(Math.random() * 256);
  B = Math.round(Math.random() * 256);

  const Rgb = `rgb(${R},${G},${B})`;

  h1Color.style.color = Rgb;
  
  buttonColor.forEach(text => {
    text.style.color = Rgb
  })

  return;
}

function resetColor() { //Reset warna ke default
  bodyColor.style.background = "white";
  h1Color.style.color = "black";

  buttonColor.forEach(resetButtonColor => {
    resetButtonColor.style.background = "wheat";
  })

  buttonColor.forEach( resetTextColor=> {
    resetTextColor.style.color = "black"
  })
  
  return;
}

document
  .getElementById("generateColor")
  .addEventListener("click", bodyChageColor, buttonChageColor, textChageColor);
