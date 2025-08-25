//Fungsi = Paradigma memprogram dengan fungsi murni (pure function)
//dan tidak mengubah data asli (immutable)

//Contoh Kode
//pure function
function tambah(a,b) {
    return a + b; //tidak tergantung variabel luar
}
console.log(tambah(2,3));

//immutability
let angka = [1,2,3];
let angkaBaru = angka.map(n => n * 2); //tidak ubah array asli
console.log(angka); //[ 1, 2, 3 ]
console.log(angkaBaru); //[ 2, 4, 6 ]

//Penjelasan per Baris Kode

//Latihan = fungsi filterGenap(array) yang menerima array lalu
//mengembalikan hanya angka genap tanpa mengubah array asli
function filterGenap(array) {
    //gunakan filter untuk ambil angka genap
    return array.filter(function(angka) {
        return angka % 2 === 0;
    });
}

//contoh penggunaan
const data = [1,2,3,4,5,6,7,8,9];
const hasil = filterGenap(data);

console.log("Arrah Asli: ", data); // [1,2,3,4,5,6,7,8,9]
console.log("Array genap: ", hasil); // [2,4,6,8]


