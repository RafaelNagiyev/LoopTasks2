function one() {
  const a = +prompt("Enter A");
  for (let i = 1; i <= 1000; i++) {
    if (i % a == 0) {
      console.log(i);
    }
  }
}
function three() {
  const a = +prompt("Enter A");
  for (let i = a - 1; i > 0; i--) {
    if (a % i == 0) {
      console.log(i);
      break;
    }
  }
}

function two() {
  const a = +prompt("Enter A");
  for (let i = 1; ; i++) {
    if (i ** 2 < a) {
      console.log(i);
    }
  }
}

function four() {
  const a = +prompt("Enter A");
  const b = +prompt("Enter B");
  if (a > b) {
    for (let i = b; i < a; i++) {
      if (i % 7 == 0) {
        console.log(i);
      }
    }
  } else {
    if (a < b) {
      for (let i = b; i > a; i--) {
        if (i % 7 == 0) {
          console.log(i);
        }
      }
    }
  }
}

function five() {
  const n = +prompt("Enter N");
}

four();
