let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

for (let i=0; i<largeCountries.length; i++) {
    console.log("- " + largeCountries[i]);
}


largeCountries.pop();
largeCountries.push("Pakistan");
largeCountries.shift();
largeCountries.unshift("China");

console.log(largeCountries);

let dayOfMonth = 13
let weekday = "Friday"

// If it is Friday the 13th, log out this spooky face: 😱
// Use the logical "AND operator" -> &&

if(dayOfMonth===13&&weekday==="Friday") {
    console.log("😱")
}

