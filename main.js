function one() {
  console.log("1. The user enters 1 number (A). Print all numbers from 1 to 1000 that are divisible by A.");
  const a = +prompt("Enter A");
  for (let i = 1; i <= 1000; i++) {
    if (i % a == 0) {
      console.log(i);
    }
  }
}
function three() {
  console.log("2. The user enters 1 number (A). Find the number of positive integers whose square is less than A (n^2 < A).");
  const a = +prompt("Enter A");
  for (let i = a - 1; i > 0; i--) {
    if (a % i == 0) {
      console.log(i);
      break;
    }
  }
}

function two() {
  console.log("3. The user enters 1 number (A). Print the largest divisor (other than A itself) of the number A.");
  const a = +prompt("Enter A");
  for (let i = 1; ; i++) {
    if (i ** 2 < a) {
      console.log(i);
    }
  }
}

function four() {
  console.log("4. The user enters 2 numbers (A and B). Print the sum of all numbers from the range A to B that are divisible by 7 without a remainder. (Note that B may be less than A if you type).");
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
  console.log("5. The user enters 1 positive number (N). Print the Nth number of the fibonacci series. In the fibonacci series, each next number is the sum of the previous two. The first and second are considered equal to 1.");
  const n = +prompt("Enter N");
  let a = 1;
  let b = 1;
  let c;
  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
    if (i == n) {
      console.log(a);
      break;
    }
  }
}

function six() {
  console.log("6. The user enters 2 numbers. Find their greatest common divisor using Euclid's algorithm. (yes, you've got to google this algorithm at first :D ).");
  let a = +prompt("Enter A");
  let b = +prompt("Enter B");
  while (a != 0 && b != 0) {
    if (a > b) {
      a = a % b;
    } else {
      b = b % a;
    }

    console.log(a + b);
  }
}

function seven(){
  console.log("7. The user enters 1 number. Find a number that is a mirror image of the sequence of digits of a given number, for example, given the number 123, output is 321 in this case.");
  let num = +prompt("Enter N");
  // let rev = 0;
  ////
  let rev_num = 0;
  ////
  while(num != 0){
    //////
    rev_num = rev_num*10 + num % 10;
    num = Math.floor(num / 10);
    /////
    // rev = rev * 10;
    // rev += num % 10;
    // num = Math.floor(num / 10);
  }
  // console.log(rev);
  ////
  console.log(rev_num);
  /////
}

seven();
