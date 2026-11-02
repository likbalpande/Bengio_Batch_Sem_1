// // function declaration
// function greet(studentName) {
//     console.log(`Hello ${studentName}`);
// }

// // invocation / run
// greet("Ajay");
// greet("Anuj");

// -------------------------------
// console.log("START");
// function printPrice(itemName, itemPriceInDollar) {
//     const priceInINR = itemPriceInDollar * 100;
//     console.log(`${itemName} : ${priceInINR}`);
// }

// printPrice("Kiwi", 2.49);
// printPrice("Honey", 6.99);
// console.log("END");

// ---------------------------------
// function add(a, b) {
//     const ans = a + b;
//     return ans;
// }
// let result = add(2, 3);
// console.log(result);
// console.log(add(10, 20) * 2);
// ---------------------------------
// function check() {
//     return "done";
//     console.log("Will this print?");
// }
// console.log(check());
// ---------------------------------
function introduce(name = "Likhilesh", city = "Delhi") {
    console.log(`${name} lives in ${city}`);
}
introduce();
introduce("Ajay");
introduce(undefined, "Pune");
introduce("Ajay", "Jaipur");
