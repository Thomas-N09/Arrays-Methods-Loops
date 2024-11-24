const myArray = ["apple", "banana", "cherry", "date", "eggplant"];

//1.--------------------------------------------------------------------------------------
// Print the numbers 1-10 using a "for-loop"

// for (let i = 1; i <= 10; i++) {
//  console.log(i);
//}

//2.--------------------------------------------------------------------------------------
// Print the numbers 1-10 using a "while loop"

let w = 1;
let x = 10;
while (w <= 10) {
  console.log(w);
  w++;
}

//3.--------------------------------------------------------------------------------------
// Print each item in myArray using a "for loop".

for (let item in myArray) {
  console.log(myArray[item]);
}

//4.--------------------------------------------------------------------------------------
// Using the myArray.push() method, add "mango" to the end of myArray.
//print myArray using a for... of loop.

const addItem = myArray.push("mango");
for (const element of myArray) {
  console.log(element);
}

//5.--------------------------------------------------------------------------------------
//Using the myArray.splice() method, remove "cherry" from myArray
// print the result using myArray.foreach()

// Laget et nytt array for å se det lettere i console.

const newArray = ["apple", "banana", "cherry", "date", "eggplant"];
const remove = newArray.splice(2, 1);
newArray.forEach((element) => console.log(element));

//6.--------------------------------------------------------------------------------------
// Using the .shift() and .pop() method, remove the first and last item from myArray.
//print the result

const firstItem = myArray.shift();
myArray.pop();
console.log(myArray);

// 7.--------------------------------------------------------------------------------------
// create a variable and assign it the content of myArray as a string using .join().
// print your variable.
//BONUS - See if you can make the items be seperated by a space

// Var veldig usikker her. Er det mulig å legge til text bare ên gang med .join?
// Når jeg prøvde så ble "strawberry" lagt til hver eneste item.

const fruit = myArray.push("strawberry");

console.log(myArray.join(" "));

//8--------------------------------------------------------------------------------------
//Create a function that takes a number as an argument and returns that number squared.
// call your function by using a valid argument

//let number = 4;
function numberSquared(number) {
  return Math.pow(number, 2);
}

console.log(numberSquared(6));

//9.--------------------------------------------------------------------------------------
//Using the "%" (modulo) operator complete the function,
// it should take "number" as an argument and return "even" if its even and "odd" if its odd.
function oddOrEven(number) {
  if (number % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}

oddOrEven(7);

//call your function by using one of the options below.
// oddOrEven(prompt());
// oddOrEven()

//10.--------------------------------------------------------------------------------------
//write a function that prints the fibbonacci sequence for the number passed into it
// HINT! fibbonacchi =
//  c = a + b;
//  a = b;
//  b = c;

function Fibbonacci(number) {
  let a = 0,
    b = 1,
    c;
  console.log(a);
  console.log(b);
  for (let i = 2; i < number; i++) {
    c = a + b;
    console.log(c);
    a = b;
    b = c;
  }
}

Fibbonacci(10);

//11.--------------------------------------------------------------------------------------
//BONUS!Implement fizzbuzz, if a number is divisible by 3: Fizz, if a number is divisible by 5: Buzz, if the number is divisible by both 3 and 5, FizzBuzz
// https://www.geeksforgeeks.org/fizz-buzz-implementation/

function fizzbuzz(number) {
  for (var i = 1; i <= 15; i++) {
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
  }
}

fizzbuzz(5);

//12.--------------------------------------------------------------------------------------
//SUPERBONUS - we have not talked about recursion yet, but here is a fun one to try.
//recursion is when a function calls itself.
//Complete the function so that it returns the factorial of a number. Factorial (n!) is the product of all whole numbers between 1 and n
//example: factorial(5) = 5 * 4 * 3 * 2 * 1 = 120
function factorial(n) {
  if (n === 0) return 1;
  return; /// din kode her
}
console.log(factorial(5));
