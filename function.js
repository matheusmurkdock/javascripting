// to qualify for being a function one must take an input and return an output

function deter2(a1, a2, b1, b2) {
  const i = (a1 * b2) - (a2 * b1);
  console.log(i)
}

deter2(3, 4, 5,6);

function addSquare(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}

console.log(addSquare(39, 34));
