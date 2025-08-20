//Fungsi = Manipulasi teks dan angka

//Contoh Kode
let teks = "Belajar Javascript";
console.log(teks.toUpperCase()); //BELAJAR JAVASCRIPT
console.log(teks.length); //18
console.log(teks.includes("Java")); //true

let angka = 3.14159;
console.log(angka.toFixed(2)); //3.14
console.log(Number("123") + 1); //124

//Penjelasan per Baris Kode
/*
.toUpperCase() → ubah huruf jadi kapital.
.length → hitung panjang string.
.includes("Java") → cek apakah teks mengandung kata.
.toFixed(2) → bulatkan angka ke 2 desimal.
Number("123") → konversi string ke number.
*/

//Latihan = ambil nama lengkap tampilkan jumlah hurufnya
console.log("==============");
let nama = "Daus Kepow";
console.log("Jumlah huruf = " + nama.length);
