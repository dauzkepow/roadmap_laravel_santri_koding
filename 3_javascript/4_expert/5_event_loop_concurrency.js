//Fungsi = menjelaskan cara JS menjalankan kode async
//single thread tapi non-blocking

//Contoh Kode
console.log("Mulai");

setTimeout(() => {
   console.log("Timeout"); 
}, 1000);

console.log("Selesai");

//Penjelasan per Baris Kode
//JS eksekusi synchronous dulu.
//setTimeout masuk ke event queue, dieksekusi setelah stack kosong.

//Latihan