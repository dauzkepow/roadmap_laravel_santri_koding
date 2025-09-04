//10 Konsep Javascript wajib dikuasai sebelum masuk react
//Sandhika Galih

/*
//1.Hoisting = perilaku dimana deklarasi variabel dan fungsi 
//dipindahkan / diangkat ke bagian atas sebelum dieksekusi
halo();
console.log(x);

let x = 10;
function halo() {
    console.log("Halo Brot!");
}
*/

/*
//2.Scope = fitur untuk menentukan aksesibilitas variabel dan fungsi
//dalam kode macam macam scope Global Scope, Function/Local Scope,
//Lexocal Scope, dan block scope
function a() {
    let b = 10;
    c(); //memiliki ketiga scope
    function c() {
        console.log(b);
    }
}

a(); //10
*/

/*
//3. Template String = interpolasi mempermudah string dengan backtick `
//gunakan extension vscode = template string converter
const name = "Daus";
const greeting = `Hallo, ${name}!`;
console.log(greeting);
*/

/*
//4. Destructuring = bongkar isi array / object dan memasukkannya
//ke dalam variabel secara langsung

//array desctucturing
const [hewanPertama] = ["Kuda", "Tikus", "Kucing"];
console.log(hewanPertama); //Kuda

const [, , hewanKetiga] = ["Kuda", "Tikus", "Kucing"];
console.log(hewanKetiga); //Kucing

//object destructuring
const buburAyam = {
    jenisBeras: "Beras Cianjur",
    suwiran: "Ayam Kampung",
    topping: "Cakwe",
    bumbu: [
        'kecap',
        'sambal',
        'kerupuk'
    ],
};

const {jenisBeras, suwiran} = buburAyam;
console.log(jenisBeras, suwiran); //Beras Cianjur Ayam Kampung
*/

/*
//5. Function = blok kode yang dapat digunakan kembali
//Function deklaration
function validasiPassword(password) {
    return password.length >= 8;
}

//Function expression (variabel)
const validasiPassword = function (password) {
    return password.length >= 8;
}

//Arrow Function
const validasiPassword = (password) => password.length >= 8;
*/

/*
//6. Higher-Prder Function = memanipulasi function lain
//.map(), .filter(), .reduce()

//"Apakah saya ingin menyeleksi data?" → gunakan filter.
//"Apakah saya ingin mengubah setiap elemen?" → gunakan map.
//"Apakah saya ingin menghitung sesuatu dari data?" → gunakan reduce.


const products = [
    { name: 'Laptop', price: 1200},
    { name: 'Keyboard', price: 80},
    { name: 'Mouse' , price: 30},
];
console.log(products);

const discountPrices = products.map((products) => products.price * 0.9);
console.log("MAP:",discountPrices); //MAP: [ 1080, 72, 27 ]

const expensiveProducts = products.filter((products) => products.price > 100);
console.log("FILTER:",expensiveProducts); //FILTER: [ { name: 'Laptop', price: 1200 }

const totalPrice = products.reduce((acc, products) => acc + products.price, 0);
console.log("REDUCE:",totalPrice); //REDUCE: 1310
*/

/*
//7. Callback Function = fungsi yang dikirim sebagai argumen ke fungsi lain
function sapa(nama, sapaan) {
    sapaan(nama);
}

//callback function
function salam(nama) {
    console.log(`Halo, ${nama} !`);
}
sapa("Daus", salam);
*/

/*
//8. Promise = janji yang diberikan oleh sebuah operasi yang mungkin
//belum selesai saat itu
//janji ini akan memberikan kabar (hasil) di masa depan
//bentuknya adalah objek yang mewakili hasil akhir dari sebuah 
//operasi asinkron

//membuat promise
const janji = new Promise((resolve, reject) => {
    setTimeout(() => {
       const berhasil = true;
       if (berhasil) {
        resolve('Janji ditepati'); //operasi berhasil
       } else {
        reject('Janji dibatalkan!'); //operasi gagal
       } 
    }, 2000);
});

//menjalankan promise
janji
    .then((hasil) => {
        console.log(hasil); //Janji ditepati
    })
    .catch((alasan) => {
        console.log(alasan); //Janji dibatalkan!
    });
*/

/*
//9. Async & Await = membuat kode asynchronous seperti synchronous
//async untuk definisikan fungsi asinkron
//await untuk menghentikan eksekusi fungsi sebuah promise selesai
//tujuan untuk mempermudah keterbacaan kode dan penanganan kesalahan
//menggunakan try dan catch untuk error handling

async function handleFileAsync(file) {
    try {
        const bacaFile = await bacaFilePromise(file);
        const prosesData = await prosesDataPromise(bacaFile);
        await tampilkanHasilPromise(prosesData);
        console.log("Selesai dengan Promise!");
    } catch (e) {
        console.error("Terjadi kesalahan:", e);
    }
}

const file = 'data.txt';
handleFileAsync(file);
*/

//10. Fetch() = method pada web api untuk mengambil resource dari jaringan
//dan mengembalikan promise yang selesai (fullfilled) ketika ada
//response yang tersedia
fetch('https://api.github.com/users/sandhikagalih')
    .then((res) => res.json()) //mengembalikan promise
    .then((user) => {
        console.log(`Nama : ${user.name}`);
        console.log(`Jumlah Repo : ${user.public_repos}`);
    });