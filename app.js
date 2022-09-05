//* Declare


const numberVal = document.querySelector("#numbers");
const output1 = document.querySelector(".numbersval");

const letterVal = document.querySelector("#letters");
const output2 = document.querySelector(".lettersval");

const specialVal = document.querySelector("#special");
const output3 = document.querySelector(".specialval");

const generate = document.querySelector(".generate");
const screen = document.querySelector(".screen");
const shown = document.querySelector(".willbeshown")

// let arr1 = [specialVal,letterVal,numberVal]

const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const specialChar = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/'];
const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'].concat(letters);
const obj = { nums: "n", letters: "l", specialChar: "s" }
//? Value display


// function displayVals(item){
//     const displayed = document.querySelector(`.${item.getAttribute("id")}+val`);
//     displayed.textContent = item.value;
// }


numberVal.oninput = function () {
    output1.innerHTML = this.value
}

letterVal.oninput = function () {
    output2.innerHTML = this.value
}

specialVal.oninput = function () {
    output3.innerHTML = this.value;
}

letterVal.addEventListener("mousemove", function(){
    let x = letterVal.value;
    let color2 = "linear-gradient(90deg, rgb(5, 240, 44)" + 20*x + "%, rgb(214,214,214)" + 20*x + "%)";
    letterVal.style.background = color2;
})
numberVal.addEventListener("mousemove", function(){
    let x = numberVal.value;
    let color2 = "linear-gradient(90deg, rgb(5, 240, 44)" + 20*x + "%, rgb(214,214,214)" + 20*x + "%)";
    numberVal.style.background = color2;
})
specialVal.addEventListener("mousemove", function(){
    let x = specialVal.value;
    let color2 = "linear-gradient(90deg, rgb(5, 240, 44)" + 20*x + "%, rgb(214,214,214)" + 20*x + "%)";
    specialVal.style.background = color2;
})
const shuffle = str => [...str].sort(() => Math.random() - .5).join('')

let pass = ""
function passWord(){
    let arr = [output1.innerHTML,output2.innerHTML,output3.innerHTML]
    const upperVal = document.querySelector("#check").checked
    if(upperVal){
        delete Object.assign(obj, {uppercase: obj.letters }).letters;
    }else{
        delete Object.assign(obj, {letters: obj.uppercase }).uppercase;
    }
    
    let counterForSelecteds = 0
    for (i of Object.keys(obj)) {
      for (let count = 0; count < arr[counterForSelecteds]; count++) {
        const generated = Math.floor(Math.random() * (eval(i).length));
        pass += eval(i)[generated]
      }
      counterForSelecteds += 1
    }
    
    if (shown.textContent == ""){
        shown.textContent = shuffle(pass);
        pass = ""
    }else{
        shown.textContent = "";
        shown.textContent = shuffle(pass);
        pass = "";
    }
}

generate.addEventListener("click",function(e){
    e.preventDefault();
    passWord();
    // console.log(output1.innerHTML);
    
})