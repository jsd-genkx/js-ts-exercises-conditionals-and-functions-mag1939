// TODO-03: Write if/else if to print:
// Password < 6 chars → "Too short"
// 6–10 chars → "Moderate"
// 11+ chars → "Strong"

const password = "pass12aa3";

// if (password.length < 6) {
//     console.log("Too short")
// } else if (password.length >= 6 && password.length <= 10) {
//     console.log("Moderate")
// } else if (password.length >= 11) {
//     console.log("Strong")
// }

// call function(?) length to count amount of chars our password has
// and use with Comparison and Logic Operators to write a conditions
// print out string message if match the condition

//clean code
const pwLength = password.length;
if (pwLength < 6) {
    console.log("Too short")
} else if (pwLength >= 6 && pwLength <= 10) {
    console.log("Moderate")
} else if (pwLength >= 11) {
    console.log("Strong")
}

