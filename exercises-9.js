// Tugas 1

function shoutOut(){
    var hello = 'Halo Function!';
    return hello;   
}

console.log(shoutOut())

//Tugas 2

function calculateMultiply(a,b){
    c = a * b;
    return c;
}
var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian);

//Tugas 3

function processSentence(e,f,g,h){
    kata ='Nama saya '+ e +', umur saya ' + f +' tahun, alamat saya di ' + g +', dan saya punya hobby yaitu ' + h +'!';
    return kata;
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); 