// let shoutOut = ()=>'Hello Function!'

// console.log(shoutOut());

// function calculateMultiply(num1,num2){
//     return num1*num2;
// }

// let num1 = 6;
// let num2 = 5;
// let hasilPerkalian = calculateMultiply(num1,num2);
// console.log(hasilPerkalian);
function processSentence(){
 return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}`
}

let name = "Agus";
let age = 30;
let address = "Jln. Malioboro, Yogjakarta";
let hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence);