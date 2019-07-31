// 1. Melakukan Looping Menggunakan While
console.log('LOOPING PERTAMA');
var loop1 = 2;

while (loop1 <21){
    console.log(loop1, '-', 'I love coding');
    loop1 = loop1 + 2;
}

console.log('LOOPING KEDUA');
var loop2 = 20;

while (loop2 >1){
    console.log(loop2, '-', 'I will become fullstack developer');
    loop2 = loop2 - 2;
}

// 2. Melakukan Looping Menggunakan For

console.log('LOOPING PERTAMA');

for(var i= 1; i < 21; i++){
    console.log(i, '-', 'I love coding');
}

console.log('LOOPING KEDUA');

for(var j=20; j>0; j--){
    console.log(j, '-', 'I will become fullstack developer');
}

// 3. Angka Ganjil dan Genap

console.log('Ganjil Genap');
for (var angka=1; angka < 101; angka++){
    if(angka % 2 == 1){
        console.log(angka, 'GANJIL');
    }
    else{
        console.log(angka, 'GENAP');
    }
}

console.log('Kelipatan 3')
for (var kel3=1; kel3 < 101; kel3= kel3 + 2){
    if(kel3 % 3 == 0){
        console.log(kel3, 'KELIPATAN 3');
    }
}

console.log('kelipatan 6')
for (var kel6=1; kel6 < 101; kel6= kel6 + 5){
    if(kel6 % 6 == 0){
        console.log(kel6, 'KELIPATAN 6');
    }
}

console.log('kelipatan 10')
for (var kel10=1; kel10 < 101; kel10= kel10 + 9){
    if(kel10 % 10 == 0){
        console.log(kel10, 'KELIPATAN 10');
    }
}