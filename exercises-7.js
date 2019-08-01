// 1. Menyusun Barisan Bintang

var rows1; // input the number of rows

// do loops to display asterisks in the console.

for(rows1=0; rows1<5; rows1++){
    console.log('*');
}

// 2. Menyusun Barisan Bintang Dengan Nested Looping
var rows2; // input the number of rows
// do loops to display asterisks in the console.
var bintang = '*';

for(rows2=0; rows2 <5; rows2++){
    for(i=1; i<6; i++){
        if(i<6){
            bintang = bintang + '*';
        }
    }
    console.log(bintang);
    var bintang = '*';
}

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

var rows3; // input the number of rows
// do loops to display asterisks in the console.
var bintang2 = '*';

for(rows3=0; rows3 <5; rows3++){
    for(j=1; j<2; j++){
        if(j<6){
            console.log(bintang2)
            bintang2 = bintang2 + '*';
        }
    }
}