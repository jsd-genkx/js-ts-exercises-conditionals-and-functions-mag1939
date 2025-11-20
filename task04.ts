// TODO-04: Write if/else if to check and print:
// Divisible by both 3 and 5 → "FizzBuzz"
// Divisible by only 3 → "Fizz"
// Divisible by only 5 → "Buzz"
// Otherwise → "Not divisible by 3 or 5"
let num = 10;

if (num === 0) {
    console.log("Zero is not acceptable");
} else if (num%3 === 0 && num%5 === 0) {
    console.log("FizzBuzz");
} else if(num%3 === 0) {
    console.log("Fizz");
} else if(num%5 === 0) {
    console.log("Buzz");
} else {
    console.log("Not divisible by 3 or 5");
}

// using Modulo to find remainder, if remainder is 0 then it's divisible!
// write a conditions each lines
// put otherwise in else

// TODO BONUS: Rewrite with if