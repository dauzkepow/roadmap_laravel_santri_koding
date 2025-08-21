//Fungsi = Menyimpan banyak data dalam satu variabel

//Contoh Kode
let buah = ["Apel", "Mangga", "Pisang"];
buah.push("Jeruk"); // tambah di akhir
buah.unshift("Semangka"); // tambah di awal
buah.pop(); // hapus terakhir
console.log(buah); //akses semua arrah buah
console.log(buah[1]); // akses index ke-1
console.log(buah.length); // jumlah elemen

//Penjelasan per Baris Kode
//angka.splice(indeksHapus, jumlahHapus)
//index ke-x akan dihapus, jumlah elemen setelah index

//Latihan = Buat array angka = [2, 4, 6, 8] lalu tambah angka 10 
// dan hapus angka 4.
console.log("==============");
let angka = [2, 4, 6, 8];
angka.push(10);
angka.splice(1,1);
console.log(angka);