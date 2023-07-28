const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const charactersWithoutNumbers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const charactersWithoutSymbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const charactersWithoutNumbersAndSymbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

let withoutnumbers = document.getElementById("withoutnumbers")
let withoutsymboles = document.getElementById("withoutsymboles")


let pass1 = document.getElementById("pass1")
let pass2 = document.getElementById("pass2")

let passlength = document.getElementById("passlength").value
let randomIndex = 6
let pass = []
let pass22 = []


function refreshPage(){
    window.location.reload();
} 

function GeneratePassword(){
    if (withoutnumbers.checked == 1 && withoutsymboles.checked == 1){
        for (let i = 0; i < passlength; i++) {
            let randomIndex = Math.floor( Math.random() * charactersWithoutNumbersAndSymbols.length )
            let randomIndex2 = Math.floor( Math.random() * charactersWithoutNumbersAndSymbols.length )
            pass[i] = charactersWithoutNumbersAndSymbols[randomIndex]
            pass22[i] = charactersWithoutNumbersAndSymbols[randomIndex2]
        }
    }
    else if (withoutnumbers.checked == 1){
        for (let i = 0; i < passlength; i++) {
            let randomIndex = Math.floor( Math.random() * charactersWithoutNumbers.length )
            let randomIndex2 = Math.floor( Math.random() * charactersWithoutNumbers.length )
            pass[i] = charactersWithoutNumbers[randomIndex]
            pass22[i] = charactersWithoutNumbers[randomIndex2]
        }
    }
    else if(withoutsymboles.checked == 1){  
        for (let i = 0; i < passlength; i++) {
                let randomIndex = Math.floor( Math.random() * charactersWithoutSymbols.length )
                let randomIndex2 = Math.floor( Math.random() * charactersWithoutSymbols.length )
                pass[i] = charactersWithoutSymbols[randomIndex]
                pass22[i] = charactersWithoutSymbols[randomIndex2]
        }
    } 
    else {  
        for (let i = 0; i < passlength; i++) {
            let randomIndex = Math.floor( Math.random() * characters.length )
            let randomIndex2 = Math.floor( Math.random() * characters.length )

            pass[i] = characters[randomIndex]
            pass22[i] = characters[randomIndex2]
        }
    }   
    pass1.textContent = pass.join("")
    pass2.textContent = pass22.join("")
}



document.querySelect('#pass1').addEventListener('click', function() {
    copyToClipboard('copy this text');
 });

