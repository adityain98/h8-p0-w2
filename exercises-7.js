// 1. Menyusun Barisan Bintang

for(var rows1=5; rows1<10; rows1++){
    console.log('*');
}

// 2. Menyusun Barisan Bintang Dengan Nested Looping

var bintang = '*';

for(var rows2=5; rows2 <10; rows2++){
    for(var i=1; i<6; i++){
        if(i<6){
            bintang = bintang + '*';
        }
    }
    console.log(bintang);
    var bintang = '*';
}

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var bintang2 = '*';

for(var rows3=5; rows3 <10; rows3++){
    for(var j=1; j<2; j++){
        if(j<6){
            console.log(bintang2)
            bintang2 = bintang2 + '*';
        }
    }
}