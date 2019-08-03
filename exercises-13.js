function xo(str) {
    var counter = '';
    var penjumlah = 0;
    var hasil;
    for(var i = 0; i< str.length;i++){
        counter = counter + str[i];
        if(str[i]=='x'){
            penjumlah++;
        }
        else{
            penjumlah--;
        }
    }
    if (penjumlah==0){
        hasil = true;
    }
    else{
        hasil=false;
    }
    return hasil;
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true