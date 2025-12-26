// first iteration i = 0 becomes 1 is n = 1 and prints 1
// second iteration i = 2  and n = 1 + 2  and prints  3
// third iteration i = 3 if condition true and continue so restarts  and i = 4  and n = 3 + 4 and prints 7
//
// continue jumps to the condition in while loop and jumps to the increment in for loop
//

function name(para) {
  console.log(`Hi ${para}!`);
}

const year = function(semesterno) {
  if (semesterno === 1) {
    console.log("you are a newbie!");
  }
  else if (semesterno === 2) {
    console.log("you are still new bro!");
  }
  else if (semesterno === 3) {
    console.log("you got one up i see");
  }
  else if (semesterno === 4 ) {
    console.log("have you tried GSOC");
  }
  else if (semesterno === 5) {
    console.log("you need to hurry bro you almost a senior");
  }
  else if (semesterno === 6) {
    console.log("one word TnP");
  }
  else if (semesterno === 7) {
    console.log("what you thinking? ");
  }
  else if (semesterno === 8) {
    console.log("bye bye DTU");
  }

  function nothere(semesterno) {
    try {
      if (semesterno > 8) {
        throw "Error is in";
      }
    }
    catch (e) {
      console.log("Yo Hold Up");
    }
  }
  nothere(semesterno);
}

const introduction = function(para, semesterno) {
  console.log(name(para) + ", " + year(semesterno));
}

introduction("Kunal", 4);
