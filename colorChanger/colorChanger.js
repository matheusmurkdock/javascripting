let bgColor = document.querySelector("html")
console.log(bgColor);

const arrColor = [
  "AntiqueWhite",
  "Aquamarine",
  "BlueViolet",
  "Chartreuse",
  "CornflowerBlue",
  "Cyan",
  "Crimson",
  "DarkCyan",
]

const btn = document.querySelector("#btn")
console.log(btn);

const random = function(max) {
  num = Math.floor(Math.random() * max);
  return num;
}

console.log(random(7));
btn.addEventListener("click", function() {
  colorname = arrColor[random(7)];
  alert(`You've got ${colorname}!`);
  bgColor.style.backgroundColor = colorname;
})
