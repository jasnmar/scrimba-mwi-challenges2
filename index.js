const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


setupPage() 

function setupPage() {
    const genBtn = document.getElementById('generate');
    genBtn.addEventListener("click", generatePasswords);
}

function generatePasswords(event) {
    event.preventDefault();
    const pw1El = document.getElementById("pw1");
    const pw2El = document.getElementById("pw2");
    pw1El.textContent = createPassword();
    pw2El.textContent = createPassword();
}

function createPassword() {
    const pwLength = 20;
    let cPW = "";
    for (let i=0; i < pwLength; i++) {
        const cIndex = Math.floor( Math.random() * characters.length)
        cPW += characters[cIndex]
    }
    return cPW;
}