// TODO-03: Write if/else if to print:
// Password < 6 chars → "Too short"
// 6–10 chars → "Moderate"
// 11+ chars → "Strong"

const password = "pass12aa3";

if (password.length < 6) {
    console.log("Too short")
} else if (password.length >= 6 && password.length <= 10) {
    console.log("Moderate")
} else if (password.length >= 11) {
    console.log("Strong")
}
