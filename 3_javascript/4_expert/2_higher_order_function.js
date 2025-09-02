//Fungsi = fungsi yang menerima fungsi lain sebagai argumen atau
//mengembalikan fungsi lain
//dipakai di map, filter, reduce

//Contoh Kode
function operasi(fn, a, b) {
    return fn(a,b);
}

let tambah = (x,y) => x + y;
let kali = (x, y) => x * y;

console.log(operasi(tambah, 2,3));
console.log(operasi(kali,2,3));

//Penjelasan per Baris Kode
/**
 * operasi(fn, a, b) → fungsi menerima fungsi lain (fn).
 * fn(a, b) → fungsi dijalankan.
 * operasi(tambah, 2, 3) → jalankan fungsi tambah.
 * tambah dan kali mengisi parameter fn
 */
//Latihan