let digits = document.querySelector("#digits")
console.log(digits.textContent)

const arrDigits = [
]

const zero = document.querySelector(".zero")
const one = document.querySelector(".one")
const two = document.querySelector(".two")
const three = document.querySelector(".three")
const four = document.querySelector(".four")
const five = document.querySelector(".five")
const six = document.querySelector(".six")
const seven = document.querySelector(".seven")
const eight = document.querySelector(".eight")
const nine = document.querySelector(".nine")

zero.addEventListener("click", function(){
  arrDigits.push(0); 
  console.log(arrDigits);
  digits.textContent = arrDigits;
})

one.addEventListener("click", function(){
  arrDigits.push(1); 
  console.log(arrDigits);
})

two.addEventListener("click", function(){
  arrDigits.push(2); 
  console.log(arrDigits);
})

three.addEventListener("click", function(){
  arrDigits.push(3); 
  console.log(arrDigits);
})

four.addEventListener("click", function(){
  arrDigits.push(4); 
  console.log(arrDigits);
})

five.addEventListener("click", function(){
  arrDigits.push(5); 
  console.log(arrDigits);
})

six.addEventListener("click", function(){
  arrDigits.push(6); 
  console.log(arrDigits);
})

seven.addEventListener("click", function(){
  arrDigits.push(7); 
  console.log(arrDigits);
})

eight.addEventListener("click", function(){
  arrDigits.push(8); 
  console.log(arrDigits);
})

nine.addEventListener("click", function(){
  arrDigits.push(9); 
  console.log(arrDigits);
})
