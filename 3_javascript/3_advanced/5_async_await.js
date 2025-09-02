//Async/Await = cara lebih simple untuk menulis kode asynchronous
//dibandingkan dengan then/catch

//async = fungsi untuk mengembalikan promise
//await = menunggu hasil promise sebelum lanjut ke baris berikutnya

function ambilData() {
    return new Promise((resolve) => {
        console.log("Mengambil data...");
        setTimeout(() => {
           resolve({
            nama: "Daus",
            umur:25
           });
        }, 2000);
    });
}

async function tampilData() {
    try {
        let data = await ambilData(); //tunggu sampai selesai
        console.log("Data diterima:", data);
    } catch (error) {
        console.log("Error:", error);
    }
}

tampilData();


/*
    - await ambilData() = menunggu hingga promise selesai
      hasilnya disimpan ke data
    - jika berhasil = console.log menampilkan datanya try
    - jika gagal = ditangkap oleh catch
*/