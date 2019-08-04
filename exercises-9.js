// Tugas 1

function shoutOut(){
    var hello = 'Halo Function!';
    return hello;   
}

console.log(shoutOut())

//Tugas 2

function calculateMultiply(angka1,angka2){
    c = angka1 * angka2;
    return c;
}
var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian);

//Tugas 3

function processSentence(nama,umur,alamat,hobi){
    kata ='Nama saya '+ nama +', umur saya ' + umur +' tahun, alamat saya di ' + alamat +', dan saya punya hobby yaitu ' + hobi +'!';
    return kata;
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); 