// Challenge 1: Create a for loop to print all the even numbers till 100 in the console.
for (let i = 0; i <= 100; i += 2) {
  console.log(`Even Number: ${i}`);
}

// Challenge 2: Create a while loop to print all the odd numbers till 100 in the console.

let i = 1;
while (i <= 100) {
  if (i % 2 != 0) {
    console.log(`Odd Number: ${i}`);
  }
  i += 2;
}


// Challenge 3: Create a do while loop to print all the multiples of 3 till 100 in the console.
let n = 3;
do {
  console.log(`Multiple of 3: ${n}`);
  n += 3;
} while (n <= 100);


// Challenge 4: Create a for loop to print all the prime numbers till 100 in the console.

for (let i = 2; i <= 100; i++) {
  let isPrime = true;

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(`Prime Number: ${i}`);
  }
}
