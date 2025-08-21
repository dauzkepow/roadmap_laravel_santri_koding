//Fungsi = Ambil data dari array/object dengan lebih ringkas.

//Contoh Kode
let user = { 
    nama: "Dauz",
    umur: 25 
};

// Destructuring
let { nama, umur } = user;
console.log(nama, umur); //Daus 25

// Restructuring (buat object baru)
let alamat = "Jakarta";
let dataUser = { nama, umur, alamat };
console.log(dataUser); //{ nama: 'Dauz', umur: 25, alamat: 'Jakarta' }


//Penjelasan per Baris Kode

//Latihan = Ambil nilai pertama dan kedua dari array [10, 20, 30]
//menggunakan destructuring.

