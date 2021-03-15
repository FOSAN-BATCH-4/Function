function processSentence(name,age,address,hobby){
    return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}`
}

let name = "Dhika";
let age = 21;
let address = "Perum.Ungaran Baru B-84/85";
let hobby = "bermain alat musik";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence);