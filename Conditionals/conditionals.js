// let random = Math.random();
// if (random < 0.5) {
//     console.log("YOUR NUMBER IS LESS THAN 0.5!!!")
// } else {
//     console.log("YOUR NUMBER IS GREATER (OR EQUAL) THAN 0.5!!!")
// }
// console.log(random);

// const day0fWeek = prompt('ENTER A DAY');

// if (day0fWeek === 'Monday') {
//     console.log("UGHHH I HATE MONDAYS!")
// } else if (day0fWeek === 'Saturday') {
//     console.log("YAY I LOVE SATURDAYS!")
// } else if (day0fWeek === 'Friday') {
//     console.log("FRIDAY ARE DECENT, ESPECIALLY AFTER WORD!")
// } else {
//     console.log("MEN")
// }


// 0-5 - FREE
// 5 - 10 CHILD $10
// 10 - 65 ADULT $20
// 65+ SENIOR $10

// const age = prompt();
// if (age < 5) {
//     console.log("You are a baby. You get in for free!")
// } else if (age < 10) {
//     console.log("You are a child. You pay $10")
// } else if (age < 65) {
//     console.log("You are an adult. You pay $20")
// } else {
//     console.log("You are a senior. You pay $10")
// }

const password = prompt("please enter a new password")

if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log("Valid Password!");
    } else {
        console.log("Password cannot contain spaces!");
    }
} else {
    console.log("PASSWORD TOO SHORT! MUST be 6+ characters");
}

