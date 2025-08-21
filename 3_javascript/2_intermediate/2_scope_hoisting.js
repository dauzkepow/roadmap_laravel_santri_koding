//Fungsi
//Scope = menentukan dimana variabel bisa diakses
//Hoisting = cetak nilai sebelum deklarasi variabel


//Contoh Kode
//Scope
let x = 10; //global scope

function contohScope() {
    let y = 5;
    console.log(x); //10
    console.log(y); //5
}
contohScope(); //10, 5

//Hoisting
console.log(z); //undefined karena dihoist
var z = 10;

//Penjelasan per Baris Kode

//Latihan = program yang punya variabel global & lokal,
// lalu coba akses dari luar fungsi.
console.log("=====================");
let a = 100;

function scopeDalam() {
    let b = 50;
    let c = 60;
    console.log(a); //100
    console.log(b); //50
    console.log(c); //60
}
scopeDalam();