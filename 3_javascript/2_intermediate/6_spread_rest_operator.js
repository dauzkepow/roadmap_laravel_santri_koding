//Fungsi
//Spread = menguraikan array / object
//Rest = menggabungkan parameter jadi array

//Contoh Kode
//Spread
let arr1 = [1,2,3];
let arr2 = [...arr1,4,5];
console.log(arr2); //[ 1, 2, 3, 4, 5 ]

//Rest
function jumlah(...angka) {
    return angka.reduce((a,b) => a + b, 0);
}
console.log(jumlah(1,2,3,4)); //10

//Penjelasan per Baris Kode

//Latihan = gunakan rest untuk membuat fungsi max(...angka)
//nilai terbesar
function max(...y) {
    return y.reduce((c,d) => c > d ? c : d);
}
console.log(max(10,20,30,40,50,100)); //100
