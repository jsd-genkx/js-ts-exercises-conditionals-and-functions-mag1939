// TODO-02: Use if/else to check if it's a number
// (hint: typeof or isNaN)

const userInput = 42;
// Try changing to "hello", 10, null, NaN

if (typeof userInput === "number" && !isNaN(userInput)) {
    console.log(`${userInput} is a number type!`);
} else {
    console.log(`${userInput} is a not number type!`);
}

// // K'itt method
// // (hint: typeof or isNaN)
// const userInput = 42;
// // Try changing to "hello", 10, null, NaN
// if (typeof userInput === 'number' && !isNaN(userInput)){
//     console.log(`T :${userInput} <- This is Number`);
// }else{
//     console.log(`F :${userInput} <-This is not number /is NaN`);
// }
