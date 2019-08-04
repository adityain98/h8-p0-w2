// 1. Menyusun Barisan Bintang

var rows1; // input the number of rows

// do loops to display asterisks in the console.

for(rows1=0; rows1<5; rows1++){
    console.log('*');
}

// 2. Menyusun Barisan Bintang Dengan Nested Looping
var rows2; // input the number of rows
// do loops to display asterisks in the console.

var baris = 5;
for(rows2=0; rows2 <baris; rows2++){
    var bintang = '*';
    for(i=1; i<baris; i++){
        if(i<baris){
            bintang = bintang + '*';
        }
    }
    console.log(bintang);
}

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

var rows3; // input the number of rows
// do loops to display asterisks in the console.

var bintang2 = '*';
var baris2 = 5;
for(rows3=0; rows3 <baris2; rows3++){
    for(j=1; j<2; j++){
        if(j<baris2){
            console.log(bintang2)
            bintang2 = bintang2 + '*';
        }
    }
}


// var a = '&';

// for (i=0;i<6;i++){
//     for(var j = 0;j<=i; j++){
//         var hasil = j + i;
//         console.log(hasil);
//     }
// }
