//Fungsi = mengulang kode beberapa kali

//Contoh Kode
let angka = [1,2,3,4,5];

//for loop
for (let i = 0; i < angka.length; i++) {
    console.log(angka[i]); 
    
}

console.log("=======================");

//for of
for (let n of angka) {
    console.log(n);
}

//while
let x = 0;
while (x <= 3) { //dicek kondisinya dulu
    console.log("Loop ke- " + x);
    x++;
}
//Penjelasan per Baris Kode

//Latihan = loop hitung jumlah semua angka dalam array [5,10,15,20]
console.log("==============");
let a = [5,10,15,20];
let jumlah = 0;

for (let i = 0; i < a.length; i++) {
    jumlah += a[i]; // a = a + i
}

console.log(jumlah); //50
