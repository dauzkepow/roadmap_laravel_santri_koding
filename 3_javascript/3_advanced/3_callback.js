//Callback = fungsi yang dikirim sebagai argumen ke fungsi lain
//dan dipanggil setelah suatu proses selesai
//membaca file, request ke server, dll

//contoh --
//1. membuat fungsi ambilData dengan parameter callback
function ambilData(callback) {
    //tampilkan teks bahwa data sedang diambil
    console.log("Mengambil data dari server....");

    //gunakan setTimeout() untuk menunda eksekusi 2 detik
    setTimeout(() => {
        //setelah 2 detik buat object data
        let data = {
        nama: "Dauz",
        umur: 31
        };

        //memanggil fungsi callback(data)
        callback(data); 
    }, 2000);
}

//2.Fungsi tampilData digunakan sebagai callback
//menerima parameter data, lalu menampilkan ke console
function tampilData(data) {
    console.log("Data telah diterima:", data);
}

//3.Eksekusi program
//memanggil ambilData dan memberikan tampilData sebagai callback
//artinya: setelah data selesai "diambil" maka tampilData akan dijalankan
ambilData(tampilData);


