const plusBtn = document.querySelector(".plus__btn-container")
const minusBtn = document.querySelector(".minus__btn-container")
const  inputSlider = document.querySelector(".input-slider")
let sliderValue = document.querySelector(".input__slider-value")



const settings = {
    characters: parseInt(inputSlider.value),
    simbols: true,
    numbers: true,
    capitalLetters: true,
    lowercase: true 
}

const characters = {
    numbers: '0 1 2 3 4 5 6 7 8 9',
    simbols: '! @ # $ % & / ? ¡ ¿ * { } ( ) - + : ; < > ',
    capitalLetters: 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z',
    lowercase: 'a b c d e f g h i j k l m n o p q r s t u v w x y z'
}

for (const key in characters){
    characters[key] = characters[key].replace(/\s+/g, '')
}

// getting the btn's
const addSimbolsBtn = document.querySelector(".simbols-btn")
const addNumbersBtn = document.querySelector(".numbers-btn")
const addCapitalLettersBtn = document.querySelector(".capital__letters-btn")
const addLowercase = document.querySelector(".lowercase-btn")

// generate password Btn
const generatePasswordBtn = document.querySelector(".generate-password")
const passwordGenerated = document.querySelector(".password")
const passwordCopied = document.querySelector(".copy-password")
passwordGenerated.addEventListener("click", function(){
    passwordGenerated.select()
    document.execCommand("copy")

    // showing the copied text
    passwordCopied.classList.add("show")
    passwordGenerated.classList.add("copied")
    setTimeout(()=>{
        passwordCopied.classList.remove("show")
        passwordGenerated.classList.remove("copied")
    },1000)
})

// showing the input value and updating the value of the input slider
inputSlider.addEventListener("input", ()=>{
    settings.characters = inputSlider.value
    sliderValue.textContent = inputSlider.value
})

// getting the icons
const check1 = document.getElementById("check-container1")
const erase1 = document.getElementById("erase-container1")

const check2 = document.getElementById("check-container2")
const erase2 = document.getElementById("erase-container2")

const check3 = document.getElementById("check-container3")
const erase3 = document.getElementById("erase-container3")

const check4 = document.getElementById("check-container4")
const erase4 = document.getElementById("erase-container4")

// making the buyttons work 
addSimbolsBtn.addEventListener("click", function(){
    generateInput("simbols")
    check1.classList.toggle("hide")
    erase1.classList.toggle("show")
    addSimbolsBtn.classList.toggle("darkGrey")
})

addNumbersBtn.addEventListener("click", function(){
    generateInput("numbers")
    check2.classList.toggle("hide")
    erase2.classList.toggle("show")
    addNumbersBtn.classList.toggle("darkGrey")
})

addCapitalLettersBtn.addEventListener("click", function(){
    generateInput("capitalLetters")
    check3.classList.toggle("hide")
    erase3.classList.toggle("show")
    addCapitalLettersBtn.classList.toggle("darkGrey")

})

addLowercase.addEventListener("click", function(){
    generateInput("lowercase")
    check4.classList.toggle("hide")
    erase4.classList.toggle("show")
    addLowercase.classList.toggle("darkGrey")
})

// this gets the key value of each button 
const generateInput = (key)=>{
    settings[key] = !settings[key]
    // console.log(settings[key])
}

generatePasswordBtn.addEventListener("click", function(){
    validSettings()
})

let hasSettings = false
function validSettings(){
    for(let key in settings){
        if (settings.hasOwnProperty(key) && settings[key]){
            hasSettings = true
        } else {
            console.log("please select at least 1 option")
        }
    }
    generatePassword()
}

function generatePassword(){
    let avalaibleCharacters = ""
    let password = ""

    if(settings.simbols){
        avalaibleCharacters += characters.simbols
    } 
    if (settings.numbers){
        avalaibleCharacters += characters.numbers
    } 
    if(settings.capitalLetters){
        avalaibleCharacters += characters.capitalLetters
    } 
    if(settings.lowercase){
        avalaibleCharacters += characters.lowercase
    }
    for(let i = 0; i < settings.characters; i++){
        password += avalaibleCharacters.charAt(Math.floor(Math.random() * avalaibleCharacters.length))
    }
    passwordGenerated.value = password
    return console.log(password, password.length)
}






 





