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

let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function rps() {
    let number = Math.floor( Math.random()*3);
    return hands[number]
}

console.log(rps())


let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    // Challenge:
    // When the user clicks on the "Pick Fighters" button, pick two random 
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
    const fighter1Number = Math.floor( Math.random() * fighters.length);
    const fighter2Number = Math.floor( Math.random() * fighters.length);
    stageEl.textContent = fighters[fighter1Number] + " vs " + fighters[fighter2Number]
      
})