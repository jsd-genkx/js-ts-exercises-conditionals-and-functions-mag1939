// TODO-05: Convert this if to switch/case (You can add more options.)

// const fruit: string = "orange";

// if (fruit === "apple") {
// 	console.log("An apple a day keeps the doctor away.");
// } else if (fruit === "banana") {
// 	console.log("Banana is good for potassium.");
// } else if (fruit === "orange") {
// 	console.log("Oranges are full of vitamin C.");
// } else {
// 	console.log("Unknown fruit.");
// }

// switch (fruit) {
// 	case "apple":
// 		console.log("An apple a day keeps the doctor away.");
// 		break;
// 	case "banana":
// 		console.log("Banana is good for potassium.");
// 		break;
// 	case "orange":
// 		console.log("Oranges are full of vitamin C.");
// 		break;
// 	default:
// 		console.log("Unknown fruit.");
// 		break;
// }

// understand how `switch` work, it need input to match the `case` so the function work
// and don't forgot `break;` it's a must!
// so it break the function immediately or else it'll continue until no `case` anymore

// TODO BONUS: Use object lookup

// กำหนด Type สำหรับ Lookup Object
// Record<key, value> กำหนด Object ที่ create ต้องเก็บค่า data Key ที่จะเข้ามาเป็น string และ Value เป็น string
type FruitNameStacks = Record<string, string>;

const fruitNameStacks: FruitNameStacks = {
	"apple": "An apple a day keeps the doctor away.",
	"banana": "Banana is good for potassium.",
	"orange": "Oranges are full of vitamin C."
}

function getFruitMessage(fruitName: string): string {
	// Input: fruitName เป็น string
	// Output: string (จะเป็นข้อความผลไม้หรือ "Unknown fruit.")

	// use Logical OR (||) เพื่อคืนค่า Default
	// ตัวดำเนินการ || จะคืนค่า Truthly ตัวแรกที่พบ, ถ้า `fruitNameStacks[fruitName]` is undefined, null and falsy
	return fruitNameStacks[fruitName] || "Unknown fruit.";
}

console.log(getFruitMessage("orange"));
console.log(getFruitMessage("apple"));
console.log(getFruitMessage(""));
console.log(getFruitMessage("Avocado"));