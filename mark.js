const sym1 = Symbol("george");
let sym2 = Symbol.for("cramer");
const sym3 = Symbol("xiomi");
const sym5 = Symbol("xiomi");

console.log(sym1);
console.log(sym2);
console.log(sym5);

let sym4 = "cramer";
console.log(sym4);

let whatName = "Kunal";
whatName = 54; // it changes the data type automatically because it is a dynamically written language meaning the data type is not to be defined at the time of declaration.

console.log(whatName);

// Numbers and the (+) operator
console.log("45" + 9);
console.log("34" + 399);  // the + operator will change the number to string for concatenation.
 
console.log("34" - 399); // the operations will convert string to number
console.log("34" / 399);
console.log("34" * 399);


const Arr1 = ['xiomi', 'apple', 'htc'];
const Arr2 = ['xiomi', , 'apple', 'htc'];
const Arr3 = ['xiomi', undefined, 'apple', 'htc']; // this is a good practice to not keep an array element blank but make it undefined instead for better readability.
console.log(Arr1);
console.log(Arr2);
console.log(Arr3);

console.log(typeof(Arr2[1]));

function special(name) {
    return name === "Civic" ? name: "Honda";
}

const carType = {
  car: "Honda",
  whichOne: special("Honda"),
}

console.log(carType);

// control flow
if (7-7 === 0) {
  console.log("zero"); // because in JS (0) is considered as boolean equivalent of False same goes ofr NaN, null, undefined, " ", etc
} else {
  console.log(typeof(7-7));
}
switch (0 + 31) {
  case 21:
    console.log('you lost');
    break;
  case 39:
    console.log("you won");
    break;
}

console.log('you\' move on');

throw "What did he sayy?";
