// Functions

function checkNumber(num) {
  if (num === 0) {
    return "Off";
  } else if (num === 1) {
    return "On";
  }
}

// SWITCH CASE
let x = 1;
let y = 0;
let z = 1;
let a = 1;
let xtext = checkNumber(x);
let ytext = checkNumber(y);
let ztext = checkNumber(z);
let atext = checkNumber(a);

if (x === 0) {
  text = "OFF";
  console.log(text);
} else if (x === 1) {
  text = "ON";
  console.log(text);
}

switch (x) {
  case 0:
    text = "Off";
    console.log(text);
    break;
  case 1:
    text = "On";
    console.log(text);
    break;
  default:
    text = "No value found";
    console.log(text);
}
