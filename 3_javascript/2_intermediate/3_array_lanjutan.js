//Fungsi = Memproses array dengan cara deklaratif (lebih ringkas).

//Contoh Kode
let angka = [1,2,3,4,5];


//push() = menambah element di akhir array
angka.push(6,7);
console.log("Push:", angka); //[ 1, 2, 3, 4, 5,6 , 7 ]

//pop() = hapus element terakhir dari array lalu returnkan
const lastNumber = angka.pop();
console.log("POP:", lastNumber); //7

//shift() = hapus element pertama array lalu returnkan
const firstNumber = angka.shift();
console.log("shift:", firstNumber); //1

//unshift() = menambah satu atau lebih element dari mulainya array
//dan panjang array
angka.unshift(0, -1);
console.log("Unshift:", angka); //Unshift: [0, -1, 2, 3, 4,  5, 6]

// find() = cari satu elemen pertama
let cari = angka.find(n => n > 3);
console.log("Find:", cari); //4

//some() = tes salah satu elemen array
const hasEvenNumber = angka.some(
    (num) => num % 2 === 0
);
console.log("Some:", hasEvenNumber); //true

//every() 
const allEvenNumbers = angka.every ((num) => num % 2 === 0);
console.log("Every:", allEvenNumbers); //false

// sort → urutkan (default string, jadi harus compare)
let urut = [10, 2, 5, 1].sort((a, b) => a - b);
console.log("Sort:",urut); //[ 1, 2, 5, 10 ]

//includes()
const includesThree = angka.includes(3);
console.log("Includes:", includesThree); //true

//slice()
const sliceNumbers = angka.slice(1,2);
console.log("Slice:", sliceNumbers);

//map → transformasi tiap elemen
let kuadrat = angka.map(n => n * n);
console.log("Map:",kuadrat); //[ 1, 4, 9, 16, 25 ]

//filter → ambil yang sesuai kondisi
let genap = angka.filter(n => n % 2 === 0);
console.log("Filter:",genap); //[ 2, 4 ]

//reduce → akumulasi nilai
let total = angka.reduce((acc, n) => acc + n, 0);
console.log("Reduce:",total); //15

//forEach() 
angka.forEach((num) => console.log("Foreach:", num * 2));

//indexOf() = mengetahui index ke-? pada array
const buah = ['banana', 'apple', 'orange', 'grape'];
const appleIndex = buah.indexOf('orange');
console.log("IndexOf:", appleIndex);

//lastIndexOf() = mengetahui index terakhir sebuah arrah
const lastAppleIndex = buah.lastIndexOf('grape');
console.log("LastIndexOf:", lastAppleIndex);

//reverse() = membalikan urutan array
angka.reverse()
console.log("Reverse:", angka);

//join() = menampilkan isi array
const joinedFruits = buah.join(', ');
console.log("Join:", joinedFruits);

//toString() = ubah isi array ke string
const angkaString = angka.toString();
console.log("TOString:", angkaString);


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