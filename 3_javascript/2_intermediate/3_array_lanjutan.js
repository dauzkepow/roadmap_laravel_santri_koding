//Fungsi = Memproses array dengan cara deklaratif (lebih ringkas).

//Contoh Kode
let angka = [1,2,3,4,5];

// map → transformasi tiap elemen
let kuadrat = angka.map(n => n * n);
console.log(kuadrat); //[ 1, 4, 9, 16, 25 ]

// filter → ambil yang sesuai kondisi
let genap = angka.filter(n => n % 2 === 0);
console.log(genap); //[ 2, 4 ]

// reduce → akumulasi nilai
let total = angka.reduce((acc, n) => acc + n, 0);
console.log(total); //15

// find → cari satu elemen pertama
let cari = angka.find(n => n > 3);
console.log(cari); //4

// sort → urutkan (default string, jadi harus compare)
let urut = [10, 2, 5, 1].sort((a, b) => a - b);
console.log(urut); //[ 1, 2, 5, 10 ]

//Penjelasan per Baris Kode

//Latihan = dari array [100, 200, 50, 80] cari nilai terbesar pakai reduce
const a = [100, 200, 50, 80];

//nilai terbesar
const max = a.reduce((acc, a) => {
    return acc > a ? acc : a;
});

//nilai terkecil
const min = a.reduce((acc,a) => acc < a ? acc : a);


console.log(max); //200
console.log(min); //50