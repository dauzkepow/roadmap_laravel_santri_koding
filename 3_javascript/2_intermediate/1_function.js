//Fungsi = mengelompokkan kode agar bisa dipakai ulang (reusanle)
//kalau ada parameter wajib ada return

/*
"Apakah saya ingin menyeleksi data?" → gunakan filter.
"Apakah saya ingin mengubah setiap elemen?" → gunakan map.
"Apakah saya ingin menghitung sesuatu dari data?" → gunakan reduce.
*/

/*
  Apa Nama fungsinya
  Apa parameter yang diterima
  Apa isi dan operasi logikanya
  Apa hasilnya akhirnya
*/

//Contoh Kode
// Function Deklarasi
function tambah(a, b) {
  return a + b;
}
console.log("Function Deklarasi:", tambah(3, 5)); //8

// Function Ekspresi
const kali = function(a, b) {
  return a * b;
};
console.log("Function Ekspresi:", kali(4, 2)); //8

// Arrow Function (lebih ringkas)
const bagi = (a, b) => a / b;
console.log("Arrow Function:", bagi(10, 2)); //5

// Callback Function
setTimeout(() => {
  console.log("This will be called after 3s");
}, 3000);

// Constructor Function
const sum = new Function("a", "b", "return a + b");
console.log("Constructor Function:", sum(10, 20));

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
