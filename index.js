let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

for (let i=0; i<largeCountries.length; i++) {
    console.log("- " + largeCountries[i]);
}


largeCountries.pop();
largeCountries.push("Pakistan");
largeCountries.shift();
largeCountries.unshift("China");

console.log(largeCountries);