var tanggal = 1; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = 2; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 2000; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

if(tanggal<=31 && tanggal>=1){
    switch (bulan){
        case 1:
            if(tahun<=2200 && tahun>=1900){
                bulan = 'Januari';
                console.log(tanggal, bulan, tahun);
            }
            else{
                console.log('Masukkan tahun 1900 - 2200!');
            }
            break;
        case 2:
            if(tahun<=2200 && tahun>=1900){
            bulan = 'Februari';
            console.log(tanggal, bulan, tahun);
            }
            else{
                console.log('Masukkan tahun 1900 - 2200!');
            }
            break;
        case 3:
            if(tahun<=2200 && tahun>=1900){
                bulan = 'Maret';
                console.log(tanggal, bulan, tahun);
            }
            else{
                console.log('Masukkan tahun 1900 - 2200!');
            }
            break;
        case 4:
            if(tahun<=2200 && tahun>=1900){
                bulan = 'April';
                console.log(tanggal, bulan, tahun);
            }
            else{
                console.log('Masukkan tahun 1900 - 2200!');
            }
            break;
        case 5:
            if(tahun<=2200 && tahun>=1900){
                bulan = 'Mei';
                console.log(tanggal, bulan, tahun);
            }
            else{
                console.log('Masukkan tahun 1900 - 2200!');
            }
            break;
        case 6:
            if(tahun<=2200 && tahun>=1900){
                bulan = 'Juni';
                console.log(tanggal, bulan, tahun);
            }
            else{
                console.log('Masukkan tahun 1900 - 2200!');
            }
            break;
        case 7:
            if(tahun<=2200 && tahun>=1900){
                bulan = 'Juli';
                console.log(tanggal, bulan, tahun);
            }
            else{
                console.log('Masukkan tahun 1900 - 2200!');
            }
            break;
        case 8:
            if(tahun<=2200 && tahun>=1900){
                bulan = 'Agustus';
                console.log(tanggal, bulan, tahun);
            }
            else{
                console.log('Masukkan tahun 1900 - 2200!');
            }
            break;
        case 9:
            if(tahun<=2200 && tahun>=1900){
                bulan = 'September';
                console.log(tanggal, bulan, tahun);
            }
            else{
                console.log('Masukkan tahun 1900 - 2200!');
            }
            break;
        case 10:
            if(tahun<=2200 && tahun>=1900){
                bulan = 'Oktober';
                console.log(tanggal, bulan, tahun);
            }
            else{
                console.log('Masukkan tahun 1900 - 2200!');
            }
            break;
        case 11:
            if(tahun<=2200 && tahun>=1900){
                bulan = 'November';
                console.log(tanggal, bulan, tahun);
            }
            else{
                console.log('Masukkan tahun 1900 - 2200!');
            }
            break;
        case 12:
            if(tahun<=2200 && tahun>=1900){
                bulan = 'Desember';
                console.log(tanggal, bulan, tahun);
            }
            else{
                console.log('Masukkan tahun 1900 - 2200!');
            }
            break;
        default:
            console.log('Masukkan bulan 1 - 12!');
    }
}
else{
    console.log('Masukkan tanggal 1 - 31!');
}