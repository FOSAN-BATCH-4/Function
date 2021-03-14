// soal no 2

function shoutOut() {
  return "Halo Function!";
}

console.log(shoutOut());

// soal no 3
function calculateMultiply(numberOne, numberTwo) {
  return numberOne * numberTwo;
}
let num1 = 5;
let num2 = 6;

let hasilPerkalian = calculateMultiply(num1, num2);
console.log(hasilPerkalian);

// soal no 4
function processSentence(name, age, address, hobby) {
  return `Nama saya ${name}, umur saya ${age}, alamat saya ${address}, dan saya punya hobby yaitu ${hobby}`;
}

let name = "Agus";
let age = 30;
let address = "Jln. Malioboro, Yogjakarta";
let hobby = "gaming";

let fullSentence = processSentence(name, age, address, hobby);
console.log(fullSentence);
