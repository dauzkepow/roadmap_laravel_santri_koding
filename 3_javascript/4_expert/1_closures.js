//Fungsi = fungsi yang mengakses variabel dari scope luar meskipun
//scope itu sudah selesai dieksekusi
//dipakai untuk data privacy & membuat function factory

//Contoh Kode
function buatCounter() {
    let hitung = 0; //variabel private
    return function() {
        hitung++;
        return hitung;
    };
}

let counter = buatCounter();
console.log(counter()); //1
console.log(counter()); //2


//Penjelasan per Baris Kode
/*
 * function buatCounter() → membuat fungsi utama.
 * let hitung = 0; → variabel lokal.
 * return function() { ... } → fungsi dalam masih bisa akses hitung.
 * counter = buatCounter(); → membuat closure.
 * Setiap counter() dipanggil, nilai hitung terus bertambah.
 */

//Latihan