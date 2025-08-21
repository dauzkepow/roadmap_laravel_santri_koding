//Fungsi = mengelompokkan kode agar bisa dipakai ulang (reusanle)
//kalau ada parameter wajib ada return

//Contoh Kode
// Function Deklarasi
function tambah(a, b) {
  return a + b;
}
console.log(tambah(3, 5)); //8

console.log("===============================");

// Function Ekspresi
const kali = function(a, b) {
  return a * b;
};
console.log(kali(4, 2)); //8

console.log("===============================");

// Arrow Function (lebih ringkas)
const bagi = (a, b) => a / b;
console.log(bagi(10, 2)); //5

//Penjelasan per Baris Kode
//function tambah(a, b) → fungsi deklarasi, bisa dipanggil
// sebelum definisi karena hoisting.

//const kali = function(a, b) → fungsi ekspresi, disimpan dalam variabel.

//const bagi = (a, b) => → arrow function, lebih ringkas, cocok untuk callback.

//Latihan = Buat fungsi luasPersegi(sisi) dan kelilingPersegi(sisi) lalu cetak hasilnya.
console.log("===============================");
//luasPersegi = sisi x sisi
const luasPersegi = function (s) {
    return s * s;
};
console.log("Luas Persegi: " + luasPersegi(5)); //25

//kelilingPersegi = 4 x s
const kelilingPersegi = (a) => 4 * a;
console.log("Keliling Persegi: " + kelilingPersegi(5)); //20
